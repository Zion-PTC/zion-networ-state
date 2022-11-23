import React from "react";
import { Icon } from "../../../../HTML/React/classes";

const IconMap = Icon.map(function(element){
  return `${element.firstName} ${element.lastName}`};

export default function index() {
  return <IconMap ></IconMap>;
}

