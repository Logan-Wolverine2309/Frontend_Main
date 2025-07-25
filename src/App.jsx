import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './component/Theme/DarkTheme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findUserCart } from './component/State/Cart/Action';
import { getRestaurantById } from './component/State/Restaurant/Action';
import process from 'process';
import { Routers } from './component/Routers/Routers';
import { SnackbarProvider } from 'notistack'; 

window.process = process;

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const auth = useSelector((store) => store.auth);
  const token = auth?.jwt || jwt;

  useEffect(() => {
    if (token) {
      dispatch(getUser(token));
      dispatch(findUserCart(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (jwt) {
      dispatch(getRestaurantById(jwt));
    }
  }, [token, dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
      >
        <CssBaseline />
        <Routers />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
