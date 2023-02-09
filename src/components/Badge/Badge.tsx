import { css, cx } from '@emotion/css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { colorPalette, theme } from '../../theme/default';

type BadgeVariants = 'secondary' | 'error' | 'success' | 'info1' | 'warning';

type CustomProps = {
  text?: string | ReactElement;
  icon?: IconDefinition;
  variant?: BadgeVariants;
  backgroundColor?: string;
  textColor?: string;
};

export type BadgeProps = CustomProps & HTMLAttributes<HTMLDivElement>;

const colorStyleMap = {
  secondary: {
    backgroundColor: colorPalette.grey200,
    textColor: colorPalette.grey500,
  },
  error: {
    backgroundColor: colorPalette.errorLighter,
    textColor: colorPalette.errorDarker,
  },
  success: {
    backgroundColor: colorPalette.successLighter,
    textColor: colorPalette.successDarker,
  },
  info1: {
    backgroundColor: colorPalette.infoLighter,
    textColor: colorPalette.infoDarker,
  },
  warning: {
    backgroundColor: colorPalette.warningLighter,
    textColor: colorPalette.warningDarker,
  },
};

function getBadgeStyles(
  variant: BadgeVariants,
  backgroundColor: string | undefined,
  textColor: string | undefined,
) {
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
    backgroundColor: backgroundColor
      ? backgroundColor
      : colorStyleMap[variant].backgroundColor,
    color: textColor ? textColor : colorStyleMap[variant].textColor,
  });
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      icon,
      text,
      variant = 'secondary',
      backgroundColor,
      textColor,
      className,
      ...otherProps
    },
    ref,
  ) => {
    const badgeStyles = getBadgeStyles(variant, backgroundColor, textColor);

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
