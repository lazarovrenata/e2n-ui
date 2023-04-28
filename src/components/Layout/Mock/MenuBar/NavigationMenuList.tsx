import { css, cx, keyframes } from '@emotion/css';
import {
  NavigationMenu,
  NavigationMenuViewport,
  NavigationMenuList as RadixNavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import { ReactNode } from 'react';
import { ArrowIndicator } from './ArrowIndicator';

const scaleIn = keyframes({
  from: {
    opacity: 0,
    transform: 'rotateX(-30deg) scale(0.9)',
  },
  to: {
    opacity: 1,
    transform: 'rotateX(0deg) scale(1)',
  },
});

const scaleOut = keyframes({
  from: {
    opacity: 1,
    transform: 'rotateX(0deg) scale(1)',
  },
  to: {
    opacity: 0,
    transform: 'rotateX(-10deg) scale(0.95)',
  },
});

const styles = {
  root: css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
  }),
  navigationMenuList: css({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 6,
    listStyle: 'none',
    boxShadow: '0 2px 10px',
    margin: 0,
  }),
  navigationMenuViewport: css({
    position: 'relative',
    // transformOrigin: 'top center',
    // marginTop: 10,
    // width: '100%',
    width: 'var(--radix-navigation-menu-viewport-width)',
    backgroundColor: 'white',
    // borderRadius: 6,
    // overflow: 'hidden',
    // boxShadow:
    //   'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    height: 'var(--radix-navigation-menu-viewport-height)',
    transition: 'width, height, 300ms ease',
    '& [data-state="open"]': {
      animation: `${scaleIn} 200ms ease`,
    },
    '& [data-state="closed"]': {
      animation: `${scaleOut} 200ms ease`,
    },
    // '@media only screen and (min-width: 600px)': {
    //   minWidth: 'inherit',
    //   width: 'var(--radix-navigation-menu-viewport-width)',
    // },
  }),
  viewportPosition: css({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    top: '100%',
    left: 0,
    perspective: 2000,
  }),
};

export function NavigationMenuList({ children }: { children: ReactNode }) {
  return (
    <NavigationMenu className={cx(styles.root, 'navigation-menu')}>
      <RadixNavigationMenuList
        className={cx(styles.navigationMenuList, 'navigation-menu-list')}>
        {children}
        <ArrowIndicator />
      </RadixNavigationMenuList>
      {/* <div className={cx(styles.viewportPosition, 'viewport-position')}> */}
      <NavigationMenuViewport
        className={cx(
          styles.navigationMenuViewport,
          'navigation-menu-viewport',
        )}
      />
      {/* </div> */}
    </NavigationMenu>
  );
}
