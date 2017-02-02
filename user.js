var user = {
  name: 'Jeff',
  location: 'Provo',
  occupations: ['Plumber', 'Web Developer', 'Hustler', 'Astronomer'],
  hobbies: [
    {
      name: 'skiing',
      type: 'outdoors'
    },
    {
      name: 'dancing',
      type: 'indoors'
    },
    {
      name: 'hiking',
      type: 'outdoors'
    }
  ],
  family: [
    {
      name: 'Jackie',
      relation: 'wife',
      gender: 'female'
    },
    {
      name: 'Lucus',
      relation: 'son',
      gender: 'male'
    },{
      name: 'Jan',
      relation: 'daughter',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Tres Leches',
      type: 'restraunt',
      rating: 7
    },
    {
      name: 'Dairy Cow',
      type: 'fast food',
      rating: 3
    },
    {
      name: 'Uncle Mike\'s Tacos',
      type: 'fast food',
      rating: 6
    }
  ]
};

module.exports = user;
