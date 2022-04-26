/* eslint-disable no-restricted-syntax */
const reorder = (obj) => {
  for (const task of [...obj]) {
    if (task === 0) {
      obj[task].id = 1;
    } else {
      obj[task].id = obj[task - 1].id + 1;
    }
  }
};

export default reorder;
