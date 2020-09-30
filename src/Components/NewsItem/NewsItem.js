

import React, {
    Component,
    Fragment
} from 'react';

import './Newitem.css';


class NewsItem extends Component{
    state={
        author:this.props.author,
        content:this.props.content,
        description:this.props.description,
        publishedAt:this.props.publishedAt,
        title:this.props.title,
        url:this.props.url,
        urlToImage:this.props.urlToImage

    }

   

    render()
    {
     
        return(
            <Fragment>
      <div className="card mycards">
                <img className="card-img-top" src={this.state.urlToImage} alt="img"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.title}</h5>
                    <p className="card-text">   {this.state.description}</p>
                    <p className="card-text">{this.state.content}</p>
                   
                    
                </div>
                <div className="card-footer text-muted">
        <p>{this.state.author}</p>
    {this.state.publishedAt.slice(0,10)}
 
                  
                  
                   
                </div>
            </div>
            </Fragment>
        )
    }
}

export default NewsItem;