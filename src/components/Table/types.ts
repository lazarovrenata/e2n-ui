import { ColumnDef as ReactTableColumnDef } from '@tanstack/react-table';
import { SortingState as ReactTableSortingState } from '@tanstack/react-table';
import { Row as ReactTableRow } from '@tanstack/react-table';
import { PaginationState as ReactTablePaginationState } from '@tanstack/react-table';

export type ColumnDef<TData, TValue = unknown> = ReactTableColumnDef<
  TData,
  TValue
>;

export type SortingState = ReactTableSortingState;

export type Row<TData> = ReactTableRow<TData>;

export type PaginationState = ReactTablePaginationState;
