import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import useLoopFlg from "../../lib/useLoopFlg";

const Wrapper = styled.View`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

const Content = styled.View`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Cloth = styled(Animated.View)`
  width: 100px;
  height: 10px;
  background-color: #ccc;
`;

const Bar = styled.View`
  width: 110px;
  height: 10px;
  background-color: #999;
  border-radius: 999px;
`;

const PinWrapper = styled.View`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-7.5px);
  width: 15px;
  aspect-ratio: 1;
`;
const Rope = styled.View`
  position: absolute;
  top: 5px;
  width: 60px;
  height: 5px;
  background-color: #ccc;
`;
const RopeLeft = styled(Rope)`
  right: 50%;
  transform-origin: right center;
  transform: rotate(-30deg);
`;
const RopeRight = styled(Rope)`
  left: 50%;
  transform-origin: left center;
  transform: rotate(30deg);
`;
const Pin = styled.View`
  position: absolute;
  inset: 0;
  background-color: #999;
  border-radius: 999px;
`;

const open = {
  "0%": { height: 10 },
  "60%": { height: 95 },
  "100%": { height: 90 },
} as const;
const close = {
  "0%": { height: 90 },
  "60%": { height: 7 },
  "100%": { height: 10 },
} as const;
const animationCloth = {
  animationName: [open, close],
  animationDuration: ["0.6s", "0.6s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["0.2s", "1.4s"],
  animationFillMode: ["both", "forwards"],
} as const;

export default function Area1() {
  const flg = useLoopFlg(true, 2200);

  return (
    <Wrapper>
      <Content>
        <PinWrapper>
          <RopeLeft />
          <RopeRight />
          <Pin />
        </PinWrapper>
        <Bar />
        <Cloth key={`${flg}`} style={animationCloth} />
        <Bar />
      </Content>
    </Wrapper>
  );
}
