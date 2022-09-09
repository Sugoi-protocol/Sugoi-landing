import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import { EmailForm } from './EmailForm';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import { Parallax } from 'react-scroll-parallax';
import { makeStyles } from '@material-ui/core/styles';
import { sugoiPalette } from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
      padding: '0',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
  },
  heroPolywrapper: {
    display: 'flex',
    marginLeft: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      aspectRatio: '2/2',
      maxWidth: '60vw',
      margin: '80px auto 20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      marginTop: 100,
    },
  },
  heroTitle: {
    textTransform: 'capitalize',
    fontWeight: 700,
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
  heroBody: {
    margin: 10,
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 16,
    },
  },
  heroSignUpFlex: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  heroTextField: {
    borderRadius: '99px 16px 16px 99px',
    maxWidth: 400,
    width: '100%',
    '& .MuiInput-input': {
      height: 38,
    },
  },
  heroButton: {
    borderRadius: 999,
    fontSize: 18,
    padding: '9px 28px',
    marginTop: 40,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: 12,
      fontSize: 14,
    },
  },
  heroSignupSuccess: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 8,
    boxShadow: `0 8px 16px ${sugoiPalette.secondary[900]}88`,
    fontWeight: 700,
    padding: 8,
    width: '100%',
  },
  technicalPreview: {
    color: sugoiPalette.secondary.end,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    paddingLeft: 2, // Optical alignment with 'A' below
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 12,
    },
  },
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(5%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
      transitionTimingFunction: 'ease-in',
    },
    '50%': {
      transform: 'translateY(-3%)',
      transitionTimingFunction: 'ease-out',
    },
  },
  heroContent: {
    animation: `$fadeInUp 1s 1s forwards ease-in`,
    opacity: 0,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  heroIllustration: {
    animation: `$float 2s infinite`,
    [theme.breakpoints.down('sm')]: {
      order: -1,
    },
  },
  errorText: {
    color: '#f44336',
  },
}));

export const Hero = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      className={classes.root}
      container
      justify='center'
      alignItems='center'
      spacing={6}
      direction={matches ? 'row-reverse' : 'row'}
    >
      <Grid item sm={12} md={6}>
        <Parallax
          y={[60, -60]}
          disabled={window.innerWidth < theme.breakpoints.values.md}
        >
          <Box className={classes.heroContent}>
            <Typography
              className={classes.heroTitle}
              color='textPrimary'
              variant='h2'
              
            >
             PARK
            </Typography>
            <Typography
              className={classes.heroTitle}
              color='textPrimary'
              variant='h2'
            >
             TO
            </Typography>
            <Typography
              className={classes.heroTitle}
              color='textPrimary'
              variant='h2'
            >
              IMPACT
            </Typography>
            <Box marginTop={3}>
            <Typography
              
              className={classes.heroBody}
              color='textSecondary'
              variant='body1'
            >
              Sugoi is Web3's first green savings protocol where you can earn
              Sustainable yield and make green impact both at the same time.
              
            </Typography>
            </Box>
            <Grid  item xs={12} md={10}>
            
            <Box >
              <EmailForm location='footer' />
            </Box>
          </Grid>
          </Box>
        </Parallax>
      </Grid>
      <Grid className={classes.heroIllustration} item sm={12} md={6}>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          width='100%0'
          height='100%'
        >
          <Parallax
            y={[80, -80]}
            disabled={window.innerWidth < theme.breakpoints.values.md}
          >
            <img
              className={classes.heroPolywrapper}
              src={process.env.PUBLIC_URL + '/imgs/polywrapper-hero.png'}
              alt='Sugoi Logo'
            />
          </Parallax>
        </Box>
      </Grid>
    </Grid>
  );
};
