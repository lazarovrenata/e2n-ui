import { Table } from '../Table';
import { defaultColumns } from './columns';
import { Data, defaultData } from './data';
import mdx from './Table.mdx';

export default {
  title: 'Components/Table',
  parameters: {
    docs: { page: mdx },
  },
};

export const Default = {
  render: () => (
    <Table<Data> columns={defaultColumns} data={defaultData} totalEntries={5} />
  ),
};
