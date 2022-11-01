import { HTML } from "@zionstate/ui";
const React = HTML.React;
const { styled: FluidStyled } = React;
const { areas, TextArea } = FluidStyled;
const { InfoSection } = areas;
const ProfileDetailsArea = InfoSection;

export function ProfileDetails() {
  return (
    <ProfileDetailsArea
      css={`
        height: 100%;
      `}
      css_={{
        gridTemplateColumns: "1fr 1fr 1fr",
        placeContent: "center",
      }}
      size="mid"
      id="profile-details"
    >
      <TextArea
        filled
        css={`
          place-items: center;
        `}
      >
        <p>4</p>
        <p>Tracks</p>
      </TextArea>
      <TextArea
        filled
        css={`
          place-items: center;
        `}
      >
        <p>1,4k</p>
        <p>Followers</p>
      </TextArea>
      <TextArea
        filled
        css={`
          place-items: center;
        `}
      >
        <p>48</p>
        <p>Following</p>
      </TextArea>
    </ProfileDetailsArea>
  );
}
