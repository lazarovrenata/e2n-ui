import { css, cx } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-duotone-svg-icons';
import { ReactNode } from 'react';
import { colorPalette, theme, spacingMap, typography } from '../../../../theme';
import { NavigationDropdown } from '../NavigationDropdown';

export function NavigationDropdownButton({
  trigger,
  children,
}: {
  trigger: string;
  children: ReactNode;
}) {
  const buttonStyles = css({
    transition: 'background-color, color 0.3s',
    color: colorPalette.grey600,
    display: 'flex',
    justifyContent: 'center',
    gap: spacingMap.xs,
    alignItems: 'center',
    border: 0,
    borderRadius: theme.borderRadius.xs,
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

  const Trigger = (
    <button className={cx(buttonStyles)}>
      {trigger}
      <FontAwesomeIcon className="chevron-down" icon={faChevronDown} />
    </button>
  );

  return <NavigationDropdown trigger={Trigger}>{children}</NavigationDropdown>;
}
