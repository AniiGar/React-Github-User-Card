import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FollowerCards = (props) => {

    console.log('Props from FollowerCards', props)

    const [thisFollower, setThisFollower] = useState({});

    useEffect(() => {
        axios
        .get(`https://api.github.com/users/${props.follower.login}`)
            .then(res => setThisFollower(res.data))
            .catch(err => console.log('Error getting userCard', err));
      }, [],)

    //   console.log('thisFollower:', thisFollower);

    return (
        <div className="card">
            <img src={props.follower.avatar_url} />
            <div className="card-info">
                <h3 className="name">{props.follower.name}</h3>
                <p className="username">Username: {props.follower.login}</p>
                <p>Location: {thisFollower.location}</p>
                <p><span>Profile: </span>
                    <a href={props.follower.url}>{props.follower.url}</a>
                </p>
                <p>Followers: {thisFollower.followers}</p>
                <p>Following: {thisFollower.following}</p>
                <p>Bio: {thisFollower.bio}</p>
            </div>
        </div>
    ) 
}
export default FollowerCards;