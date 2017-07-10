import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";

export default class BlogLayout extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-8 blog-main">
              {this.props.children}
            </div>
            <div className="col-sm-3 offset-sm-1 blog-sidebar">
              <div className="sidebar-module sidebar-module-inset">
                <About />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}