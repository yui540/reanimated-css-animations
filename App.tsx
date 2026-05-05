import styled from "styled-components/native";
import Room1 from "./components/Room1";
import Room2 from "./components/Room2";

const Wrapper = styled.View`
  position: absolute;
  inset: 0;
`;

export default function App() {
  return (
    <Wrapper>
      {/* TODO: ルーム一覧画面を作る */}
      {/* <Room1 /> */}
      <Room2 />
    </Wrapper>
  );
}
