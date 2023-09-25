function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((num, index) => num === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  if ((gender !== "мужской" && gender !== "женский") || users.length === 0)
    return 0;

  let result =
    users
      .filter((item) => item.gender == gender)
      .reduce((sum, cur) => (sum += cur.age), 0) /
    users.filter((item) => item.gender == gender).length;

  return result;
}
