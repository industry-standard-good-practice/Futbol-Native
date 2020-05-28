import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, { Path, PathProps } from 'react-native-svg';

const AnimatedPath = (Animated.createAnimatedComponent(
  Path
) as any) as React.ComponentClass<
  Animated.AnimateProps<{}, PathProps & { style?: any }>
>;

Animated.addWhitelistedNativeProps({
  stroke: true,
});

const CalendarSVG = ({ color, size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 20">
      <AnimatedPath
        d="M13.6667 0V2H5.66669V0H3.66669V2H2.66669C1.55669 2 0.676687 2.9 0.676687 4L0.666687 18C0.666687 19.1 1.55669 20 2.66669 20H16.6667C17.7667 20 18.6667 19.1 18.6667 18V4C18.6667 2.9 17.7667 2 16.6667 2H15.6667V0H13.6667ZM14.6667 11H9.66669V16H14.6667V11ZM2.66669 18H16.6667V7H2.66669V18Z" 
        stroke={color}
        strokeWidth={0}
        fill={color}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CalendarSVG;