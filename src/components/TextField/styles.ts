import { css } from '@emotion/css';
import { colorPalette, theme, typography } from '../../theme';
import { getFocusAndHoverStyles } from './getFocusStyles';

export function getStyles({
  width,
  isValid,
  resizable,
  textAreaHeight,
  textAreaWidth,
  disabled,
}: {
  width?: number | string;
  isValid?: boolean;
  resizable?: boolean;
  textAreaWidth?: number;
  textAreaHeight?: number;
  disabled?: boolean;
}) {
  const focusStyles = getFocusAndHoverStyles(isValid, disabled);
  return {
    textInput: css({
      '::placeholder': {
        fontWeight: theme.weight.regular,
        color: colorPalette.grey500,
      },
      backgroundColor: 'transparent',
      border: 'none',
      ':hover': {
        cursor: disabled ? 'not-allowed' : 'default',
      },
      width: '100%',
      ...typography.textField,
    }),
    textArea: css({
      ...typography.textField,
      resize: resizable ? 'both' : 'none',
      width: textAreaWidth ? textAreaWidth : 'auto',
      height: textAreaHeight ? textAreaHeight : '100%',
      fontFamily: theme.fontFamily.sansSerif,
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      border: isValid
        ? `1px solid ${colorPalette.grey300}`
        : `1px solid ${colorPalette.errorLight}`,
      borderRadius: theme.borderRadius.sm,
      transition: 'border 0.15s ease-in-out',
      backgroundColor: disabled ? colorPalette.grey100 : colorPalette.white,
      ...focusStyles,
    }),
    wrapper: css({
      display: 'flex',
      flexDirection: 'column',
      width,
      fontFamily: theme.fontFamily.sansSerif,
    }),
    fieldWrapper: css({
      display: 'flex',
      flexDirection: 'row',
      gap: theme.spacing.sm,
      alignItems: 'center',
      backgroundColor: disabled ? colorPalette.grey100 : colorPalette.white,
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      border: isValid
        ? `1px solid ${colorPalette.grey300}`
        : `1px solid ${colorPalette.errorLight}`,
      borderRadius: theme.borderRadius.sm,
      transition: 'border 0.15s ease-in-out',
      '& .input-adornment': {
        color: isValid ? colorPalette.grey500 : colorPalette.errorMain,
      },
      ...focusStyles,
    }),
    label: css({
      paddingBottom: theme.spacing.xs,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing.xs,
      color: !isValid ? colorPalette.errorLight : colorPalette.black,
      ...typography.textFieldLabel,
    }),
    description: css({
      paddingTop: theme.spacing.xs,
      color: colorPalette.grey500,
      ...typography.textFieldDescription,
    }),
  };
}
