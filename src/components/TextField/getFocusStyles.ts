import { CSSObject } from '@emotion/css';
import chroma from 'chroma-js';
import { colorPalette } from '../../theme/default';

export function getFocusStyles(
  isValid?: boolean,
  disabled?: boolean,
): CSSObject {
  return disabled
    ? {
        ':focus-visible': {
          outline: 'none',
        },
      }
    : {
        ':focus': {
          boxShadow: `0px 0px 0px 4px ${
            isValid
              ? colorPalette.systemGray200
              : chroma(colorPalette.red).luminance(0.8).hex()
          }`,
          border: `2px solid ${
            isValid ? colorPalette.systemGray500 : colorPalette.red
          }`,
        },
        ':focus-visible': {
          border: `2px solid ${
            isValid ? colorPalette.systemGray500 : colorPalette.red
          }`,
          outline: 'none',
          boxShadow: `0px 0px 0px 4px ${
            isValid
              ? colorPalette.systemGray200
              : chroma(colorPalette.red).luminance(0.8).hex()
          }`,
        },
      };
}
