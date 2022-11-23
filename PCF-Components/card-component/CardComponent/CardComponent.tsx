import * as React from 'react';
import CardLit = require("showcase-lit-vite-storybook/card");
import "./css/card.css";

type CustomEvents<K extends string> = { /* eslint-disable */[key/* eslint-enable */ in K]: (/* eslint-disable */event/* eslint-enable */: CustomEvent) => void };
type CustomElement<T, K extends string> = Partial<T & React.DOMAttributes<T> & { children: any } & CustomEvents<`on${K}`>>;

declare global {
    namespace /* eslint-disable */JSX/* eslint-enable */ {
        interface /* eslint-disable */IntrinsicElements/* eslint-enable */ {
            ['card-slot']: CustomElement<CardLit, 'closeChange' | 'openChange'>;
        }
    }
}

export interface ICardProps {
}

export class CardPCF extends React.Component<ICardProps> {
    public render(): /* eslint-disable */JSX.Element/* eslint-enable */ {
        return (
            <div>
                <card-slot class="rounded">
                    <div slot="title">Search for City</div>
                    <div slot="details">Search for City</div>
                    <div slot="button">Search for City</div>
                </card-slot>
            </div>
        )
    }
}