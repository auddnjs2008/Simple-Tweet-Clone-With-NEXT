import { useRouter } from 'next/router';
import { SWRConfig } from "swr";
import Navigation from '../components/Navigation';
import "../global.css";

export default function App({ Component, pageProps }: any) {
  const router = useRouter();
  const existNavBox = () => router.asPath !== "/log-in" && router.asPath !== "/create-account";

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((response) => response.json())
      }}
    >
      <div>
        {existNavBox() && <Navigation />}
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
