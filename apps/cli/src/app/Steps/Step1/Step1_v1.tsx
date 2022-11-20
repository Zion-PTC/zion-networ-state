export type Step1_v1Data = "Step1_v1Data";
export type Step1_v1Booleans = "Step1_v1Booleans";
export type Step1_v1Props = "Step1_v1Props";
export type Step1_v1ClassProps = "Step1_v1ClassProps";
export type Step1_v1AsChild = "Step1_v1AsChild";

import { Text } from "ink";
import React from "react";
import {
  StepConfiguration,
  Step,
  StepOption,
} from "../../../class/index.js";

export const Folder = () => (
  <Text color={"green"}>Ooook</Text>
);

export const File = () => (
  <Text color={"red"}>Notter ok</Text>
);

const folder = new StepOption("folder", Folder);
const file = new StepOption("file", File);

const question = "What do you want to do?? =)";
export const question1 = new StepConfiguration(
  question,
  [folder, file],
  "radio"
);
export const Step1_v1 = Step(question1);
