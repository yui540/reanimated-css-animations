import { useEffect } from "react";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const PADDING = 24;
const PADDING_TOP = 80;
const PADDING_RIGHT = 60;
const PADDING_BOTTOM = 50;
const GAP = PADDING;

const close = {
  "0%": {
    transform: [{ perspective: 1500 }, { rotateY: "100deg" }],
  },
  "100%": {
    transform: [{ perspective: 1500 }, { rotateY: "0deg" }],
  },
} as const;
const open = {
  "0%": {
    transform: [{ perspective: 1500 }, { rotateY: "0deg" }],
  },
  "100%": {
    transform: [{ perspective: 1500 }, { rotateY: "100deg" }],
  },
} as const;
const animationDoor = {
  animationName: [close, open],
  animationDuration: ["0.6s", "0.6s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["0s", "1.1s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Wrapper = styled(Animated.View)`
  position: absolute;
  inset: 0;
  padding: ${PADDING_TOP}px ${PADDING}px ${PADDING_BOTTOM}px ${PADDING_RIGHT}px;
  gap: ${GAP}px;
  background-color: #888;
  transform-origin: right center;
  pointer-events: none;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  gap: ${GAP}px;
`;

const Cell = styled.View`
  flex: 1;
  /* background-color: #999; */
  box-sizing: border-box;
  border: 10px solid #666;
  border-radius: 20px;
`;

const HandleWrapper = styled.View`
  position: absolute;
  top: 45%;
  left: 10px;
  width: 40px;
  height: 150px;
  background-color: #aaa;
  border-radius: 6px;
`;
const Circle = styled.View`
  position: absolute;
  top: 8px;
  left: 50%;
  width: 30px;
  aspect-ratio: 1 / 1;
  transform: translateX(-15px);
  background-color: #888;
  border-radius: 999px;
`;
const Bar = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 20px;
  background-color: #666;
  border-radius: 999px;
  transform: translate(-3px, -10px);
`;

const handleUp = {
  "0%": {
    transform: [{ rotate: "40deg" }],
  },
  "60%": {
    transform: [{ rotate: "-5deg" }],
  },
  "100%": {
    transform: [{ rotate: "0deg" }],
  },
} as const;
const handleDown = {
  "0%": {
    transform: [{ rotate: "0deg" }],
  },
  "100%": {
    transform: [{ rotate: "40deg" }],
  },
} as const;
const animationHandleUp = {
  animationName: [handleUp, handleDown],
  animationDuration: ["0.5s", "0.2s"],
  animationTimingFunction: ["ease-in-out", "ease-in-out"],
  animationDelay: ["0.4s", "1s"],
  animationFillMode: ["both", "forwards"],
} as const;
const Handle = styled(Animated.View)`
  position: absolute;
  bottom: 16px;
  left: 8px;
  width: 120px;
  height: 30px;
  background-color: #ccc;
  border-radius: 6px;
  transform-origin: 16px center;
  transform: rotate(40deg);
`;

export default function Door({ onCovered }: { onCovered?: () => void }) {
  useEffect(() => {
    if (onCovered) {
      setTimeout(() => {
        onCovered();
      }, 1000);
    }
  }, [onCovered]);

  return (
    <Wrapper style={[animationDoor, { transform: [{ rotateY: "100deg" }] }]}>
      <Row>
        <Cell />
        <Cell />
      </Row>
      <Row>
        <Cell />
        <Cell />
      </Row>
      <HandleWrapper>
        <Circle>
          <Bar />
        </Circle>
        <Handle style={animationHandleUp} />
      </HandleWrapper>
    </Wrapper>
  );
}
