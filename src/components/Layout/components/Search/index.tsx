import { AccountItem } from '@/components/AccountItem';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React from 'react';
import 'tippy.js/dist/tippy.css';
import styles from './search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([1]);
  const [isShowResult, setIsShowResult] = React.useState(true);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClearInput = React.useCallback(() => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current?.focus();
  }, []);

  const handleFocusInput = React.useCallback(() => {
    setIsShowResult(true);
  }, []);

  return (
    <TippyHeadless
      visible={isShowResult && searchResult.length > 0}
      interactive
      onClickOutside={() => setIsShowResult(false)}
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
        <input
          ref={inputRef}
          type="text"
          placeholder="Search accounts and videos"
          value={searchValue}
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={handleFocusInput}
        />
        {searchValue && (
          <button className={cx('clear')} onClick={handleClearInput}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        <button className={cx('search__btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
