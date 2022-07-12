// TODO Add a couple lines about each project


const data = [
  {
    title: 'Recovery of Missing Data in Sensor Networks using Graph Signal Processing',
    subtitle: '2022 EUSIPCO',
    image: '/images/projects/nearestdollar.jpg',
    date: '2022-11-20',
    desc:
      'Description: Wireless sensor networks are among the most promising technologies of the current era because of their small size, lower cost, and ease of deployment. With the increasing number of wireless sensors, the probability of generating missing data also rises. This incomplete data could lead to disastrous consequences if used for decision-making. There is rich literature dealing with this problem. However, most approaches show performance degradation when a sizable amount of data is lost. Inspired by the emerging field of graph signal processing, this paper performs a new study of a Sobolev reconstruction algorithm in wireless sensor networks.'
      + 'Outcome: Experimental comparisons on several publicly available datasets demonstrate that the algorithm surpasses multiple state-of-the-art techniques by a maximum margin of 54 %. We further show that this algorithm consistently retrieves the missing data even during massive data loss situations.'
  },
  {
    title: 'Harvest',
    subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
    link: 'https://devpost.com/software/harvest',
    image: '/images/projects/harvest.jpg',
    date: '2015-09-20',
    desc:
      'Won ~ $7000 in prizes for an advanced, low cost monitoring solution '
      + 'for crops. Harvest was designed to catch irrigation leaks, overwatering, '
      + 'and nutrient deficiencies at an affordable price for the developing world.',
  },
  {
    title: 'Space Potato',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: 'http://www.spacepotato.org',
    image: '/images/projects/spacepotato.jpg',
    date: '2015-06-28',
    desc:
      'Launched a potato battery powered weather balloon with two cameras '
      + 'and gps transponder. Resulting photos were published in a coffee table book. '
      + 'You can email me for a copy.',
  },
  {
    title: 'Cat Detector',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    date: '2015-05-15',
    desc:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
      + 'Over 60,000 cats were classified before server bills made the project too expensive '
      + 'to continue hosting.',
  },
];

export default data;
