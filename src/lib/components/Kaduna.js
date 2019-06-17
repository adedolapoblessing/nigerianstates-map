import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Kaduna extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();

    this.state = {
      ...props
    };
  }

  componentWillMount() {}
  componentDidMount() {
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor} }
    `;
    this.myRef1.current.innerHTML += this.state.renderData;
  }                                                      
 render() {
    return (
      <div className="App">
      <a href="javascript:void(0)" className="tip">
          <span id={this.state.id} ref={this.myRef1}>Kaduna State</span>
         <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left:" -0.2px", top: "0.733333px"}}
            viewBox="97.74389950013659 74.69499959916627 96.06299465052042 78.06357223023889"
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
              strokeWidth="0.7103841591239162"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)","fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M505.9,284.8L505,290.3L502.1,295.40000000000003L503.3,297.6L505.8,299L507.7,300.8L509.5,302.90000000000003L508.7,305.3L508.3,308.1L506.3,310.8L503.3,312.2L499.1,316.9L497.6,323.2L499.8,329.59999999999997L496.5,340.7L496.5,347.2L496,350.5L496.7,353.3L493.3,358.1L493.3,359.5L493.1,361L490.70000000000005,362.8L490.70000000000005,374.8L494.1,379.8L498,383.90000000000003L501.2,388.40000000000003L500.8,393.6L499.1,398.40000000000003L496,402.00000000000006L493.9,407.00000000000006L491.2,411.70000000000005L487.7,415.30000000000007L484.4,415.70000000000005L482.4,413.70000000000005L481.29999999999995,411.80000000000007L479.69999999999993,410.20000000000005L476.29999999999995,405.80000000000007L468.79999999999995,403.80000000000007L466.09999999999997,402.70000000000005L463.9,404.80000000000007L459.09999999999997,411.6000000000001L452.49999999999994,415.2000000000001L450.3999999999999,407.1000000000001L449.49999999999994,397.2000000000001L446.19999999999993,395.2000000000001L443.49999999999994,393.1000000000001L443.59999999999997,390.9000000000001L442.79999999999995,389.0000000000001L440.09999999999997,386.5000000000001L434.99999999999994,387.3000000000001L431.79999999999995,393.2000000000001L428.9,394.5000000000001L426.09999999999997,393.3000000000001L423.29999999999995,393.10000000000014L421.29999999999995,391.40000000000015L418.59999999999997,391.60000000000014L416.59999999999997,390.60000000000014L415.4,388.3000000000001L413.09999999999997,389.40000000000015L410.4,390.00000000000017L408.9,387.1000000000002L405.9,386.00000000000017L403.29999999999995,389.70000000000016L401.49999999999994,391.00000000000017L399.3999999999999,390.1000000000002L397.0999999999999,389.8000000000002L394.7999999999999,389.70000000000016L386.8999999999999,390.60000000000014L384.8999999999999,390.10000000000014L382.7999999999999,390.70000000000016L382.2999999999999,389.40000000000015L383.1999999999999,386.8000000000001L383.39999999999986,385.60000000000014L381.9999999999999,383.8000000000001L380.89999999999986,383.10000000000014L379.1999999999999,380.5000000000001L379.89999999999986,377.4000000000001L384.39999999999986,374.1000000000001L384.89999999999986,372.50000000000006L385.1999999999999,370.80000000000007L385.9999999999999,369.4000000000001L387.1999999999999,368.30000000000007L389.09999999999985,366.20000000000005L388.59999999999985,363.50000000000006L386.09999999999985,362.20000000000005L384.89999999999986,360.1L385.59999999999985,357.8L383.79999999999984,356.3L380.79999999999984,355.40000000000003L379.09999999999985,353.1L380.89999999999986,351.70000000000005L383.4999999999999,351.50000000000006L385.6999999999999,349.70000000000005L385.7999999999999,346.6L384.1999999999999,333.1L380.1999999999999,330.3L367.89999999999986,330.5L361.6999999999999,329.8L355.7999999999999,327.2L351.9999999999999,322.3L353.9999999999999,320L356.7999999999999,318.2L358.9999999999999,315.5L361.6999999999999,313.3L364.39999999999986,311.5L366.39999999999986,308.9L366.59999999999985,306L364.09999999999985,304.3L358.1999999999999,302.1L356.39999999999986,300.20000000000005L357.4999999999999,297.20000000000005L357.39999999999986,290.40000000000003L352.79999999999984,286.50000000000006L349.89999999999986,287.40000000000003L348.4999999999999,287.00000000000006L347.9999999999999,280.20000000000005L347.2999999999999,278.50000000000006L344.6999999999999,277.50000000000006L341.6999999999999,277.30000000000007L338.9999999999999,278.4000000000001L339.39999999999986,281.80000000000007L337.4999999999999,283.1000000000001L334.2999999999999,282.6000000000001L331.1999999999999,283.2000000000001L325.09999999999985,286.0000000000001L322.49999999999983,285.5000000000001L321.3999999999998,282.9000000000001L319.1999999999998,281.4000000000001L313.29999999999984,282.7000000000001L303.39999999999986,290.4000000000001L299.09999999999985,295.1000000000001L297.29999999999984,297.9000000000001L295.1999999999998,300.30000000000007L292.29999999999984,300.70000000000005L290.89999999999986,297.80000000000007L288.79999999999984,295.30000000000007L286.09999999999985,293.30000000000007L285.59999999999985,290.4000000000001L285.89999999999986,288.7000000000001L286.39999999999986,287.7000000000001L286.59999999999985,284.3000000000001L286.79999999999984,283.3000000000001L287.99999999999983,280.40000000000015L288.3999999999998,278.50000000000017L288.2999999999998,276.50000000000017L286.8999999999998,272.20000000000016L286.7999999999998,270.10000000000014L287.2999999999998,263.0000000000001L287.9999999999998,260.9000000000001L289.5999999999998,259.0000000000001L291.2999999999998,258.2000000000001L295.0999999999998,256.9000000000001L296.2999999999998,255.8000000000001L296.69999999999976,254.7000000000001L296.7999999999998,252.5000000000001L297.4999999999998,251.40000000000012L298.2999999999998,250.80000000000013L300.2999999999998,250.10000000000014L301.19999999999976,249.50000000000014L302.19999999999976,248.20000000000013L303.69999999999976,245.10000000000014L304.69999999999976,243.80000000000013L306.2999999999998,243.20000000000013L308.0999999999998,243.40000000000012L313.5999999999998,245.40000000000012L315.3999999999998,245.80000000000013L317.2999999999998,245.80000000000013L322.69999999999976,244.20000000000013L324.9999999999998,244.20000000000013L333.4999999999998,241.00000000000014L334.89999999999975,240.10000000000014L336.19999999999976,239.00000000000014L337.2999999999998,237.60000000000014L338.0999999999998,235.70000000000013L339.6999999999998,228.10000000000014L340.5999999999998,225.50000000000014L342.2999999999998,223.40000000000015L348.19999999999976,219.70000000000016L349.7999999999998,218.00000000000017L351.19999999999976,215.50000000000017L354.9999999999998,217.40000000000018L356.9999999999998,217.90000000000018L361.39999999999975,218.00000000000017L363.19999999999976,219.30000000000018L364.19999999999976,221.30000000000018L363.89999999999975,222.90000000000018L362.59999999999974,223.90000000000018L360.2999999999997,226.40000000000018L360.39999999999975,228.80000000000018L366.4999999999998,230.40000000000018L369.39999999999975,232.2000000000002L373.7999999999997,236.7000000000002L376.4999999999997,237.1000000000002L379.2999999999997,235.6000000000002L381.2999999999997,233.4000000000002L381.1999999999997,230.9000000000002L379.7999999999997,228.8000000000002L381.1999999999997,224.20000000000022L387.4999999999997,224.3000000000002L390.4999999999997,225.4000000000002L392.7999999999997,224.1000000000002L393.1999999999997,221.1000000000002L394.5999999999997,218.4000000000002L399.79999999999967,215.3000000000002L405.8999999999997,216.5000000000002L409.0999999999997,217.9000000000002L411.99999999999966,220.0000000000002L413.5999999999997,222.2000000000002L415.99999999999966,223.30000000000018L422.69999999999965,220.50000000000017L425.5999999999996,216.10000000000016L431.2999999999996,215.60000000000016L441.0999999999996,208.30000000000015L452.7999999999996,204.50000000000014L455.6999999999996,205.90000000000015L455.59999999999957,209.10000000000014L454.09999999999957,211.90000000000015L453.6999999999996,214.90000000000015L455.3999999999996,217.70000000000016L458.09999999999957,219.50000000000017L463.8999999999996,221.60000000000016L466.59999999999957,223.80000000000015L468.6999999999996,226.60000000000016L474.4999999999996,228.80000000000015L480.7999999999996,230.50000000000014L489.2999999999996,239.60000000000014L490.89999999999964,251.40000000000015L489.2999999999996,257.90000000000015L490.5999999999996,268.00000000000017L489.39999999999964,271.20000000000016L485.89999999999964,272.10000000000014L484.19999999999965,274.40000000000015L488.69999999999965,278.3000000000001L495.39999999999964,279.10000000000014L499.0999999999996,283.5000000000001L500.69999999999965,284.3000000000001L504.0999999999996,285.2000000000001L505.89999999999964,284.8000000000001Z"
              className="sm_state_NGA2864"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.4917634341535309"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              fillOpacity="1"
            />
            <desc style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>
             Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}} />
            <text
              x="155.2251587301587"
              y="104.0572619047619"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,98.3709,65.9442)"
              className="sm_label_12"
            >
              <tspan
                dy="7.651011904761901"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kaduna
              </tspan>
            </text>
            <text
              x="155.2251587301587"
              y="104.0572619047619"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font:"bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              transform="matrix(0.3663,0,0,0.3663,98.3709,65.9442)"
              className="sm_label_49"
            >
              <tspan
                dy="7.651011904761901"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kaduna
              </tspan>
            </text>
          </svg>
          </a>
      </div>
    );
  }
}
const state = "State Info";
    const val = 55;
const kadunaData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Kaduna.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:kadunaData,
  defaultColor:"green",
  id:"kadu"
};

Kaduna.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Kaduna;
