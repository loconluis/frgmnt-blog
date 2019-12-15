import React from 'react'
import { post } from './post'
import Link from "next/link";
import moment from 'moment';

export default function index() {
  moment.locale('es')
  return (
    <div className="list-post-main">
      {
        post.map(el => {
          return (<div key={el.id} className="post">
            <p className="post-date">{moment(el.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={el.url}><h3 className="post-title">{el.title}</h3></Link>
            <a href={el.linkOfAuthor} target="_blank"><p className="post-author">{el.author}</p></a>
          </div>)
        })
      }
      <style jsx>{`
        .list-post-main {
          margin-left: 50px;
          margin-top: 20px;
        }
        .post {
          display: flex;
          margin-bottom: 10px;
        }
        .post-date {
          color: #FF0080;
          padding-right: 15px;
          font-size: 15px;
        }
        .post-title {
          padding: 0 10px;
          font-size: 15px;
          cursor: pointer;
        }
        .post-title:hover {
          background: #000000;
          color: #e5fb52;
        }
        .post-author {
          padding: 5px 2px;
          color: rgba(6, 6, 6, 0.53);
          font-size: 10px;
        }
      `}</style>
    </div>
  )
}
