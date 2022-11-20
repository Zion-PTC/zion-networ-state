export declare type Step2_v1Data = "Step2_v1Data";
export declare type Step2_v1Booleans = "Step2_v1Booleans";
export declare type Step2_v1Props = "Step2_v1Props";
export declare type Step2_v1ClassProps = "Step2_v1ClassProps";
export declare type Step2_v1AsChild = "Step2_v1AsChild";
export declare const Step2_v1 = "Step2_v1";
import React from "react";
import { StepConfiguration, StepOption } from "../../../class/index";
export declare const question2Option1: StepOption;
export declare const question2: StepConfiguration;
export declare const Step2: {
    new (props: {
        input: string | string[];
        usrKey?: import("ink").Key | undefined;
    }): {
        selected: string;
        unselected: string;
        cursorSelect: string;
        validate: string;
        unvalidate: string;
        config: StepConfiguration;
        Question: {
            new (props: {
                input: string | string[];
            }): {
                type: import("../../../class/index").PromptTypes;
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
            active?: boolean | undefined;
            cursor?: boolean | undefined;
            children?: string | undefined;
        }) => JSX.Element;
        checker: (input: string) => () => JSX.Element;
        SelectedField: (props: {
            active?: boolean | undefined;
            cursor?: boolean | undefined;
            children?: string | undefined;
        }) => JSX.Element;
        UnselectedField: (props: {
            active?: boolean | undefined;
            cursor?: boolean | undefined;
            children?: string | undefined;
        }) => JSX.Element;
        ValidateField: (props: {
            active?: boolean | undefined;
            cursor?: boolean | undefined;
            children?: string | undefined;
        }) => JSX.Element;
        UnvalidateField: (props: {
            active?: boolean | undefined;
            cursor?: boolean | undefined;
            children?: string | undefined;
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
        }>, props: Readonly<{
            input: string | string[];
            usrKey?: import("ink").Key | undefined;
        }>) => {
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
        readonly props: Readonly<{
            input: string | string[];
            usrKey?: import("ink").Key | undefined;
        }>;
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
        shouldComponentUpdate?(nextProps: Readonly<{
            input: string | string[];
            usrKey?: import("ink").Key | undefined;
        }>, nextState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{
            input: string | string[];
            usrKey?: import("ink").Key | undefined;
        }>, prevState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<{
            input: string | string[];
            usrKey?: import("ink").Key | undefined;
        }>, prevState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{
            input: string | string[];
            usrKey?: import("ink").Key | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{
            input: string | string[];
            usrKey?: import("ink").Key | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{
            input: string | string[];
            usrKey?: import("ink").Key | undefined;
        }>, nextState: Readonly<{
            active: number;
            order: number[];
            selected?: number | undefined;
            completed?: boolean | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{
            input: string | string[];
            usrKey?: import("ink").Key | undefined;
        }>, nextState: Readonly<{
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
