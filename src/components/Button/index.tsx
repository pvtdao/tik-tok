/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ButtonSchema } from '@/schema/custom-button.';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

type PropsType = {
  [key: string]: any;
};

function Button({
  children,
  onClick,
  to,
  href,
  primary,
  className = '',
  leftIcon,
  rightIcon,
  ...restProps
}: ButtonSchema) {
  let Component: any = 'button';

  const _props: PropsType = {
    onClick,
    ...restProps,
  };

  //   Remove event listener when disabled
  if (restProps.disabled) {
    Object.keys(_props).forEach((propKey) => {
      if (propKey.startsWith('on') && typeof _props[propKey] === 'function') {
        delete _props[propKey];
      }
    });
  }

  if (to) {
    _props.to = to;
    Component = Link;
  } else if (href) {
    _props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outlined: restProps.outlined,
    small: restProps.small,
    large: restProps.large,
    text: restProps.text,
    disabled: restProps.disabled,
    rounded: restProps.rounded,
    // Thêm class tùy ý vô button
    [className]: className,
  });

  return (
    <Component className={classes} {..._props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
