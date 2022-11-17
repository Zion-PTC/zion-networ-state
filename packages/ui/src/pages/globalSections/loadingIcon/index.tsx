import { LoadingIcon } from "../../../HTML/React/components/GlobalSections/LoadingIcon";
import { LoadingIconType } from "../../../HTML/React/lib/types/styledComponents/LoadingIconType";
import {
  BarsWave,
  LdsHourglass,
} from "../../../HTML/React/style";

export default function index() {
  return (
    <>
      <LoadingIcon
        Icon={BarsWave as LoadingIconType}
        display={true}
      ></LoadingIcon>
      <LoadingIcon
        Icon={LdsHourglass as LoadingIconType}
        display={false}
      ></LoadingIcon>
    </>
  );
}
