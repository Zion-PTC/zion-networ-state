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

const TITLE = "CYBERDOG #010 - THE RIPPER";
const DESCRIPTION = `WARNING! This cyberdog is out of control! He is very dangerous, he
takes apart cyberdogs that enter his territory. He came here to find
a partner in the gang.`;
const HIGHESTBID = "highest bid";
const INFOSUB = "Collection";
const INFOSUBCREATORFIELD = "Creator";
const INFOSUBROYALTIES = "10% Royalties";

const propsObj = {
  title: TITLE,
  description: DESCRIPTION,
  highestBid: HIGHESTBID,
  infosub: {
    info: INFOSUB,
    creatorField: INFOSUBCREATORFIELD,
    royalties: INFOSUBROYALTIES,
  },
};

export type ItemStyle = {
  background: {
    image: {};
    bottomSpace: {
      social: {};
      itemInfos: {};
      infoSection: {
        infosubs: [
          {
            textArea: [{ p: {} }];
            infoSubDetails: { avatar: { circle: {} }; profileId: {} };
          }
        ];
      };
    };
  };
  contentArea: {
    area: {
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
};

export const ItemPage = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 0.5fr;
  height: 100%;
  position: relative;
  background-color: red;
`;

type ItemProps<T extends BasicCardProps = BasicCardProps> = ItemStyle & {
  contentArea: { data: T[] };
};

export function Item<T extends BasicCardProps>(props: ItemProps<T>) {
  const { description, highestBid, infosub, title } = propsObj;
  const { creatorField, info, royalties } = infosub;
  return (
    <ItemPage>
      <Background>
        <Image src="" width={"20rem"} height="100%"></Image>
        <BottomSpace>
          <Social>
            {/* TODO like and more svg icon */}
            <Like>like</Like>
            <More>more</More>
          </Social>
          <TextArea>
            <H1>{title}</H1>
            <P>{description}</P>
            <P>{highestBid}</P>
          </TextArea>
          <InfoSection>
            <InfoSub>
              <TextArea>
                <P bold>{creatorField}</P>
                <P dimmed>{royalties}</P>
              </TextArea>
              <InfoSubDetails>
                <Avatar>
                  <Circle />
                </Avatar>
                <ProfileId></ProfileId>
              </InfoSubDetails>
            </InfoSub>
            <InfoSub>
              <TextArea>
                <P bold>{info}</P>
              </TextArea>
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
      <ContentArea>
        {/* list this values in contentArea and stick Area directly in content Area. I think thas also the CARDS component shall be included inside the content area. */}
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
