import React, { Component } from 'react';
import Users from '../../data/UserData';


export default class User extends Component {
    render() {
        return (
            <>
            <h1>{Users[0].email}</h1>
            <img src={Users[0].profilePhoto} alt="userpic"/>
            <div>
                <h2>Goals</h2>
                <ul>
                    {Users[0].goals.map(userGoal => 
                    <div>
                        <li>
                        <p>Goal: {userGoal.goal}</p>
                        <label>Has goal been completed?</label>
                       <input 
                       type="radio" 
                       checked={(!userGoal.completed)}>
                       </input>
                    </li>
                    </div>)}
                        
                        
                </ul>
            </div>
                
            </>
        )
    }
}
