import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { saveComment, fetchComments } from 'actions/actionCreators';
import * as actions from 'actions/actionCreators';

class CommentBox extends Component {
    state = {
        comment: "",
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: "" });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea value={this.state.comment} placeholder="Enter some text" onChange={this.handleChange}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                {/* here we're placing the other button outside of the form to prevent any accidental submittal */}
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox);
