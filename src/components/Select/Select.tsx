import { css, cx } from '@emotion/css';
import { useMemo } from 'react';
import Select, { GroupBase, Props, StylesConfig } from 'react-select';
import { colorPalette, theme } from '../../theme/default';

function getStyles() {
  return {
    wrapper: css({
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.fontFamily.sansSerif,
    }),
    label: css({
      paddingBottom: theme.spacing.xs,
      fontSize: theme.size.md,
      fontWeight: theme.weight.semibold,
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
  ...otherProps
}: Props<Option, IsMulti, Group> & { label?: string }) {
  const customSelectStyles = getStyles();

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
          fontSize: theme.size.md,
          fontWeight: theme.weight.light,
          color: colorPalette.systemGray500,
          opacity: 0.5,
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
          fontSize: theme.size.md,
        };
      },
      control: (styles, state) => {
        return {
          ...styles,
          padding: 2,
          border:
            !state.isFocused && !state.menuIsOpen
              ? `2px solid ${colorPalette.systemGray200} `
              : `2px solid ${colorPalette.systemGray500}`,
          borderRadius: theme.borderRadius.xs,
          boxShadow:
            !state.isFocused && !state.menuIsOpen
              ? 'none'
              : `0px 0px 0px 4px ${colorPalette.systemGray200}`,
          fontSize: theme.size.base,
          fontWeight: theme.weight.light,
          ':hover': {
            border: `2px solid ${colorPalette.systemGray500}`,
          },
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
          IndicatorSeparator,
        }}
        styles={{ ...styles, ...customStyles }}
        {...otherProps}
      />
    </div>
  );
}
