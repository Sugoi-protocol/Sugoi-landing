import { Box, Container, Grid, Link, Typography } from '@material-ui/core';

import { EmailForm } from './EmailForm';
import { makeStyles } from '@material-ui/core/styles';
import { sugoiPalette } from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `${sugoiPalette.secondary[1000]}85`,
    padding: `${theme.spacing(8)}px ${theme.spacing(5)}px`,
    zIndex: 2,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginLeft: -theme.spacing(3),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      width: `calc(100% + ${theme.spacing(3) * 2}px)`,
    },
  },
  cell: {},
  sugoi: {
    width: 'auto',
    height: '68px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(4),
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
  logoTwitter: {
    width: 'auto',
    height: '30px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(4),
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
  logoBlog: {
    width: 'auto',
    height: '40px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(4),
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
  logoTelegram: {
    width: 'auto',
    height: '34px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(4),
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '500px',
    marginRight: 10,
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  social: {
    cursor: 'pointer',
    fontSize: 24,
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  navLink: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1,
    marginTop: theme.spacing(3),
    transition: 'color 0.25s ease-in-out',
    '&:hover': {
      color: sugoiPalette.primary.start,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  footerDivider: {
    backgroundColor: theme.palette.primary.main,
    height: 4,
    marginBottom: theme.spacing(4),
    width: theme.spacing(4),
  },
  footerLink: {
    display: 'blocks',
    
    
    margin: 10,
    fontSize: 14,
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <Box component='footer' className={classes.root}>
      <Container className={classes.cell}>
        <Grid container justify='space-between' spacing={6}>
          <Grid item xs={12} md={7}>
            <img
              
              src={process.env.PUBLIC_URL + '/logos/sugoi-horizontal.svg'}
              alt='Sugoi Logo'
              className={classes.sugoi}
            />
            <Box marginTop={3}>
              <Grid container spacing={4}>
                
                <Grid item xs={12} sm={6}>
                  <Typography variant='subtitle2'>Socials</Typography>
                  <Box marginTop={2}>
              
              
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href='https://twitter.com/SugoiProtocol'
                      target='_blank'
                      color='textPrimary'
                      variant='body1'
                    >
                       <img

                          src={process.env.PUBLIC_URL + '/logos/twitter.svg'}
                          alt='Twitter'
                          className={classes.logoTwitter}
                        />
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href='https://sugoi.substack.com'
                      target='_blank'
                      color='textPrimary'
                      variant='body1'
                    >
                      <img
                          src={process.env.PUBLIC_URL + '/logos/Blog.png'}
                          alt='Blog'
                          className={classes.logoBlog}
                        />
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href='https://t.me/+cPJt7wguLBYxOTYx'
                      target='_blank'
                      color='textPrimary'
                      variant='body1'
                    >
                      <img
                          src={process.env.PUBLIC_URL + '/logos/Telegram.png'}
                          alt='Blog'
                          className={classes.logoTelegram}
                        />
                    </Link>
                  </Box>
                </Grid>
               
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant='h4'>Make Impact</Typography>
            <Box marginTop={5}>
              <EmailForm location='footer' />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
