import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl? imageUrl : "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/light-rail-1582950111.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-mute'>By {author? author : "Unknow"} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
