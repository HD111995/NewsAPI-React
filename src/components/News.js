import React from 'react';
import {Link} from 'react-router-dom'
class NewsItem extends React.Component {
   state ={
       news:[]
   }
   
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=c416dea64fe043f892c6d0d64aefd96c')
          .then(response => response.json())
          .then(data => {
            this.setState({news : data.articles})
            console.log(data)
        });
            
    }
    render() { 
        return (
            <div className="news-container">
            {this.state.news.map(elt => 
                    <figure>
                        <img src={elt.urlToImage} alt="" />
                    <figcaption>
                        <h2>{elt.title}</h2>
                        <p>{elt.description}</p>
                    </figcaption>
                    <div className="figur-bottom">
                        <h4>{elt.publishedAt.slice(0,10)}</h4>
                       <a href={elt.url}>READMORE</a>
                    </div>
                    </figure>
                )} 
            </div>
        )
    }
}
 
export default NewsItem;