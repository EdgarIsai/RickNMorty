import React from 'react';
import { connect } from 'react-redux';

const Table = (props) => {
    const addRow = () => (
        props.users.map(user => (
            <tr>
                <td>{user.name}</td>
                <td>{user.status}</td>
                <td>{user.species}</td>
            </tr>
        ))
    )


    return (
        <table>
            <thead>
                <tr>Name</tr>
                <tr>State</tr>
                <tr>Species</tr>
            </thead>
            <tbody>
                {addRow()}
            </tbody>
        </table>
    )

}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps)(Table);