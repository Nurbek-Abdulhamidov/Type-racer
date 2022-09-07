export default () => {
  const texts = [
    "Life is a beautiful journey that is meant to be embraced to the fullest every day. However, that doesn't mean you always wake up ready to seize the day, and sometimes need a reminder that life is a great gift.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
    "Sing like no one's listening, love like you've never been hurt, dance like nobody's watching, and live like it's heaven on earth.",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
};
