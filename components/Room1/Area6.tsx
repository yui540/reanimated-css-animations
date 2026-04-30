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

const stretch = {
  from: {
    width: 60,
    height: 40,
  },
  to: {
    width: 140,
    height: 35,
  },
} as const;
const shrink = {
  "0%": {
    width: 140,
    height: 35,
  },
  "50%": {
    width: 40,
    height: 44,
  },
  "75%": {
    width: 70,
    height: 38,
  },
  "100%": {
    width: 60,
    height: 40,
  },
} as const;
const animationBar = {
  animationName: [stretch, shrink],
  animationDuration: ["0.35s", "0.65s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["0.2s", "0.55s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Bar = styled(Animated.View)`
  width: 60px;
  height: 40px;
  background-color: #ccc;
  border-radius: 999px;
`;

export default function Area6() {
  const flg = useLoopFlg(true, 1400);

  return (
    <Wrapper key={`${flg}`}>
      <Bar style={animationBar} />
    </Wrapper>
  );
}
