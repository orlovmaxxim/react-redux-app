import React, {PropTypes} from 'react';
import { Header } from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {/* {this.props.children} */}
        {React.Children.map(this.props.children, item =>
          item
        )}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;