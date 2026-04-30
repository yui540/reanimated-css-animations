import Grid, { GridItem } from "../Grid";
import Area1 from "./Area1";
import Area2 from "./Area2";
import Area3 from "./Area3";
import Area4 from "./Area4";
import Area5 from "./Area5";
import Area6 from "./Area6";

export default function Room1() {
  return (
    <Grid>
      <GridItem title="垂れ幕">
        <Area1 />
      </GridItem>
      <GridItem title="入れ替え">
        <Area2 />
      </GridItem>
      <GridItem title="組み立て">
        <Area3 />
      </GridItem>
      <GridItem title="もっちり">
        <Area4 />
      </GridItem>
      <GridItem title="連鎖" isTitlePositionTop>
        <Area5 />
      </GridItem>
      <GridItem title="びよ〜ん">
        <Area6 />
      </GridItem>
    </Grid>
  );
}
