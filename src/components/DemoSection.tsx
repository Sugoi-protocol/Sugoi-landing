import { Box, Grid, Typography, makeStyles, useTheme } from '@material-ui/core';

import { Parallax } from 'react-scroll-parallax';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      marginTop: 150,
      minHeight: '60vh',
    },
  },
  grid: {
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      '& .MuiGrid-item': {
        padding: 20,
      },
    },
  },
  title: {
    fontWeight: 900,
    marginBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 28,
    },
  },
  description: {
    marginTop: 20,
  },
  polywrapIllustration: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxHeight: '60vh',
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '30vh',
    },
  },
}));

export const DemoSection = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box position='relative' className={classes.root}>
      <Parallax
        y={[20, -35]}
        disabled={window.innerWidth < theme.breakpoints.values.md}
      >
        <Grid
          container
          spacing={10}
          alignItems='flex-start'
          className={classes.grid}
        >
          <Grid item xs={12} md={6}>
            <img
              className={classes.polywrapIllustration}
              src={process.env.PUBLIC_URL + '/imgs/wrappers-white-wave.svg'}
              alt='Polywrap - wrapper white wave'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h3'
              color='textPrimary'
              className={classes.title}
            >
              What's the roadmap?
            </Typography>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.description}
            >
              We plan to launch the product by {' '}
               <b>
               January 2023.
              </b>{' '} You can join our {' '}
              <b>
              waitlist or telegram
              </b>{' '}
              to keep updated.
            </Typography>
          </Grid>
        </Grid>
      </Parallax>
    </Box>
  );
};
