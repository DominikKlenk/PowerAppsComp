import * as React from 'react';
import ButtonLit = require("showcase-lit-vite-storybook/button");
import "./css/button.css";

type CustomEvents<K extends string> = { /* eslint-disable */[key/* eslint-enable */ in K]: (/* eslint-disable */event/* eslint-enable */: CustomEvent) => void };
type CustomElement<T, K extends string> = Partial<T & React.DOMAttributes<T> & { children: any } & CustomEvents<`on${K}`>>;

declare global {
    namespace /* eslint-disable */JSX/* eslint-enable */ {
        interface /* eslint-disable */IntrinsicElements/* eslint-enable */ {
            ['button-slot']: CustomElement<ButtonLit, 'closeChange' | 'openChange'>;
        }
    }
}

export interface IButtonProps {
}

export class ButtonPCF extends React.Component<IButtonProps> {
    public render(): /* eslint-disable */JSX.Element/* eslint-enable */ {
        return (
            <div>
                <button-slot class="rounded">
                    <div slot="title">Search for City</div>
                </button-slot>
            </div>
        )
    }
}