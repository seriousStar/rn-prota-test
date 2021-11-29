const validateName = (str) => {
  // validate only letters
  if (!/^[a-zA-Z\s]*$/.test(str)) return false;
  // validate only one space at least
  console.info((str.match(new RegExp(" ", "g")) || []).length);
  if ((str.match(new RegExp(" ", "g")) || []).length > 1) return false;
  return true;
};

export { validateName };
