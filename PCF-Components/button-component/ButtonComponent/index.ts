import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { ButtonPCF, /* eslint-disable */IButtonProps/* eslint-enable */ } from "./ButtonComponent";
import * as React from "react";
import "showcase-lit-vite-storybook/button";
import * as ReactDOM from "react-dom";

export class ButtonComponent implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private theContainer: HTMLDivElement;

    constructor() { }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        /* eslint-disable */
        state: ComponentFramework.Dictionary,
        /* eslint-enable */
        container: HTMLDivElement
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        this.theContainer = container;
    }

    public updateView(/* eslint-disable */context/* eslint-enable */: ComponentFramework.Context<IInputs>): void {
        ReactDOM.render(
            React.createElement(
                ButtonPCF,
            ),
            this.theContainer
        );
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        ReactDOM.unmountComponentAtNode(this.theContainer);
    }
}