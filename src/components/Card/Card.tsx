import { css, cx } from '@emotion/css';
import { forwardRef, HTMLAttributes } from 'react';
import { colorPalette, theme } from '../../theme/default';

type CustomProps = {
  header?: React.ReactNode;
  content?: React.ReactNode;
};

type CardProps = CustomProps & HTMLAttributes<HTMLDivElement>;

function getCardStyles() {
  return css({
    borderRadius: theme.borderRadius.md,
    border: `1px solid ${colorPalette.systemGray200}`,
    padding: theme.spacing.lg,
    backgroundColor: colorPalette.white,
    boxShadow: `${colorPalette.systemGray200} 0px 1px 4px`,
    fontFamily: theme.fontFamily.sansSerif,
  });
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ content, header, className, ...otherProps }, ref) => {
    const styles = getCardStyles();

    return (
      <div
        ref={ref}
        className={cx('e2n-card', styles, className)}
        {...otherProps}>
        <div>{header}</div>
        <div className={cx(css({ overflow: 'auto' }))}>{content}</div>
      </div>
    );
  },
);

Card.displayName = 'Card';
