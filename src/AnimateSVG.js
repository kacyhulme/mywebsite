import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { config } from 'react-spring';

function AnimateSVG() {
  const [flip, set] = useState(false)
  const { x } = useSpring({
    reset: true,
    reverse: flip,
    from: { x: 0 },
    x: 1,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })
  const POINTS = 5;

  return (
    <animated.svg
      style={{ margin: 20, width: 80, height: 80 }}
      viewBox="0 0 45 44"
      strokeWidth="2"
      fill="white"
      stroke="rgb(45, 55, 71)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={156}
      strokeDashoffset={x.to(x => (1 - x) * 156)}>
      <polygon points={POINTS} />
    </animated.svg>
  )
}

export default AnimateSVG;
