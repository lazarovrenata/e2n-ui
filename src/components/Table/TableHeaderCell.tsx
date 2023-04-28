import { flexRender, Header } from '@tanstack/react-table';
import { TableColumnDef } from './types';
import { TableCell } from './TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/pro-duotone-svg-icons';
import { theme } from '../../theme';

export function TableHeaderCell<T>({ header }: { header: Header<T, unknown> }) {
  const isRightAligned =
    (header.column.columnDef as TableColumnDef<T>).type === 'rightAligned';

  return (
    <TableCell
      key={header.id}
      style={{
        width: header.getSize() !== 150 ? header.getSize() : undefined,
      }}
      variant="head"
      align={isRightAligned ? 'right' : 'left'}
      sortable={header.column.getCanSort()}>
      {header.isPlaceholder ? null : (
        <div
          style={{
            justifyContent: isRightAligned ? 'end' : 'start',
          }}
          onClick={header.column.getToggleSortingHandler()}>
          {isRightAligned ? (
            <>
              {{
                asc: (
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ marginLeft: theme.spacing.xs }}
                  />
                ),
                desc: (
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{ marginLeft: theme.spacing.xs }}
                  />
                ),
              }[header.column.getIsSorted() as string] ?? null}
              <div>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </div>
              {{
                asc: (
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ marginLeft: theme.spacing.xs }}
                  />
                ),
                desc: (
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{ marginLeft: theme.spacing.xs }}
                  />
                ),
              }[header.column.getIsSorted() as string] ?? null}
            </>
          )}
        </div>
      )}
    </TableCell>
  );
}
