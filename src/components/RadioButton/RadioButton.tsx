import { css, cx, keyframes } from '@emotion/css';
import { InputHTMLAttributes } from 'react';
import { colorPalette, theme } from '../../theme/default';

type RadioButtonProps = {
  label: string;
  id: string;
  disabled?: boolean;
  key?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function getStyles({
  disabled,
  checked,
}: {
  disabled?: boolean;
  checked?: boolean;
}) {
  return {
    wrapper: css({
      display: 'flex',
      gap: theme.spacing.sm,
      alignItems: 'center',
      width: 'fit-content',
      borderRadius: theme.borderRadius.md,
      '&:hover': {
        backgroundColor: !disabled
          ? colorPalette.systemGray200
          : colorPalette.systemGray500,
        cursor: !disabled ? 'pointer' : 'not-allowed',
        input: {
          border: `2px solid ${
            !disabled ? colorPalette.darkBlue : colorPalette.systemGray500
          }`,
          '&:checked': {
            border: `5px solid ${
              !disabled ? colorPalette.darkBlue : colorPalette.systemGray500
            }`,
          },
        },
      },
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      transition: 'hover 1s',
    }),
    label: css({
      fontSize: theme.size.md,
      fontWeight: theme.weight.semibold,
      cursor: disabled ? 'not-allowed' : 'unset',
      color: disabled ? colorPalette.systemGray500 : 'inherit',
      fontFamily: theme.fontFamily.sansSerif,
    }),
    input: css({
      appearance: 'none',
      margin: 0,
      width: 15,
      height: 15,
      border: `2px solid ${
        !disabled ? colorPalette.systemGray200 : colorPalette.systemGray500
      }`,
      backgroundColor: !disabled
        ? colorPalette.white
        : colorPalette.systemGray200,
      borderRadius: '50%',
      '&:after': {
        display: 'block',
        borderRadius: '50%',
        width: 8,
        height: 8,
        margin: 3,
        content: '""',
      },
      '&:checked': {
        border: `5px solid ${
          !disabled ? colorPalette.darkBlue : colorPalette.systemGray500
        }`,
      },
    }),
  };
}

export function RadioButton({
  label,
  id,
  key,
  disabled,
  ...otherProps
}: RadioButtonProps) {
  const styles = getStyles({ disabled });
  return (
    <div className={cx(styles.wrapper, otherProps.className)} key={key}>
      <input
        id={id}
        type="radio"
        className={cx(styles.input)}
        disabled={disabled}
        {...otherProps}
      />
      <label htmlFor={id} className={cx(styles.label)}>
        {label}
      </label>
    </div>
  );
}