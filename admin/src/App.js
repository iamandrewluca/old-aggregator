import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';

import Header from './Header.js';
import Footer from './Footer.js';
import Menu from './Menu.js';
import Sources from './Sources.js';
import Filters from './Filters.js';

let fetchUrl = 'https://agregator.md/admin/admin.php';
let basename = '/admin/';

if (process.env.NODE_ENV === 'development') {
  fetchUrl = 'http://localhost:8001/admin/admin.php'
}

const route = (controller, action) => `${fetchUrl}?controller=${controller}&action=${action}`;

class App extends Component {

  state = {
    sources: null,
    newSource: {
      name: '',
      slug: '',
      resource_url: '',
      rss: '',
      lang_id: ''
    },

    filters: null,
    newFilter: {
      title: '',
      lang_id: '',
    }
  };

  catchError = (res) => {
    console.log(res);
  };

  fetchSources = async () => {
    const sourcesPromise = await fetch(route('source', 'all')).catch(this.catchError);
    if (sourcesPromise) {
      const sources = await sourcesPromise.json();
      this.setState({sources})
    }
  };

  updateNewSource = (e) => {
    const newSource = Object.assign({}, this.state.newSource);
    newSource[e.target.id] = e.target.value;
    this.setState({newSource})
  };

  submitNewSource = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const sourcePromise = await fetch(route('source', 'create'), {
      method: 'POST',
      body: data,
    }).catch(this.catchError);

    if (sourcePromise) {
      const source = await sourcePromise.json();

      const sources = [
        source,
        ...this.state.sources.slice()
      ];

      this.setState({sources})
    }
  };

  updateListItem = (id, e) => {

    const sourceIndex = this.state.sources.findIndex(source => source.id === id);

    if (sourceIndex === -1) return;

    const source = Object.assign({}, this.state.sources[sourceIndex]);
    source[e.target.name] = e.target.value;

    const sources = [
      ...this.state.sources.slice(0, sourceIndex),
      source,
      ...this.state.sources.slice(sourceIndex + 1)
    ];

    this.setState({sources})
  };

  submitListItem = (id, e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    data.append('id', id);

    fetch(route('source', 'update'), {
      method: 'POST',
      body: data,
    })
  };

  deleteListItem = (id, e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('id', id);

    fetch(route('source', 'delete'), {
      method: 'POST',
      body: data,
    }).then(res => {
      const sourceIndex = this.state.sources.findIndex(source => source.id === id);
      const sources = [
        ...this.state.sources.slice(0, sourceIndex),
        ...this.state.sources.slice(sourceIndex + 1)
      ];

      this.setState({sources})
    }).catch(res => console.log(res))
  };

  updateNewFilter = (e) => {
    const newFilter = Object.assign({}, this.state.newFilter);
    newFilter[e.target.id] = e.target.value;
    this.setState({newFilter});
  };

  submitNewFilter = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const filterPromise = await fetch(route('filter', 'create'), {
      method: 'POST',
      body: data,
    }).catch(this.catchError);

    if (filterPromise) {
      const filter = await filterPromise.json();

      const filters = [
        filter,
        ...this.state.filters.slice()
      ];

      this.setState({filters})
    }
  };

  deleteFilter = async (id, e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('id', id);

    fetch(route('filter', 'delete'), {
      method: 'POST',
      body: data,
    }).then(res => {
      const filterIndex = this.state.filters.findIndex(filter => filter.id === id);
      const filters = [
        ...this.state.filters.slice(0, filterIndex),
        ...this.state.filters.slice(filterIndex + 1)
      ];

      this.setState({filters})
    }).catch(res => console.log(res))
  };

  fetchFilters = async () => {
    const filtersPromise = await fetch(route('filter', 'all')).catch(this.catchError);
    if (filtersPromise) {
      const filters = await filtersPromise.json();
      this.setState({filters})
    }
  };

  render() {
    return (
      <Router basename={basename}>
        <div className="App">
          <Header />

          <div className="container">

            <div className="row">
              <div className="col-lg-8 my-3">

                <Menu />

                <Route exact path="/" render={() => (
                  <Sources
                    newSource={this.state.newSource}
                    updateNewSource={this.updateNewSource}
                    submitNewSource={this.submitNewSource}
                    sources={this.state.sources}
                    updateListItem={this.updateListItem}
                    submitListItem={this.submitListItem}
                    deleteListItem={this.deleteListItem}
                    fetchSources={this.fetchSources}
                  />
                )} />

                <Route path="/filters" render={() => (
                  <Filters
                    newFilter={this.state.newFilter}
                    updateNewFilter={this.updateNewFilter}
                    submitNewFilter={this.submitNewFilter}
                    filters={this.state.filters}
                    deleteFilter={this.deleteFilter}
                    fetchFilters={this.fetchFilters}
                  />
                )} />

                <Route path="/top" component={() => <div>Top 10</div>}/>
                <Route path="/topics" component={() => <div>Topics of the day</div>}/>
                <Route path="/users" component={() => <div>Users</div>}/>

              </div>

              <div className="col-lg-4 mb-3 my-lg-3">
                <h3>Agregator settings</h3>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
