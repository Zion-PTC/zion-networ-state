import { HTML } from "@zionstate/ui";
import { ProfileProps } from "../../Profile";
import { More_Normal, Share } from "../../Icons";

const React = HTML.React;
const { styled: FluidStyled } = React;
const components = React.components;
const { Elements } = components;
const { areas } = FluidStyled;
const { InfoSection } = areas;
const { ButtonTypes, Button } = Elements;
const { SVGButton } = ButtonTypes;
const SocialInfosArea = InfoSection;

export function SocialInfos(props: ProfileProps) {
  return (
    <SocialInfosArea
      size="small"
      css={`
        grid-template-areas: "follow . .";
      `}
      css_={{ gridTemplateColumns: "1fr 1fr 1fr" }}
      id="social-infos"
    >
      <div
        css={`
          width: 100%;
          height: 100%;
        `}
      >
        <Button
          css={`
            grid-area: follow;
            width: 100%;
            height: 100%;
            place-self: center;
            background-color: #e5e5e5;
            color: ${props.layout.theme.palette.darkgrey};
            border-radius: 100px;
            border: 1px solid
              ${props.layout.theme.primary.borderColor};
          `}
        >
          <text>Follow</text>
        </Button>
      </div>
      <SVGButton>
        <Share />
      </SVGButton>
      <SVGButton>
        <More_Normal />
      </SVGButton>
    </SocialInfosArea>
  );
}
