import Particles from "react-tsparticles";
import {Component} from "react";

class Particulate extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const color1 = this.props.color1 || "rgb(141, 141, 141)",
            color2 = this.props.color2 || "#a5a5a5";

        return (
            <Particles id="particulate"
                       options={{
                           fps_limit: 60,
                           interactivity: {
                               detect_on: "canvas",
                               events: {
                                   resize: true
                               }
                           },
                           particles: {
                               color: { value: color1 },
                               line_linked: {
                                   color: color2,
                                   distance: 150,
                                   enable: true,
                                   opacity: 0.4,
                                   width: 1
                               },
                               move: {
                                   attract: { enable: false, rotateX: 600, rotateY: 1200 },
                                   bounce: false,
                                   direction: "none",
                                   enable: true,
                                   out_mode: "out",
                                   random: false,
                                   speed: 0.5,
                                   straight: false
                               },
                               number: { density: { enable: true, value_area: 800 }, value: 100 },
                               opacity: {
                                   anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
                                   random: false,
                                   value: 0.5
                               },
                               size: {
                                   anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                                   random: true,
                                   value: 7
                               }
                           },
                           polygon: {
                               draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
                               move: { radius: 10 },
                               scale: 1,
                               type: "none",
                               url: ""
                           },
                           retina_detect: true
                       }}/>

        )
    }

}

export default Particulate;
