import React from 'react';

const UserCard = (props) => {

    console.log('Props from UserCard', props)

    return (
        <div className="card">
            <img src={props.userCard.avatar_url} />
            <div className="card-info">
                <h3 className="name">Name: {props.userCard.name}</h3>
                <p className="username">Username: {props.userCard.login}</p>
                <p>Location: {props.userCard.location}</p>
                <p><span>Profile: </span>
                    <a href={props.userCard.url}>{props.userCard.url}</a>
                </p>
                <p>Followers: {props.userCard.followers}</p>
                <p>Following: {props.userCard.following}</p>
                <p>Bio: {props.userCard.bio}</p>
            </div>
        </div>
    ) 
}
export default UserCard;