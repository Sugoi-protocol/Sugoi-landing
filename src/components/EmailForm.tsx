import { Box, Button, Link, TextField, Typography, } from '@material-ui/core'

import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { CTA } from '../constants/verbiage';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';
import { polywrapPalette } from '../theme';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  heroSignUpFlex: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    }
  },
  heroTextField: {
    borderRadius: '99px 16px 16px 99px',
    display: 'flex',
    flexGrow: 1,
    maxWidth: 400,
    '& .MuiInput-input': {
      height: 38,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  heroButton: {
    borderRadius: '16px 99px 99px 16px',
    fontSize: 18,
    padding: '9px 28px',
    marginLeft: 20,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 99,
      marginLeft: 0,
      marginTop: theme.spacing(2),
      width: '100%',
    }
  },
  heroSignupSuccess: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 8,
    boxShadow: `0 8px 16px ${polywrapPalette.secondary[900]}88`,
    fontWeight: 700,
    padding: 8,
    width: '100%',
  },
  backToSugoi: {
    color: theme.palette.primary.main,
    display: 'block',
    fontSize: 24,
    fontWeight: 700,
    marginTop: theme.spacing(3),
  },
  errorText: {
    color: '#f44336'
  },
}));

interface EmailFormProps {
  location?: "signup" | "footer";
}

export const EmailForm = ({location}: EmailFormProps) => {
  const classes = useStyles();
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    const re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      setEmailError('Invalid email address...');
      return;
    } else {
      setEmailError('');
    }

    try {
      const result = await fetch('https://us-central1-substackapi.cloudfunctions.net/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, domain:'sugoi.substack.com' }),
      });

      ReactGA.event({
        category: `Button-${location}`,
        action: 'Newsletter Sign Up',
        label: 'Origin Release'
      });
      
      const signupSuccess = result.status === 200;

      setSignupSuccess(signupSuccess);
    } catch (e) {
      setEmailError(`Sign-up failed... please let us know through Discord.`);
    }
    setIsLoading(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <Box className={classes.heroSignUpFlex} display='flex' alignItems='center'>
        {!signupSuccess ? (
          <>
            <TextField
              className={classes.heroTextField}
              placeholder={location === 'signup' ? 'Email Address' : 'email address'}
              inputProps={{ style: { textAlign: 'center' } }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className={classes.heroButton}
              color='primary'
              endIcon={<KeyboardArrowRightOutlined />}
              type='button'
              variant='contained'
              onClick={onSubmit}
              disabled={isLoading}
            >
              {location === 'signup' ? CTA : 'Join Waitlist'}
            </Button>
          </>
        ) : (
          <Box>
            <Typography className={classes.heroSignupSuccess} align='center' color='textPrimary'>
              One more step {email}! Check your email and confirm your subscription to Sugoi's Newsletter.
            </Typography>
            {location === 'signup' ? (
              <Link href="/" className={classes.backToSugoi}>
                <Box display="flex" alignItems="center" color="primary">
                  <Box marginRight={1} display="flex">
                    <ArrowBackOutlinedIcon />
                  </Box>
                  Go Back to Polywrap
                </Box>
              </Link>
            ) : null}
          </Box>
        )}
      </Box>
      {emailError && (
        <Typography className={classes.errorText}>
        {emailError}
        </Typography>
      )}
    </form>
  );
}