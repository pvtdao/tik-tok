import Button from '@/components/Button';
import React from 'react';
import { ItemType } from '.';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

type MenuItemPropType = {
  data: ItemType;
};

const cx = classNames.bind(styles);

function MenuItem({ data }: MenuItemPropType) {
  return (
    <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
