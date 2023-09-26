import LayoutComponent from "../components/Layout";

import '../styles.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <LayoutComponent>
            <Component {...pageProps}/>
        </LayoutComponent>
    );
}
