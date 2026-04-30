import type {
  CSSAnimationDelay,
  CSSAnimationDirection,
  CSSAnimationDuration,
  CSSAnimationFillMode,
  CSSAnimationIterationCount,
  CSSAnimationKeyframes,
  CSSAnimationPlayState,
  CSSAnimationTimingFunction,
  CSSAnimationProperties,
} from 'react-native-reanimated';

type AnimationOptions = {
  name: CSSAnimationKeyframes;
  duration?: CSSAnimationDuration;
  timingFunction?: CSSAnimationTimingFunction;
  delay?: CSSAnimationDelay;
  iterationCount?: CSSAnimationIterationCount;
  direction?: CSSAnimationDirection;
  fillMode?: CSSAnimationFillMode;
  playState?: CSSAnimationPlayState;
};

export function animation(opts: AnimationOptions): CSSAnimationProperties {
  return {
    animationName: opts.name,
    animationDuration: opts.duration,
    animationTimingFunction: opts.timingFunction,
    animationDelay: opts.delay,
    animationIterationCount: opts.iterationCount,
    animationDirection: opts.direction,
    animationFillMode: opts.fillMode,
    animationPlayState: opts.playState,
  };
}
