import React, { Component } from "react";
import PropTypes from "prop-types";
class Rivers extends Component {
  constructor(props) {
    super(props);


    this.state = {
      hoverColor: this.props.hoverColor,
      hoverBackgroundColor: this.props.hoverBackgroundColor,
      renderData: this.props.renderData,
      defaultColor: this.props.defaultColor,
      id: this.props.id
    };
  }

  componentWillMount() { }
  componentDidMount() {
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor} }
    `;
    this.refs.myRef1.innerHTML = "";
    this.refs.myRef1.innerHTML += this.state.renderData;
  }
  render() {
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          <span id={this.state.id} ref="myRef1">Rivers State</span>
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "hidden", position: "relative", left: "-0.2px", top: " 0.733333px" }}
            viewBox="105.67883862773563 252.8797278338945 52.35660845881442 42.54649671316335"
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
              strokeWidth="0.3871762004703806"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              id="ri"
              d="M398.6,795L400.1,795.4L401.6,795.1999999999999L404.6,794.4L408.8,794L409.6,794.3L409.20000000000005,795.4L408.40000000000003,796.4L407.00000000000006,796.6999999999999L403.80000000000007,796.5999999999999L402.50000000000006,796.8L398.40000000000003,798.3L396.90000000000003,798.4L390.8,798L389.5,797.4L389,796.3L389.8,794.8L390.7,794.4L394.7,793.1L395.7,793.5L398.59999999999997,795ZM382.5,793.2L383.8,793.7L387.6,793.3000000000001L388.70000000000005,793.7L387.70000000000005,794.6L387.20000000000005,795.6L387.00000000000006,798L386.6000000000001,799.3L385.80000000000007,800.0999999999999L383.50000000000006,801.3L376.1000000000001,802.8L373.30000000000007,802.5999999999999L372.50000000000006,801.5999999999999L373.30000000000007,799.9999999999999L376.00000000000006,797.1999999999999L377.80000000000007,794.3L379.4000000000001,792.4L380.1000000000001,790.1999999999999L381.30000000000007,790.9L382.50000000000006,793.1999999999999ZM381.9,734.9000000000001L383.59999999999997,738.0000000000001L383.2,742.1000000000001L374.59999999999997,755.3000000000002L375.7,761.8000000000002L379.09999999999997,762.8000000000002L385.9,761.4000000000002L389.2,761.3000000000002L392.3,762.6000000000001L396.7,762.7000000000002L402.3,766.5000000000001L403.3,768.6000000000001L404.8,770.9000000000001L405.5,774.0000000000001L405.4,776.0000000000001L404.29999999999995,777.1000000000001L404.09999999999997,778.0000000000001L404.49999999999994,780.1000000000001L404.49999999999994,780.9000000000001L403.79999999999995,781.9000000000001L403.79999999999995,782.5000000000001L404.9,783.8000000000001L405.2,784.5000000000001L403.5,786.3000000000001L401.8,787.4000000000001L400.90000000000003,787.5000000000001L400.1,786.8000000000001L399.5,786.8000000000001L398.8,788.5000000000001L397,788.3000000000001L394.1,786.8000000000001L392,786.7L389.9,786.3000000000001L388,785.4000000000001L387,784.0000000000001L385.9,784.5000000000001L384.4,784.5000000000001L383.7,786.0000000000001L383,786.3000000000001L383,786.8000000000001L384.1,787.4000000000001L383.6,788.0000000000001L384.6,788.3000000000001L386.1,789.5000000000001L388.3,790.0000000000001L388.7,790.5000000000001L388.09999999999997,792.0000000000001L384.4,792.6000000000001L382.09999999999997,789.4000000000001L376.9,783.7L376.09999999999997,781.9000000000001L376.09999999999997,779.7L375.9,778.9000000000001L375.4,778.9000000000001L374.2,779.4000000000001L372.4,779.5000000000001L369.9,777.4000000000001L369.29999999999995,776.5000000000001L367.9,772.7000000000002L366.9,772.2000000000002L365.79999999999995,773.7000000000002L365.99999999999994,774.5000000000001L366.99999999999994,774.8000000000001L367.59999999999997,775.4000000000001L368.4,778.2L369.2,779.5L370.7,780L373.3,781.3L375.1,784.0999999999999L375.40000000000003,786.8999999999999L373.3,787.9999999999999L374.40000000000003,788.6999999999999L375.6,789.9L376.40000000000003,791.4L375.8,792.9L373.6,795.4L372.1,796.1L370.40000000000003,795.4L370.40000000000003,797.1L368.90000000000003,796.4L367.70000000000005,795.4L367.20000000000005,794.1999999999999L367.6,792.5999999999999L366.5,793.5999999999999L366.2,794.9999999999999L366.7,796.3999999999999L367.59999999999997,797.6999999999998L365.29999999999995,798.2999999999998L364.69999999999993,798.2999999999998L363.69999999999993,796.2999999999998L363.19999999999993,794.1999999999998L362.99999999999994,789.9999999999998L361.59999999999997,787.6999999999998L361.2,786.2999999999998L362.09999999999997,785.6999999999998L362.9,783.3999999999999L363.2,781.6999999999998L363,780.4999999999998L364.7,781.0999999999998L364.09999999999997,780.0999999999998L362.49999999999994,778.2999999999998L361.69999999999993,775.4999999999999L361.29999999999995,774.7999999999998L359.79999999999995,776.8999999999999L359.19999999999993,776.8999999999999L358.8999999999999,775.5999999999999L357.8999999999999,773.6999999999999L357.49999999999994,774.9999999999999L357.69999999999993,776.9999999999999L357.29999999999995,777.5999999999999L358.29999999999995,778.9999999999999L360.09999999999997,783.9999999999999L358.7,783.8999999999999L357.9,782.7999999999998L356.79999999999995,783.3999999999999L355.99999999999994,781.7999999999998L355.19999999999993,780.3999999999999L352.79999999999995,777.5999999999999L352.9,778.9999999999999L353.29999999999995,780.0999999999999L354.49999999999994,782.1999999999999L355.49999999999994,783.5999999999999L355.29999999999995,784.9999999999999L354.49999999999994,785.8999999999999L355.09999999999997,786.7999999999998L355.9,785.4999999999999L357.5,785.0999999999999L358.9,785.4999999999999L359.59999999999997,786.5999999999999L358.79999999999995,792.3L358.99999999999994,794.3L361.8999999999999,800.0999999999999L362.99999999999994,801.4999999999999L362.3999999999999,803.0999999999999L361.5999999999999,803.3999999999999L360.4999999999999,803.2999999999998L357.9999999999999,802.1999999999998L358.4999999999999,803.3999999999999L356.6999999999999,802.8999999999999L354.7999999999999,801.9999999999999L352.9999999999999,801.5999999999999L350.9999999999999,802.3L350.0999999999999,801.3L349.3999999999999,800L349.2999999999999,798.5L349.8999999999999,797.1L348.49999999999994,796.3000000000001L347.19999999999993,794.2L346.29999999999995,791.5L345.9,789.4L346.09999999999997,787.9L346.49999999999994,787.1L347.69999999999993,785.7L348.3999999999999,783.5L348.19999999999993,782.2L346.79999999999995,781.7L344.69999999999993,780.5L343.19999999999993,777.7L341.8999999999999,772.5L341.69999999999993,770.5L341.8999999999999,769.4L343.3999999999999,767.1999999999999L343.19999999999993,766.4999999999999L342.3999999999999,766.3999999999999L341.3999999999999,767.3999999999999L340.5999999999999,766.3999999999999L340.19999999999993,764.9999999999999L338.79999999999995,765.4999999999999L337.4,764.9999999999999L337.7,766.4999999999999L337.9,767.9999999999999L338.29999999999995,769.1999999999999L339.4,769.6999999999999L340.09999999999997,770.3L340.7,771.8L341.4,774.8L341.7,777.9L342.09999999999997,779.4L343.9,780.5L345,781.8L346.5,784.5L344.6,786.1L344.20000000000005,786.8000000000001L344.1,788.0000000000001L345.70000000000005,796.2000000000002L346.6,798.7000000000002L347.70000000000005,800.0000000000001L347.50000000000006,801.9000000000001L349.20000000000005,803.4000000000001L350.30000000000007,804.6000000000001L348.20000000000005,805.7000000000002L345.6,806.2000000000002L342.3,806.4000000000002L339.2,806.1000000000003L337.4,805.1000000000003L337.09999999999997,803.9000000000002L337.4,799.0000000000002L337.9,798.0000000000002L336.79999999999995,796.6000000000003L336.79999999999995,793.7000000000003L337.09999999999997,792.3000000000003L338.99999999999994,787.3000000000003L339.19999999999993,786.4000000000003L339.0999999999999,784.0000000000003L337.9999999999999,785.3000000000003L336.9999999999999,784.0000000000003L334.2999999999999,782.8000000000003L331.9999999999999,781.0000000000003L330.6999999999999,778.2000000000004L329.9999999999999,775.2000000000004L324.89999999999986,772.0000000000003L317.9999999999999,774.6000000000004L315.39999999999986,774.8000000000004L314.4999999999999,772.3000000000004L314.89999999999986,770.7000000000004L314.1999999999999,769.7000000000004L312.9999999999999,769.6000000000004L311.7999999999999,769.0000000000003L309.8999999999999,766.5000000000003L309.99999999999994,763.1000000000004L310.8999999999999,760.2000000000004L312.5999999999999,757.7000000000004L312.7999999999999,756.5000000000003L313.5999999999999,754.7000000000004L315.0999999999999,753.1000000000004L313.9999999999999,751.5000000000003L313.39999999999986,749.6000000000004L313.39999999999986,747.9000000000003L313.79999999999984,745.8000000000003L314.29999999999984,744.1000000000003L314.79999999999984,743.3000000000003L316.29999999999984,742.6000000000003L316.99999999999983,740.8000000000003L317.3999999999998,737.0000000000003L318.5999999999998,734.3000000000003L320.3999999999998,732.6000000000003L322.3999999999998,731.1000000000003L325.1999999999998,727.6000000000003L326.29999999999984,725.3000000000003L327.89999999999986,725.0000000000003L329.1999999999999,723.7000000000004L329.39999999999986,722.7000000000004L328.9999999999999,721.9000000000004L326.5999999999999,719.1000000000005L318.8999999999999,718.4000000000004L317.3999999999999,714.7000000000004L319.0999999999999,712.9000000000004L321.0999999999999,712.0000000000005L322.69999999999993,710.3000000000004L323.69999999999993,708.3000000000004L324.3999999999999,704.2000000000004L326.0999999999999,700.4000000000004L328.19999999999993,690.7000000000004L330.69999999999993,693.0000000000003L333.49999999999994,693.2000000000004L332.49999999999994,696.1000000000004L329.8999999999999,709.2000000000004L330.49999999999994,711.1000000000004L333.3999999999999,711.3000000000004L336.49999999999994,710.6000000000004L339.8999999999999,714.2000000000004L339.19999999999993,720.1000000000004L337.99999999999994,722.8000000000004L338.09999999999997,725.7000000000004L338.9,726.6000000000004L340.9,728.1000000000004L341.5,729.2000000000004L350.2,734.9000000000004L362,735.7000000000004L372.4,734.7000000000004L376.79999999999995,736.0000000000003L379.49999999999994,735.6000000000004L381.8999999999999,734.9000000000003Z"
              className="sm_state_NGA2844"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.26802272477562095"
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
              x="122.5172619047619"
              y="273.49369047619047"
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
              transform="matrix(0.3663,0,0,0.3663,77.6429,173.3212)"
              className="sm_label_32"
            >
              <tspan
                dy="7.657752976190466"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Rivers
            </tspan>
            </text>
            <text
              x="122.5172619047619"
              y="273.49369047619047"
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
              transform="matrix(0.3663,0,0,0.3663,77.6429,173.3212)"
              className="sm_label_69"
            >
              <tspan
                dy="7.657752976190466"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Rivers
            </tspan>
            </text>
            <text
              x="122.5172619047619"
              y="273.49369047619047"
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
              transform="matrix(0.3663,0,0,0.3663,77.6429,173.3212)"
              className="sm_label_106"
            >
              <tspan
                dy="7.657752976190466"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Rivers
            </tspan>
            </text>
            <text
              x="122.5172619047619"
              y="273.49369047619047"
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
              transform="matrix(0.3663,0,0,0.3663,77.6429,173.3212)"
              className="sm_label_143"
            >
              <tspan
                dy="7.657752976190466"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Rivers
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
const riversData =
  '<div class="hoverinfo">' +
  "<h6>" +
  state +
  " </h6>" +
  "Total No Of Farms - " +
  val +
  "" +
  "</div>";
Rivers.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: riversData,
  defaultColor: "green",
  id: "sok",
  height: ""
};

Rivers.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};


export default Rivers;
