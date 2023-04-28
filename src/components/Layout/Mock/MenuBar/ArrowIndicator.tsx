import { css, cx, keyframes } from '@emotion/css';
import { NavigationMenuIndicator } from '@radix-ui/react-navigation-menu';
import { colorPalette } from '../../../../theme';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const styles = {
  navigationMenuIndicator: css({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 10,
    top: '100%',
    overflow: 'hidden',
    zIndex: 1,
    transition: 'width, transform 250ms ease',
    '& [data-state="visible"]': {
      animation: `${fadeIn} 200ms ease`,
    },
    '& [data-state="hidden"]': {
      animation: `${fadeOut} 200ms ease`,
    },
  }),
  arrow: css({
    position: 'relative',
    top: '70%',
    backgroundColor: colorPalette.commonWhite,
    width: 10,
    height: 10,
    transform: 'rotate(45deg)',
    borderTopLeftRadius: 2,
  }),
};

export function ArrowIndicator() {
  return (
    <NavigationMenuIndicator
      data-state="visible"
      className={cx(styles.navigationMenuIndicator)}>
      <div className={cx(styles.arrow)} />
    </NavigationMenuIndicator>
  );
}
