import React, { Component } from 'react';

import './App.css';

import Header from './Header.js';
import List from './List.js';
import Footer from './Footer.js';
import ContentTypes from './ContentTypes.js';
import SourceForm from './SourceForm.js';


let fetchUrl = 'https://agregator.md/admin/admin.php'

if (process.env.NODE_ENV === 'development') {
  fetchUrl = 'http://localhost:8001/admin/admin.php'
}

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
  }

  componentDidMount() {
    this.fetchSources(fetchUrl)
  }

  catchError = (res) => {
    console.log(res);
  }

  fetchSources = async (fetchUrl) => {
    const sourcesPromise = await fetch(fetchUrl + '?action').catch(this.catchError)
    if (sourcesPromise) {
      const sources = await sourcesPromise.json()
      this.setState({sources})
    }
  }

  updateNewSource = (e) => {
    const newSource = Object.assign({}, this.state.newSource)
    newSource[e.target.id] = e.target.value
    this.setState({newSource})
  }

  submitNewSource = async (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    const sourcePromise = await fetch(fetchUrl + '?action=add', {
      method: 'POST',
      body: data,
    }).catch(this.catchError)

    if (sourcePromise) {
      const source = await sourcePromise.json()

      const sources = [
        source,
        ...this.state.sources.slice()
      ]

      this.setState({sources})
    }
  }

  updateListItem = (id, e) => {

    const sourceIndex = this.state.sources.findIndex(source => source.id === id)

    if (sourceIndex === -1) return

    const source = Object.assign({}, this.state.sources[sourceIndex])
    source[e.target.name] = e.target.value

    const sources = [
      ...this.state.sources.slice(0, sourceIndex),
      source,
      ...this.state.sources.slice(sourceIndex + 1)
    ]

    this.setState({sources})
  }

  submitListItem = (id, e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    data.append('id', id)

    fetch(fetchUrl + '?action=update', {
      method: 'POST',
      body: data,
    })
  }

  deleteListItem = (id, e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('id', id)

    fetch(fetchUrl + '?action=delete', {
      method: 'POST',
      body: data,
    }).then(res => {
      const sourceIndex = this.state.sources.findIndex(source => source.id === id)
      const sources = [
        ...this.state.sources.slice(0, sourceIndex),
        ...this.state.sources.slice(sourceIndex + 1)
      ]

      this.setState({sources})
    }).catch(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <ContentTypes />

          <div className="row">
            <div className="col-lg-8 my-3">

              <ul className="list-group mb-3">
                <li
                  className="list-group-item">

                  <div className="d-flex align-items-center justify-content-between">
                    CREATE NEW SOURCE
                    <button className="btn btn-sm btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#addSource"
                      aria-expanded="false"
                      aria-controls="addSource">
                      ADD
                    </button>
                  </div>

                  <div className="collapse" id="addSource">
                    <div className="pt-2">
                      <SourceForm
                        item={this.state.newSource}
                        updateItem={this.updateNewSource}
                        submit={this.submitNewSource}
                      />
                    </div>
                  </div>
                </li>
              </ul>

              <List
                items={this.state.sources}
                updateItem={this.updateListItem}
                submitItem={this.submitListItem}
                deleteItem={this.deleteListItem}
              />
            </div>

            <div className="col-lg-4 mb-3 my-lg-3">
              Some Sidebar content
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
