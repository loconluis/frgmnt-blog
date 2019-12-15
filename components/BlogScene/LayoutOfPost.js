import React from 'react'
import TopBar from './TopBar'
import PostContainer from './PostContainer'
import '../../styles/index.scss'

export default function LayoutOfPost(props) {
  return (
    <div>
      <TopBar headTitle={props.headTitle + ' : FRGMNT Blog'}/>
      <PostContainer title={props.title} date={props.date} author={props.author}>
        {props.children}
      </PostContainer>
    </div>
  )
}
