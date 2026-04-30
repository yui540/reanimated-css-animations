import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import useLoopFlg from "../../lib/useLoopFlg";

const Wrapper = styled.View`
  position: absolute;
  inset: 0;
  justify-content: center;
  align-items: center;
  transform: translateY(-8px);
`;

const scaleRight = {
  from: {
    transform: [{ scaleX: 1 }],
    transformOrigin: "left center",
  },
  "50%": {
    transform: [{ scaleX: 1.06 }],
    transformOrigin: "left center",
  },
  to: {
    transform: [{ scaleX: 1 }],
    transformOrigin: "left center",
  },
} as const;
const scaleLeft = {
  from: {
    transform: [{ scaleX: 1 }],
    transformOrigin: "right center",
  },
  "50%": {
    transform: [{ scaleX: 1.06 }],
    transformOrigin: "right center",
  },
  to: {
    transform: [{ scaleX: 1 }],
    transformOrigin: "right center",
  },
} as const;
const animationScale = {
  animationName: [scaleRight, scaleLeft],
  animationDuration: ["0.5s", "0.5s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["0.3s", "1.4s"],
  animationFillMode: ["both", "forwards"],
} as const;

const Box = styled(Animated.View)`
  position: relative;
  width: 120px;
  height: 50px;
  background-color: #fff;
  border-radius: 999px;
  shadow-color: #777;
  shadow-offset: 0 2px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
`;
const BoxInner = styled.View`
  position: absolute;
  inset: 8px;
`;

const right = {
  from: {
    transform: [{ translateX: 0 }],
  },
  "60%": {
    transform: [{ translateX: "105%" }],
  },
  to: {
    transform: [{ translateX: "100%" }],
  },
} as const;
const left = {
  from: {
    transform: [{ translateX: "100%" }],
  },
  "60%": {
    transform: [{ translateX: "-5%" }],
  },
  to: {
    transform: [{ translateX: 0 }],
  },
} as const;
const animationFill = {
  animationName: [right, left],
  animationDuration: ["0.5s", "0.5s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["0.2s", "1.3s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Fill = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #bbb;
  border-radius: 999px;
`;

export default function Area4() {
  const flg = useLoopFlg(true, 2300);

  return (
    <Wrapper key={`${flg}`}>
      <Box style={animationScale}>
        <BoxInner>
          <Fill style={animationFill} />
        </BoxInner>
      </Box>
    </Wrapper>
  );
}
