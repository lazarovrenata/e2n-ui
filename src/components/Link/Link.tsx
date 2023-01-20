import { cx } from '@emotion/css';
import { AnchorHTMLAttributes, forwardRef } from 'react';
import { getLinkStyles } from './styles';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = forwardRef(
  ({ children, className, ...otherProps }: LinkProps) => {
    const styles = getLinkStyles();
    return (
      <a className={cx(styles, className)} {...otherProps}>
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
