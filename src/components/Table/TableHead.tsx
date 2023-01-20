import { css, cx } from '@emotion/css';
import { HTMLAttributes } from 'react';

type CustomProps = {
  children: React.ReactNode;
};

export type TableHeadProps = CustomProps &
  HTMLAttributes<HTMLTableSectionElement>;

function getTableHeaderStyles() {
  return css({
    display: 'table-header-group',
  });
}

export function TableHead({ children, ...otherProps }: TableHeadProps) {
  return (
    <thead {...otherProps} className={cx('thead', getTableHeaderStyles())}>
      {children}
    </thead>
  );
}
