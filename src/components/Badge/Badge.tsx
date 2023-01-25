import { css, cx } from '@emotion/css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { colorPalette, theme } from '../../theme/default';

type BadgeVariants = 'secondary' | 'error' | 'success';

type CustomProps = {
  text?: string | ReactElement;
  icon?: IconDefinition;
  variant?: BadgeVariants;
};

export type BadgeProps = CustomProps & HTMLAttributes<HTMLDivElement>;

const colorStyleMap = {
  secondary: {
    backgroundColor: colorPalette.systemGray200,
    textColor: colorPalette.systemGray500,
  },
  error: {
    backgroundColor: colorPalette.lightRed,
    textColor: colorPalette.darkRed,
  },
  success: {
    backgroundColor: colorPalette.lightGreen,
    textColor: colorPalette.darkGreen,
  },
};

function getBadgeStyles(variant: BadgeVariants) {
  return css({
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    fontSize: theme.size.sm,
    fontWeight: theme.weight.regular,
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    fontFamily: theme.fontFamily.sansSerif,
    backgroundColor: colorStyleMap[variant].backgroundColor,
    color: colorStyleMap[variant].textColor,
  });
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ icon, text, variant = 'secondary', className, ...otherProps }, ref) => {
    const badgeStyles = getBadgeStyles(variant);

    return (
      <div
        className={cx('e2n-badge', badgeStyles, className)}
        {...otherProps}
        ref={ref}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <span>{text}</span>
      </div>
    );
  },
);

Badge.displayName = 'Badge';
