import React, {useState, useEffect} from "react";
import LogoSVG from '../../img/globe_icon.svg';
import KidAYYSVG from '../../img/kidayy-text.svg';
import pallete from './pallete';
import {timeout, useHover} from "./helpers";
import cn from 'classnames';

import './logo.scss';

const Logo = () => {
    const [hovered, eventHandlers] = useHover();
    const [fill, setFill] = useState(pallete[pallete.length - 1])
    const [isClicked, setClick] = useState(false)
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
        <div {...eventHandlers} className={cn("logo", {'logo--clicked': isClicked})} onClick={() => setClick(isClicked => !isClicked)}/>
        <LogoSVG fill={fill} style={{
            display: 'flex',
            transition: `fill ${timeout}ms ease-in`,
            position: 'absolute',
            top: '25%',
            left: '25%',
            width: '50%',
            height: '50%'
        }}/>
        <KidAYYSVG style={{
            display: 'flex',
            position: 'absolute',
            top: '72%',
            transform: 'scale(0.37)',
            left: '-5px'
        }}/>
        </span>
};

export default Logo;
