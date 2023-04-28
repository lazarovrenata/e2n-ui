import { colorPalette, spacingMap } from '../../../theme';
import { Avatar } from '../../Avatar';
import { Inline, InlineCluster } from '../Spacers';
import avatar from '../../../assets/images/defaultAvatar.png';
import logo from '../../../assets/images/logo-e2n.png';
import { NavigationMenuItem } from './MenuBar/NavigationMenutItem';
import { NavigationMenuList } from './MenuBar/NavigationMenuList';
import { H1 } from '../../Headings';

export function MenuBar() {
  return (
    <div style={{ backgroundColor: colorPalette.grey300 }}>
      <Inline stretch={1} align="center">
        <img src={logo} height={30} />
        <NavigationMenuList>
          <NavigationMenuItem
            title="Controlling"
            content={
              <ul>
                <li>Foo</li>
              </ul>
            }
          />
          <NavigationMenuItem title="Arbeitszeiten" content={<H1>Hallo</H1>} />
        </NavigationMenuList>
        <Avatar imgSrc={avatar} />
      </Inline>
    </div>
  );
}
