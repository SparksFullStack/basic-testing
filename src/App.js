import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from 'actions/actionCreators';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  state = { comment: '' };

  // checking the auth status when the component is first rendered/navigated to
  componentDidMount(){
    // calling the helper method
    this.shouldNavigateAway();
  };

  // checking the auth status anytime App updates by receiving a new set of props
  componentDidUpdate(){
    // calling the helper method
    this.shouldNavigateAway();
  };

  // helper function to check auth status and navigate accordingly
  shouldNavigateAway = () => {
    if (!this.props.auth) {
      console.log(`I NEED TO LEAVE!!!`);
    }
  }

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  };

  renderButton = () => {
    return <button onClick={this.handleButtonAuth}>{this.props.auth ? "Sign Out" : "Sign in"}</button>
  };

  handleButtonAuth = () => {
    this.props.changeAuth(!this.props.auth);
  };

  render(){
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' exact component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAuth: (isLoggedIn) => dispatch(changeAuth(isLoggedIn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);