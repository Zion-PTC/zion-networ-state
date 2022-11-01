import { HTML } from "@zionstate/ui";

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
const ProfileDescriptionArea = TextArea;

export function ProfileDescription() {
  return (
    <ProfileDescriptionArea
      filled
      css_={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <p>38 years old up coming raver...</p>
    </ProfileDescriptionArea>
  );
}
