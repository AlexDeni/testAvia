import React from "react";
import ryanAir from './../../static/ryanair.png';
import s7 from './../../static/s7.png';
import wizz from './../../static/wizz.jpg';
import plane from './../../static/defaultPlane.png';


const CompanyEmblem = carrier => {
    if(carrier.carrier === 'WIZ'){
        return <img src={wizz} alt="wizz"/>
    }
    if(carrier.carrier === 'RA'){
        return <img src={ryanAir} alt="ryanAir"/>
    }
    if(carrier.carrier === 'S7'){
        return <img src={s7} alt="s7"/>
    }
    return <img src={plane} alt="default"/>
}

export { CompanyEmblem }