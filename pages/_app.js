import App from "next/app";

const fetcher = (url) => fetch(url).then((res) => res.json());
const IS_PROD = process.env.NODE_ENV === "production";
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const serverHost = appContext.ctx.req?.headers.host;
  const queryString = `/api/${Object.keys(appContext.ctx.query).join("")}`;

  // addData is used by all the pages
  const [appData, appProps] = await Promise.all([
    fetcher(`${IS_PROD ? "https" : "http"}://${serverHost}${queryString}`),
    App.getInitialProps(appContext),
  ]);

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      queryString,
      appData,
    },
  };
};
