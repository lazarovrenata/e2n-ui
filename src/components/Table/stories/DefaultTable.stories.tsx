import { Table } from '../Table';
import { defaultColumns } from './columns';
import { Data, defaultData } from './data';

export default {
  title: 'Components/Table',
};

export const Default = () => {
  return (
    <Table<Data> columns={defaultColumns} data={defaultData} totalEntries={5} />
  );
};
