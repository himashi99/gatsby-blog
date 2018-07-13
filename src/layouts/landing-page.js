import React from "react"
import Sign from "../images/day-1-image.jpg";


export default () =>
  <div>

  <div
  style={{
    color: `tomato`,
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
  }}
  >
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
  </div>

  <div
    style={{
      display: `flex`,
      justifyContent: `center`,
    }}>

    <img src={Sign} alt="Sign" height="500px"/>
  </div>


</div>
