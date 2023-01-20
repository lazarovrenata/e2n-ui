import { css, cx } from '@emotion/css';
import { HTMLAttributes } from 'react';
import { colorPalette, theme } from '../../theme/default';

type CustomProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  variant: 'header' | 'body' | 'details';
};

function getTableRowStyles({
  isSelected,
  variant,
}: {
  isSelected?: boolean;
  variant: 'header' | 'body' | 'details';
}) {
  return css({
    backgroundColor: isSelected ? colorPalette.systemGray100 : 'inherit',
    borderBottom: `1px solid ${colorPalette.systemGray100}`,
    lineHeight: theme.lineHeight.md,
    ':hover': {
      backgroundColor: variant === 'body' ? colorPalette.systemGray100 : 'none',
      // show action buttons on hover
      td: {
        '.action-button-row': {
          button: {
            opacity: 1,
          },
        },
      },
    },
    transition: 'ease-in-out',
  });
}

export type TableRowProps = CustomProps & HTMLAttributes<HTMLTableRowElement>;

export function TableRow({
  children,
  isSelected,
  variant,
  ...otherProps
}: TableRowProps) {
  return (
    <tr
      className={cx('tr', getTableRowStyles({ isSelected, variant }))}
      {...otherProps}>
      {children}
    </tr>
  );
}
