import { Area, ContentArea } from "../../../../../style";
import { Like } from "../../../../Icons/Like";
import { More_Normal } from "../../../../Icons/More_Normal";
import { Cards } from "../../../../Items";

export function Content_v1(props: any) {
  let data = props.data;
  return (
    <ContentArea
      id="content-area"
      css_={{
        gridArea: "content",
        placeContent: "center",
      }}
    >
      // TODO integrare nuova Item Area
      {/* <Area
        id="area-area"
        width={props.profile.width}
        height={props.profile.height}
        blockSize={props.profile.blockSize}
        columns={props.profile.columns}
      >
        <Cards
          likeIcon={<Like {...props} />}
          menuIcon={<More_Normal {...props} />}
          type="nft-pfp"
          {...props}
        >
          {data}
        </Cards>
      </Area> */}
    </ContentArea>
  );
}
