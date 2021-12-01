import React from "react";
import "./App.css";
import Logo from "./components/common/Logo";
import Footer from "./components/common/Footer";
import BuildPage from "./components/build/BuildPage";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Logo />
      <BuildPage />
      <Footer />
    </Provider>
  );
}

export default App;
