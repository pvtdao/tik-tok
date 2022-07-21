import Tippy from '@tippyjs/react/headless';
import React from 'react';
import { Wrapper as PopperMenuWrapper } from '@/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import { ItemType } from '@/schema/menu';

const cx = classNames.bind(styles);

type PopperMenuPropsType = {
  children: React.ReactElement;
  items: ItemType[];
};

function PopperMenu({ children, items }: PopperMenuPropsType) {
  const [historyMenu, setHistoryMenu] = React.useState<{ data: ItemType[]; title?: string }[]>([{ data: items }]);
  const currentMenu = historyMenu[historyMenu.length - 1]; // Menu hiện tại sẽ lấy phần tử cuối cùng của mảng history

  const onChooseMenu = React.useCallback((isParent: boolean, item: any) => {
    if (isParent) {
      setHistoryMenu((prev) => [...prev, item]);
    }
  }, []);

  const onBack = React.useCallback(() => {
    setHistoryMenu((prev) => prev.slice(0, prev.length - 1));
  }, []);

  const handleOnHide = React.useCallback(() => {
    setHistoryMenu((prev) => prev.slice(0, 1));
  }, []);

  const renderItem: any = () => {
    if (!items) return null;

    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return <MenuItem key={index} data={item} onChooseMenu={() => onChooseMenu(isParent, item.children)} />;
    });
  };

  return (
    <Tippy
      interactive
      offset={[12, 10]} //Offset là vị trí (số đầu là chiều ngang, số sau là chiều dọc)
      delay={[0, 70000]}
      placement="bottom-end"
      onHide={handleOnHide}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperMenuWrapper className={cx('menu-popper-wrapper')}>
            <>
              {currentMenu.title && <MenuHeader title={currentMenu.title} onBack={onBack} />}
              {renderItem()}
            </>
          </PopperMenuWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default PopperMenu;
