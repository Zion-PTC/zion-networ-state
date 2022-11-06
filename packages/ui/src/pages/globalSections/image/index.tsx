import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "../../../HTML/React/components/GlobalSections";

const Avatar = styled.div`
  z-index: 1;
  display: grid;
  overflow: hidden;
  place-self: center;
  background-color: red;
  border-radius: 100%;
  width: 15rem;
  height: 15rem;
  #profile-avatar-image {
    aspect-ratio: 1;
    width: 100%;
    height: 100%;
  }
`;

const src_ =
  "https://ipfs.io/ipfs/QmPGGowQG4oPoRf884Hz9WXivACoDni1GsdDYkRdXVLfJc?filename=QmPGGowQG4oPoRf884Hz9WXivACoDni1GsdDYkRdXVLfJc";

export default function index() {
  const [isLoading, setIsLoading] = useState(true);
  const [src, setSrc] = useState("");
  useEffect(() => {
    setTimeout(() => {
      console.log("about to set");

      setSrc(src_);
    }, 10000);
  }, []);
  useEffect(() => {}, [isLoading]);
  return (
    <Avatar>
      <Image
        src={src}
        handleisLoading={setIsLoading}
        imageLoaded={!isLoading}
      ></Image>
    </Avatar>
  );
}
