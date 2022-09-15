import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles,
  useTheme,
} from '@material-ui/core';

import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import { Parallax } from 'react-scroll-parallax';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '1px',
    marginBottom: '2px',
    maxWidth: theme.breakpoints.values.lg,
    minHeight: '80vh',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
      minHeight: 'unset',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
  },
  grid: {
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      '& .MuiGrid-item': {
        padding: 20,
        paddingTop: 5,
      },
    },
  },
  h3: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    },
  },
  description: {
    marginTop: 20,
  },
  uniswapDemo: {
    boxShadow: `0 24px 80px rgba(0,0,0,0.25)`,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
}));

export const WhatsSugoi = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box position='relative' alignItems='flex-start' className={classes.root}>
      <Parallax
        y={[20, -35]}
        disabled={window.innerWidth < theme.breakpoints.values.md}
      >
        <Grid
          container
          direction={'row-reverse'}
          spacing={10}
          alignItems='center'
          className={classes.grid}
        >
          <Grid item xs={12} md={7}>
            <img
              className={classes.uniswapDemo}
              width='100%'
              src={`${process.env.PUBLIC_URL}/imgs/assets/polywrap-uniswap-demo.png`}
              alt=''
            />
            <Box marginTop={2}>
              
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant='h3' color='textPrimary' className={classes.h3}>
            Do you have stable coins parked in your digital wallet?
            </Typography>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.description}
            >
              Using Sugoi, you can put your stable coins to good use.
            </Typography>
           
          </Grid>
        </Grid>
      </Parallax>
    </Box>
  );
};
