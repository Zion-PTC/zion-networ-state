import { Box, Key, Text } from "ink";
import React, { Component, useEffect } from "react";
import { checkOptions } from "../../hooks";
import { Prompt, PromptTypes } from "../index";

export type Step_v1Data = "Step_v1Data";
export type Step_v1Booleans = "Step_v1Booleans";
export type Step_v1Props = "Step_v1Props";
export type Step_v1ClassProps = "Step_v1ClassProps";
export type Step_v1AsChild = "Step_v1AsChild";

export type StepTypes_v1 = "open" | "radio" | "multiple";

export interface StepOption_v1 {
  value: [string, () => JSX.Element];
}

export class StepOption_v1 {
  constructor(
    option: string,
    component: () => JSX.Element
  ) {
    const arr: [string, () => JSX.Element] = [
      option,
      component,
    ];
    this.value = arr;
  }
}

export class StepConfiguration_v1 {
  value: [string, StepOption_v1[]];

  get question() {
    return this.value[0];
  }

  get options() {
    return this.value[1].map(el => el.value);
  }

  get promptType() {
    let promptType: PromptTypes;
    switch (this.type) {
      case "open":
        promptType = "usrInput";
        break;
      case "radio":
        promptType = "simple";
        break;
      case "multiple":
        promptType = "simple";
        break;

      default:
        promptType = "simple";
        break;
    }
    return promptType;
  }

  constructor(
    question: string,
    options: StepOption_v1[],
    public type: StepTypes_v1
  ) {
    const arr: [string, StepOption_v1[]] = [
      question,
      options,
    ];
    this.value = arr;
  }
}

type StepClassProps = {
  input: string | string[];
  usrKey?: Key;
};
export type StepClassState = {
  active: number;
  order: number[];
  selected?: number;
  completed?: boolean;
};
export const Step_v1 = (config: StepConfiguration_v1) =>
  class StepClass extends Component<
    StepClassProps,
    StepClassState
  > {
    selected = "● ";
    unselected = "○ ";
    cursorSelect = "▶︎ ";
    validate = "✔︎ ";
    unvalidate = "✖︎ ";
    config: StepConfiguration_v1 = config;
    static shiftFirst(array: number[]) {
      const first = array.shift();
      if (first !== undefined) array.push(first);
      return array;
    }
    static shiftLast(array: number[]) {
      array.reverse();
      const last = array.shift();
      if (last !== undefined) array.push(last);
      array.reverse();
      return array;
    }
    constructor(props: StepClassProps) {
      super(props);
      let counter = 0;
      let order: number[] = [];
      for (let options of config.options) {
        options;
        order.push(counter);
        counter++;
      }
      this.state = { active: 0, order, selected: 0 };
    }

    Question = Prompt(config.value[0], config.promptType);

    optionField =
      (icon: string) =>
      (props: {
        active?: boolean;
        cursor?: boolean;
        children?: string;
      }) => {
        const cursor = props.active
          ? this.cursorSelect
          : "  ";
        return (
          <Text>
            {cursor}
            {icon}
            {props.children}
          </Text>
        );
      };

    checker = checkOptions(config.options);

    SelectedField = this.optionField(this.selected);

    UnselectedField = this.optionField(this.unselected);

    ValidateField = this.optionField(this.validate);

    UnvalidateField = this.optionField(this.unvalidate);

    Multiple = () => {
      const options = this.config.options;

      useEffect(() => {
        if (this.props.usrKey?.downArrow) {
          let currentOrder = this.state.order;
          StepClass.shiftFirst(currentOrder);
          let currentActive = currentOrder[0];
          if (currentActive === undefined) return;
          this.setState({
            order: currentOrder,
            active: currentActive,
            selected: currentActive,
          });
        }
        if (this.props.usrKey?.upArrow) {
          let currentOrder = this.state.order;
          StepClass.shiftLast(currentOrder);
          let currentActive = currentOrder[0];
          if (currentActive === undefined) return;
          this.setState({
            order: currentOrder,
            active: currentActive,
            selected: currentActive,
          });
        }
        if (this.props.usrKey?.return)
          this.setState({ completed: true });
      }, [this.props.usrKey]);

      return (
        <>
          {options.map((option, id) => {
            let Element = this.UnselectedField;
            const optiontext = option[0];
            const isSelected = this.state.selected === id;
            const isActive = this.state.active === id;
            if (isSelected) Element = this.SelectedField;
            return (
              <Element key={id} active={isActive}>
                {optiontext}
              </Element>
            );
          })}
        </>
      );
    };

    override render(): React.ReactNode {
      return (
        <Box flexDirection="column">
          <this.Question
            input={this.props.input}
          ></this.Question>
          <this.Multiple></this.Multiple>
        </Box>
      );
    }
  };
