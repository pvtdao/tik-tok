import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

type WrapperPropsType = {
  children: React.ReactElement;
  className?: string;
};

function Wrapper({ children, className }: WrapperPropsType) {
  return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
