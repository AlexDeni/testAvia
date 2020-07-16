import React from "react";
import ryanAir from './../../static/ryanair.png';
import s7 from './../../static/s7.png';
import wizz from './../../static/wizz.jpg';
import plane from './../../static/defaultPlane.png';

const CompanyEmblem = carrier => {
    switch (carrier.carrier) {
        case 'WIZ':
            return <img src={wizz} alt="wizz"/>
        case 'RA':
            return <img src={ryanAir} alt="ryanAir"/>
        case 'S7':
            return <img src={s7} alt="s7"/>
        default:
            return <img src={plane} alt="plane"/>
    }
}

export { CompanyEmblem }