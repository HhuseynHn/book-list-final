/** @format */

export let unicCategoryList = (data) => {
  let unicList = [];

  data.forEach((e) => {
    if (!unicList.includes(e.genre)) {
      unicList.push(e.genre);
    }
  });
  return unicList;
};

