import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { colorPalette, shadow, theme } from '../../theme';

type CustomProps = {
  ToolbarComponent?: ReactNode;
  TableComponent?: ReactNode;
  PaginatorComponent?: ReactNode;
  TabsBarComponent?: ReactNode;
  height?: number | string;
  isHeaderSticky?: boolean;
  isFooterSticky?: boolean;
};

type TableCardProps = CustomProps & HTMLAttributes<HTMLDivElement>;

function getCardStyles(
  hasToolbar: boolean,
  height?: number | string,
  isHeaderSticky?: boolean,
  isFooterSticky?: boolean,
  toolbarHeight?: number,
) {
  return {
    container: css({
      borderRadius: theme.borderRadius.md,
      backgroundColor: colorPalette.white,
      fontFamily: theme.fontFamily.sansSerif,
      boxShadow: shadow.card,
      overflow: 'auto',
      height,
      table: {
        thead: {
          insetBlockStart: hasToolbar && toolbarHeight ? toolbarHeight - 1 : 0,
        },
      },
    }),
    toolBarContainer: css({
      position: isHeaderSticky ? 'sticky' : 'initial',
      insetBlockStart: isHeaderSticky ? 0 : undefined,
      backgroundColor: colorPalette.white,
      left: 0,
      right: 0,
      '& .toolBar': {
        padding: theme.spacing.md,
      },
    }),
    paginator: css({
      padding: theme.spacing.md,
      position: isFooterSticky ? 'sticky' : 'initial',
      insetBlockEnd: isFooterSticky ? 0 : undefined,
      backgroundColor: colorPalette.white,
      boxShadow: height ? shadow.tableFooter : undefined,
      left: 0,
      right: 0,
    }),
  };
}

export function TableCard({
  TableComponent,
  ToolbarComponent,
  PaginatorComponent,
  TabsBarComponent,
  height,
  isFooterSticky = true,
  isHeaderSticky = true,
}: TableCardProps) {
  const hasToolbar = ToolbarComponent ? true : false;
  const hasTabs = TabsBarComponent ? true : false;
  const [toolbarHeight, setToolbarHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setToolbarHeight(ref.current.clientHeight);
    }
  }, []);

  const styles = getCardStyles(
    hasToolbar,
    height,
    isHeaderSticky,
    isFooterSticky,
    toolbarHeight,
  );

  return (
    <div className={cx(styles.container)}>
      {(hasToolbar || hasTabs) && (
        <div className={cx(styles.toolBarContainer)} ref={ref}>
          <div className="tabsBar">{TabsBarComponent}</div>
          <div className="toolBar">{ToolbarComponent}</div>
        </div>
      )}
      {TableComponent}
      <div className={cx(styles.paginator)}>{PaginatorComponent}</div>
    </div>
  );
}
