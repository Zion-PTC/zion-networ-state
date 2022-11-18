import { Account } from "../../../../HTML/React/components/Icons/Icone da modificare/Account";
import { ArrowBack } from "../../../../HTML/React/components/Icons/Icone da modificare/ArrowBack";

export default function index() {
  return (
    <div
      css={`
        display: grid;
        justify-items: center;
        width: 100%;
        height: 100%;
      `}
    >
      <ArrowBack></ArrowBack>
      <Account></Account>
      <ArrowBack></ArrowBack>
    </div>
  );
}
