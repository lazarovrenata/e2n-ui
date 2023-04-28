import { cx } from '@emotion/css';
import {
  faExclamationCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, InputHTMLAttributes } from 'react';
import { colorPalette } from '../../theme';
import { getStyles } from './styles';

type CustomProps = {
  className?: string;
  isValid?: boolean | undefined;
  label?: string;
  description?: string;
  inputAdornment?: IconDefinition;
};

export type TextFieldProps = CustomProps &
  InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      width,
      isValid = true,
      label,
      description,
      inputAdornment,
      disabled,
      ...otherProps
    },
    ref,
  ) => {
    const styles = getStyles({ width, isValid, disabled });

    return (
      <div className={cx(styles.wrapper, className)}>
        {label && (
          <label className={cx(styles.label)}>
            <div>{label}</div>
            {!isValid && (
              <FontAwesomeIcon
                icon={faExclamationCircle}
                color={colorPalette.errorLight}
              />
            )}
          </label>
        )}
        <div ref={ref} className={cx(styles.fieldWrapper)}>
          {inputAdornment && (
            <FontAwesomeIcon
              className="input-adornment"
              icon={inputAdornment}
            />
          )}
          <input
            className={cx(styles.textInput)}
            disabled={disabled}
            {...otherProps}
          />
        </div>
        {description && (
          <span className={cx(styles.description)}>{description}</span>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
