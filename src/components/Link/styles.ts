import { css } from '@emotion/css';
import { colorPalette, theme } from '../../theme/default';

export function getLinkStyles() {
  return css({
    color: colorPalette.darkBlue,
    fontWeight: theme.weight.regular,
    fontFamily: theme.fontFamily.sansSerif,
    transition: '0.6s',
    ':hover': {
      color: colorPalette.blue,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  });
}
