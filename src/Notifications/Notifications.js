import React from 'react';
import _ from 'lodash';
import styles from './Notifications.scss';

function destroy(notification = {}) {
  const {
    category = 'info',
    onClose
  } = notification;

  if (category === 'info' && onClose instanceof Function) {
    setTimeout(onClose, 90 * 1000);
  }
};

export default function (props) {
  const {
    notifications
  } = props;

  return (
    <div className={styles.notifications}>
      {_.map(notifications, (notification, index) => destroy(notification) || (
        <div
          key={index}
          className={styles.notification}>
          <div
            className={styles.notification__caption}
            onClick={notification.onClose}>
            <div className={styles.notification__header}>
              {notification.header}
            </div>
            <div
              className={styles.notification__closeButton}>
              <i className="fa fa-times" />
            </div>
          </div>
          {notification.body && (
            <div className={styles.notification__body}>
              {notification.body}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
