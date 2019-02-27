import React, { PureComponent } from "react";

import styled, { createGlobalStyle } from "styled-components";

import Split from "react-split";

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
    display: flex;
    flex-direction: row;
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
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAEAQMAAACEHZz0AAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfjAhsTCQ6JxssVAAAAEUlEQVQI12NgYGA4cwaEGBgAEywDMZ7GenYAAAAASUVORK5CYII=
');
    cursor: row-resize;
    height: 4px;
  }

  .gutter.gutter-horizontal {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAOAQMAAAAypC9bAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfjAhsTCTE/oOYoAAAAEElEQVQI12NIYEhgAAEsNAAqHAMBffS2jgAAAABJRU5ErkJggg==
');
    cursor: col-resize;
    width: 4px;
  }
`;

const List = ({ color }) => {
  const children = [];

  for (let i = 0; i < 50; i += 1) {
    const key = i;
    children.push(<li key={key}>{`item ${i}`}</li>);
  }

  return (
    <ol
      style={{
        background: color,
        width: "100%",
        height: "100%",
        overflow: "auto",
        margin: 0,
        padding: 0
      }}
    >
      {children}
    </ol>
  );

  // return <div style={{ background: color, width: 600, height: 300 }} />;
};

function elementStyle(dimension, size, gutterSize) {
  return {
    "flex-basis": "calc(" + size + "% - " + gutterSize + "px)",
    // float: "right",
    width: size
  };
}

function gutterStyle(dimension, gutterSize) {
  return {
    // float: "right",
    // width: "6px"/
  };
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
        <Split
          style={{ width: "100%", height: "100%", display: "flex" }}
          sizes={[25, 75]}
          minSize={[100, 100]}
          direction="horizontal"
          elementStyle={elementStyle}
          // gutterStyle={gutterStyle}
          gutterSize={6}
        >
          <Split
            style={{ height: "100%", width: "300px", overflow: "auto" }}
            sizes={[50, 50]}
            minSize={[100, 100]}
            direction="vertical"
            gutterSize={6}
          >
            <List color="orange" />
            <List color="cyan" />
          </Split>
          <List color="yellow" />
        </Split>
      </>
    );
  }
}

{
  /* <Split style={{ height: '100%', width: '300px', overflow: 'auto' }} sizes={[50, 50]} minSize={[100, 100]} direction="vertical">
<List />
<List />
</Split> */
}

/*
SplitWrapper.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.number),
  minSize: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number) ]),
  expandToMin: PropTypes.bool,
  gutterSize: PropTypes.number,
  gutterAlign: PropTypes.string,
  snapOffset: PropTypes.number,
  dragInterval: PropTypes.number,
  direction: PropTypes.string,
  cursor: PropTypes.string,
  gutter: PropTypes.func,
  elementStyle: PropTypes.func,
  gutterStyle: PropTypes.func,
  onDrag: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  collapsed: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};
*/
