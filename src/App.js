import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';
import _ from 'lodash';
import randomWords from 'random-words';
import Notifications from './Notifications/Notifications';
import styles from './App.scss';

// TODO: make notification messages meaningful
function generateNotification() {
  const header = _.capitalize(randomWords({
    min: 2,
    max: 5
  }).join(' '));
  const body = `${_.capitalize(randomWords(2 + Math.random() * 12).join (' '))}.`;
  const category = ['info', 'warning', 'error'][_.random(0, 2)];

  return {
    header,
    body,
    category
  };
}

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      notifications: []
    };
  }

  handleAddNotification() {
    const {
      notifications
    } = this.state;
    const notificationId = Math.random(); // <- TODO: make it more reliable

    this.setState({
      notifications: _.concat(notifications, {
        ...generateNotification(),
        id: notificationId,
        onClose: () => this.handleCloseNotification(notificationId)
      })
    });
  }

  // TODO: make it work
  handleCloseNotification(id) {
    const {
      notifications
    } = this.state;
    const index = _.findIndex(notifications, e => e.id === id);

    if (index) {
      this.setState({
        notifications: _.concat(
          _.slice(notifications, 0, index),
          _.slice(notifications, index + 1)
        )
      });
    }
  }

  render() {
    const {
      notifications = []
    } = this.state;

    return (
      <div className={styles.app}>
        <Notifications
          notifications={notifications} />
        <div
          className={styles.createNotification}
          onClick={::this.handleAddNotification}>
          NOTIFY ME
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
