import React, {Component, useEffect, useState} from "react";
import styled from "styled-components";

const StatName = styled.text`
  font-family: Rubik, Arial, sans-serif;
  font-size: 40px;
  fill: #000000;
  dominant-baseline: middle;
  text-anchor: middle;
`;

const StatValue = styled.text`
  font-family: Rubik, Arial, sans-serif;
  font-size: 50px;
  fill: #000000;
  dominant-baseline: middle;
  text-anchor: middle;
  font-weight: 600;
  color: #313030;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: center;
  margin-top: 4%;
  font-family: Rubik, sans-serif;
  flex-direction: row;
  filter: drop-shadow(0 0 10px rgba(50, 50, 50, .7));
  
`;


/**
 *
 * Citation
 * ---------------
 * Via Codepen: https://codepen.io/jeremenichelli/pen/gGWPme
 *
 */
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
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke="#000000"
                    fill="rgba(255, 250, 250, 1)"
                    className="p1"
                    strokeDasharray={ this.circumference + ' ' + this.circumference }
                    style={ { strokeDashoffset} }
                    strokeWidth={ stroke }
                    r={ this.normalizedRadius }
                    cx={ radius }
                    cy={ radius }
                />
                <StatName x="50%" y="45%" >LEVEL</StatName>
                <StatValue x="50%" y="63%">{this.props.level}</StatValue>
            </svg>
        );
    }
}


class RingGraphic extends Component {
    finishedGrowth = false;

    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            level: 5 *  Math.floor(Math.random() * (10 - 1 + 1) + 1),
            percent: -1
        };
    }

    componentDidMount() {

        const interval = setInterval(() => {
            if (this.state.progress >= (this.props.max || 100)) {
                clearInterval(interval);
                setTimeout(() => {
                    this.finishedGrowth = true;
                    document.addEventListener('scroll', (e) => {
                        let h = document.documentElement,
                            b = document.body,
                            st = 'scrollTop',
                            sh = 'scrollHeight';

                        this.setState({percent: (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100});
                    });
                }, 1000);
                return;
            }

            this.setState({ progress: this.state.progress + 5, level: this.state.level + 1});
        }, 100);

    }

    render() {
        let progress = this.state.progress;
        if (this.state.percent > -1) {
            progress = Math.max(20, 100 - this.state.percent);
        }

        return (
            <HomeContainer>
                <ProgressRing
                    radius={ 150 }
                    stroke={ 10 }
                    progress={ progress }
                    level={this.state.level}
                />
            </HomeContainer>
        );
    }
}


export default RingGraphic;

