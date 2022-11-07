import { LoadingIcon } from "../../../HTML/React/components/GlobalSections/LoadingIcon";
import { LoadingIconType } from "../../../HTML/React/lib/types/styledComponents/LoadingIconType";
import { LdsHourglass } from "../../../HTML/React/style";
import { BarWaves } from "../../../HTML/React/style/Loaders/BarsWave/BarsWave_v1";

export default function index() {
  return (
    <>
      <LoadingIcon
        Icon={BarWaves as LoadingIconType}
        display={true}
      ></LoadingIcon>
      <LoadingIcon
        Icon={LdsHourglass as LoadingIconType}
        display={false}
      ></LoadingIcon>
    </>
  );
}
