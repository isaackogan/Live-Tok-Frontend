import {Component} from "react";
import styled from "styled-components";

const StatName = styled.text`
  font-family: Rubik, Arial, sans-serif;
  font-size: 12px;
  fill: #404040;
  dominant-baseline: middle;
  text-anchor: middle;
`;

const StatValue = styled.text`
  font-family: Rubik, Arial, sans-serif;
  font-size: 18px;
  fill: #404040;
  dominant-baseline: middle;
  text-anchor: middle;
  font-weight: 600;
  color: #313030;
`;

class ProgressRing extends Component {
    constructor(props) {
        super(props);
        const { radius, stroke } = this.props;
        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
    }

    render() {
        const { radius, stroke, progress } = this.props;

        const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

        return (
            <svg
                height={radius * 2}
                width={radius * 2}
            >
                <circle
                    stroke="black"
                    fill="#ccc6c7"
                    className="p1"
                    strokeDasharray={ this.circumference + ' ' + this.circumference }
                    style={ { strokeDashoffset} }
                    strokeWidth={ stroke }
                    r={ this.normalizedRadius }
                    cx={ radius }
                    cy={ radius }
                />
                <StatName x="50%" y="40%" >LEVEL</StatName>
                <StatValue x="50%" y="63%">{this.props.level}</StatValue>
            </svg>
        );
    }
}



export default ProgressRing;
