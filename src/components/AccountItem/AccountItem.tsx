import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1658556000&x-signature=ajmuY0tgC5n%2BpEpCalJoF%2BfY6JI%3D"
        alt="hoaaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Đào Lê Phương Hoa</span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('username')}>daolephuonghoa</span>
      </div>
    </div>
  );
}

export default AccountItem;
