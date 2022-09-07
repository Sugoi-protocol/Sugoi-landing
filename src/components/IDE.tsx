import { Box, makeStyles, styled } from '@material-ui/core';
import Highlight, { defaultProps } from "prism-react-renderer";
import { useEffect, useState } from "react";

import { sugoiPalette } from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0 24px 80px rgba(0,0,0,0.25)`,
    borderRadius: 8,
    position: 'relative',
    width: '100%',
  },
  tabs: {
    background: sugoiPalette.secondary[900],
    borderRadius: '8px 8px 0 0',
    overflowX: 'hidden',
  },
  tab: {
    borderRight: `1px solid rgba(255,255,255,0.05)`,
    color: 'rgba(255,255,255,0.5)',
    cursor: 'default',
    padding: `12px 16px`,
    transition: `background 0.25s ease-in-out`,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
      color: 'rgba(255,255,255,0.8)',
    },
    '&.is-active': {
      backgroundColor: 'rgba(255,255,255,0.05)',
      boxShadow: `inset 0 -2px 0 ${theme.palette.primary.main}`,
      color: 'rgba(255,255,255,0.8)',
    },
  },
  main: {
    background: sugoiPalette.secondary[800],
    borderRadius: '0 0 8px 8px',
    maxHeight: '400px',
    overflowY: 'scroll',
  },
  pre: {
    textAlign: 'left',
    margin: 0,
    padding: 24,
  },
  line: {
    color: 'white',
    display: 'table-row',
    fontFamily: `'Space Mono', 'PT Mono', mono`,
    fontSize: 18,
    fontWeight: 500,
  },
  lineNumber: {
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
    display: 'table-cell',
    paddingRight: 16,
    userSelect: 'none',
    opacity: '0.5',
  },
  lineContent: {
    display: 'table-cell',
  },
}));

const Line = styled('div')({
  display: 'table-row',
  fontFamily: `Space Mono, Ubuntu Mono, Courier New`,
});

const LineNo = styled('span')({
  display: 'table-cell',
  textAlign: 'right',
  paddingRight: '1em',
  userSelect: 'none',
  opacity: '0.5',
});

const LineContent = styled('span')({
  display: 'table-cell',
});

const queries = 
[
  `Web3Api.query({
    uri: ensUri,
    query: \`query {
      bestTradeExactIn(
        pairs: $pairs
        amountIn: $amountIn
        tokenOut: $tokenOut
        options: $options
        )
      }\`,
    })
  })`,
  `Web4Api.query({
    uri: ensUri,
    query: \`query {
      bestTradeExactIn(
        pairs: $pairs
        amountIn: $amountIn
        tokenOut: $tokenOut
        options: $options
        )
      }\`,
    })
  })`,
  `Web5Api.query({
    uri: ensUri,
    query: \`query {
      bestTradeExactIn(
        pairs: $pairs
        amountIn: $amountIn
        tokenOut: $tokenOut
        options: $options
        )
      }\`,
    })
  })`,
]

export const Tabs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.tabs} display='flex'>
      <Box data-id={0} className={`${classes.tab} is-active`}>simplestorage.ts</Box>
      {/* <Box data-id={1} className={classes.tab}>Tab.js</Box>
      <Box data-id={2} className={classes.tab}>Tab.py</Box> */}
    </Box>
  );
};

export const IDE = () => {
  const classes = useStyles();

  // const [activeQuery, setActiveQuery] = useState(queries[0]);
  // const handleClick = (e: Event) => {
  //     console.log(e.target);
  //     const query = e.target?.dataset?.id;
  //     setActiveQuery(query);
  // };
  
  // useEffect(() => {
  //   window.addEventListener('click', handleClick, { passive: true });
  
  //   return () => {
  //     window.removeEventListener('click', handleClick);
  //   };
  // }, []);

  return (
    <Box className={classes.root}>
      <Tabs />
      <Box className={classes.main}>
        <Highlight {...defaultProps} code={queries[0]} theme={undefined} language="javascript">
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre className={classes.pre}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo className={classes.lineNumber}>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </pre>
          )}
        </Highlight>
      </Box>
    </Box>
  );
};
