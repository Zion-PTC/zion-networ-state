import { HTML } from "@zionstate/ui";
import { Like, More_Normal } from "../Icons";

const React = HTML.React;
const { styled } = React;
const { ContentArea } = styled;
const components = React.components;
const { Items } = components;
const { styled: FluidStyled } = React;
const { areas } = FluidStyled;
const { Area } = areas;
const { Cards } = Items;

export function ProfileContent(props) {
  let data = props.data;
  return (
    <ContentArea
      id="content-area"
      css_={{
        gridArea: "content",
        placeContent: "center",
      }}
    >
      <Area
        id="area-area"
        width={props.profile.width}
        height={props.profile.height}
        blockSize={props.profile.blockSize}
        columns={props.profile.columns}
      >
        <Cards
          likeIcon={<Like />}
          menuIcon={<More_Normal />}
          type="nft-pfp"
        >
          {data}
        </Cards>
      </Area>
    </ContentArea>
  );
}
