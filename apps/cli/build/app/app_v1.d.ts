import { Component, ReactNode } from "react";
export interface IApp_v1 {
    name: string;
}
export interface App_v1 extends Component {
    name: string;
}
export declare class App_v1 extends Component implements IApp_v1 {
    constructor(props: {}, name: string);
    render(): ReactNode;
}
export declare type app_v1Ctor = {
    new (props: {}, name: string): App_v1;
};
export declare const App_v1Ctor: app_v1Ctor;
