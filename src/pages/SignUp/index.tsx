import {
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import { EmailForm } from '../../components/EmailForm';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined'
import { makeStyles } from '@material-ui/core/styles';
import { sugoiPalette } from '../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: theme.spacing(3),
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
      padding: '0'
    }
  },
  technicalPreview: {
    color: sugoiPalette.secondary.end,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    paddingLeft: 2, // Optical alignment with 'A' below
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
  heroPolywrapper: {
    display: 'flex',
    marginLeft: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
    height: 'auto',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      aspectRatio: '3/2',
      maxWidth: '60vw',
      margin: '80px auto 20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      marginTop: 100,
    }
  },
  heroTitle: {
    fontWeight: 900,
    marginBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
    },
  },
  heroBody: {
    fontSize: 16,
    lineHeight: 1.75,
  },
  polywrapLink: {
    alignItems: 'center',
    color: theme.palette.primary.main,
    display: 'inline-flex',
    fontWeight: 700,
    marginLeft: 8,
    textDecoration: 'underline',
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
      transitionTimingFunction: 'ease-in',
    },
    '50%': {
      transform: 'translateY(-3%)',
      transitionTimingFunction: 'ease-out',
    }
  },
  heroIllustration: {
    animation: `$float 6s infinite`,
    [theme.breakpoints.down('sm')]: {
      order: -1
    }
  },
}))

export const SignUp = () => {
  const theme = useTheme()
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <>
      <Grid className={classes.root} container justify='center' alignItems='center' direction={matches? 'row-reverse': 'row'}>
        <Grid item sm={12} md={7}>
          <Typography variant='subtitle2' color='secondary' className={classes.technicalPreview}>
            Join Us
          </Typography>
          <Typography className={classes.heroTitle} color='textPrimary' variant='h2'>
            Bring Sugoi to Life
          </Typography>
          <Typography className={classes.heroBody} color='textSecondary' variant='body1'>
            Access will be limited to a small group of testers during the alpha release of Sugoi.
            <br/>
            Sign up today for your chance to try it out early and help us improve.
          </Typography>
          <Box marginTop={4}>
            <EmailForm location="signup"/>
          </Box>
          {/**
          <Box marginTop={4}>         
            <Typography component="div" variant="body2">
              Want to start building right away?
              <Box className={classes.polywrapLink}>
                <Link href="" target="_blank">
                  Get in touch!
                </Link>
                <KeyboardArrowRightOutlined />
              </Box>
 
            </Typography>
          </Box>
           */}
        </Grid>
        <Grid className={classes.heroIllustration} item sm={12} md={5}>
          <Box display='flex' flexDirection='column' justifyContent='center' width='100%' height='100%'>
            <img className={classes.heroPolywrapper} src={process.env.PUBLIC_URL + '/imgs/polywrapper-hero.svg'} alt='Polywrap Logo' />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
