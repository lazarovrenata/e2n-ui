import { css, cx } from '@emotion/css';
import { colorPalette } from '../../../theme';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/pro-duotone-svg-icons';

function getStyles(open: boolean) {
  return css({
    width: open ? 300 : 100,
    backgroundColor: colorPalette.infoLighter,
    transition: 'width 0.3s ease-in-out',
  });
}

function getIconStyles(open: boolean) {
  return css({
    transition: 'transform 0.3s ease-in-out',
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
  });
}

export function Sidenav() {
  const [open, setOpen] = useState(false);
  const styles = getStyles(open);
  return (
    <div className={cx(styles)}>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
      <button onClick={() => setOpen(!open)}>
        <FontAwesomeIcon
          className={cx(getIconStyles(open))}
          icon={faChevronLeft}
        />
      </button>
    </div>
  );
}
