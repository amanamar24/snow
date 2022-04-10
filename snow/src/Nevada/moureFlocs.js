import { FRAME_RATE } from "./constants";

let vent = 0;


export function moureFlocs(flocs) {
    vent = Math.min(2, Math.max( -2, vent + (20 / FRAME_RATE) * (Math.random()- 0.5)));

    return flocs.map(moureFloc);
}
function moureFloc(floc) {
    const mida = floc.mida;
    let rotacio = floc.rotacio + ( 10/ FRAME_RATE ) * Math.abs(vent);
    rotacio = rotacio % 360;
    let rotacioX = floc.rotacioX + (10/ FRAME_RATE) * Math.abs(1 + vent);
    rotacioX = rotacioX % 360;
    let friccio = 1 - Math.abs( rotacio/180 -1);


    const velocitatX = mida * (10 / FRAME_RATE) * Math.random();
    let x = floc.x + velocitatX * ( 1 - friccio );
    if (x > 100) x = -10;
    const velocitatY = mida * vent * (10 / FRAME_RATE) * Math.random() * friccio;
    let y = floc.y + velocitatY;
    if (y > 110) y = -10;
    if ( y < 0) y = 110;
    return { ...floc, x, y, rotacio, rotacioX };
}
