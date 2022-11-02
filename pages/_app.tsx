import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FlagsmithProvider } from 'flagsmith/react';
import flagsmith from 'flagsmith/isomorphic';
import { IState } from 'flagsmith/types';

const environmentID = "FrSKH5vQ7AGcCJ5KfbDok5"

function MyApp({ Component, pageProps, flagsmithState }: AppProps & {flagsmithState: IState}) {
    return (
        <FlagsmithProvider flagsmith={flagsmith} options={{ environmentID }}>
            <Component {...pageProps} />
        </FlagsmithProvider>
    );
}

export default MyApp;
