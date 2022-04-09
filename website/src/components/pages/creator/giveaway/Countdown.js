import {Component} from "react";
import styled from "styled-components";

const CountdownText = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 10px;

`;

class Countdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: this.getTime()
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: this.getTime() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getTime() {
        return Math.floor((new Date()).getTime() / 1000);
    }

    render() {
        const timeLeft = Math.max(0, this.props.endTime - this.state.time);
        return <CountdownText>{new Date(timeLeft * 1000).toISOString().substr(14, 5)}</CountdownText>
    }

}

export default Countdown;
