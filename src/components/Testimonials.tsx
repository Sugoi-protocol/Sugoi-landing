import { Box, Container, Link, Typography, makeStyles } from '@material-ui/core';
import { TESTIMONIALS, TESTIMONIALS2, Testimonial, Testimonial2 } from '../constants/launch-partners';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { filters } from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    minHeight: '60vh',
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: 140,
    position: 'relative',
    padding: '0 20px',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
  title: {
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    }
  },
  testimonialText: {
    display: 'block',
    margin: 'auto',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    }
  },
  testimonial: {
    padding: theme.spacing(8),
    paddingBottom: theme.spacing(0),
    position: 'relative',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '& h6': {
        fontSize: 20,
      },
    },
  },
  testimonialQuote: {
    color: theme.palette.text.secondary,
    fontSize: 80,
    opacity: 0.2,
    transform: 'translate(-16px, 12px)',
  },
  logo: {
    filter: filters.textSecondary,
    height: 50,
    minWidth: 120,
    objectFit: 'contain',
    '&:hover': {
      filter: filters.secondary,
    }
  },
}));

export const Testimonials = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant='h3' align='center' color='textPrimary'>
        FAQs
      </Typography>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          marginLeft={-8}
          marginRight={-8}
          position="relative"
          zIndex={2}
        >
          {TESTIMONIALS.map(
            (testimonial: Testimonial, index: number) =>
              <Box className={classes.testimonial} key={`testimonial-${index}`}>
                <Box>
                  <Typography variant="subtitle1" style={{fontSize: 30}} color="textPrimary">
                    {testimonial.title}
                  </Typography>
                   
                  <Typography variant='body1' style={{ fontSize: 20}} color='textSecondary'>
                    {testimonial.description}
                  </Typography>
                </Box>
              </Box>
          )}
          {TESTIMONIALS2.map(
            (testimonial2: Testimonial2, index: number) =>
              <Box className={classes.testimonial} key={`testimonial2-${index}`}>
                <Box>
                  <Typography variant="subtitle1" style={{fontSize: 30}} color="textPrimary">
                    {testimonial2.title}
                  </Typography>
                   
                  <Typography variant='body1' style={{ fontSize: 20}} color='textSecondary'>
                    {testimonial2.description}
                  </Typography>
                  <Box marginTop={2}>
                    <Link href={testimonial2.url} target='_blank'>
                      <img src={testimonial2.logo} className={classes.logo} alt=""/>
                    </Link>
                  </Box>
                </Box>
              </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};
