import { Label } from "../../../../HTML/React/components";
import { Factory } from "../../../../HTML/React/components/Factories/factorymaker";

// function highlight(
//   a: TemplateStringsArray,
//   b: string,
//   c: string
// ) {
//   // do something
//   return ;
// }
// const name = "Snickers";
// const age = "100";
// const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
// console.log(sentence);
type adiv = { title: string };
const Adiv = (props: adiv) => <div>{props.title}</div>;

const AdivFactory = Factory(Adiv);

export default function index() {
  const arr: adiv[] = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
  ];

  return (
    <>
      <AdivFactory datas={arr} />
      <Label
        input={{
          handleChange: e => console.log(e.target.value),
          placeholder: "holdme",
          preventDefault: true,
          type: "text",
          value: undefined,
        }}
        name="ciao"
      ></Label>
    </>
  );
}
