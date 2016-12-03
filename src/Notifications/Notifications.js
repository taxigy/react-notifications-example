import React, {
  PropTypes,
  PureComponent
} from 'react';
import styles from './Notifications.scss';

export default class Notifications extends PureComponent {
  static propTypes = {
    category: PropTypes.oneOf(['info', 'warning', 'error'])
  };

  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    const {
      category = 'info'
    } = this.props;

    return (
      <div className={styles.notifications}>
        {category}
      </div>
    );
  }
}
