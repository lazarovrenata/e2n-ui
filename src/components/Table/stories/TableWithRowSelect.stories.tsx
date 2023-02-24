import { RowSelectionState } from '@tanstack/react-table';
import { useState } from 'react';
import { Button } from '../../Button';
import { Table } from '../Table';
import { columns } from './columns';
import { data, type Location } from './data';

export default {
  title: 'Components/Table',
};

const HeaderSlot = ({
  disabled,
  originalRow,
}: {
  disabled: boolean;
  originalRow: Location[] | undefined;
}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <Button
        size="small"
        disabled={disabled}
        onClick={() => alert(JSON.stringify(originalRow))}>
        Sperren
      </Button>
    </div>
  );
};

export const WithRowSelection = () => {
  const [originalRowSelection, setOriginalRowSelection] =
    useState<Location[] | undefined>();
  const [selectedRows, setSelectedRows] = useState<RowSelectionState>({});

  const selectedRowKeys = Object.keys(selectedRows);

  return (
    <Table<Location>
      columns={columns}
      onRowSelectionChange={setSelectedRows}
      state={{ rowSelection: selectedRows }}
      data={data}
      width={2000}
      ToolbarComponent={
        <HeaderSlot
          disabled={selectedRowKeys.length < 1}
          originalRow={originalRowSelection}
        />
      }
      setOriginalRowSelection={setOriginalRowSelection}
    />
  );
};
