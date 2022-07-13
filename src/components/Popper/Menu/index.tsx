import Tippy from '@tippyjs/react/headless';
import React from 'react';
import { Wrapper as PopperMenuWrapper } from '@/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

export type ItemType = {
  icon?: React.ReactElement;
  title: string;
  to?: string;
};

type PopperMenuPropsType = {
  children: React.ReactElement;
  items: ItemType[];
};

function PopperMenu({ children, items }: PopperMenuPropsType) {
  const renderItem: any = () => {
    if (!items) return null;

    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      interactive
      delay={[0, 70000]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperMenuWrapper className={cx('menu-popper-wrapper')}>{renderItem()}</PopperMenuWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default PopperMenu;
