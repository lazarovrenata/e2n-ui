import { ColumnDef as ReactTableColumnDef } from '@tanstack/react-table';
import { SortingState as ReactSortingState } from '@tanstack/react-table';

export type ColumnDef<TData, TValue = unknown> = ReactTableColumnDef<
  TData,
  TValue
>;

export type SortingState = ReactSortingState;
