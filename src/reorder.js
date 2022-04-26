/* eslint-disable no-restricted-syntax */
const reorder = (obj) => {
  let count = 0;
  obj.forEach(() => {
    if (count === 0) {
      obj[count].id = 1;
    } else {
      obj[count].id = obj[count - 1].id + 1;
    }
    count += 1;
  });
};

export default reorder;
