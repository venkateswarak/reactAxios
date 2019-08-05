import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostID: null,
        error: false
    }
    componentDidMount(){
        axios.get('/posts')
        .then((result) => {
            const posts = result.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return{
                    ...post,
                    author: 'ven'
                }
            })
            this.setState({
                posts : updatedPosts})
        })

        .catch(error => {
            this.setState({
                error : true})
        })
    }

    postClickedHandler = (id) => {
        console.log('id :', id);
        this.setState({selectedPostID: id})

    }

    render () {
        let posts = <div style={{textAlign:'center'}}>Something Went Wrong!</div> 
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post key={post.id} 
                title={post.title} 
                author = {post.author}
                clicked = {()=>this.postClickedHandler(post.id)}
                />
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost selectedPostID = {this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;