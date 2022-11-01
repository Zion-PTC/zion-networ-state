import { HTML } from "@zionstate/ui";
import Badge from "../../Badge";
import { ProfileProps } from "../../Profile";
import { Twitter } from "../../Icons";

const React = HTML.React;
const components = React.components;
const { Elements, Items, Pages } = components;
const { styled: FluidStyled } = React;
const { areas, layout } = FluidStyled;
const {
  Circle: Avatar,
  TextArea,
  InfoSection,
  Social: S,
  Area,
} = areas;
const { ContentArea } = layout;
const { sections } = Pages;
const { Background } = sections;
const SocialLinksArea = InfoSection;
const { ButtonTypes, Button } = Elements;
const { Cards } = Items;

export function SocialLinks(props: ProfileProps) {
  return (
    <SocialLinksArea
      size="big"
      css={`
        grid-template-columns: 1fr 1fr;
        place-items: center;
      `}
    >
      <Badge
        theme={props.layout.theme}
        size="small"
      ></Badge>
      <div
        css={`
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 4fr;
          place-items: center;
        `}
      >
        <div
          css={`
            display: grid;
            width: 100%;
          `}
        >
          <Twitter
            css={`
              place-self: end;
            `}
          ></Twitter>
        </div>
        <TextArea
          filled
          css={`
            place-items: center;
          `}
        >
          <p>handle</p>
        </TextArea>
      </div>
    </SocialLinksArea>
  );
}
