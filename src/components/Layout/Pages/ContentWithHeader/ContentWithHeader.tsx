import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode } from 'react';

type CustomProps = {
  /** The `Header` prop defines the header component to be rendered. */
  Header: ReactNode;
  /** The `Main` prop defines the main section to be rendered. */
  Main: ReactNode;
};

export type ContentWithHeaderProps = CustomProps &
  HTMLAttributes<HTMLDivElement>;

function getStyles() {
  return css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
    height: '100vh',
  });
}

/**
 * A React component that renders a content with a header and a main section.
 *
 * @typedef {Object} ContentWithHeaderProps
 * @property {ReactNode} Header - The header component to be rendered.
 * @property {ReactNode} Main - The main section component to be rendered.
 *
 * @param {ContentWithHeaderProps} props - The props for the component.
 * @returns {ReactNode} - A React element representing the content with header and main sections.
 */
export function ContentWithHeader({ Header, Main }: ContentWithHeaderProps) {
  const styles = getStyles();
  return (
    <div className={cx(styles)}>
      {Header}
      {Main}
    </div>
  );
}
