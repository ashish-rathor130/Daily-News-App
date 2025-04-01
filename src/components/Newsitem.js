import React, { Component } from 'react'



export default class Newsitem extends Component {
  render() {
    // destructuring in javascripting
    let { mytitle, myDescription ,urlImg,Linkurl,source} = this.props;
    return ( 
          <div className="card" style={{width:"13rem", margin:"5px 5px" , fontSize:"11px" ,color:(this.props.color ==="white"?"black":"white"),background:(this.props.color ==="white"?document.body.style.color = "white":document.body.style.color = "black"),border:'1px solid '+(this.props.color ==="white"?"black":"white")}}>
            <div className="d-flex position-absolute justify-content-flex-end" style={{justifyContent:"flex-end",right:0}}>
              <span className="badge rounded-pill bg-success">{source.name}</span>
            </div>
            <img src={urlImg} className="card-img-top" alt="..." style={{height:"100px", overflow:"hidden",}}/>
              <div className="card-body">
                <h6 className="card-title " style={{height:"60px", overflow:"hidden"}}>{mytitle}</h6>
                <p className="card-text" style={{height:"50px", overflow:"hidden"}}>{myDescription}</p>
                <a href={Linkurl} target='_blank' className="btn btn-primary">Read More</a>
              </div>
          </div>
    )
  }
}
