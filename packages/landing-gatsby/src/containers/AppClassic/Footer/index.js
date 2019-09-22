import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Logo from 'reusecore/src/elements/UI/Logo';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import FooterArea, {
  WidgetArea,
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from './footer.style';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        footer {
          logo {
            publicURL
          }
          menu {
            id
            link
            text
          }
          widgets {
            id
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);
  const { logo, menu, widgets } = data.appClassicJson.footer;

  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        <WidgetArea>
          {widgets.map(item => (
            <Box className="col" key={`footer-widget--key${item.id}`}>
              <Image src={item.icon.publicURL} alt={item.title} />
              <Heading as="h3" content={item.title} />
              <Text content={item.description} />
            </Box>
          ))}
        </WidgetArea>
        {/* End of footer widgets area */}
        <MenuArea>
          <Logo
            className="logo"
            href="/appclassic"
            logoSrc={logo.publicURL}
            title="App Classic"
          />
          <Menu>
            {menu.map(item => (
              <MenuItem key={`footer-link${item.id}`}>
                <a href={item.link}>{item.text}</a>
              </MenuItem>
            ))}
          </Menu>
          <CopyrightText>Copyright {year} By RedQ Inc</CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
