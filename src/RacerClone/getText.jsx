export default () => {
  const texts = [
    "nurbek sardor",
    "sardor azizbek",
    "Hasanboy Umar",
    "nurbek azizbek",
    "test5",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
};
