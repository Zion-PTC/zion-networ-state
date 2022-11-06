import { LoadingWaves } from "../../../../HTML/React/components/Icons/LoadingTypes";

export default function index() {
  return (
    <>
      <div
        css={`
          position: fixed;
          width: 50%;
          height: 100%;
          background-color: red;
        `}
      ></div>
      <div
        css={`
          display: grid;
          position: relative;
          width: 100%;
          height: 100%;
        `}
      >
        <LoadingWaves display></LoadingWaves>
      </div>
    </>
  );
}
