import React, {
    Component,
    Fragment
} from 'react';

import NewsItem from "../NewsItem/NewsItem"


class Newslist extends Component{


state={
    DataNews:this.props.DataNews,
    getCurrent:this.props.getCurrent(),
    currentPage:this.props.currentPage,
    maxpage:this.props.maxpage
}

 
CreatePagination()
{
  var pagin=document.getElementById("pagination");
 
 
//   pagin.innerHTML="";
  for (let index = 0; index < this.state.maxpage; index++) {
    pagin.innerHTML+=`<li class="page-item"><p class="page-link" onClick={this.props.getCurrent(${index+1})}>${index+1}</p></li>`
   
  
 }

}



componentDidMount()
{
    this.CreatePagination();
    console.log(this.state);
}
 render()
  {
   var  news;
if(this.props.DataNews !=null)
{
    news=this.props.DataNews.map(item=>{
        return(
    <Fragment>
        <NewsItem
            author={item.author}
            content={item.content}
            description={item.description}
            publishedAt={item.publishedAt}
            title={item.title}
            url={item.url}
            urlToImage={item.urlToImage}
            
            >

        </NewsItem>
    </Fragment>
           
        );
    })
}
 

 

    return(
            <Fragment>
                 <div className="card mb-3">
            {news}
            </div>
            <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center" id="pagination">
   
    
   
   
  </ul>
</nav>
            </Fragment>
        )
        
    }     
    } 

export default Newslist;