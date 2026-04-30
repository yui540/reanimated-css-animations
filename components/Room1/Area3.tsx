import styled from "styled-components/native";
import useLoopFlg from "../../lib/useLoopFlg";
import Animated from "react-native-reanimated";

const SIZE = 52;
const SW = 14;
const OFFSET = -SW / 2;
const BAR_LENGTH = SIZE + SW;
const COLOR = "#aaa";

const open1 = {
  from: {
    transform: [{ rotate: "90deg" }],
  },
  "60%": {
    transform: [{ rotate: "-5deg" }],
  },
  to: {
    transform: [{ rotate: "0deg" }],
  },
} as const;
const close1 = {
  from: {
    transform: [{ rotate: "0deg" }],
  },
  to: {
    transform: [{ rotate: "90deg" }],
  },
} as const;
const open2 = {
  from: {
    transform: [{ rotate: "-90deg" }],
  },
  "60%": {
    transform: [{ rotate: "5deg" }],
  },
  to: {
    transform: [{ rotate: "0deg" }],
  },
} as const;
const close2 = {
  from: {
    transform: [{ rotate: "0deg" }],
  },
  to: {
    transform: [{ rotate: "-90deg" }],
  },
} as const;

const Wrapper = styled.View`
  position: absolute;
  inset: 0;
  justify-content: center;
  align-items: center;
  transform: translateY(-8px);
`;

const Box = styled.View`
  position: relative;
  width: ${SIZE}px;
  height: ${SIZE}px;
  transform-origin: left bottom;
`;

const BoxBottom = styled.View`
  position: absolute;
  bottom: ${OFFSET}px;
  left: ${OFFSET}px;
  width: ${BAR_LENGTH}px;
  height: ${SW}px;
  background-color: ${COLOR};
  border-radius: 999px;
`;

const LineWrapper = styled(Animated.View)`
  position: absolute;
  inset: 0;
`;

const animationLeftLine = {
  animationName: [open1, close1],
  animationDuration: ["0.6s", "0.4s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["0.2s", "2.8s"],
  animationFillMode: ["both", "forwards"],
} as const;
const LineLeftWrapper = styled(LineWrapper)`
  transform-origin: left bottom;
  transform: rotate(90deg);
`;
const LineLeftBar = styled.View`
  position: absolute;
  top: ${OFFSET}px;
  left: ${OFFSET}px;
  width: ${SW}px;
  height: ${BAR_LENGTH}px;
  background-color: ${COLOR};
  border-radius: 999px;
`;

const animationRightLine = {
  animationName: [open2, close2],
  animationDuration: ["0.6s", "0.4s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["0.6s", "2.4s"],
  animationFillMode: ["both", "forwards"],
} as const;
const LineRightWrapper = styled(LineWrapper)`
  transform-origin: right bottom;
  transform: rotate(-90deg);
`;
const LineRightBar = styled.View`
  position: absolute;
  top: ${OFFSET}px;
  right: ${OFFSET}px;
  width: ${SW}px;
  height: ${BAR_LENGTH}px;
  background-color: ${COLOR};
  border-radius: 999px;
`;

const animationTopLine = {
  animationName: [open2, close2],
  animationDuration: ["0.6s", "0.4s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["1s", "2s"],
  animationFillMode: ["both", "forwards"],
} as const;
const LineTopWrapper = styled(LineWrapper)`
  transform-origin: right top;
  transform: rotate(-90deg);
`;
const LineTopBar = styled.View`
  position: absolute;
  top: ${OFFSET}px;
  left: ${OFFSET}px;
  width: ${BAR_LENGTH}px;
  height: ${SW}px;
  background-color: ${COLOR};
  border-radius: 999px;
`;

export default function Area3() {
  const flg = useLoopFlg(true, 3400);

  return (
    <Wrapper key={`${flg}`}>
      <Box>
        <BoxBottom />
        <LineLeftWrapper style={animationLeftLine}>
          <LineLeftBar />
        </LineLeftWrapper>
        <LineRightWrapper style={animationRightLine}>
          <LineRightBar />
          <LineTopWrapper style={animationTopLine}>
            <LineTopBar />
          </LineTopWrapper>
        </LineRightWrapper>
      </Box>
    </Wrapper>
  );
}
