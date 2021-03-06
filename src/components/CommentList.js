import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from 'actions/actionCreators';

class CommentList extends Component {
    renderComments = () => {
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>
        })
    }

    render(){
        return(
            <div>
                <h4>Comment List</h4>
                <ul>{this.renderComments()}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);