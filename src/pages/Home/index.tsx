import { Box } from '@material-ui/core';
import { DemoSection } from '../../components/DemoSection';
import { Features } from '../../components/Features';
import { Hero } from '../../components/Hero';
import { HubCallout } from '../../components/HubCallout';
import {IDE} from '../../components/IDE'
import ReactGA from 'react-ga';
import { Testimonials } from '../../components/Testimonials';
import {WhatsSugoi} from '../../components/WhatsSugoi';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1400px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
    },
  },
}));

export const Home = () => {
  ReactGA.pageview('home');

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Hero />
      <WhatsSugoi/>
      <Features />
      <Testimonials />
      <DemoSection />
    </Box>
  );
};
