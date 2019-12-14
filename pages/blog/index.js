import React from 'react'
import BlogScene from '../../components/BlogScene/index';

export default () => {
  return (
    <div>
      <BlogScene />
      <style global jsx>{`
      * {
        box-sizing: border-box;
        margin: 0;
      }
      html {
        font-size: 62.5%; // to convert html px to 10
      }

      body {
        color: $black-color;
        font-family: $primary-font, $secondary-font, sans-serif;
        font-size: $font-size-small;
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
    `}</style>
    </div>
  )
}
