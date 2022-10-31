import styled from "styled-components";
import { Head } from "../sections/Head";
import { Image } from "../../GlobalSections/Image";
import { Infos } from "../sections/Infos";
import { Social } from "../sections/Social";
import { Portrait } from "../Shapes/Portrait";
import { MouseEventHandler } from "react";

export type AlbumProps = {
  likeIcon: JSX.IntrinsicElements["svg"];
  menuIcon: JSX.IntrinsicElements["svg"];
  id?: number;
  name?: string;
  slug?: string;
  small?: boolean;
  mid?: boolean;
  big?: boolean;
  src?: string;
  backgroundColor?: string;
  clickHandler?: MouseEventHandler<HTMLElement>;
};

const Area = styled(Portrait)`
  height: 100%;
  display: grid;
`;

const CardArea = styled.div`
  background-color: #eeeeee;
  height: 90%;
  width: 90%;
  display: grid;
  place-self: center;
  grid-template-rows: 1.4fr 6fr 1fr 1.8fr;
`;
export function Album(props: AlbumProps) {
  let { backgroundColor } = props;
  return (
    <Area backgroundColor={backgroundColor}>
      <CardArea>
        <Head menuIcon={props.menuIcon} />
        <Image
          src={props.src ? props.src : ""}
          width="auto"
          height="auto"
        />
        <Infos
          likeIcon={props.likeIcon}
          collection="CBBBB"
          id="#10"
          creator="THE RIPPER"
        />
        <Social />
      </CardArea>
    </Area>
  );
}
