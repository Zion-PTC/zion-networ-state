import styled from "styled-components";
import { Head } from "../sections/Head";
import { Image } from "../../GlobalSections/Image";
import { Infos } from "../sections/Infos";
import { Social } from "../sections/Social";
import { Portrait } from "../Shapes/Portrait";
import { AlbumProps } from "./Types/Album";

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
        <Head />
        <Image src={props.src ? props.src : ""} />
        <Infos collection="CBBBB" id="#10" creator="THE RIPPER" />
        <Social />
      </CardArea>
    </Area>
  );
}
