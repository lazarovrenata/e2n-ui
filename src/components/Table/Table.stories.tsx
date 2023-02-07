import { ColumnDef } from '@tanstack/react-table';
import { colorPalette, theme } from '../../theme/default';
import { Badge } from '../Badge';
import { Table } from './Table';

type Contract = {
  id: number;
  type: string;
  validUntil: Date;
};

type Location = {
  id: number;
  locationGroupId: number;
  name: string;
  key: string;
  numberOfEmployees: number;
  maxNumberOfEmployees: number;
  contract: Contract;
  createdAt: Date;
  updatedAt?: Date;
};

const defaultData: Location[] = [
  {
    id: 0,
    locationGroupId: 2342,
    name: 'FooBar',
    key: 'foobar100',
    numberOfEmployees: 25,
    maxNumberOfEmployees: 30,
    contract: {
      id: 0,
      type: 'Paket S',
      validUntil: new Date('2099-12-31'),
    },
    createdAt: new Date('2022-07-01'),
    updatedAt: new Date(),
  },
  {
    id: 1,
    locationGroupId: 4728234,
    name: 'Café Einzigartig',
    key: 'einzigartig',
    numberOfEmployees: 5,
    maxNumberOfEmployees: 10,
    contract: {
      id: 0,
      type: 'Stillgelegt',
      validUntil: new Date('2099-12-31'),
    },
    createdAt: new Date('2015-06-01'),
    updatedAt: new Date('2022-01-01'),
  },
  {
    id: 783,
    locationGroupId: 4728234,
    name: 'Café Einzigartig',
    key: 'einzigartig',
    numberOfEmployees: 5,
    maxNumberOfEmployees: 10,
    contract: {
      id: 0,
      type: 'Stillgelegt',
      validUntil: new Date('2099-12-31'),
    },
    createdAt: new Date('2015-06-01'),
    updatedAt: new Date('2022-01-01'),
  },
];

const columns: ColumnDef<Location>[] = [
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
      return (
        <pre
          style={{
            fontSize: 12,
            backgroundColor: colorPalette.grey200,
            color: colorPalette.grey500,
            padding: theme.spacing.xs,
            width: 'fit-content',
          }}>
          {info.getValue() as string}
        </pre>
      );
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

export default {
  title: 'Components/Table',
};

export const Default = () => {
  return <Table<Location> columns={columns} data={defaultData} />;
};
