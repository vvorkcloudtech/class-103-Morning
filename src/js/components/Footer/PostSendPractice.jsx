import React from 'react';

export default class PostSendPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      body: JSON.stringify(this.state),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          alert('Saved');
        } else {
          alert('Issues saving');
        }
        // you cannot parse your "success" response, since that is not a valid JSON
        // consider using valid JSON req/resp pairs.
        // return response.json();
      });

  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind()}>
        <input type="text" name="username" onChange={e => this.setState({username: e.target.value})}/>
        <input type="password" name="password" onChange={e => this.setState({password: e.target.value})}/>
        <input type="text" name="first_name" onChange={e => this.setState({first_name: e.target.value})}/>
        <input type="text" name="last_name" onChange={e => this.setState({last_name: e.target.value})}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}