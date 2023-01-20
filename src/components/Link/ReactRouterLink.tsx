import { cx } from '@emotion/css';
import { forwardRef } from 'react';
import { Link, LinkProps as ReactRouterLinkProps } from 'react-router-dom';
import { getLinkStyles } from './styles';

export const ReactRouterLink = forwardRef(
  ({ to, children, className, ...otherProps }: ReactRouterLinkProps) => {
    const styles = getLinkStyles();
    return (
      <Link to={to} {...otherProps} className={cx(styles, className)}>
        {children}
      </Link>
    );
  },
);

ReactRouterLink.displayName = 'ReactRouterLink';
