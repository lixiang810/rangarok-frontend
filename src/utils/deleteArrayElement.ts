/** Input an array and index of the item you want to delete,
 *  returns a new array with all items of the original array
 * except the item you want to delete. */
const deleteArrayElement = (ary: Array<any>, item: string | number) => {
  const itemnum = ary.indexOf(item);
  const changedAry = [
    ...ary.slice(0, itemnum),
    ...ary.slice(itemnum + 1, ary.length),
  ];
  return changedAry;
};

export default deleteArrayElement;
