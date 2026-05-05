import styled from "styled-components/native";
import Animated, { cubicBezier } from "react-native-reanimated";
import { useEffect } from "react";

const Wrapper = styled.View`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const generateBounce = (direction: 1 | -1) => ({
  // opacity
  from: {
    opacity: 0,
  },
  "20%": {
    opacity: 1,
  },
  to: {
    opacity: 1,
  },
  // transform
  "0%": {
    transform: [
      { translateY: "-300%" },
      { rotate: direction === 1 ? "30deg" : "-30deg" },
    ],
  },
  "60%": {
    transform: [
      { translateY: "0%" },
      { rotate: direction === 1 ? "-4deg" : "4deg" },
    ],
  },
  "70%": {
    transform: [
      { translateY: "-10%" },
      { rotate: direction === 1 ? "2deg" : "-2deg" },
    ],
  },
  "80%": {
    transform: [{ translateY: "0%" }, { rotate: "0deg" }],
  },
  "90%": {
    transform: [
      { translateY: "-5%" },
      { rotate: direction === 1 ? "-1deg" : "1deg" },
    ],
  },
  "100%": {
    transform: [{ translateY: "0%" }, { rotate: "0deg" }],
  },
});
const generateFall = (direction: 1 | -1) => ({
  // opacity
  from: {
    opacity: 1,
  },
  "80%": {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
  // transform
  "0%": {
    transform: [{ translateY: "0%" }, { rotate: "0deg" }],
  },
  "100%": {
    transform: [
      { translateY: "400%" },
      { rotate: direction === 1 ? "20deg" : "-20deg" },
    ],
  },
});
const generateBarAnimation = (delay: number, direction: 1 | -1) => ({
  animationName: [generateBounce(direction), generateFall(direction)],
  animationDuration: ["0.8s", "0.5s"],
  animationTimingFunction: ["ease-in-out", cubicBezier(0.74, 0.03, 1, 1)],
  animationDelay: [`${delay}s`, `${delay + 1.4}s`],
  animationFillMode: ["both", "forwards"],
});

const Bar = styled(Animated.View)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 20%;
  border-radius: 25px;
  opacity: 0;
`;
const Bar1 = styled(Bar)`
  top: 0;
  background-color: #ccc;
`;
const Bar2 = styled(Bar)`
  top: 20%;
  background-color: #bbb;
`;
const Bar3 = styled(Bar)`
  top: 40%;
  background-color: #aaa;
`;
const Bar4 = styled(Bar)`
  top: 60%;
  background-color: #999;
`;
const Bar5 = styled(Bar)`
  top: 80%;
  background-color: #888;
`;

export default function Tsumiki({ onCovered }: { onCovered?: () => void }) {
  useEffect(() => {
    if (onCovered) {
      setTimeout(() => {
        onCovered();
      }, 1400);
    }
  }, [onCovered]);

  return (
    <Wrapper>
      <Bar1 style={generateBarAnimation(0.6, 1)} />
      <Bar2 style={generateBarAnimation(0.45, -1)} />
      <Bar3 style={generateBarAnimation(0.3, 1)} />
      <Bar4 style={generateBarAnimation(0.15, -1)} />
      <Bar5 style={generateBarAnimation(0, 1)} />
    </Wrapper>
  );
}
