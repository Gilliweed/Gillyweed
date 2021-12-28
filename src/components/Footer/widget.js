import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { rgba } from 'polished';

const Widget = ({ title, items }) => {
  return (
    <Box className="pl-3">
      <h1 className=" text-2xl text-white">{title}</h1>
      <ul>
        {items.map(({ path, label, icon }, i) => (
          <li key={i} className="my-3">
            <Link href={path} className="text-white">{label}</Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
    h4: {
      color: '#FFFFFF',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px',
        },
      },
      a: {
        fontSize: '15px',
        color: rgba('#F9F6EE', 0.75),
        textDecoration: 'none',
        lineHeight: 2.5,
      },
    },
  },
};
