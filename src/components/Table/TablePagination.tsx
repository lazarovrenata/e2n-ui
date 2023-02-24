import { cx, css } from '@emotion/css';
import { theme } from '../../theme/default';
import { IconButton } from '../Button';
import { PaginatorSelect } from './PaginatorSelect';
import { Table as TableType } from '@tanstack/react-table';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export function TablePaginator<T>({
  table,
  totalEntries,
}: {
  table: TableType<T>;
  totalEntries: number;
}) {
  function handlePageSizeChange(value?: number) {
    if (value) {
      table.setPageSize(value);
    }
  }

  return (
    <div
      className={cx(
        'paginator-wrapper',
        css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: theme.fontFamily.sansSerif,
          fontSize: theme.size.base,
        }),
      )}>
      <div>
        Einträge gesamt: <strong>{totalEntries}</strong>
      </div>
      <div
        className={cx(
          'paginator',
          css({
            display: 'flex',
            gap: theme.spacing.md,
            alignItems: 'center',
          }),
        )}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          Zeilen pro Seite:{' '}
          <PaginatorSelect
            defaultSelected={table.getState().pagination.pageSize}
            onChange={handlePageSizeChange}
          />
        </div>
        <div>
          Seite{' '}
          <strong>
            {table.getPageCount() === 0
              ? 0
              : table.getState().pagination.pageIndex + 1}{' '}
            von {table.getPageCount()}
          </strong>
        </div>
        <div>
          <IconButton
            icon={faAngleLeft}
            size="2x"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          <IconButton
            size="2x"
            icon={faAngleRight}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </div>
      </div>
    </div>
  );
}
