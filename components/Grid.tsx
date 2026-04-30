import { Children, isValidElement, type ReactNode } from "react";
import { useWindowDimensions } from "react-native";
import { CSSProperties } from "styled-components";
import styled from "styled-components/native";

const GAP = 16;
const COLUMNS = 2;
const PADDING = 16;

const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 80px ${PADDING}px;
  gap: ${GAP}px;
`;

type PanelProps = { size: number };

const Panel = styled.View<PanelProps>`
  width: ${({ size }: PanelProps) => size}px;
  aspect-ratio: ${284 / 240};
  background-color: #f1f1f1;
  border-radius: 24px;
  overflow: hidden;
  padding: 16px;
`;

const Title = styled.Text`
  position: absolute;
  left: 0;
  right: 0;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  text-align: center;
  letter-spacing: 1px;
`;

type GridItemProps = {
  title?: string;
  isTitlePositionTop?: boolean;
  children?: ReactNode;
};

export function GridItem(_props: GridItemProps): null {
  return null;
}

type GridProps = {
  children?: ReactNode;
};

export default function Grid({ children }: GridProps) {
  const { width } = useWindowDimensions();
  const panelWidth = (width - PADDING * 2 - GAP * (COLUMNS - 1)) / COLUMNS;

  return (
    <Wrapper>
      {Children.map(children, (child, index) => {
        if (!isValidElement<GridItemProps>(child)) return null;
        const {
          title,
          isTitlePositionTop = false,
          children: content,
        } = child.props;
        return (
          <Panel key={index} size={panelWidth}>
            {content}
            {title ? (
              <Title
                style={
                  isTitlePositionTop
                    ? { top: 15 }
                    : ({ bottom: 12 } as CSSProperties)
                }
              >
                {title}
              </Title>
            ) : null}
          </Panel>
        );
      })}
    </Wrapper>
  );
}
