import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { CardPCF, /* eslint-disable */ICardProps/* eslint-enable */ } from "./CardComponent";
import * as React from "react";
import "showcase-lit-vite-storybook/card";
import * as ReactDOM from "react-dom";

export class CardComponent implements ComponentFramework.StandardControl<IInputs, IOutputs> {
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
                CardPCF,
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