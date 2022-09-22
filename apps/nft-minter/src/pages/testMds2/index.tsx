import React from "react";
import Layout from "../../components/layout";
import { useProcessor } from "../../lib/hooks/useProcessor";

// this file uses a method which creates a React hook with
// the necessary code to parse the html and transorm the
// nodes created by
// [unified]('https://www.npmjs.com/package/unified') into a
// React node. This shall enable a deeper intergation with
// tools like styled components.

// It is also possible to write React components directly
// inside the `.md` file, by using the `.mdx` extension.

const text = `<h2>Hello, world!</h2>
<p>Welcome to my page 👀</p>`;

export default function TestMds2(props) {
  const result = useProcessor(text);
  const MdELement = () => {
    return result;
  };
  console.log(result);

  return (
    <Layout {...props.layout}>
      <MdELement />
    </Layout>
  );
}
