import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import {
  Spacing,
  JustifyAlign,
  justfifyAlignMap,
  spacingMap,
} from '../../../../theme';

type CustomProps = {
  children: ReactNode;
  /** The gap prop defines the spacing between elements. */
  gap?: Spacing;
  /** The justify props defines the inline placement of the elements within the cluster. */
  justify?: JustifyAlign;
  /** The align prop defines the horizontal placement of the elements within the cluster. */
  align?: JustifyAlign;
};

export type InlineClusterProps = CustomProps & HTMLAttributes<HTMLDivElement>;

function getStyles(
  gap: Spacing | undefined,
  justify: JustifyAlign | undefined,
  align: JustifyAlign | undefined,
) {
  return css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: justify
      ? justfifyAlignMap[justify]
      : justfifyAlignMap.center,
    alignItems: align ? justfifyAlignMap[align] : justfifyAlignMap.center,
    gap: gap ? spacingMap[gap] : spacingMap.md,
  });
}

/**
 * The InlineCluster component is used to display a group of elements in a row.
 * When the group is too large to fit in a single row, the elements will be
 * displayed in a cluster based on the width of the container and the justification of the cluster.
 */
export const InlineCluster = forwardRef<HTMLDivElement, InlineClusterProps>(
  ({ children, gap, justify, align, ...otherProps }, ref) => {
    const styles = getStyles(gap, justify, align);
    console.log(spacingMap.md);

    return (
      <div ref={ref} {...otherProps} className={cx(styles, 'inline-cluster')}>
        {children}
      </div>
    );
  },
);

InlineCluster.displayName = 'InlineCluster';
