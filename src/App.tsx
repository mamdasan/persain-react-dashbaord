import * as React from 'react';

export interface HelloWorldProps {
    userName: string;
    lang: string;
}

export const App = (props: HelloWorldProps) => {
    console.log('hi');
    return (
        <div>
            Hi {props.userName} from React! Welcome to {props.lang}!
        </div>
    );
}