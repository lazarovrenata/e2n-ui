import { css, cx } from '@emotion/css';
import { HTMLAttributes } from 'react';
import { colorPalette } from '../../theme';

type CustomProps = {
  children: React.ReactNode;
};

export type TableHeadProps = CustomProps &
  HTMLAttributes<HTMLTableSectionElement>;

function getTableHeaderStyles() {
  return css({
    display: 'table-header-group',
    backgroundColor: colorPalette.grey100,
    position: 'sticky',
  });
}

export function TableHead({ children, ...otherProps }: TableHeadProps) {
  return (
    <thead {...otherProps} className={cx('thead', getTableHeaderStyles())}>
      {children}
    </thead>
  );
}
