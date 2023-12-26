import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";

// Only Css
import "../styles/styles.sass";
import "../styles/global.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
