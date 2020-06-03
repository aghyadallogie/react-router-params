import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostList extends Component {

    constructor() {
        super();
        this.state = { posts: [] };
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(posts => this.setState({ posts }))
    }

    render() {
        let posts = this.state.posts;
        let jsx = posts.map(post => {
            return <div key={post.id}>
                <span>{post.title}</span>
                <span>{post.body}</span>
                <Link to={`/post/${post.id}`}>details!</Link>
            </div>
        })

        return (
            <div>
                {jsx}
            </div>
        )
    }
}