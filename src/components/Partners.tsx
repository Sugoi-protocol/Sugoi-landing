import { launchPartners } from '../constants/launch-partners';
import { Parallax } from 'react-scroll-parallax';
import { filters } from '../theme';
import {
  Box,
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 140,
    marginBottom: 50,
    justifyContent: 'center',
  },
  launchPartnersText: {
    display: 'block',
    margin: 'auto',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    }
  },
  logo: {
    height: 'auto',
    width: '100%',
    filter: filters.textSecondary,
    '&:hover': {
      filter: filters.secondary,
    }
  },
  logoContainer: {
    display: 'flex',
    padding: 30,
    maxHeight: 120,
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    }
  },
  innerLogoContainer: {
    maxWidth: 120,
    width: '12vw',
    height: '12vw',
    maxHeight: 120,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '18vw',
      maxHeight: 160,
      maxWidth: 160,
    }
  },
  launchPartnersContainer: {
    maxWidth: '1200px',
    margin: 'auto'
  },
  becomePartnerContainer: {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: '1200px',
    margin: '30px auto 0'
  },
  becomePartnerButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))

export const Partners = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });

  return (
    <section id='partners' className={classes.root}>
      <Parallax y={[-8,8]} disabled={isMobile}>
        <Box>
          <Typography className={classes.launchPartnersText} variant='h3' align='center' color='textPrimary'>
            Launch Partners
          </Typography>
          <Grid className={classes.launchPartnersContainer} container justify='center'>
            {
              launchPartners.map(({logo, url}) => {
                return (
                  <Grid  item key={url}>
                    <Link className={classes.logoContainer} href={url} target='_blank' onClick={() => {
                      ReactGA.event({
                        category: 'Launch Partners',
                        action: `goto ${url}`,
                        label: 'Early Access'
                      });
                    }}>
                      <Box className={classes.innerLogoContainer}>
                        <img className={classes.logo} src={logo} alt={url} />
                      </Box>
                    </Link>
                  </Grid>
                )
              })
            }
          </Grid>
          <Grid className={classes.becomePartnerContainer} container justify='center'>
            <Button className={classes.becomePartnerButton} color='secondary' variant='outlined' href='https://airtable.com/shra8gDgo8EgrRT6c'>
            Become a Partner
            </Button>
          </Grid>
        </Box>
      </Parallax>
    </section>
  );
};