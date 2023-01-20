import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode, useRef } from 'react';
import {
  useOverlay,
  AriaOverlayProps,
  usePreventScroll,
  useModal,
  useDialog,
  AriaDialogProps,
} from 'react-aria';
import { colorPalette, theme } from '../../theme/default';

type CustomProps = {
  title: string;
  children: string | ReactNode;
};

type ModalDialogProps = CustomProps &
  HTMLAttributes<HTMLDivElement> &
  AriaOverlayProps &
  AriaDialogProps;

function getStyles() {
  return {
    overlay: css({
      position: 'fixed',
      zIndex: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    modal: css({
      fontFamily: theme.fontFamily.sansSerif,
      fontSize: theme.size.base,
      background: colorPalette.white,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.lg,
      width: 500,
    }),
    titel: css({
      fontSize: theme.size.lg,
      fontWeight: theme.weight.bold,
      marginBottom: 32,
    }),
  };
}

export function ModalDialog(props: ModalDialogProps) {
  const styles = getStyles();
  const { title, children, ...otherProps } = props;
  const ref = useRef(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  usePreventScroll();
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div className={cx(styles.overlay)} {...underlayProps} {...otherProps}>
      <div
        className={cx(styles.modal)}
        {...overlayProps}
        {...dialogProps}
        {...modalProps}
        ref={ref}>
        <div className={cx(styles.titel)} {...titleProps}>
          {title}
        </div>
        {children}
      </div>
    </div>
  );
}
