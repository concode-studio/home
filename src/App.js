import './App.css';
import React, { Component } from "react";
import {
  MainBody,
  SimpleLoader,
  MdBox,
} from "./Containers";
import sb from './Services/StringBundleService';
import util from "./Utils/util";
import {Container, List} from "semantic-ui-react";
import sbService from "./Services/StringBundleService";

class App extends Component {
  constructor(props) {
    super(props);

    let lang = sb.lang;
    let param = util.getUrlParams();
    if (param.lang) {
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
    } else if (param.op == 'deletion') {
      this.onClickDeletion();
    } else if (param.op == 'terms') {
      this.onClickTerms();
    }
  };

  onClickPrivacy = () => {
    MdBox.show("/privacy/" + this.state.language + ".md");
  };

  onClickDeletion = () => {
    MdBox.show("/privacy/" + this.state.language + "-deletion.md");
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
        <MainBody/>
        <SimpleLoader/>
        <footer>
          <Container>
            <List horizontal divided link size='small'>
              <List.Item>
                <span onClick={this.onClickTerms}>{sbService.get('terms')}</span>
              </List.Item>
              <List.Item>
                <span onClick={this.onClickPrivacy}>{sbService.get('privacy')}</span>
              </List.Item>
              <List.Item>
                <span onClick={this.onClickDeletion}>{sbService.get('account.deletion')}</span>
              </List.Item>
            </List>
          </Container>
          <Container textAlign="center" className="langBox">
            <p>
              <a href="" onClick={()=>sbService.changeLang("ko")}>KO</a> | <a href="" onClick={()=>sbService.changeLang("en")}>EN</a>
            </p>
          </Container>
        </footer>
        <MdBox/>
      </div>
    );
  }
}

export default App;
