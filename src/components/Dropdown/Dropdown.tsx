import { css, cx } from '@emotion/css';
import { Placement } from '@popperjs/core';
import { cloneElement, ReactElement, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { colorPalette, theme } from '../../theme/default';

export type DropdownProps = {
  content: ReactElement;
  children: ReactElement;
  width?: number;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  placement?: Placement;
};

function getStyles(width?: number) {
  return {
    popover: css({
      backgroundColor: colorPalette.white,
      boxShadow: '0px 3px 16px #e0e1e7',
      width: width ? width : 'auto',
      borderRadius: theme.borderRadius.md,
    }),
  };
}

export function Dropdown({
  content,
  children,
  width,
  isOpen,
  setIsOpen,
  placement = 'bottom',
}: DropdownProps) {
  const styles = getStyles(width);
  const referenceRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const {
    attributes,
    styles: popperStyles,
    update,
  } = usePopper(referenceRef.current, popoverRef.current, {
    placement,
    modifiers: [{ name: 'offset', enabled: true, options: { offset: [0, 8] } }],
  });

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (
        (referenceRef.current &&
          referenceRef.current.contains(event.target as Node)) ||
        (popoverRef.current &&
          popoverRef.current.contains(event.target as Node))
      ) {
        return;
      }
      setIsOpen(false);
    }

    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [setIsOpen]);

  async function handleDropdownClick() {
    setIsOpen(!isOpen);
    if (update) {
      await update();
    }
  }

  return (
    <>
      {cloneElement(children, {
        ref: referenceRef,
        onClick: handleDropdownClick,
      })}
      <div
        ref={popoverRef}
        style={{
          ...popperStyles.popper,
          minWidth: referenceRef.current?.scrollWidth,
          zIndex: 1000,
        }}
        {...attributes.popper}>
        {isOpen && <div className={cx(styles.popover)}>{content}</div>}
      </div>
    </>
  );
}