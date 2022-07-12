import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import { AccountItem } from '@/components/AccountItem';

// cx giúp viết className dễhơn.
// VD: post-item thì không thể viết styles.post-item (Hoặc viết styles['post-item']) => Xấu
// Dùng cx: cx("post-item")
const cx = classNames.bind(styles);

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

        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
