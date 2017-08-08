/** @jsx React.DOM */
var __ = require('../../translate');
module.exports = {
    getPosts: function(){
        var posts = this.props.resource.getEntitiesByClass('post');
        if(posts.length){
            var columns = [];
            var counter;
            for(counter = 0; counter < this.props.columns; counter++){
                columns.push([]);
            }

            for(counter in posts){
                var column = this.props.columns - (this.props.columns - counter % this.props.columns);
                columns[column].push(posts[counter]);
            }

            var foundationColumns = 12 / this.props.columns;

            return columns.map(function(column){
                return (
                    React.DOM.div({className: "columns large-" + foundationColumns}, 
                        column.map(this.getPost)
                    )
                )
            }.bind(this));

        } else {
            return (
                React.DOM.div({className: "columns large-12"}, 
                    React.DOM.h1({className: "monstro-no-posts-msg"}, __('No posts found'))
                )
            )
        }
    }
};