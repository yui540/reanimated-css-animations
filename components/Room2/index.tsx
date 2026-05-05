import styled from "styled-components/native";
import Curtain from "./Curtain";
import Door from "./Door";
import Tsumiki from "./Tsumiki";
import Frames from "./Frames";
import { Pressable } from "react-native";
import { useState } from "react";

const Wrapper = styled.View`
  position: absolute;
  inset: 0;
  justify-content: center;
  align-items: center;
`;

const List = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 220px;
`;

type CurrentProps = { current?: boolean };
const Button = styled(Pressable)<CurrentProps>`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: ${({ current }: CurrentProps) =>
    current ? "#666" : "#f1f1f1"};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text<CurrentProps>`
  font-size: 40px;
  font-weight: bold;
  color: ${({ current }: CurrentProps) => (current ? "#f1f1f1" : "#666")};
`;

const CurrentRoom = styled.Text`
  width: 100%;
  font-size: 100px;
  font-weight: 900;
  text-align: center;
  color: #666;
  line-height: 140px;
  background-color: #f1f1f1;
  margin-bottom: 40px;
`;

type Room = "A" | "B" | "C" | "D" | null;

const isCurrentRoom = (room: Room, currentRoom: Room) => {
  return room === currentRoom;
};

export default function Room2() {
  const [currentRoom, setCurrentRoom] = useState<Room>(null);
  const [transition, setTransition] = useState<Room>(null);

  return (
    <Wrapper>
      {currentRoom && <CurrentRoom>{currentRoom}</CurrentRoom>}
      <List>
        {["A", "B", "C", "D"].map((room) => (
          <Button
            key={room}
            current={isCurrentRoom(room as Room, currentRoom)}
            onPress={() => {
              setTransition(room as Room);
            }}
          >
            <Text current={isCurrentRoom(room as Room, currentRoom)}>
              {room}
            </Text>
          </Button>
        ))}
      </List>
      {transition === "A" && <Door onCovered={() => setCurrentRoom("A")} />}
      {transition === "B" && <Curtain onCovered={() => setCurrentRoom("B")} />}
      {transition === "C" && <Frames onCovered={() => setCurrentRoom("C")} />}
      {transition === "D" && <Tsumiki onCovered={() => setCurrentRoom("D")} />}
    </Wrapper>
  );
}
