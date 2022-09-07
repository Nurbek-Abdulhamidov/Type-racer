export default () => {
  const texts = ["test1", "test2", "test3", "test4", "test5"];
  return texts[Math.floor(Math.random() * texts.length)];
};
