/* eslint-disable jsx-a11y/alt-text */
import images from '@/assets/images';
import { AccountItem } from '@/components/AccountItem';
import Button from '@/components/Button';
import {
  AnalyticsIcon,
  CoinIcon,
  KeyBoardIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  QuestionIcon,
  SettingIcon,
  UpLoadIcon,
  UserIcon,
} from '@/components/Icons';
import Image from '@/components/Image';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import PopperMenu from '@/components/Popper/Menu';
import { ItemType } from '@/schema/menu';
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React from 'react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';

// cx giúp viết className dễhơn.
// VD: post-item thì không thể viết styles.post-item (Hoặc viết styles['post-item']) => Xấu
// Dùng cx: cx("post-item")
const cx = classNames.bind(styles);
const CURRENT_USER = true;

const MENU_ITEMS: ItemType[] = [
  {
    icon: <LanguageIcon width="2rem" height="2rem" />,
    title: 'English',
    // Thằng nào có children thì thằng đó có sub menu
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          value: 'en',
          title: 'English',

          children: {
            title: 'Accent',
            data: [
              {
                type: 'english-accent',
                value: 'american',
                title: 'American',
              },
              {
                type: 'english-accent',
                value: 'british',
                title: 'British',
              },
            ],
          },
        },
        {
          type: 'language',
          value: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          value: 'fr',
          title: 'Français',
        },
        {
          type: 'language',
          value: 'es',
          title: 'Español',
        },
      ],
    },
  },
  {
    icon: <QuestionIcon width="2rem" height="2rem" />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyBoardIcon width="2rem" height="2rem" />,
    title: 'Keyboard shortcuts',
  },
];

const BUTTON_CURRENT_USER = [
  {
    icon: <UpLoadIcon />,
    title: 'Upload video',
  },
  {
    icon: <MessageIcon width="2.6rem" height="2.6rem" />,
    title: 'Messages',
  },
];

const USER_MENU = [
  {
    icon: <UserIcon width="2rem" height="2rem" />,
    title: 'View profile',
    to: '/@hoa',
  },
  {
    icon: <CoinIcon width="2rem" height="2rem" />,
    title: 'Coins',
    to: '/coin',
  },
  {
    icon: <AnalyticsIcon width="2rem" height="2rem" />,
    title: 'View Analytics',
    to: '/analytics',
  },
  {
    icon: <SettingIcon width="2rem" height="2rem" />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <LogoutIcon width="2rem" height="2rem" />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <img src={images.logo} alt="tiktok" />

        <TippyHeadless
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
        </TippyHeadless>

        <div className={cx('action')}>
          {CURRENT_USER ? (
            <>
              {BUTTON_CURRENT_USER.map(({ title, icon }, index) => {
                return (
                  <Tippy key={index} delay={[0, 100]} content={title} placement="bottom">
                    <button className={cx('action__btn')}>{icon}</button>
                  </Tippy>
                );
              })}
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <PopperMenu items={CURRENT_USER ? USER_MENU : MENU_ITEMS}>
            {CURRENT_USER ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1658556000&x-signature=ajmuY0tgC5n%2BpEpCalJoF%2BfY6JI%3D"
                alt="Đào Lê Phương Hoa"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
