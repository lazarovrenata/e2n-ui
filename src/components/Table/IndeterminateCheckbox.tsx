import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { flexRender, Header } from '@tanstack/react-table';
import { InputHTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { Button, IconButton } from '../Button';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

export function IndeterminateCheckbox({
  indeterminate,
  className,
  ...otherProps
}: {
  indeterminate?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof indeterminate === 'boolean' && ref.current) {
      ref.current.indeterminate = !otherProps.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return <input type="checkbox" ref={ref} {...otherProps} />;
}
