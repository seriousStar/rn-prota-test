import _ from "lodash";

const count = 20;
const NameData = _.map(_.range(0, count), (value, index) => {
  const id = index;
  const name = `Test ${index}`;
  const date = new Date().toString();
  return {
    id,
    name,
    date,
  };
});

export { NameData };
