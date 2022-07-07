import { ChildrenPropsSchema } from '@/schema/common';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }: ChildrenPropsSchema) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />

        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
