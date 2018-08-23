import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/actionCreators';

// here we create the function that returns the HOC
const requireAuth = (ChildComponent) => {
    // here we create the actual composed component that will render and add functionality to the child component
    class ComposedComponent extends Component {
        componentDidMount(){
            if (!this.props.auth) this.navigateAway();
        }
    
        componentDidUpdate(){
            if (!this.props.auth) this.navigateAway();
        }
    
        navigateAway = () => {
            this.props.history.push('/');
        }

        render(){
            // here we're passing all the props that are coming through the parent components
            // the props can be accessed on the child with just 'this.props.propName'
            return <ChildComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            auth: state.auth
        }
    }

    return connect(mapStateToProps, actions)(ComposedComponent);
}

export default requireAuth;