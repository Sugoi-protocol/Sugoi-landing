import { Box, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import {SignUp} from '../pages/SignUp/'
import { makeStyles } from '@material-ui/core/styles';
import { sugoiPalette } from '../theme';

const useStyles = makeStyles((theme) => ({
  navLink: {
    fontSize: 14,
    fontWeight: 700,
    marginRight: theme.spacing(6),
    transition: 'color 0.25s ease-in-out',
    '&:hover': {
      color: sugoiPalette.primary.start,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      marginRight: theme.spacing(2),
    },
  },
  navButton: {
    backgroundColor: sugoiPalette.primary.mid,
    borderRadius: 999,
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

interface NavLinkProps {
  type?: 'footer';
  scrollPosition: number;
}

export const NavLinks = (props: NavLinkProps) => {
  const theme = useTheme(),
    scrollPosition = props.scrollPosition,
    isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
      defaultMatches: true,
    }),
    showButton = !isMobile || scrollPosition > 150,
    classes = useStyles();

  return (
    <Box display='flex' alignItems='center' flexWrap='nowrap'>
       <Link to="/SignUp"
       >
          <Button
              href='/SignUp'
              target="_blank"
              rel="noredirect"
              variant='contained'
             
              endIcon={<KeyboardArrowRightOutlined />}
              className={classes.navButton}
              style={{ display: `${showButton ? 'flex' : 'none'}` }}
          >
               Sign Up
               
          </Button>
          
      </Link>
    </Box>
  );
};
