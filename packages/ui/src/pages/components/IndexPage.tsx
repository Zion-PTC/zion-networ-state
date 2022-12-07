import React, { Component } from "react";
import { FS } from "@zionstate/database";
import { join } from "path";
import type { FS as fsT } from "@zionstate/database";
import styled from "styled-components";
import Link from "next/link";

const Dati = FS.Dati;
interface Dati extends fsT.Dati {}

const Div = styled.div`
  display: grid;
  ul {
    display: grid;
    #noiz-class {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
interface IndexPageProps {
  data: string;
  path?: string[];
}
export default class IndexPage extends Component<IndexPageProps> {
  static makeDati = (el: string) => {
    const dati = new Dati();
    dati.name = el;
    dati.status = "working ✅";
    return dati;
  };
  static filter = (file: string) => (dir: string) => {
    if (dir === file) return false;
    else return true;
  };

  static filterDs = IndexPage.filter(".DS_Store");
  static filterIndex = IndexPage.filter("index.tsx");

  constructor({ data, path }: IndexPageProps) {
    super({ data, path });
  }
  render() {
    const { data, path } = this.props;
    const parsed = JSON.parse(data);

    console.log(parsed);
    return (
      <Div>
        <ul>
          {parsed.map((el: Dati, idx: number) => {
            let jointpath;
            if (path)
              jointpath = "/" + join(...path, el.name);
            else jointpath = "/" + join(el.name);
            return (
              <div key={idx} id="noiz-class">
                <div>
                  <>Name: </>
                  <Link href={`${jointpath}`}>
                    {el.name}
                  </Link>
                </div>
                <div>
                  <>Status: </>
                  <>{el.status}</>
                </div>
              </div>
            );
          })}
        </ul>
      </Div>
    );
  }
}
