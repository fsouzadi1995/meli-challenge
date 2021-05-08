import * as React from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';

import styles from './TextInput.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  clearFn: VoidFunction;
}

export const TextInput = ({ clearFn, id, ...props }: Props): JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function clear(evt: React.KeyboardEvent | React.MouseEvent): void {
    if (evt.type === 'keydown' && (evt as React.KeyboardEvent).code !== 'Enter') {
      return;
    }

    clearFn();
  }

  function focus(): void {
    inputRef.current?.focus();
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftIcon} onClick={focus}>
        <IconContext.Provider value={{ color: 'gray', size: '1.5em' }}>
          <BiSearch />
        </IconContext.Provider>
      </div>

      <input ref={inputRef} id={id} {...props} />

      <div
        aria-label='Clear'
        className={styles.rightIcon}
        tabIndex={0}
        onClick={clear}
        onKeyDown={clear}
      >
        <IconContext.Provider value={{ color: 'gray', size: '1.5em' }}>
          <BiX />
        </IconContext.Provider>
      </div>
    </div>
  );
};
