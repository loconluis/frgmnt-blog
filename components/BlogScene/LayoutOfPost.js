import React from 'react'
import TopBar from './TopBar'
import PostContainer from './PostContainer'

export default function LayoutOfPost(props) {
  return (
    <div>
      <TopBar headTitle={props.headTitle + ' : FRGMNT Blog'}/>
      <PostContainer title={props.title} date={props.date}>
        {props.children}
      </PostContainer>
      <style global jsx>{`
      * {
        box-sizing: border-box;
        margin: 0;
      }
      html {
        font-size: 62.5%; // to convert html px to 10
      }

      body {
        line-height: 1.6;
        background: #e5fb52;

      }

      button {
        cursor: pointer;
      }

      button:disabled {
        cursor: default;
      }

      .is-active {
        font-weight: bold;
      }
      p {
        line-height: 24px;
        margin-bottom: 20px;
      }
    `}</style>
    </div>
  )
}
