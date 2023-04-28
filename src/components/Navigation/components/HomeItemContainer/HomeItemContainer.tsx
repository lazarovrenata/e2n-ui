import { css, cx } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/pro-duotone-svg-icons';
import { spacingMap, theme, colorPalette, typography } from '../../../../theme';

type HomeItemContainerProps = {
  /** The URL to link to. */
  href: string;
  /** The name of the location. */
  title?: string;
};

const styles = css({
  display: 'flex',
  gap: spacingMap.xs,
  padding: spacingMap.xs,
  alignItems: 'center',
  border: 0,
  borderRadius: theme.borderRadius.xs,
  cursor: 'pointer',
  textDecoration: 'none',
  color: colorPalette.commonBlack,
  transition: '0.3s',
  ...typography.navItem,
  ':hover': {
    backgroundColor: colorPalette.primaryTransparent8,
    color: colorPalette.primaryMain,
  },
});

export function HomeItemContainer({ href, title }: HomeItemContainerProps) {
  return (
    <a
      data-testid="navigation-home-container"
      className={cx(styles, 'navigation-home-container')}
      href={href}>
      <FontAwesomeIcon icon={faLocationDot} />
      {title}
    </a>
  );
}
