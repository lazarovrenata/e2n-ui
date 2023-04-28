import { css, cx, keyframes } from '@emotion/css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  NavigationMenuContent,
  NavigationMenuItem as RadixNavigationMenuItem,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu';
import { colorPalette } from '../../../../theme';
import { ReactNode } from 'react';

const enterFromLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-200px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const enterFromRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(200px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const exitToRight = keyframes({
  from: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateX(200px)',
  },
});

const exitToLeft = keyframes({
  from: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateX(-200px)',
  },
});

const styles = {
  navigationMenuTrigger: css({
    all: 'unset',
    padding: '8px 12px',
    outline: 'none',
    userSelect: 'none',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 4,
    fontSize: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    ':focus': {
      boxShadow: colorPalette.primaryLight,
    },
    ':hover': {
      backgroundColor: colorPalette.primaryLighter,
      '> .caret-down': {
        transform: 'rotate(-180deg)',
      },
    },
  }),
  caretDown: css({
    position: 'relative',
    color: colorPalette.primaryMain,
    top: 1,
    transition: 'transform 250ms ease',
  }),
  navigationMenuContent: css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '& [data-motion="from-start"]': {
      animationName: enterFromLeft,
    },
    '& [data-motion="from-end"]': {
      animationName: enterFromRight,
    },
    '& [data-motion="to-start"]': {
      animationName: exitToLeft,
    },
    '& [data-motion="to-end"]': {
      animationName: exitToRight,
    },
    '@media only screen and (min-width: 600px)': {
      width: 'auto',
    },
  }),
};

export function NavigationMenuItem({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  return (
    <RadixNavigationMenuItem>
      <NavigationMenuTrigger
        className={cx(styles.navigationMenuTrigger, 'navigation-menu-trigger')}>
        {title}
        {/* <FontAwesomeIcon
          className={cx(styles.caretDown, 'caret-down')}
          icon={faChevronDown}
        /> */}
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className={cx(styles.navigationMenuContent, 'navigation-menu-content')}>
        {content}
      </NavigationMenuContent>
    </RadixNavigationMenuItem>
  );
}
