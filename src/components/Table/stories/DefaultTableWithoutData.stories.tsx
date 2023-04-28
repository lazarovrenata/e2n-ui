import { Table } from '../Table';
import { defaultColumns } from './columns';
import { Data } from './data';
import mdx from './Table.mdx';

export default {
  title: 'Components/Table',
  parameters: {
    docs: { page: mdx },
  },
};

export const DefaultWithoutData = {
  render: () => (
    <Table<Data> columns={defaultColumns} data={[]} totalEntries={5} />
  ),
};
