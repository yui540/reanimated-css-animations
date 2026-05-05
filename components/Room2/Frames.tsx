import { useEffect } from "react";
import Animated, { cubicBezier } from "react-native-reanimated";
import styled from "styled-components/native";

const Wrapper = styled.View`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const showFrame1 = {
  "0%": {
    transform: [{ rotate: "-90deg" }],
  },
  "100%": {
    transform: [{ rotate: "0deg" }],
  },
} as const;
const hiddenFrame1 = {
  "0%": {
    transform: [{ rotate: "0deg" }],
  },
  "100%": {
    transform: [{ rotate: "-90deg" }],
  },
} as const;
const animationFrame1 = {
  animationName: [showFrame1, hiddenFrame1],
  animationDuration: ["0.7s", "0.5s"],
  animationTimingFunction: [
    cubicBezier(0.85, 0, 0.15, 1),
    cubicBezier(0.85, 0, 0.15, 1),
  ],
  animationDelay: ["0s", "1.4s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Frame1 = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #666;
  transform-origin: left bottom;
  transform: rotate(-90deg);
`;

const showFrame2 = {
  "0%": {
    transform: [{ translateY: "100%" }],
  },
  "100%": {
    transform: [{ translateY: "0%" }],
  },
} as const;
const hiddenFrame2 = {
  "0%": {
    transform: [{ translateY: "0%" }],
  },
  "100%": {
    transform: [{ translateY: "100%" }],
  },
} as const;
const animationFrame2 = {
  animationName: [showFrame2, hiddenFrame2],
  animationDuration: ["0.7s", "0.5s"],
  animationTimingFunction: [
    cubicBezier(0.85, 0, 0.15, 1),
    cubicBezier(0.85, 0, 0.15, 1),
  ],
  animationDelay: ["0.1s", "1.3s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Frame2 = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background-color: #888;
`;

const showFrame3 = {
  "0%": {
    transform: [{ scaleX: 0 }],
  },
  "100%": {
    transform: [{ scaleX: 1 }],
  },
} as const;
const hiddenFrame3 = {
  "0%": {
    transform: [{ scaleX: 1 }],
  },
  "100%": {
    transform: [{ scaleX: 0 }],
  },
} as const;
const animationFrame3 = {
  animationName: [showFrame3, hiddenFrame3],
  animationDuration: ["0.7s", "0.5s"],
  animationTimingFunction: [
    cubicBezier(0.85, 0, 0.15, 1),
    cubicBezier(0.85, 0, 0.15, 1),
  ],
  animationDelay: ["0.2s", "1.2s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Frame3 = styled(Animated.View)`
  position: absolute;
  bottom: 25%;
  right: 0;
  width: 50%;
  height: 25%;
  background-color: #aaa;
`;

const showFrame4 = {
  "0%": {
    transform: [{ scaleY: 0 }],
  },
  "100%": {
    transform: [{ scaleY: 1 }],
  },
} as const;
const hiddenFrame4 = {
  "0%": {
    transform: [{ scaleY: 1 }],
  },
  "100%": {
    transform: [{ scaleY: 0 }],
  },
} as const;
const animationFrame4 = {
  animationName: [showFrame4, hiddenFrame4],
  animationDuration: ["0.7s", "0.5s"],
  animationTimingFunction: [
    cubicBezier(0.85, 0, 0.15, 1),
    cubicBezier(0.85, 0, 0.15, 1),
  ],
  animationDelay: ["0.3s", "1.1s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Frame4 = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 25%;
  background-color: #666;
`;

export default function Frames({ onCovered }: { onCovered?: () => void }) {
  useEffect(() => {
    if (onCovered) {
      setTimeout(() => {
        onCovered();
      }, 1100);
    }
  }, [onCovered]);

  return (
    <Wrapper>
      <Frame1 style={animationFrame1} />
      <Frame2
        style={[animationFrame2, { transform: [{ translateY: "100%" }] }]}
      />
      <Frame3 style={[animationFrame3, { transform: [{ scaleX: 0 }] }]} />
      <Frame4 style={[animationFrame4, { transform: [{ scaleY: 0 }] }]} />
    </Wrapper>
  );
}
