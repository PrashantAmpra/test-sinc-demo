// import TestTwo from '../TestTwo/script.sn';
// const TestOne: string = "asdf";
// new TestTwo().testFunc();

import { gs, GlideRecord } from "@nuvolo/servicenow-types";

export default class TestOne {
    constructor(){
        gs.info("hi");
    }
    glideTest() {
        const myGR = new GlideRecord("incident");
        myGR.query();
        myGR.next();
    }
}
