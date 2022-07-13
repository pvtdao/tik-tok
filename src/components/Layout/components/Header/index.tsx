import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faQuestionCircle,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import { AccountItem } from '@/components/AccountItem';
import Button from '@/components/Button';
import PopperMenu from '@/components/Popper/Menu';

// cx giúp viết className dễhơn.
// VD: post-item thì không thể viết styles.post-item (Hoặc viết styles['post-item']) => Xấu
// Dùng cx: cx("post-item")
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <img src={images.logo} alt="tiktok" />

        <Tippy
          interactive
          render={(attrs) => (
            <div className={cx('search__result')} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <>
                  <h4 className={cx('search__title')}>Accounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search__btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('action')}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>

          <PopperMenu items={MENU_ITEMS}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
