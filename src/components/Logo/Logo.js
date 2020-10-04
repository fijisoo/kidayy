import React, {useState, useEffect} from "react";
import LogoSVG from '../../img/globe_icon.svg';
import pallete from './pallete';
import {timeout, useHover} from "./helpers";

const Logo = () => {
    const [hovered, eventHandlers] = useHover();
    const [fill, setFill] = useState(pallete[pallete.length - 1])
    useEffect(() => {
        let counter = 0;
        const intervalRef = hovered ? setInterval(() => {
            if (counter >= pallete.length) {
                counter = 0;
            }
            console.log(pallete[counter])
            setFill(pallete[counter]);
            counter = counter + 1;

        }, timeout) : null;

        return () => {
            clearInterval(intervalRef);
            setFill(pallete[pallete.length - 1]);
        }
    }, [hovered]);

    return <span style={{display: "flex", position: 'relative', height: '100px', width: '100px'}}>
        <div {...eventHandlers} style={{
            display: "flex",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: 'transparent',
            zIndex: '9999',
        }}/>
        <LogoSVG fill={fill} style={{
            display: 'flex',
            transition: `fill ${timeout}ms ease-in`,
            position: 'absolute',
            top: '15%',
            left: '15%',
            width: '70%',
            height: '70%'
        }}/>
        </span>
};

export default Logo;
