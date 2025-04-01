import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; // use impt
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    q: "in",
    pageSize: 4,
  };
  static propsTypes = {
    q: PropTypes.string,
    pageSize: PropTypes.number,
  };
  articles = [];
  
  // this is a state
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    function Capitalize(string){
      let s = string.charAt(0).toUpperCase()+string.slice(1);
      return s;
    }
    document.title = `${Capitalize(this.props.country)} -NewsDaily`
  }

  // this is a live cycle method it runs when the render is executed

  // REFACTORING THE CODE

  async refactorCode(props) {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/everything?q=${this.props.country}&from=2025-01-27&to=2025-01-27&sortBy=popularity&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.props.setProgress(100)

    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/everything?q=${this.props.country}&from=2024-08-02&to=2024-08-02&sortBy=popularity&apiKey=fe41ba7977554177a37388ffcb178025&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   page:1,
    //   totalResults:parseData.totalResults,
    //   loading:false,
    // });
    this.refactorCode();
  }
  // `https://newsapi.org/v2/everything?q=${this.props.country}&from=2024-08-02&to=2024-08-02&sortBy=popularity&apiKey=fe41ba7977554177a37388ffcb178025&page=${this.state.page-1}&pageSize=${this.props.pageSize}`

  //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fe41ba7977554177a37388ffcb178025

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.refactorCode();
    // let url =
    //   `https://newsapi.org/v2/everything?q=${this.props.country}&from=2024-08-02&to=2024-08-02&sortBy=popularity&apiKey=fe41ba7977554177a37388ffcb178025&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   page:this.state.page-1,
    //   loading:false,
    // });
  };
  handleNextClick = async () => {
    // if(!(this.state.page+1> Math.ceil(this.state.totalResults/100))){
      // let url =
      //   `https://newsapi.org/v2/everything?q=${this.props.country}&from=2024-08-02&to=2024-08-02&sortBy=popularity&apiKey=fe41ba7977554177a37388ffcb178025&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      //   this.setState({loading:true});
      // let data = await fetch(url);
      // let parseData = await data.json();
      // console.log(parseData);
      // this.setState({
      //   articles: parseData.articles,
      //   page:this.state.page+1,
      //   loading:false,
      // });
    // }
    this.setState({
      page: this.state.page + 1,
    });
    this.refactorCode();
    
  };
  fetchMoreData = async ()=>{
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/everything?q=${this.props.country}&from=2025-01-27&to=2025-01-27&sortBy=popularity&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  render() {
    return (
      <div className="container" style={{ width: "100%" }}>
        <h4
          className=""
          style={{
            marginLeft: "20px",
            textAlign: "center",
            color:
              this.props.color === "white"
                ? (document.body.style.color = "black")
                : (document.body.style.color = "white"),
            marginTop: "70px",
          }}
        >
          Top News Headlines Of - {(this.props.country).charAt(0).toUpperCase()+(this.props.country).slice(1)} 
        </h4>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
        dataLength= {this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader = {<Spinner/>}
        >
        <div
          className="flex-wrap"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {
            this.state.articles.map((element) => {
              if (element.title !== "[Removed]" && element.urlToImage !== null) {
                return (
                  <div
                    className="col-md-3"
                    style={{
                      display: "flex",
                      width: "auto",
                      marginTop: "10px",
                      marginLeft:'20px',
                      marginRight:"20px",
                    }}
                    key={element.url}
                  >
                    <Newsitem
                      mytitle={element.title}
                      myDescription={element.description}
                      urlImg={element.urlToImage}
                      Linkurl={element.url}
                      color={this.props.color}
                      source = {element.source}
                    />
                    
                  </div>
                );
              }
            })}
            
        </div>

        {/* <div className="container d-flex justify-content-between my-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1>
              Math.ceil(this.state.totalResults/this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}

        </InfiniteScroll>
      </div>
    );
  }
}
