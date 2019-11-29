import React, {FunctionComponent} from 'react';
import {UIRouter, UIView} from "@uirouter/react";
import {router} from "./router/Router";

const App: FunctionComponent = () => {

    return (
        <UIRouter router={router}>
            <UIView/>
        </UIRouter>
    );
};

export default App;
