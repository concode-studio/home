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

    let lang = sb.language;
    let param = util.getUrlParams();
    if (param.lang !== null) {
      lang = param.lang;
    }

    this.state = {
      language: lang,
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
    MdBox.show("/privacy/" + this.state.language + ".md");
  };

  onClickTerms = () => {
    MdBox.show("/terms/" + this.state.language + ".md");
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
