import React, { Component, Fragment } from 'react';

import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom' 
import Newslist from './Components/NewsLIst/Newslist';

class App extends Component {

state={
  List:[],
  currentPage: 1,
  maxpage:null,
  CurrentList:[] 
}

async getNews()
{
 var MyURL = 'http://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=8a4e0ea8fc0b425980f55e64394e21dc';
var req = new Request(MyURL);
await fetch(req)
    .then(response=> {
      return response.json();
    }).then(news=>{
      console.log("New : ",news.articles);
     
      this.setState({
        List:news.articles,
        
      })
      
    }).then(news=>{
      var templist=this.state.List.slice(0,5);
      var count=this.state.List.length;
      var temppage=Math.round(count/5)
     
      this.setState({
        CurrentList:templist,
        maxpage:temppage
      })
     
    })
}

getCurrent(page)
{
 
  var templist=this.state.List.slice((page-1)*5,5);
  this.setState({
    CurrentList:templist,
    currentPage:page
  })
  
}

componentDidMount(){
  this.getNews();
  console.log(this.state);
}
 
Search()
{
  var search=document.getElementById("search").value;
  var templist=this.state.List;
  if(search!=="")
  {
    var founded=templist.filter(elem=>{
      return elem.title.toLowerCase().includes(search.toLowerCase())
    })
    this.setState({
      CurrentList:founded
    })
  }
 else{
  this.setState({
    CurrentList:this.state.List/this.state.maxpage
  })
 }
  
 
}


found()
{
  this.Search();
}

  render(){
    return (
    <Fragment>
<Router>
  <div className="container">

  
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">News</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      
    </div>
  </div>
  <div class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.found.bind(this)}>Search</button>
    </div>
</nav>


<Switch>
  <Route
  path="/"
  exact
  render={()=>
    <Newslist
    DataNews={this.state.CurrentList}
    getCurrent={this.getCurrent.bind(this)}
    maxpage={this.state.maxpage}
    currentPage={this.state.currentPage}
    
    >

    </Newslist>
  }
  >

  </Route>
</Switch>
</div>

</Router>
    </Fragment>
      )
  }
  
}

export default App;
