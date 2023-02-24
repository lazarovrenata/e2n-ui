import { useState } from 'react';
import { Tab, TabsBar } from '../..';
import { Badge } from '../../Badge';
import { TextField } from '../../TextField';
import { Table } from '../Table';
import { defaultColumns } from './columns';
import { Data, defaultData } from './data';

export default {
  title: 'Components/Table',
};

const tabs = [
  { label: 'Zahlungsdaten', key: 'first', active: true },
  { label: 'Vertragsdaten', key: 'second', active: false },
  { label: 'Terminal', key: 'third', active: false },
];

export const WithTabsAndSearch = () => {
  const [state, setState] = useState(tabs);
  return (
    <Table<Data>
      columns={defaultColumns}
      data={defaultData}
      totalEntries={5}
      height={600}
      TabsBarComponent={
        <TabsBar>
          {state.map((tab, index) => (
            <Tab
              key={index}
              active={tab.active}
              onChangeTab={() =>
                setState(
                  state.map((tab, idx) => ({
                    ...tab,
                    active: idx === index,
                  })),
                )
              }>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                {tab.label}
                <Badge variant="success" text="23" />
              </div>
            </Tab>
          ))}
        </TabsBar>
      }
      ToolbarComponent={
        <TextField width={400} placeholder="Suche nach einem Vertrag…" />
      }
    />
  );
};
