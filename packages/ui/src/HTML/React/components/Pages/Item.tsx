import styled from "styled-components";
import { H1 } from "../Elements/H1";
import { P } from "../Elements/P";
import { Image } from "../GlobalSections/Image";
import { Like } from "../Icons/Like";
import { More } from "../Icons/More";
import { Cards } from "../Items";
import { BasicCardProps } from "../Items/Types";
import { ContentArea } from "../Layout";
import { Area } from "../Layout/sections";
import { InfoSub, TextArea } from "./sections";
import { Avatar } from "./sections/Avatar";
import { Background } from "./sections/Background";
import { BottomSpace } from "./sections/BottomSpace";
import { Circle } from "./sections/Circle";
import { InfoSection } from "./sections/InfoSection";
import { InfoSubDetails } from "./sections/InfoSubDetails";
import { ProfileId } from "./sections/ProfileId";
import { Social } from "./sections/Social";

export type ItemStyle = {
  contentArea: {
    parentWidth: number;
    parentHeight: number;
    width: number;
    height: number;
    blockSize: number;
    columns: number;
  };
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  blockSize: number;
  columns: number;
};

export const ItemPage = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 0.5fr;
  height: 100%;
  position: relative;
  background-color: red;
`;

type ItemProps<T extends BasicCardProps> = ItemStyle & {
  contentArea: { data: T[] };
};

export function Item<T extends BasicCardProps>(props: ItemProps<T>) {
  return (
    <ItemPage>
      <Background>
        {/* TODO aggiungere props src */}
        <Image src=""></Image>
        <BottomSpace>
          <Social>
            <Like>like</Like> <More>more</More>
          </Social>
          <H1 id="title">CYBERDOG #010 - THE RIPPER</H1>
          <P id="description">
            {/* TODO lift static parts, make them variable in the file then create props so that this component can receive them from the client application */}
            WARNING! This cyberdog is out of control! He is very dangerous, he
            takes apart cyberdogs that enter his territory. He came here to find
            a partner in the gang.
          </P>
          <P id="bid">highest bid</P>
          <InfoSection>
            <InfoSub>
              <TextArea>
                <P bold>Creator</P>
                <P dimmed>10% Royalties</P>
              </TextArea>
              <InfoSubDetails id="link">
                <Avatar>
                  <Circle />
                </Avatar>
                <ProfileId></ProfileId>
              </InfoSubDetails>
            </InfoSub>
            <InfoSub>
              <P bold>Collection</P>
              <InfoSubDetails>
                <Avatar>
                  <Circle></Circle>
                </Avatar>
                <ProfileId></ProfileId>
              </InfoSubDetails>
            </InfoSub>
          </InfoSection>
        </BottomSpace>
      </Background>
      <ContentArea id="collection-area">
        <Area
          width={props.contentArea.width}
          height={props.contentArea.height}
          blockSize={props.contentArea.blockSize}
          columns={props.contentArea.columns}
        >
          <Cards type="nft-pfp">{props.contentArea.data}</Cards>
        </Area>
        {/*this here under is the infinte scroll loader, we need to create a pagination method and send it a paginated result of the nfts */}
        {/* <Loader
        isLoading={isLoading}
        isLastPage={isLastPage}
        loadMoreCallback={loadMoreCallback}
      /> */}
      </ContentArea>
    </ItemPage>
  );
}
