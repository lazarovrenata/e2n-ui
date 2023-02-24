import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '../../Badge';
import { IndeterminateCheckbox } from '../IndeterminateCheckbox';
import { type Data, type Contract, type Location } from './data';

export const columns: ColumnDef<Location>[] = [
  {
    id: 'select',
    size: 25,
    cell: ({ row }) => (
      <div className="px-1">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  },
  {
    accessorKey: 'locationGroupId',
    header: 'Nr.',
    enableSorting: false,
    size: 75,
  },
  {
    accessorKey: 'name',
    header: 'Standort',
    size: 100,
  },
  {
    accessorKey: 'key',
    header: 'Schlüssel',
    enableSorting: false,
    size: 150,
    cell: (info) => {
      return <Badge text={info.getValue() as string} />;
    },
  },
  {
    accessorKey: 'numberOfEmployees',
    header: '#MA',
    size: 50,
  },
  {
    accessorKey: 'maxNumberOfEmployees',
    header: '<MA',
    size: 50,
  },
  {
    id: 'contractType',
    accessorFn: (row) => row.contract,
    header: 'Vertragsart',
    cell: (info) => {
      const contract = info.getValue() as Contract;
      return <Badge text={contract.type} variant="success" />;
    },
    size: 50,
  },
  {
    id: 'contractValidUntil',
    accessorFn: (row) => row.contract,
    header: 'Gültig bis',
    enableSorting: false,
    cell: (info) => {
      const contract = info.getValue() as Contract;
      return contract.validUntil.toDateString();
    },
    size: 200,
  },
  {
    accessorKey: 'createdAt',
    header: 'Erstellt am',
    size: 200,
    enableSorting: false,
    cell: (info) => {
      const value = new Date(info.getValue() as string);
      return value.toLocaleDateString();
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Geändert am',
    size: 200,
    enableSorting: false,
    cell: (info) => {
      const value = new Date(info.getValue() as string);
      return value.toLocaleDateString();
    },
  },
];

export const defaultColumns: ColumnDef<Data>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'numberOfLocations',
      header: 'Standorte',
      size: 100,
    },
    {
      accessorKey: 'numberOfEmployees',
      header: 'Mitarbeiter',
      size: 50,
    },
  ];


