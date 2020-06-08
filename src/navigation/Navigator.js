import React from 'react';
import { Pages } from "./Pages";
import Me from "../component/Me";
import About from '../component/About';

export const Navigator = (route) => {
    switch (route) {
        case Pages.Main:
            return <Me/>    
        case Pages.About:
            return <About/>
        default:
            return <Me/>
    }
}