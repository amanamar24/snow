import { NUM_FLOCS_INICIAL } from "./constants";

export function crearFlocs() {

    const flocs = [];
    for (let i = 0; i < NUM_FLOCS_INICIAL; i++) {
        flocs.push(crearFloc());
    }
    return flocs;
}
function crearFloc() {
    return {
        x: -10 - 100 * Math.random(),
        y: -10 + 120 * Math.random(),
        mida: Math.random() * .9 + .1,
        rotacio: Math.random() * 360,
        rotacioX: Math.random() * 360,
    };
}
