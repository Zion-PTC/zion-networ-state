import styled from "styled-components";
import { AlbumProps } from "..";
import { Area, CardArea } from "../../../../style";
import { Head, Image, Infos } from "../../sections";
import { Social } from "../../sections/Social";

export function AlbumData(props: AlbumProps) {
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

export const Album_v2 = styled(AlbumData)``;
