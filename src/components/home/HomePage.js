import React from 'react';
import {Link} from 'react-router';

export default class extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home Page</h1>
        <p>Здесь все - React, Redux, React-Router</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}