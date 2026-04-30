import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import useLoopFlg from "../../lib/useLoopFlg";

const SIZE = 52;

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
`;

const zIndexUp = {
  "0%": { zIndex: 0 },
  "100%": { zIndex: 1 },
} as const;
const zIndexDown = {
  "0%": { zIndex: 1 },
  "100%": { zIndex: 0 },
} as const;
const animationZIndex = {
  animationName: [zIndexUp, zIndexDown],
  animationDuration: ["1s", "1s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["0.2s", "1.5s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Rect = styled(Animated.View)`
  position: absolute;
  inset: 0;
`;
const Rect1 = styled(Rect)`
  transform: translateX(-${SIZE * 0.2}px) translateY(-${SIZE * 0.2}px);
`;
const Rect2 = styled(Rect)`
  transform: rotate(180deg) translateX(${SIZE * 0.2}px)
    translateY(${SIZE * 0.2}px);
`;

const shift = {
  "0%": { transform: [{ translateX: 0 }, { translateY: 0 }] },
  "50%": {
    transform: [{ translateX: -SIZE * 0.25 }, { translateY: -SIZE * 0.25 }],
  },
  "75%": {
    transform: [{ translateX: SIZE * 0.05 }, { translateY: SIZE * 0.05 }],
  },
  "100%": { transform: [{ translateX: 0 }, { translateY: 0 }] },
} as const;
const animationShift = {
  animationName: [shift, shift],
  animationDuration: ["1s", "1s"],
  animationTimingFunction: ["ease-in-out"],
  animationDelay: ["0.2s", "1.5s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Block = styled(Animated.View)`
  position: absolute;
  inset: 0;
  border-radius: 10px;
`;
const Block1 = styled(Block)`
  background-color: #ccc;
`;
const Block2 = styled(Block)`
  background-color: #aaa;
`;

export default function Area2() {
  const flg = useLoopFlg(true, 2400);

  return (
    <Wrapper>
      <Box key={`${flg}`}>
        <Rect1 style={animationZIndex}>
          <Block1 style={animationShift} />
        </Rect1>
        <Rect2>
          <Block2 style={animationShift} />
        </Rect2>
      </Box>
    </Wrapper>
  );
}
