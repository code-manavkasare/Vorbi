
const Tab = createBottomTabNavigator();
const areacode = [
  110019,
  110020,
  110021,
  110022,
  110023,
  110024,
  110025,
  110026,
  110027,
  110028,
  110019,
];
const data = [
  { type: 'health', index: 5 },
  { type: 'infrastructure', index: 7 },
  { type: 'social', index: 3 },
];
areacode.forEach((item) => {
  firestore.collection('areaCodes').doc(areacode).set({
    areacode: item,
    index: 3,
  });
  data.foreach((item) => {
    firestore
      .collection('areaCodes')
      .doc(areacode)
      .collection('parameters')
      .add({
        type: item.type,
        progress: item.progress,
      });
  });
});

const example = [
  {
    data:
      'Cleaning drive is being run in my locality,it is so nice to see people devoting their time to clean the environment',
    name: 'John Doe',
    type: 'environment',
  },
  {
    data:
      "Pfizer has made a new development in fighting the pandemic, they've successfully tested a new vaccine with an efficacy of 95%.",
    name: 'Jane Doe',
    type: 'health',
  },
  {
    data:
      'Results of the 2020 US election are here and Joe Biden is our new president!',
    name: 'John Doe',
    type: 'social',
  },
  {
    data:
      "Environment Minister - We're collecting ideas to help improve the existing policies and ensure that stringent norms can be put in place to fight climate change, and to move forward with sustainable development. Submit feedback below.",
    name: 'Jane Doe',
    type: 'environment',
  },
  {
    data:
      "Health Minister - I feel there is a need to address the fact that the corona virus is still very much prevalent and this goes out as a call to all the people to ensure that they're staying at home and following social norms. Let's fight this virus together!",
    name: 'John Doe',
    type: 'Health',
  },

  {
    data:
      'Chief Minister of Gujarat - Proud to announce the successful construction of the Statue of Unity, which is built in remembrance of Indian statesman and independence activist Vallabhbhai Patel. This will serve as a symbol of unity and sovereignty, and will attract tourism opportunities in the future!',
    name: 'Jane Doe',
    type: 'infrastructure',
  },
  {
    data:
      'Indian Government started working on low temperature storage solutions for storing and transporting Pfizer vaccine',
    name: 'Jane Doe',
    type: 'technology',
  },
];
const survey = [
  {
    type: 'Poll',
    data: 'do you support the huawei ban',
    topic: 'technology',
    list: ['yes', 'no', 'maybe', "don't know"],
  },
  {
    type: 'Rating',
    data:
      'how much do you support the Governments decision to introduce the Farmers Bill',
    topic: 'social',
    list: [],
  },
  {
    type: 'Rating',
    data: 'Rate the health facilities available in your locality',
    topic: 'health',
    list: [],
  },
  {
    type: 'Poll',
    data: 'What do you think govt needs to work on in your locality',
    topic: 'infrastructure',
    list: ['hospitals', 'roads', 'markets', 'safety'],
  },
  {
    type: 'Rating',
    data: 'Rate the cleanliness in your locality',
    topic: 'environment',
    list: [],
  },
  {
    type: 'Poll',
    data: 'Do you think demonetisation was the right step for indian economy',
    topic: 'social',
    list: ['yes', 'no', 'maybe', "don't know"],
  },
];
