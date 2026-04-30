import styled from "styled-components/native";
import Room1 from "./components/Room1";

const Wrapper = styled.View``;

export default function App() {
  return (
    <Wrapper>
      {/* TODO: 今後増やすときにルームい一覧画面を作る */}
      <Room1 />
    </Wrapper>
  );
}
