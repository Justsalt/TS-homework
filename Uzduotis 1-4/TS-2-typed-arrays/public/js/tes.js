"use strict";
const numeriai = [1, 2, 3, 4, 5, 6, 7];
console.log(numeriai);
const bendraSuma = (nums) => {
    const bendraSumaReducer = (suma, nums) => suma + nums;
    return nums.reduce(bendraSumaReducer);
};
const resultatas = bendraSuma(numeriai);
console.log(numeriai, resultatas);
//# sourceMappingURL=tes.js.map