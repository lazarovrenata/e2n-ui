import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import {
  Spacing,
  JustifyAlign,
  justfifyAlignMap,
  spacingMap,
} from '../../../../theme';

type Stretch = 'all' | 'start' | 'end';

const stretchMap: Record<Stretch, object> = {
  all: { '> *': { flex: 1 } },
  start: { '> :first-child': { flex: 1 } },
  end: { '> :last-child': { flex: 1 } },
};

type CustomProps = {
  children: ReactNode;
  /** The gap prop defines the spacing between elements. */
  gap?: Spacing;
  /** The justify props defines the inline placement of the elements within the inline container. */
  justify?: JustifyAlign;
  /** The align prop defines the horizontal placement of the elements within the inline container. */
  align?: JustifyAlign;
  /** The stretch prop defines which item within the container gets the remaining space.
   * It is possible to use the index of an item or one of the predefined
   * values `all`, `start` or `end`.
   */
  stretch?: Stretch | number;
};

function getStyles(
  gap: Spacing | undefined,
  justify: JustifyAlign | undefined,
  align: JustifyAlign | undefined,
  stretch: Stretch | number | undefined,
) {
  const nthChild =
    stretch !== undefined && typeof stretch === 'number'
      ? `> :nth-child(${stretch + 1})`
      : '';

  const stretchProps =
    stretch === undefined
      ? {}
      : typeof stretch === 'number'
      ? {
          [nthChild]: { flex: 1 },
        }
      : stretchMap[stretch];

  return css({
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: justify
      ? justfifyAlignMap[justify]
      : justfifyAlignMap.center,
    alignItems: align ? justfifyAlignMap[align] : justfifyAlignMap.center,
    gap: gap ? spacingMap[gap] : spacingMap.md,
    ...stretchProps,
  });
}

export type InlineProps = CustomProps & HTMLAttributes<HTMLDivElement>;

/**
 * The Inline component adds consistent spacing around inline elements of variable width.
 * Unlike the InlineCluster component, the items in the Inline component will not wrap.
 * The Inline component also allows you to specify a component that can stretch and fill the excess space.
 */
export const Inline = forwardRef<HTMLDivElement, InlineProps>(
  ({ children, gap, justify, align, stretch, ...otherProps }, ref) => {
    const styles = getStyles(gap, justify, align, stretch);

    return (
      <div ref={ref} {...otherProps} className={cx(styles, 'inline-cluster')}>
        {children}
      </div>
    );
  },
);
Inline.displayName = 'Inline';
