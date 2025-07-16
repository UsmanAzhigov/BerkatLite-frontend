import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import styles from './header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <AppBar position="sticky" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Stack direction="row" alignItems="center" gap={1} onClick={onBack}>
          <img src={logo} alt="logo" className={styles.logo} width={40} height={40} />
          <Typography className={styles.title}>BerkatLite</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
