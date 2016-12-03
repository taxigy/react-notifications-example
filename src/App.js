import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        WHATEVER
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
