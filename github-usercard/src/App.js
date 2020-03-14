import React from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';
import FollowCards from './components/FollowerCards';

class App extends React.Component {

  constructor() {
    super(); 
    this.state = {
      userCard: {},
      followers: []
    }
  }

  componentDidMount() {
    
      axios
      .get('https://api.github.com/users/aniigar')
        .then(res => { this.setState({ ...this.state, userCard: res.data });
        })
        .catch(err => console.log('Error getting userCard'));
        
      axios
      .get('https://api.github.com/users/aniigar/followers')
        .then(res => { this.setState({ ...this.state, followers: res.data });
        })
        .catch(err => console.log('Error getting userCard'));
  }

  render () {

    console.log('userCard:', this.state.userCard);
    console.log('followers', this.state.followers);

    return (
      <div className="App">
        <UserCard userCard={this.state.userCard} />

        {this.state.followers.map(follower => (
          <FollowCards key={follower.id} follower={follower} />
        ))}
        
        
      </div>
    );
  }
}

export default App;
