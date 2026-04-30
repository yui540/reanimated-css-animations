import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import useLoopFlg from "../../lib/useLoopFlg";

const Wrapper = styled.View`
  position: absolute;
  inset: 0;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  transform: translateY(10px);
`;

const press = {
  from: {
    transform: [{ translateY: 0 }],
  },
  "50%": {
    transform: [{ translateY: 20 }],
  },
  "75%": {
    transform: [{ translateY: -5 }],
  },
  to: {
    transform: [{ translateY: 0 }],
  },
} as const;
const makeAnimation = (delay: string[]) =>
  ({
    animationName: [press, press, press],
    animationDuration: ["0.8s", "0.8s", "0.8s"],
    animationTimingFunction: ["ease-in-out", "ease-in-out", "ease-in-out"],
    animationDelay: delay,
    animationFillMode: ["both", "forwards", "forwards"],
  }) as const;

const Block = styled(Animated.View)`
  width: 40px;
  height: 100px;
  border-radius: 8px 8px 0 0;
`;

const Block1 = styled(Block)`
  background-color: #aaa;
`;
const Block2 = styled(Block)`
  background-color: #bbb;
`;
const Block3 = styled(Block)`
  background-color: #ccc;
`;
const Block4 = styled(Block)`
  background-color: #aaa;
`;

export default function Area5() {
  const flg = useLoopFlg(true, 4200);

  return (
    <Wrapper key={`${flg}`}>
      <Block1 style={makeAnimation(["0.2s", "1.7s", "3s"])} />
      <Block2 style={makeAnimation(["0.4s", "1.5s", "3.6s"])} />
      <Block3 style={makeAnimation(["0.6s", "1.9s", "3s"])} />
      <Block4 style={makeAnimation(["0.8s", "2.1s", "3.6s"])} />
    </Wrapper>
  );
}
