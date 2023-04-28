import { faCog } from '@fortawesome/pro-duotone-svg-icons';
import { IconButton } from '../../../Button';
import { IconButtonProps } from '../../../Button/IconButton';
import { css, cx } from '@emotion/css';
import { colorPalette, theme } from '../../../../theme';
import { NavigationDropdown } from '../NavigationDropdown';
import { ReactNode } from 'react';

const styles = css({
  fontSize: theme.size.lg,
  color: colorPalette.grey600,
  cursor: 'pointer',
  height: 30,
  width: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  button: {
    fontSize: 16,
    ':focus': {
      outline: 'none',
    },
  },
  transition: '0.3s',
  ':hover, :focus-within': {
    backgroundColor: colorPalette.primaryTransparent8,
    button: {
      color: colorPalette.primaryMain,
    },
  },
  '&[data-state="open"]': {
    backgroundColor: colorPalette.primaryTransparent8,
    button: {
      color: colorPalette.primaryMain,
    },
  },
});

export function Settings({
  children,
  ...props
}: Omit<IconButtonProps, 'icon'> & { children?: ReactNode }) {
  const Trigger = (
    <div
      data-testid="navigation-settings"
      className={cx(styles, 'navigation-settings')}>
      <IconButton icon={faCog} {...props} />
    </div>
  );

  return <NavigationDropdown trigger={Trigger}>{children}</NavigationDropdown>;
}
