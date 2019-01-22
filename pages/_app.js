import React from "react";
import "../styles/index.css";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/createStore";
import NavBar from "../components/NavBar";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Container>
          <div className="container mx-auto px-32">
            <NavBar />
            <Component {...pageProps} />
          </div>
        </Container>
      </Provider>
    );
  }
}
