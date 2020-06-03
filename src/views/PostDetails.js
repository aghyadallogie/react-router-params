import React, { Component } from 'react'

export default class PostDetails extends Component {

    constructor() {
        super();
        this.state = { post: {} }
    }

    componentDidMount() {
        let userID = this.props.match.params.userID;
        fetch(`http://jsonplaceholder.typicode.com/posts/${userID}`)
            .then(res => res.json())
            .then(post => this.setState({post}))
    }

    render() {

        return (
            <div>
                {this.state.post.body ? this.state.post.body : 'loading'}
                {/* <FontAwesomeIcon icon="faSpinner" spin /> */}
            </div>
        )
    }
}
