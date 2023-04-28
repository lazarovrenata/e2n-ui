import { css, cx } from '@emotion/css';
import {
  AllHTMLAttributes,
  ComponentType,
  ElementType,
  HTMLAttributes,
} from 'react';
import { theme, typography, spacingMap, colorPalette } from '../../../../theme';

type NavigationButtonProps = {
  /** The display name of the menu item. */
  children: string;
  /** It is possible to pass a custom component e.g. React Router link as menu item. If no element is provided
   * a button is used as default.
   */
  component?: ComponentType<AllHTMLAttributes<HTMLElement>> | ElementType;
} & HTMLAttributes<HTMLButtonElement>;

export const styles = css({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  height: 'fit-content',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: theme.borderRadius.xs,
  ...typography.navItem,
  padding: spacingMap.xs,
  cursor: 'pointer',
  color: colorPalette.grey600,
  transition: 'background-color, color 0.3s',
  ':hover, :focus, :focus-visible': {
    backgroundColor: colorPalette.primaryTransparent8,
    color: colorPalette.primaryMain,
    outline: 'none',
  },
});

export function NavigationButton({
  children,
  component: CustomComponent = 'button',
  ...otherProps
}: NavigationButtonProps) {
  return (
    <CustomComponent
      className={cx(styles, 'navigation-button')}
      {...otherProps}>
      {children}
    </CustomComponent>
  );
}
