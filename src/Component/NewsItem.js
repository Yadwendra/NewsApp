import React from 'react'

 const NewsItem =(props)=> {
  
  
    const {title, description, imageUrl,newsUrl, author, date, source} = props;
    return (
      <div className='container my-3'>
      
          <div className="card">
          <span className='position-absolute top-0 trnslate-middle badge rounded-pill bg-danger'
           style={{left:"76%"}}> {source} </span>
            <img src={!imageUrl?"https://images.livemint.com/img/2022/09/03/600x338/exp_1656441661915_1662209689335_1662209689335.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on  {new Date(date).toGMTString()}</small></p>
            <a rel="noreference" href={newsUrl}  className="btn btn-sm btn-dark">Read More</a>
          </div>
          </div>  
      </div>
    )
  }

export default NewsItem;