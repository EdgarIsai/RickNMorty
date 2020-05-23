import React from 'react';
import { connect } from 'react-redux';
import "../../css/Users.css";


const Table = (props) => {
    const addRow = (users) => {
        return (props.users.map(user => {
            return(
                <div id={`user${user.id}`} className="character clearfix">
                    <img src={user.image} alt="Character" className="characterImage"/>
                    <h4 >{user.name}</h4>
                    <h5>{user.species}</h5>
                </div>
            ) 
        }))
    }


    return (
        <div className="grid-container">
                {addRow()}
        </div>
    )

}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps)(Table);