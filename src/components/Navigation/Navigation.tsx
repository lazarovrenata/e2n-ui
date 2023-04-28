import { css, cx } from '@emotion/css';
import { colorPalette, shadow, spacingMap } from '../../theme';
import { NavigationProps } from './types';
import { MenuItemsContainer } from './components';

const HORIZONTAL_GLOBAL_NAV_HEIGHT = 64;

function getStyles() {
  return {
    container: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: HORIZONTAL_GLOBAL_NAV_HEIGHT,
      position: 'relative',
      backgroundColor: colorPalette.commonWhite,
      boxShadow: shadow.card,
      paddingRight: spacingMap.md,
      paddingLeft: spacingMap.md,
    }),
    leftStyles: css({
      display: 'flex',
      alignItems: 'center',
      gap: spacingMap.md,
      height: 'inherit',
    }),
    rightStyles: css({
      display: 'flex',
      alignItems: 'center',
      height: 'inherit',
      gap: spacingMap.md,
    }),
  };
}

/**
 * Renders a basic top level navigation with a left slot and a right slots for various elements.
 * On the left side an optional Home component and menu items are displayed. On the right side you can pass
 * a component for Settings and Profile.
 * @param param0
 * @returns
 */
export function Navigation({
  label,
  menuItems = [],
  renderHome: Home,
  renderProfile: Profile,
  renderSettings: Settings,
}: NavigationProps) {
  const styles = getStyles();

  return (
    <header
      data-testid="navigation-container"
      className={cx(styles.container, 'navigation-container')}>
      <nav
        aria-label={label}
        className={cx(styles.leftStyles, 'navigation-left-styles')}>
        {Home && <Home />}
        <MenuItemsContainer items={menuItems} />
      </nav>
      <div className={cx(styles.rightStyles, 'navigation-right-styles')}>
        {Settings && <Settings />}
        {Profile && <Profile />}
      </div>
    </header>
  );
}
