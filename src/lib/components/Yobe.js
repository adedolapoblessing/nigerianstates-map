import React, { Component } from "react";
import PropTypes from "prop-types";
class Yobe extends Component {
  constructor(props) {
    super(props);


    this.state = {
      hoverColor: this.props.hoverColor,
      hoverBackgroundColor: this.props.hoverBackgroundColor,
      renderData: this.props.renderData,
      showRenderData: this.props.showRenderData,
      defaultColor: this.props.defaultColor,
      id: this.props.id
    };
  }

  componentWillMount() { }
  componentDidMount() {
    let {showRenderData} = this.state;
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor} }
    `;
    if(showRenderData){
    this.refs.myRef1.innerHTML = "";
    this.refs.myRef1.innerHTML += this.state.renderData;
    }
  }
  render() {
    let {showRenderData} = this.state;
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          {(showRenderData)&&<span id={this.state.id} ref="myRef1">Yobe State</span>}
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
            viewBox="202.25568351286688 15.677459114959113 107.90014091077411 87.68278018278016"
            preserveAspectRatio="xMinYMin"
          >
            <rect
              x="-2015.01"
              y="-1637.27"
              width="5040"
              height="4095.65"
              r="0"
              rx="0"
              ry="0"
              fill="#ffffff"
              stroke="none"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              strokeWidth="0.7979196479259151"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M809.1,69.6L807.1,86.1L808.6,91.6L812.3000000000001,95.69999999999999L816.8000000000001,98.99999999999999L817.5000000000001,104.29999999999998L815.4000000000001,109.49999999999999L811.7,114.59999999999998L802.6,123.29999999999998L804.3000000000001,136.1L800.4000000000001,164.7L802.4000000000001,173.2L802.0000000000001,177L797.0000000000001,186.9L796.5000000000001,190.3L798.7000000000002,191L801.5000000000001,190.6L804.9000000000001,191.7L807.3000000000001,194.5L808.8000000000001,197.5L809.2,200.6L800.8000000000001,211.1L797.4000000000001,217.29999999999998L795.1000000000001,219.7L793.3000000000002,222.39999999999998L792.9000000000002,229.59999999999997L793.3000000000002,236.79999999999995L790.8000000000002,242.59999999999997L785.6000000000001,246.49999999999997L766.0000000000001,253.39999999999998L761.3000000000001,258.59999999999997L760.1,265.4L760.7,272.5L759.8000000000001,275.5L757.8000000000001,278L755.3000000000001,280.1L752.0000000000001,281L748.9000000000001,281.3L743.1000000000001,280.7L742.3000000000002,278.2L741.8000000000002,272.09999999999997L742.8000000000002,252.69999999999996L742.3000000000002,249.79999999999995L740.5000000000002,247.49999999999994L731.8000000000002,238.69999999999993L727.8000000000002,233.19999999999993L723.2000000000002,228.29999999999993L717.9000000000002,224.09999999999994L706.5000000000002,218.49999999999994L694.9000000000002,221.59999999999994L690.9000000000002,220.89999999999995L688.7000000000002,218.09999999999994L691.6000000000001,204.89999999999995L691.1000000000001,197.69999999999996L681.1000000000001,172.89999999999995L678.6000000000001,159.29999999999995L678.5000000000001,153.39999999999995L678.0000000000001,149.69999999999996L676.3000000000001,146.39999999999995L674.6,143.69999999999996L674.2,140.69999999999996L674.1,137.29999999999995L672.8000000000001,130.59999999999997L671.7,127.39999999999996L666.9000000000001,122.69999999999996L661.3000000000001,118.79999999999995L659.5000000000001,113.29999999999995L658.0000000000001,101.19999999999996L655.4000000000001,95.69999999999996L653.1000000000001,93.99999999999996L650.3000000000002,94.09999999999995L647.2000000000002,93.39999999999995L644.2000000000002,91.99999999999994L641.5000000000001,91.69999999999995L636.0000000000001,93.29999999999994L632.4000000000001,92.79999999999994L631.6000000000001,90.59999999999994L629.4000000000001,82.09999999999994L627.3000000000001,78.79999999999994L623.8000000000001,77.69999999999995L620.1,78.69999999999995L612.2,81.89999999999995L608.2,82.89999999999995L602.4000000000001,85.39999999999995L600.9000000000001,86.49999999999994L600.0000000000001,88.79999999999994L598.7000000000002,90.89999999999993L591.4000000000002,94.09999999999994L583.5000000000002,91.39999999999993L581.3000000000002,90.79999999999994L595.5000000000002,73.89999999999995L598.3000000000002,71.19999999999995L599.9000000000002,70.09999999999995L601.6000000000003,69.79999999999995L602.6000000000003,68.29999999999995L602.9000000000002,66.19999999999996L603.3000000000002,65.29999999999995L604.7000000000002,63.899999999999956L620.5000000000001,54.99999999999996L624.0000000000001,53.49999999999996L666.7000000000002,44.299999999999955L674.7000000000002,43.59999999999995L689.8000000000002,45.39999999999995L730.3000000000002,45.199999999999946L755.5000000000002,51.599999999999945L764.7000000000003,55.39999999999994L776.2000000000003,62.49999999999994L780.1000000000003,65.49999999999994L781.7000000000003,66.39999999999995L786.6000000000003,67.59999999999995L790.5000000000002,67.09999999999995L792.3000000000002,65.89999999999995L793.7000000000002,65.59999999999995L797.9000000000002,67.09999999999995L798.8000000000002,67.59999999999995L799.3000000000002,68.99999999999996L800.0000000000002,69.09999999999995L801.2000000000003,68.09999999999995L802.0000000000002,67.99999999999996L802.8000000000002,68.39999999999996L804.0000000000002,69.59999999999997L804.8000000000002,69.09999999999997L806.2000000000002,69.49999999999997L809.1000000000001,69.59999999999997Z"
              className="sm_state_NGA2873"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.5523598762767147"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              fillOpacity="1"
            />
            <desc style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}>
              Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }} />
            <text
              x="270.01412698412696"
              y="42.67043650793651"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,171.1161,27.0415)"
              className="sm_label_3"
            >
              <tspan
                dy="7.6391865079365076"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Yobe
                           </tspan>
            </text>
          </svg>
        </a>
      </div>
    )
  }
}
const state = "State Info";
const val = 55;
const yobeData =
'<div class="hoverinfo">' +
"<h3>State</h3>"+
"<h5>PVHHTarget - " + 14000 +"</h5>"+
"<h5>ZoneName - " + 34030+"</h5>"+
"" +
"</div>";
Yobe.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: yobeData,
  showRenderData:false,
  defaultColor: "green",
  id: "ab",
  height: ""
};

Yobe.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  showRenderData:PropTypes.bool,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default Yobe;
