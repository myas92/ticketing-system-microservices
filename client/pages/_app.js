import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";

const AppComponent = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

AppComponent.getInitialProps = async (appContext) => {
    console.log("APP Componentttttttttt")
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  // برای اینکه تابع راه اندازی در لندیگ اجرا شود باید بصورت دستی کانفیگ کنیم
  if(appContext.Component.getInitialProps)
  pageProps = await appContext.Component.getInitialProps(appContext.ctx);

  console.log(pageProps);

  return data;
};

export default AppComponent;
