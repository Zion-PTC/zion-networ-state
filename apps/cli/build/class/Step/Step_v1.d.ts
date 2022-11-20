import { Key } from "ink";
import React from "react";
import { PromptTypes } from "../index";
export declare type Step_v1Data = "Step_v1Data";
export declare type Step_v1Booleans = "Step_v1Booleans";
export declare type Step_v1Props = "Step_v1Props";
export declare type Step_v1ClassProps = "Step_v1ClassProps";
export declare type Step_v1AsChild = "Step_v1AsChild";
export declare type StepTypes_v1 = "open" | "radio" | "multiple";
export interface StepOption_v1 {
    value: [string, () => JSX.Element];
}
export declare class StepOption_v1 {
    constructor(option: string, component: () => JSX.Element);
}
export declare class StepConfiguration_v1 {
    type: StepTypes_v1;
    value: [string, StepOption_v1[]];
    get question(): string;
    get options(): [string, () => JSX.Element][];
    get promptType(): PromptTypes;
    constructor(question: string, options: StepOption_v1[], type: StepTypes_v1);
}
declare type StepClassProps = {
    input: string | string[];
    usrKey?: Key;
};
export declare const Step_v1: (config: StepConfiguration_v1) => {
    new (props: StepClassProps): {
        selected: string;
        unselected: string;
        cursorSelect: string;
        validate: string;
        unvalidate: string;
        config: StepConfiguration_v1;
        Question: {
            new (props: {
                input: string | string[];
            }): {
                type: PromptTypes;
                PromptWithUsrInput: (props: {
                    input: string | string[];
                }) => JSX.Element;
                PromptSimple: (props?: {
                    input: string | string[];
                } | undefined) => JSX.Element;
                render(): React.ReactNode;
                context: unknown;
                setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{
                    input: string | string[];
                }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<{
                    input: string | string[];
                }>;
                state: Readonly<{}>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(nextProps: Readonly<{
                    input: string | string[];
                }>, nextState: Readonly<{}>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<{
                    input: string | string[];
                }>, prevState: Readonly<{}>): any;
                componentDidUpdate?(prevProps: Readonly<{
                    input: string | string[];
                }>, prevState: Readonly<{}>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<{
                    input: string | string[];
                }>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{
                    input: string | string[];
                }>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<{
                    input: string | string[];
                }>, nextState: Readonly<{}>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<{
                    input: string | string[];
                }>, nextState: Readonly<{}>, nextContext: any): void;
            };
            contextType?: React.Context<any> | undefined;
        };
        optionField: (icon: string) => (props: {
            active?: boolean;
            cursor?: boolean;
            children?: string;
        }) => JSX.Element;
        checker: (input: string) => () => JSX.Element;
        SelectedField: (props: {
            active?: boolean;
            cursor?: boolean;
            children?: string;
        }) => JSX.Element;
        UnselectedField: (props: {
            active?: boolean;
            cursor?: boolean;
            children?: string;
        }) => JSX.Element;
        ValidateField: (props: {
            active?: boolean;
            cursor?: boolean;
            children?: string;
        }) => JSX.Element;
        UnvalidateField: (props: {
            active?: boolean;
            cursor?: boolean;
            children?: string;
        }) => JSX.Element;
        Multiple: () => JSX.Element;
        render(): React.ReactNode;
        context: unknown;
        setState<K_1 extends "active" | "order" | "selected" | "completed">(state: {
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        } | ((prevState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>, props: Readonly<StepClassProps>) => {
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        } | Pick<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }, K_1> | null) | Pick<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<StepClassProps>;
        state: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<StepClassProps>, nextState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<StepClassProps>, prevState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<StepClassProps>, prevState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<StepClassProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<StepClassProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<StepClassProps>, nextState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<StepClassProps>, nextState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>, nextContext: any): void;
    };
    shiftFirst(array: number[]): number[];
    shiftLast(array: number[]): number[];
    contextType?: React.Context<any> | undefined;
};
export {};
