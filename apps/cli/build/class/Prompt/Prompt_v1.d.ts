export declare type Prompt_v1Data = "Prompt_v1Data";
export declare type Prompt_v1Booleans = "Prompt_v1Booleans";
export declare type Prompt_v1Props = "Prompt_v1Props";
export declare type Prompt_v1ClassProps = "Prompt_v1ClassProps";
export declare type Prompt_v1AsChild = "Prompt_v1AsChild";
import React from "react";
export declare type PromptTypes_v1 = "simple" | "usrInput";
export declare const Prompt_v1: (question: string, type?: PromptTypes_v1) => {
    new (props: {
        input: string | string[];
    }): {
        type: PromptTypes_v1;
        PromptWithUsrInput: (props: {
            input: string | string[];
        }) => JSX.Element;
        PromptSimple: (props?: {
            input: string | string[];
        }) => JSX.Element;
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
