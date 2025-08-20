import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useSearch } from '../../shared/hooks/useSearch';
import { InputSearch } from '../../shared/ui';
import { SizeSearch, VarianSearch } from '../../shared/ui/inputSearch/inputSearch.type';
import styles from './header.module.scss';

/**
 * Компонент Header отображает шапку приложения с логотипом и названием
 * @returns {JSX.Element} Шапка приложения
 */
export const Header = () => {
  const { search, setSearch } = useSearch();
  const navigate = useNavigate();

  const onBack = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const onFilterPage = () => {
    navigate('/filters');
    window.scrollTo(0, 0);
  };

  const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <AppBar position="sticky" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Stack direction="row" alignItems="center" gap={1} onClick={onBack}>
          <img src={logo} alt="logo" className={styles.logo} width={40} height={40} />
          <Typography className={styles.title}>BerkatLite</Typography>
        </Stack>
        <InputSearch
          placeholder="Введите товар..."
          type="search"
          size={SizeSearch.SMALL}
          variant={VarianSearch.OUTLINED}
          value={search}
          onChange={handleInputSearchChange}
          onFilterPage={onFilterPage}
        />
      </Toolbar>
    </AppBar>
  );
};
