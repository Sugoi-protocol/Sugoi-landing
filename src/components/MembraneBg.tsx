import { Box } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
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
  bgMembrane: {
    height: 'auto',
    position: 'absolute',
    opacity: 1,
    '& img': {
      width: '0%',
    }
  },
  blurredPoly: {
    position: "relative",
    opacity: "0.25",
    mixBlendMode: "hard-light",
  },
  blurredPoly1: {
    filter: "blur(45px)",
    transform: "scale(1.01) translate(-2%, 55%) rotate(0deg)",
    opacity: "0.80",
  },
  blurredPoly2: {
    filter: "blur(35px)",
    transform: "scale(1) translate(-15%, 0%) rotate(280deg)",
    opacity: "0.8",
    [theme.breakpoints.between('xs','md')]: {
      left: "44%",
      top: "7%",
      transform: "scale(0.25) rotate(125deg)",
    },
    [theme.breakpoints.down('xs')]: {
      left: "9%",
      top: "5%",
      transform: "scale(0.1) rotate(125deg)",
    }
  },
  blurredPoly3: {
    filter: "blur(50px)",
    transform: "scale(0.25) translate(650%, 300%) rotate(65deg)",
    opacity: "0.75",
  },
}))

const parallaxStyles = {
  width: '100vw',
  height: '100vh',
  'top': 0,
  left: 0,
  position: 'absolute',
};

export const MembraneBg = () => {
  ReactGA.pageview('home');

  const classes = useStyles();
  const membranes = [
    { top: '-144vh', width: '120%'},
    { top: '104vh', width: '100%'},
    { top: '-72vh', width: '120%'},
    { top: '-128vh', width: '140%'},
    { top: '64vh', width: '120%'},
    { top: '144vh', width: '100%'},
    { top: '230vh', width: '140%'},
  ]

  return (
    <Box position="absolute" width="100vw" height="100%" left="0" zIndex="0" className={classes.root}>
      {membranes.map((membrane, i) => {
        return (
          <div key={`membrane-${i}`}>
            {i === 4 && (
              <Box display="flex">
                <img className={`${classes.blurredPoly} ${classes.blurredPoly1}`} src={`${process.env.PUBLIC_URL}/imgs/gradients/01.png`} alt="Bg" />
                <Parallax y={[0, -50]} styleOuter={parallaxStyles} styleInner={{"mixBlendMode": "hard-light"}}>
                  <img className={`${classes.blurredPoly} ${classes.blurredPoly2}`} src={`${process.env.PUBLIC_URL}/imgs/gradients/01.png`} alt="Bg" />
                </Parallax>
                <Parallax y={[-25, 25]} styleOuter={parallaxStyles}>
                  <img className={`${classes.blurredPoly} ${classes.blurredPoly3}`} src={`${process.env.PUBLIC_URL}/imgs/gradients/01.png`} alt="Bg" />
                </Parallax>
              </Box>
            )}
            <Box top={membrane.top} width={membrane.width} className={classes.bgMembrane}>
              <img src={`${process.env.PUBLIC_URL}/imgs/assets/bg/bg-membrane-${i % 2 === 0 ? 1 : 2}.svg`} alt="" />
            </Box>
          </div>
        )
      })}
    </Box>
  );
};