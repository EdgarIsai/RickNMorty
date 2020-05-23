import React, { Component } from 'react';
import '../../css/App.css';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import Spinner from '../General/Spinner';
import Error from '../General/Error';
import Table from './Table';
import { Link } from 'react-router-dom';



class HomeScreen extends Component {
    componentDidMount() {
        if(!this.props.users.length) {
            this.props.bringAll();
        }
    }

    addCharecters = () => {
        if (this.props.loading) {
            return <Spinner />
        }
        if (this.props.error) {
            return <Error message={this.props.error}/>
        }
        return <Table />
    }

    render() {
        return(
            <div>
                { this.addCharecters() }
                <Link to="/contact">Click aqui</Link>
            </div>
        )
    }
};

const mapStateToProps = (reducers) => {
    return reducers.usersReducer
}

export default connect(mapStateToProps, userActions)(HomeScreen);
