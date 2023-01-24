import {
  ColumnDef,
  ExpandedState,
  PaginationState,
  Row,
  SortingState,
} from '@tanstack/react-table';

export type TableColumnDef<TData, TValue = unknown> = ColumnDef<TData, TValue>;

export type TableSortingState = SortingState;

export type TableRow<TData> = Row<TData>;

export type TablePaginationState = PaginationState;

export type TableExpandendState = ExpandedState;
