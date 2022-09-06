import './App.css';

import { Box, Grid, ThemeProvider } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { MembraneBg } from './components/MembraneBg'
import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import { SignUp } from './pages/SignUp';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './theme';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParallaxProvider>
        <Box width='100%' minHeight='100vh' overflow="hidden">
          <HashRouter>
            <Grid container className={classes.wrapper}>
              <Box
                display='flex'
                flexDirection='column'
                flexGrow='1'
                position='relative'
                className={classes.main}
              >
                <MembraneBg />
                <Header />
                <Switch >
                  <Route path='/' exact>
                    <Home />
                  </Route>
                  <Route path="/signup">
                    <SignUp />
                  </Route>
                </Switch>
                <Footer />
              </Box>
            </Grid>
          </HashRouter>
        </Box>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;
