import React from "react";
import ReactDOM from "react-dom";
import Posts from "./components/Posts";
import Header from "./components/Header";
import axios from "axios";

import "./styles.css";
import "./normalize.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleGetNews = this.handleGetNews.bind(this);
  }

  state = {
    message: "Hacker News",
    isActive: "",
    news: null,
    loading: false,
    error: null
  };

  handleGetNews(query) {
    const url = "https://hackerNewsScrape.fabianforsstrm.repl.co/";
    this.setState({
      loading: true
    });
    axios
      .get(`${url + query}`, {
        cors: "no-cors"
      })
      .then(response => {
        setTimeout(() => {
          this.setState({
            news: response.data,
            loading: false,
            error: null,
            isActive: query
          });
        }, 500);
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }

  async componentDidMount() {
    this.handleGetNews("news");
  }

  render() {
    return (
      <div className="App">
        <Header isActive={this.state.isActive} getNews={this.handleGetNews} />
        <Posts
          message={this.state.message}
          loading={this.state.loading}
          news={this.state.news}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
