import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        selectedPost : null
    }

    componentDidUpdate(){
        if(this.props.selectedPostID){
            if(!this.state.selectedPost || (this.state.selectedPost && this.state.selectedPost.id !== this.props.selectedPostID)){
                
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.selectedPostID)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        selectedPost: response.data
                    })
                    
    
                })
            }
        }

    }

    deleteMethodHander = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.selectedPostID)
        .then((response) => {
            console.log('deleteHandler - ',response);

            })
    }
    render () {
        
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.selectedPostID){
            post = <p style={{textAlign: 'center'}}>loading!</p>;
        }
        if(this.state.selectedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteMethodHander} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        
        }
    

        return post;
    }
}

export default FullPost;