import { css, cx, keyframes } from '@emotion/css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  calloutColor,
  calloutIcon,
  getCalloutStyles,
  Variant,
} from './Callout';

const animation = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const animatedContainerStyles = css({
  width: 400,
  animation,
  animationDuration: '300ms',
});

export function NotificationCallout({
  notification,
  setNotification,
}: {
  notification: { variant: Variant; message: string };
  setNotification: React.Dispatch<
    React.SetStateAction<Notification | undefined>
  >;
}) {
  const variant = notification?.variant ?? 'error';
  const styles = getCalloutStyles({
    variant,
    visible: true,
  });
  return (
    <div className={cx(animatedContainerStyles)}>
      <div className={cx('callout', styles.wrapper)}>
        <div className={cx('content', styles.content)}>
          <FontAwesomeIcon
            icon={calloutIcon[variant]}
            color={calloutColor[variant]}
          />
          {notification?.message}
        </div>
        <FontAwesomeIcon
          className={cx('close', styles.close)}
          icon={faTimes}
          onClick={() => setNotification(undefined)}
        />
      </div>
    </div>
  );
}
