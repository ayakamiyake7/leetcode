"use strict";
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target == nums[i]) {
      return i;
    } else {
      return -1;
    }
  }
};
