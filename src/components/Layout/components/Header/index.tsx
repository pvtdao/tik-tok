import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

// cx giúp viết className dễhơn.
// VD: post-item thì không thể viết styles.post-item (Hoặc viết styles['post-item']) => Xấu
// Dùng cx: cx("post-item")
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}></div>
    </header>
  );
}

export default Header;
