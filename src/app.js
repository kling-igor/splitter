import React, { PureComponent } from "react";

import styled, { createGlobalStyle } from "styled-components";

import Split from "react-split";

import { ChevronRight } from "styled-icons/fa-solid/ChevronRight";
import { ChevronLeft } from "styled-icons/fa-solid/ChevronLeft";

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

  /* .gutter:hover,.gutter:active {
    background-color: #fff;
  } */


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

// http://www.tipue.com/blog/center-a-div/
// https://medium.freecodecamp.org/how-to-center-things-with-style-in-css-dc87b7542689

const HandleHoverArea = styled.div`
  width: 12px;
  height: 100%;
  background-color: transparent;

  position: absolute;
  z-index: 9000;
  right: ${props => (props.collapsed ? "-17px" : "0px")};
  top: 50%;
  transform: translate(0%, -50%);

  opacity: 0;
  filter: alpha(opacity=0);
  transition-duration: 0.25s;

  &:hover {
    opacity: 1;
    filter: alpha(opacity=1);
  }
`;

const Handle = styled.div`
  position: absolute;
  border: 1px solid #bababa;
  border-left-color: ${props => (props.collapsed ? "#ddd" : "#bababa")};
  border-right-color: ${props => (props.collapsed ? "#bababa" : "#ddd")};
  /* margin: 0px; */
  border-bottom-right-radius: ${props => (props.collapsed ? "4px" : "0px")};
  border-top-right-radius: ${props => (props.collapsed ? "4px" : "0px")};
  border-bottom-left-radius: ${props => (props.collapsed ? "0px" : "4px")};
  border-top-left-radius: ${props => (props.collapsed ? "0px" : "4px")};
  width: 10px;
  color: #7d7d7d;
  background: #ddd;
  font-size: 12px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  display: inline-block;
  /* position: absolute; */
  z-index: 9999;
  /* right: -19px; */
  /* left: 0; */
  top: 50%;
  transform: translate(0%, -50%);
  /* opacity: 0;
  filter: alpha(opacity=0);
  transition-duration: 0.25s;

  &:hover {
    opacity: 1;
    filter: alpha(opacity=1);
  } */
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

function gutter(index, gutterDirection) {
  const gutterElement = document.createElement("div");
  gutterElement.className = "gutter gutter-" + gutterDirection;
  return gutterElement;
}

const Dock = () => {
  return (
    <Split
      style={{
        height: "100%",
        width: "100%",
        overflow: "auto",
        position: "relative"
      }}
      sizes={[50, 50]}
      minSize={[100, 100]}
      direction="vertical"
      gutterSize={6}
    >
      <List color="orange" />
      <List color="cyan" />
    </Split>
  );
};

export default class App extends PureComponent {
  state = { collapsed: false };

  constructor(props) {
    super(props);
    this.splitter = React.createRef();
  }

  onHandleClick = () => {
    const { collapsed } = this.state;

    const split = this.splitter.current.split;

    if (collapsed) {
      split.setSizes([25, 75]);
    } else {
      split.collapse(0);
    }

    this.setState((state, props) => ({ collapsed: !state.collapsed }));
  };

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
          ref={this.splitter}
          style={{ width: "100%", height: "100%", display: "flex" }}
          sizes={[25, 75]}
          minSize={[0, 100]}
          snapOffset={150}
          direction="horizontal"
          elementStyle={elementStyle}
          // gutterStyle={gutterStyle}
          gutterSize={6}
          // gutter={gutter}
        >
          <div style={{ position: "relative", overflow: "none" }}>
            <Dock />
            <HandleHoverArea collapsed={this.state.collapsed}>
              <Handle
                onClick={this.onHandleClick}
                collapsed={this.state.collapsed}
              >
                {this.state.collapsed ? (
                  <ChevronRight size="12" />
                ) : (
                  <ChevronLeft size="12" />
                )}
              </Handle>
            </HandleHoverArea>
          </div>

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
