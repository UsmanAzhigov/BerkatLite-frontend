import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './index.module.scss';
export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          onClick={() => navigate('/')}
        >
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
            width={40}
            height={40}
          />
          <Typography className={styles.title}>BerkatLite</Typography>
        </Stack>
        <IconButton>
          <MenuIcon sx={{ color: '#000000' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
