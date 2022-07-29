import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { config } from 'react-spring';
import styled from 'styled-components';

function AnimateText( {text }) {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 100,
    config: config.molasses,
    onRest: () => set(!flip),
  })
 
  return (
    <AnimatedHeader style={props}>{text}</AnimatedHeader>
  );
}

export default AnimateText;


const AnimatedHeader = styled(animated.div)`
  font-family: "Arial";
  display: flex;
  justify-content: flex-start;
`
