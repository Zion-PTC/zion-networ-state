import styled from "styled-components";

function indexData(props: any) {
  return (
    <div className={props.className} css={props.css}>
      index
    </div>
  );
}

export default styled(indexData)`
  width: 100%;
  height: 100%;
  background-color: ${props => {
    console.log(props);

    return props.gen;
  }};
`;
