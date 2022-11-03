import styled from "styled-components";
import { Head } from "../sections/Head";
import { Image } from "../../GlobalSections/Image";
import { Infos } from "../sections/Infos";
import { Social } from "../sections/Social";
import { MouseEventHandler } from "react";
import { CardArea } from "../../../style/Areas/CardArea";
import { Portrait } from "../../../style/Areas/Shape/";

export type AlbumProps = {
  likeIcon?: JSX.Element;
  menuIcon?: JSX.Element;
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

export function Album_v1(props: AlbumProps) {
  let { backgroundColor } = props;
  return (
    <Area portrait mid backgroundColor={backgroundColor}>
      <CardArea album>
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

export const Album = Album_v1;
