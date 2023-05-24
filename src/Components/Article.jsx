import React from 'react'

function Article({ article }) {
  return (
    <div>
        <img src={article.photo} alt="article" />
        <h2>{article.title}</h2>
        <h2>{article.tag1}</h2>
    </div>
  )
}

export default Article