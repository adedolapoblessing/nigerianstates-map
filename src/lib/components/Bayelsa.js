import React, { Component } from "react";

class Bayelsa extends Component {
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
        <a href="javascript:void(0)" class="tip">
          <span id={this.state.id} ref={this.myRef1}>Bayelsa State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="82.07331191904076 262.807860349527 42.79583647937878 34.777136443803116"
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
              strokeWidth="0.3164744595149201"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M338,785.3L337.5,785.9L336.2,789.4L335.7,793.1999999999999L336.2,795.9999999999999L335.9,796.6999999999999L335.7,799.4L334.9,797.5L334.59999999999997,796.4L334.4,791.3L334,790.1999999999999L333.3,791.3L332.2,792L332.7,793.2L332.8,797.1L333.1,798.4L334.1,800.1999999999999L334.8,801.9L335.6,804.6999999999999L335.70000000000005,805.6999999999999L335.00000000000006,806.5999999999999L334.20000000000005,806.8999999999999L331.6,806.8999999999999L329.3,807.0999999999999L328.8,806.5999999999999L327.90000000000003,803.8999999999999L327.70000000000005,801.2999999999998L327.80000000000007,797.4999999999999L327.4000000000001,794.4999999999999L326.2000000000001,792.2999999999998L323.6000000000001,792.5999999999998L326.00000000000006,794.3999999999997L326.80000000000007,797.2999999999997L326.50000000000006,800.6999999999997L325.40000000000003,803.9999999999997L325.20000000000005,806.7999999999996L321.1,807.6999999999996L316.3,807.2999999999996L314,805.6999999999996L311.8,806.2999999999996L312.40000000000003,807.7999999999996L311.00000000000006,808.2999999999996L308.90000000000003,808.4999999999997L307.40000000000003,808.8999999999996L305.8,809.5999999999997L302,809.6999999999997L300.3,810.2999999999997L298.40000000000003,807.9999999999998L300.1,804.3999999999997L305.5,798.2999999999997L303.2,797.9999999999998L302.59999999999997,798.2999999999997L299.7,801.6999999999997L299.3,797.1999999999997L298,793.0999999999997L297.5,793.0999999999997L297.4,794.7999999999997L297.59999999999997,796.8999999999997L297.9,798.9999999999998L297.09999999999997,798.7999999999997L296.09999999999997,797.9999999999998L294.59999999999997,797.6999999999998L295.49999999999994,799.5999999999998L296.3999999999999,800.8999999999997L296.99999999999994,802.2999999999997L296.8999999999999,804.4999999999998L296.2999999999999,806.1999999999998L295.6999999999999,807.3999999999999L293.9999999999999,808.4999999999999L294.0999999999999,809.6999999999999L295.19999999999993,809.3L296.3999999999999,809.6999999999999L295.8999999999999,810.4999999999999L293.49999999999994,811.2999999999998L290.49999999999994,811.3999999999999L288.3999999999999,810.8999999999999L287.19999999999993,811.9999999999999L285.8999999999999,811.4999999999999L285.0999999999999,810.6999999999999L284.8999999999999,809.4999999999999L284.8999999999999,807.9999999999999L285.2999999999999,806.5999999999999L286.3999999999999,804.5999999999999L286.5999999999999,803.3999999999999L284.8999999999999,803.9999999999999L284.8999999999999,802.6999999999999L285.19999999999993,800.4L283.49999999999994,800.1L282.49999999999994,799.7L281.3999999999999,800L281.19999999999993,800.8L281.3999999999999,802.0999999999999L282.0999999999999,803.9999999999999L281.69999999999993,805.0999999999999L282.79999999999995,806.9999999999999L283.19999999999993,808.2999999999998L282.99999999999994,810.0999999999998L282.29999999999995,809.9999999999998L281.4,809.0999999999998L280.09999999999997,808.5999999999998L278.29999999999995,808.4999999999998L277.59999999999997,808.0999999999998L277.49999999999994,805.0999999999998L278.09999999999997,804.6999999999998L276.9,802.7999999999998L276.9,799.9999999999999L276.4,799.9999999999999L275.79999999999995,802.7999999999998L274.09999999999997,801.6999999999998L275.29999999999995,804.4999999999998L275.59999999999997,805.8999999999997L274.59999999999997,806.8999999999997L273.4,806.6999999999997L272.09999999999997,805.8999999999997L270.4,804.4999999999998L268.7,803.8999999999997L266.8,802.3999999999997L265.8,800.3999999999997L266.7,798.2999999999997L265.8,798.1999999999997L264.90000000000003,799.0999999999997L264.50000000000006,799.9999999999997L263.1000000000001,798.5999999999997L259.7000000000001,796.6999999999997L259.3000000000001,795.6999999999997L261.0000000000001,796.5999999999997L260.4000000000001,795.4999999999997L259.4000000000001,794.9999999999997L257.0000000000001,794.2999999999996L255.30000000000013,792.2999999999996L254.60000000000014,791.4999999999997L252.40000000000015,789.1999999999997L251.90000000000015,788.7999999999997L244.10000000000014,781.5999999999997L241.80000000000013,778.2999999999997L241.0000000000001,774.7999999999997L242.2000000000001,775.3999999999997L242.2000000000001,773.7999999999997L238.6000000000001,771.5999999999997L237.6000000000001,769.8999999999996L237.2000000000001,768.5999999999997L235.1000000000001,764.9999999999997L237.0000000000001,765.6999999999997L236.30000000000013,763.6999999999997L233.70000000000013,760.6999999999997L231.40000000000012,754.1999999999997L230.6000000000001,750.2999999999997L230.2000000000001,748.9999999999998L229.1000000000001,746.7999999999997L228.7000000000001,745.5999999999997L228.2000000000001,743.4999999999997L227.1000000000001,741.9999999999997L226.8000000000001,740.6999999999997L227.2000000000001,739.6999999999997L228.2000000000001,739.2999999999997L229.5000000000001,739.3999999999997L230.80000000000013,739.7999999999997L231.70000000000013,740.5999999999997L233.20000000000013,742.6999999999997L234.20000000000013,743.2999999999997L232.90000000000012,739.9999999999998L235.20000000000013,741.8999999999997L238.40000000000012,743.9999999999998L242.20000000000013,745.2999999999997L246.40000000000012,747.5999999999997L248.0000000000001,748.7999999999997L250.0000000000001,749.0999999999997L251.5000000000001,748.8999999999996L252.80000000000013,748.9999999999997L255.80000000000013,747.3999999999996L258.60000000000014,745.3999999999996L260.20000000000016,744.8999999999996L261.70000000000016,744.1999999999996L263.3000000000002,743.6999999999996L264.8000000000002,743.9999999999995L267.4000000000002,743.4999999999995L269.7000000000002,742.2999999999995L272.4000000000002,738.3999999999995L273.5000000000002,737.8999999999995L276.30000000000024,740.3999999999995L278.10000000000025,741.3999999999995L279.80000000000024,742.1999999999995L282.0000000000002,742.4999999999994L283.4000000000002,741.6999999999995L285.8000000000002,738.3999999999995L286.50000000000017,738.0999999999996L289.50000000000017,738.6999999999996L290.6000000000002,738.4999999999995L292.3000000000002,736.9999999999995L294.4000000000002,736.3999999999995L295.3000000000002,735.8999999999995L295.70000000000016,734.9999999999995L295.60000000000014,734.2999999999995L294.8000000000001,732.9999999999995L294.60000000000014,732.0999999999996L295.3000000000001,730.0999999999996L296.8000000000001,729.4999999999995L300.3000000000001,729.5999999999996L301.8000000000001,729.1999999999996L302.0000000000001,728.6999999999996L302.2000000000001,726.4999999999995L302.6000000000001,725.6999999999996L304.00000000000006,724.1999999999996L305.6000000000001,722.9999999999995L306.9000000000001,722.5999999999996L317.7000000000001,720.8999999999995L319.0000000000001,720.1999999999995L318.9000000000001,718.3999999999995L326.6000000000001,719.0999999999996L329.00000000000006,721.8999999999995L329.40000000000003,722.6999999999995L329.20000000000005,723.6999999999995L327.90000000000003,724.9999999999994L326.3,725.2999999999994L325.2,727.5999999999993L322.4,731.0999999999993L320.4,732.5999999999993L318.59999999999997,734.2999999999994L317.4,736.9999999999994L317,740.7999999999994L316.3,742.5999999999993L314.8,743.2999999999994L314.3,744.0999999999993L313.8,745.7999999999994L313.40000000000003,747.8999999999994L313.40000000000003,749.5999999999995L314.00000000000006,751.4999999999994L315.1000000000001,753.0999999999995L313.6000000000001,754.6999999999995L312.80000000000007,756.4999999999994L312.6000000000001,757.6999999999995L310.9000000000001,760.1999999999995L310.0000000000001,763.0999999999995L309.9000000000001,766.4999999999994L311.80000000000007,768.9999999999994L313.00000000000006,769.5999999999995L314.20000000000005,769.6999999999995L314.90000000000003,770.6999999999995L314.50000000000006,772.2999999999995L315.40000000000003,774.7999999999995L318.00000000000006,774.5999999999995L324.90000000000003,771.9999999999994L330.00000000000006,775.1999999999995L330.70000000000005,778.1999999999995L332.00000000000006,780.9999999999994L334.30000000000007,782.7999999999994L337.00000000000006,783.9999999999994L338.00000000000006,785.2999999999994Z"
              class="sm_state_NGA2845"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.2190794445992034"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              fillOpacity="1"
            />
            <desc style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}>
             Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}} />
            <text
              x="102.37242063492063"
              y="282.3940476190476"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.8765,178.9616)"
              class="sm_label_31"
            >
              <tspan
                dy="7.612797619047626"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Bayelsa
              </tspan>
            </text>
          </svg>
        </a>
      </div>
    );
  }
}

export default Bayelsa;
