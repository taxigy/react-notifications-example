import React from 'react';
import _ from 'lodash';
import styles from './Notifications.scss';

function destroy(notification = {}) {
  const {
    onClose
  } = notification;

  if (onClose instanceof Function) {
    setTimeout(onClose, 90 * 1000);
  }
};

export default function (props) {
  const {
    notifications
  } = props;

  return (
    <div className={styles.notifications}>
      {_.map(_.slice(notifications, 0, 5), (notification, index) => {
        const {
          category = 'info'
        } = notification;

        if (category === 'info') {
          destroy(notification);
        }

        return (
          <div
            key={index}
            className={styles.notification}>
            <div
              className={[styles.notification__caption, styles[`notification__caption--${category}`]].join(' ')}
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
        );
      })}
    </div>
  );
}
