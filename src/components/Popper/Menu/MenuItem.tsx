import Button from '@/components/Button';
import { ItemType } from '@/schema/menu';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Menu.module.scss';

type MenuItemPropType = {
  data: ItemType;
  onChooseMenu: () => void;
};

const cx = classNames.bind(styles);

function MenuItem({ data, onChooseMenu }: MenuItemPropType) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} to={data.to} onClick={onChooseMenu} leftIcon={data.icon}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
