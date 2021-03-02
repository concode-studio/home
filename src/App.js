import './App.css';
import React, { Component } from "react";
import {
  MainBody,
  SimpleLoader,
  MdBox,
} from "./Containers";
import sb from './Services/StringBundleService';
import util from "./Utils/util";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: sb.language,
    };
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = async() => {
    let param = util.getUrlParams();
    if (param.op == 'privacy') {
      this.onClickPrivacy();
    } else if (param.op == 'terms') {
      this.onClickTerms();
    }
  };

  onClickPrivacy = () => {
    console.error("sb.lang:" + sb.lang)
    MdBox.show("/privacy/" + sb.lang + ".md");
  };

  onClickTerms = () => {
    MdBox.show("/terms/" + sb.lang + ".md");
  };

  render() {
    const {
      language,
    } = this.state;

    return (
      <div className="App">
        <MainBody
          onClickPrivacy={this.onClickPrivacy}
          onClickTerms={this.onClickTerms}/>
        <SimpleLoader/>
        <MdBox/>
      </div>
    );
  }
}

export default App;
