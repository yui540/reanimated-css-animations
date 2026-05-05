import { useEffect } from "react";
import Animated, { css } from "react-native-reanimated";
import styled from "styled-components/native";

const blockOut = css.keyframes({
  from: {
    width: 0,
  },
  to: {
    width: "33.33%",
  },
});
const blockIn = css.keyframes({
  from: {
    width: "33.33%",
  },
  to: {
    width: 0,
  },
});
const rotateIn = css.keyframes({
  "0%": {
    transform: [{ rotate: "8deg" }],
  },
  "100%": {
    transform: [{ rotate: "0deg" }],
  },
});
const rotateOut = css.keyframes({
  "0%": {
    transform: [{ rotate: "0deg" }],
  },
  "100%": {
    transform: [{ rotate: "8deg" }],
  },
});
const animated = css.create({
  curtain: {
    animationName: [rotateIn, rotateOut],
    animationDuration: ["0.8s", "0.8s"],
    animationTimingFunction: ["ease-in-out", "ease-in-out"],
    animationDelay: ["0s", "1.2s"],
    animationFillMode: ["both", "forwards"],
  },
  block1: {
    animationName: [blockOut, blockIn],
    animationDuration: ["0.7s", "0.7s"],
    animationTimingFunction: ["ease-in-out", "ease-in-out"],
    animationDelay: ["0.2s", "1.4s"],
    animationFillMode: ["both", "forwards"],
  },
  block2: {
    animationName: [blockOut, blockIn],
    animationDuration: ["0.7s", "0.7s"],
    animationTimingFunction: ["ease-in-out", "ease-in-out"],
    animationDelay: ["0.1s", "1.3s"],
    animationFillMode: ["both", "forwards"],
  },
  block3: {
    animationName: [blockOut, blockIn],
    animationDuration: ["0.7s", "0.7s"],
    animationTimingFunction: ["ease-in-out", "ease-in-out"],
    animationDelay: ["0s", "1.2s"],
    animationFillMode: ["both", "forwards"],
  },
});

const Wrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 130%;
  pointer-events: none;
`;

const Base = styled.View`
  position: absolute;
  width: 50%;
  height: 100%;
`;
const Left = styled(Base)`
  left: 0;
`;
const Right = styled(Base)`
  right: 0;
`;

const BlockWrapper = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top right;
`;
const Block = styled(Animated.View)`
  position: relative;
  width: 33.33%;
  height: 100%;
`;

export default function Curtain({ onCovered }: { onCovered?: () => void }) {
  useEffect(() => {
    if (onCovered) {
      setTimeout(() => {
        onCovered();
      }, 1200);
    }
  }, [onCovered]);

  return (
    <Wrapper>
      <Left>
        <BlockWrapper style={animated.curtain}>
          <Block
            style={[animated.block1, { backgroundColor: "#bbb", width: 0 }]}
          />
          <Block
            style={[animated.block2, { backgroundColor: "#aaa", width: 0 }]}
          />
          <Block
            style={[animated.block3, { backgroundColor: "#bbb", width: 0 }]}
          />
        </BlockWrapper>
      </Left>
      <Right style={{ transform: [{ scaleX: -1 }] }}>
        <BlockWrapper style={animated.curtain}>
          <Block
            style={[animated.block1, { backgroundColor: "#aaa", width: 0 }]}
          />
          <Block
            style={[animated.block2, { backgroundColor: "#bbb", width: 0 }]}
          />
          <Block
            style={[animated.block3, { backgroundColor: "#aaa", width: 0 }]}
          />
        </BlockWrapper>
      </Right>
    </Wrapper>
  );
}
