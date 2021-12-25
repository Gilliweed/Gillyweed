/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container,Link } from 'theme-ui';
// import Logo from 'components/logo';
// import { Link } from 'components/link';
import FooterWidget from './widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';
import svg from './footersvg.svg';
export default function Footer() {
  return (
    <footer  style={{backgroundImage: `url(${svg})`}} sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          {menuItems.map(({ id, title, items }) => (
            <FooterWidget key={id} title={title} items={items} />
          ))}
        </Box>
      </Container>
      <Container>
        <Box sx={styles.footerInner}>
          <Box sx={styles.copyright}>
            {/* <Logo image={logoLight} sx={styles.logo} /> */}
            <Text as="span">
              Copyright by {new Date().getFullYear()} RedQ, Inc
            </Text>
          </Box>

          <Box as="ul" sx={styles.footerNav}>
            {footerNav.map(({ path, label }, i) => (
              <li key={i}>
                <Link href={path} key={i} variant="footer">{label}</Link>
              </li>
            ))}
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#000000',
    pt: 5,
  },
  footerTopInner: {
    gap: [50, null, null, null, 0, 50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      null,
      'repeat(5, 1fr)',
      'repeat(5, 1fr)',
    ],
    // mb: [null, null, null, 7],
  },
  footerInner: {
    borderTop: [null, null, null, `1px solid #D9E0E7`],
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ['30px 0 20px', null, null, '30px 0 35px', '35px 0 40px'],
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: rgba('#FCF5E5', 0.6),
      mt: ['18px', '18px', '7px'],
    },
  },
  logo: {
    mr: 3,
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', null, '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      color: '#FCF5E5',
      fontSize: [1, null, null, 2],
      textDecoration: 'none',
    },
  },
};
