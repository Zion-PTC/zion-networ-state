import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <section>
      <ul>
        <Link href={"/classes/badge"}>badge</Link>
      </ul>
    </section>
  );
}
