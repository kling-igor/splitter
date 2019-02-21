import React, { PureComponent } from "react"

import styled, { createGlobalStyle } from "styled-components"

import Split from 'react-split'



const GlobalStyle = createGlobalStyle`
  html {
    
    height: 100%;
    margin: 0;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    overflow: hidden;
    background-color: white;
    height: 100%;
    margin: 0;
    overflow: hidden !important;
  }

  #app {
    min-height: 100%;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    /* padding: 8px; */
  }


  .split {
    overflow-y: auto;
    overflow-x: hidden;
  }

  .gutter {
      background-color: #ddd;

      background-repeat: no-repeat;
      background-position: 50%;
  }

  .gutter:hover,.gutter:active {
    background-color: #fff;
  }


  .gutter.gutter-vertical {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
    cursor: row-resize;
  }

  .gutter.gutter-horizontal {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
    cursor: col-resize;
  }

  .split, .gutter.gutter-horizontal {
      float: left;
      height: 300px;
  }
`;

const List = () => {

  const children = []

  for (let i = 0; i < 50; i += 1) {
    const key = i
    children.push(<li key={key}>{`item ${i}`}</li>)
  }

  // return (
  //   <ol style={{ background: 'yellow' }}>
  //     {children}
  //   </ol>
  // )

  return <div style={{ background: 'green', width: '300px', height: '300px' }}></div>
}

function elementStyle(dimension, size, gutterSize) {
  return {
    // 'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)',
    // float: 'right'
  }
}

function gutterStyle(dimension, gutterSize) {
  return {
    // float: 'right',
    // width: '10px'
  }
}


export default class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        {/* <Split style={{ height: '100%', width: '100%', overflow: 'auto' }} sizes={[10, 90]} minSize={[100, 100]} direction="horizontal">
          <div style={{ height: '100%' }}>
            <Split style={{ height: '100%', width: '300px', overflow: 'auto' }} sizes={[50, 50]} minSize={[100, 100]} direction="vertical">
              <List />
              <List />
            </Split>
          </div>
          <div style={{ width: '100%', height: '100%', background: 'green' }} />
        </Split> */}
        <Split sizes={[25, 75]} minSize={[100, 100]} direction="horizontal" elementStyle={elementStyle} gutterStyle={gutterStyle}>
          <List />
          <List />
        </Split>
      </>
    )
  }
}


{/* <Split style={{ height: '100%', width: '300px', overflow: 'auto' }} sizes={[50, 50]} minSize={[100, 100]} direction="vertical">
<List />
<List />
</Split> */}