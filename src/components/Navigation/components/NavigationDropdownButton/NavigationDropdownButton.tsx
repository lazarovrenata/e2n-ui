import { css, cx } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import {
  colorPalette,
  theme as e2nTheme,
  spacingMap,
  typography,
  Theme,
} from '../../../../theme';
import { NavigationDropdown } from '../NavigationDropdown';
import { useTheme } from '../../theme';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function getStyles(theme: Theme) {
  return css({
    transition: 'background-color, color 0.3s',
    color: theme.text,
    display: 'flex',
    justifyContent: 'center',
    gap: spacingMap.xs,
    alignItems: 'center',
    border: 0,
    borderRadius: e2nTheme.borderRadius.xs,
    ...typography.navItem,
    padding: spacingMap.xs,
    ':hover, :focus, :focus-visible': {
      backgroundColor: colorPalette.primaryTransparent8,
      color: colorPalette.primaryMain,
      outline: 'none',
    },
    '&[data-state="open"]': {
      backgroundColor: colorPalette.primaryTransparent8,
      color: colorPalette.primaryMain,
      '> .chevron-down': {
        transition: '0.3s',
        transform: 'rotate(-180deg)',
      },
    },
    '&[data-state="closed"]': {
      '> .chevron-down': {
        transition: '0.3s',
        transform: 'rotate(0)',
      },
    },
  });
}

export function NavigationDropdownButton({
  trigger,
  children,
}: {
  trigger: string;
  children: ReactNode;
}) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const Trigger = (
    <button className={cx(styles)}>
      {trigger}
      <FontAwesomeIcon className="chevron-down" icon={faChevronDown} />
    </button>
  );

  return <NavigationDropdown trigger={Trigger}>{children}</NavigationDropdown>;
}
