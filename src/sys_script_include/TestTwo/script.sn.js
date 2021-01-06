import TestThree from "../TestThree/script.sn";

export default class TestTwo extends TestThree {
  testFunc() {
    let arr = [1, 2, 3];
    gs.info([...arr, 4, 5, 6]);
  }
}
