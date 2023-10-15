import 'tailwindcss/tailwind.css'
import '../globals.css'
import React from 'react';
import reducer, {initialState} from "../states/reducer";
import {StateProvider} from "../states/StateProvider";

const App = ({Component, pageProps}) =>
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <Component {...pageProps} />
        </StateProvider>
    </React.StrictMode>

export default App
