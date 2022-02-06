import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { config } from 'react-spring';
import styled from 'styled-components';

function AnimateText() {
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
    <AnimatedHeader style={props}>hello...</AnimatedHeader>
  );
}

export default AnimateText;


const AnimatedHeader = styled(animated.div)`
  margin-right: 2rem;
  margin-left: -17rem;
`
