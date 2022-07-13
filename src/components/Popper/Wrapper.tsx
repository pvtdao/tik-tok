import { ChildrenPropsSchema } from '@/schema/common';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children }: ChildrenPropsSchema) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;