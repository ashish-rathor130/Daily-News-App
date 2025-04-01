
import './App.css';

import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import News from './components/News';
import {
  BrowserRouter as Router,  
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  page_size = 10
  // api_key = process.env.REACTAPP_NEWS_API_KEY
  api_key = "1b4a347fa0d847c4bf97570106cb6195"
  
  constructor(){
    super();
    this.state = {
      color:"white",
      progress:0,
    };
  };

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  
  
  render() {
    const colorChanger=()=>{
      if(document.body.style.background === "black"){
        this.setState({
          color:"white",
          text:"DarkMode"
        })
      }
      else{
        this.setState({
          color:"black",
          text:"LightMode"
        })
      }
    }
    return (
      <Router>
      <div>
        <Navbar newlink = "danger" color = {this.state.color} text = {this.state.text} colorChanger = {colorChanger}/>
        <LoadingBar
        color='#f11946' 
        progress={this.state.progress}
        onLoaderFinished={()=>{this.setProgress(0)}}
        />

        <Routes>  
        <Route exact path = "/" element = {<News setProgress = {this.setProgress} key="general" color = {this.state.color} pageSize = {this.page_size} api_key = {this.api_key} country = {"apple"}/>}/>
        <Route exact path = "/business" element = {<News setProgress = {this.setProgress} key="business" color = {this.state.color} pageSize = {this.page_size} api_key = {this.api_key} country = {"business"}/>}/>
        <Route exact path = "/entertainment" element = {<News setProgress = {this.setProgress} key="entertailment" color = {this.state.color} pageSize = {this.page_size} api_key = {this.api_key} country = {"entertainment"}/>}/>
        <Route exact path = "/general" element = {<News setProgress = {this.setProgress} key="general" color = {this.state.color} pageSize = {this.page_size} api_key = {this.api_key} country = {"general"}/>}/>
        <Route exact path = "/health" element = {<News setProgress = {this.setProgress} key="health" color = {this.state.color} pageSize = {this.page_size} api_key = {this.api_key} country = {"health"}/>}/>
        <Route exact path = "/science" element = {<News setProgress = {this.setProgress} key="science" color = {this.state.color} pageSize = {this.page_size} api_key = {this.api_key} country = {"science"}/>}/>
        <Route exact path = "/sports" element = {<News setProgress = {this.setProgress} key="sports" color = {this.state.color} pageSize = {this.page_size} api_key = {this.api_key} country = {"sports"}/>}/>
        <Route exact path = "/technology" element = {<News setProgress = {this.setProgress} key="technology" color = {this.state.color} pageSize = {this.page_size} api_key = {this.api_key} country = {"technology"}/>}/>
        </Routes>  
      </div>
      </Router>
    )
  }
}
