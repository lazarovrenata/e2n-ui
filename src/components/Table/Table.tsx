import { css, cx } from '@emotion/css';
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  TableOptions as ReactTableOptions,
  getExpandedRowModel,
} from '@tanstack/react-table';
import { useMemo, useState, ReactNode, useEffect, Fragment } from 'react';
import { colorPalette, theme } from '../../theme';
import { TableNoData } from './TableNoData';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableLoading } from './TableLoading';
import { TablePaginator } from './TablePagination';
import { TableRow } from './TableRow';
import { TableCard } from './TableContainer';
import { TableHeaderCell } from './TableHeaderCell';
import { TableBodyCell } from './TableBodyCell';

function getTableStyles({
  width,
  isEmpty,
}: {
  width?: number;
  isEmpty?: boolean;
}) {
  return css({
    width: width ? width : '100%',
    display: 'table',
    borderSpacing: '0px',
    borderCollapse: 'collapse',
    fontFamily: theme.fontFamily.sansSerif,
    color: colorPalette.grey800,
    tableLayout: !isEmpty ? 'fixed' : 'auto',
  });
}

type CustomProps<T> = {
  totalEntries?: number;
  loading?: boolean;
  ToolbarComponent?: ReactNode;
  TabsBarComponent?: ReactNode;
  NoDataComponent?: ReactNode;
  width?: number;
  height?: number | string;
  renderRowSubComponent?: (originalRow: T) => ReactNode;
  data?: T[];
  disablePagination?: boolean;
  headerGroupSelector?: string;
  setOriginalRowSelection?: (value: T[]) => void;
};

export type TableProps<T> = CustomProps<T> &
  Omit<ReactTableOptions<T>, 'getCoreRowModel' | 'data'>;

export function Table<T>({
  columns,
  data,
  pageCount,
  totalEntries,
  ToolbarComponent,
  loading,
  NoDataComponent,
  width,
  height,
  renderRowSubComponent,
  disablePagination = false,
  TabsBarComponent,
  setOriginalRowSelection,
  ...otherProps
}: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columnDefs = useMemo<ColumnDef<T>[]>(() => {
    return [...columns];
  }, [columns]);

  const isEmpty = data?.length === 0;

  const table = useReactTable({
    columns: columnDefs,
    data: data || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: setSorting,
    enableMultiRowSelection: false,
    pageCount,
    ...otherProps,
    state: {
      sorting,
      ...otherProps.state,
    },
  });

  useEffect(() => {
    if (setOriginalRowSelection) {
      setOriginalRowSelection(
        table.getSelectedRowModel().flatRows.map((row) => row.original),
      );
    }
  }, [otherProps.state?.rowSelection]);

  return (
    <TableCard
      height={height}
      PaginatorComponent={
        !disablePagination && (
          <TablePaginator<T> table={table} totalEntries={totalEntries ?? 0} />
        )
      }
      TabsBarComponent={TabsBarComponent}
      ToolbarComponent={ToolbarComponent}
      TableComponent={
        <table className={cx('table', getTableStyles({ width, isEmpty }))}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} variant="header">
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell<T> key={header.id} header={header} />
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {loading ? (
              <TableLoading colSpan={table.getAllColumns().length} />
            ) : table.getRowModel().rows.length === 0 ? (
              NoDataComponent ?? (
                <TableNoData colSpan={table.getAllColumns().length} />
              )
            ) : (
              table.getRowModel().rows.map((row) => {
                return (
                  <Fragment key={row.id}>
                    <TableRow
                      variant="body"
                      isSelected={row.getIsSelected()}
                      onClick={row.getToggleSelectedHandler()}>
                      {row.getVisibleCells().map((cell) => (
                        <TableBodyCell key={cell.id} cell={cell} row={row} />
                      ))}
                    </TableRow>
                    {/* Todo besseres Handling um Expandend Rows und Grouped Rows voneinander abzugrenzen */}
                    {!otherProps.state?.grouping && row.getIsExpanded() && (
                      <TableRow variant="details">
                        <TableCell
                          style={{
                            backgroundColor: colorPalette.greyTransparent8,
                            boxShadow: 'inset 0px 11px 8px -10px #e4e7ec',
                          }}
                          variant="body"
                          colSpan={table.getAllColumns().length}>
                          {!renderRowSubComponent ? (
                            <div>Please provide a row subcomponent</div>
                          ) : (
                            renderRowSubComponent(row.original)
                          )}
                        </TableCell>
                      </TableRow>
                    )}
                  </Fragment>
                );
              })
            )}
          </TableBody>
        </table>
      }
    />
  );
}
