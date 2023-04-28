import { css, cx } from '@emotion/css';
import { useMemo } from 'react';
import Select, { GroupBase, Props, StylesConfig } from 'react-select';
import { colorPalette, shadow, theme, typography } from '../../theme';
import makeAnimated from 'react-select/animated';

function getStyles() {
  return {
    wrapper: css({
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.fontFamily.sansSerif,
    }),
    label: css({
      paddingBottom: theme.spacing.xs,
      ...typography.textFieldLabel,
    }),
  };
}

const IndicatorSeparator = () => {
  return <></>;
};

export function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  components,
  styles: customStyles,
  label,
  isAnimated,
  ...otherProps
}: Props<Option, IsMulti, Group> & { label?: string; isAnimated?: boolean }) {
  const customSelectStyles = getStyles();

  const animatedComponents = isAnimated ? makeAnimated() : undefined;

  const styles: StylesConfig<Option, IsMulti, Group> = useMemo(() => {
    return {
      container: (styles) => {
        return {
          ...styles,
          fontFamily: theme.fontFamily.sansSerif,
        };
      },
      placeholder: (styles, state) => {
        return {
          ...styles,
          color: colorPalette.grey500,
          opacity: 0.5,
          ...typography.textField,
          lineHeight: undefined,
        };
      },
      input: (styles, state) => {
        return {
          ...styles,
          fontSize: theme.size.md,
          fontWeight: theme.weight.regular,
        };
      },
      singleValue: (styles) => {
        return {
          ...styles,
          ...typography.textField,
          lineHeight: undefined,
        };
      },
      control: (styles, state) => {
        return {
          ...styles,
          padding: 3,
          border:
            !state.isFocused && !state.menuIsOpen
              ? `1px solid ${colorPalette.grey300} `
              : `1px solid ${colorPalette.grey500}`,
          borderRadius: theme.borderRadius.sm,
          boxShadow: 'none',
          ':hover': {
            border: `1px solid ${colorPalette.grey500}`,
          },
          ...typography.textField,
          lineHeight: undefined,
        };
      },
      menu: (styles, state) => {
        return {
          ...styles,
          boxShadow: shadow.dropdown,
          borderRadius: theme.borderRadius.sm,
        };
      },
    };
  }, []);

  return (
    <div className={cx(customSelectStyles.wrapper, otherProps.className)}>
      {label && <div className={cx(customSelectStyles.label)}>{label}</div>}
      <Select
        components={{
          ...components,
          ...animatedComponents,
          IndicatorSeparator,
        }}
        styles={{ ...styles, ...customStyles }}
        {...otherProps}
      />
    </div>
  );
}
