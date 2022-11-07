import React, { useState } from "react";
import styled, { css } from "styled-components";
import { red } from "../../../HTML/React/style/common/backgroundColor";

const backgroundRed = css`
  background-color: red;
`;

function InputData(props: StyledDefault) {
  const [value, setValue] = useState("");

  function handleSumbit(e: React.FormEvent<HTMLElement>) {
    console.log(e);
    e.preventDefault();
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <form
      className={props.className}
      onSubmit={handleSumbit}
    >
      <label>
        <p>prova</p>
        <input
          type="text"
          placeholder="mi curi"
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

const Input = styled(InputData)`
  width: fit-content;
  height: 2rem;
  place-self: center;
  * {
    border-radius: 10px;
  }
  label {
    display: inline;
    ${red}
    p {
      margin-right: 0.3rem;
      display: inline;
    }
    input {
      display: inline;
      padding-left: 0.5rem;
    }
  }
`;

export default function index() {
  return (
    <>
      <Input></Input>
    </>
  );
}
