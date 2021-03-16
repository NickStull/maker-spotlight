const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/makerspotlight");

const usersSeed = [
  {
    userId: "L2FxlNluqIZVeOA1t5dXU1och6C3",
    firstName: "Nick",
    lastName: "Stull",
    email: "stull.nicholas@gmail.com",
    images: [
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615657705/testKnifeImg4.png',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg3_jdecau.jpg',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg2_hhbvdz.webp',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg1_gzlddh.jpg'
    ],
    admin: true,
    voted: -1,
    wantTo: true,
    candidate: true,
    currentVotes: 20,
    totalVotes: 100,
    businessName: 'Big Barn Knives',
    address: 'Somewhere',
    address2: '',
    city: 'Hastings',
    state: 'Minnesota',
    zipCode: 55033,

    phoneNumber: '555 - 555 - 5555',
    website: 'https://www.dawsonknives.com/',
    bioText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas.',
    active: true,
    featured: []
  },
  {
    userId: "d28jGwxVdZXYOQGzS6NbxkB3ddP2",
    firstName: "Derek",
    lastName: "Bardini",
    email: "derekbardini@gmail.com",
    images: [
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615657705/testKnifeImg4.png',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg3_jdecau.jpg',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg2_hhbvdz.webp',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg1_gzlddh.jpg'
    ],
    admin: true,
    voted: -1,
    wantTo: true,
    candidate: true,
    currentVotes: 20,
    totalVotes: 100,
    businessName: 'Bladeology',
    address: 'Somewhere',
    address2: '',
    city: 'Springfield',
    state: 'Illinois',
    zipCode: 55033,
    phoneNumber: '555 - 555 - 5555',
    website: 'https://www.dawsonknives.com/',
    bioText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas.',
    active: true,
    featured: []
  },
  {
    userId: "u5irgyagz7YT5m77Zsx8Mb51Ngs2",
    firstName: "Tim",
    lastName: "Martin",
    email: "timmartin13@gmail.com",
    images: [
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615657705/testKnifeImg4.png',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg3_jdecau.jpg',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg2_hhbvdz.webp',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg1_gzlddh.jpg'
    ],
    admin: true,
    voted: 0,
    wantTo: true,
    candidate: true,
    currentVotes: 20,
    totalVotes: 100,
    businessName: '',
    address: 'Somewhere',
    address2: '',
    city: 'Minneapolis',
    state: 'Minnesota',
    zipCode: 55033,
    phoneNumber: '555 - 555 - 5555',
    website: 'https://www.dawsonknives.com/',
    bioText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas.',
    active: true,
    featured: []
  },
  {
    userId: "x5YnUFqsuZdmBDhPuxUc4bziVoP2",
    firstName: "Hector",
    lastName: "Fernandez",
    email: "hector@email.com",
    images: [
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615657705/testKnifeImg4.png',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg3_jdecau.jpg',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg2_hhbvdz.webp',
      'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg1_gzlddh.jpg'
    ],
    admin: true,
    voted: 2,
    wantTo: true,
    candidate: false,
    currentVotes: 20,
    totalVotes: 100,
    businessName: 'The Chop Shop',
    address: 'Somewhere',
    address2: '',
    city: 'Minneapolis',
    state: 'Minnesota',
    zipCode: 55033,
    phoneNumber: '555 - 555 - 5555',
    website: 'https://www.dawsonknives.com/',
    bioText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas.',
    active: true,
    featured: []
  }
];

db.Users.remove({})
  .then(() => db.Users.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const newsLettersSeed = [
  {
    issueNumber: 1,
    firstName: 'Nick',
    lastName: 'Stull',
    email: 'stull.nicholas@gmail.com',
    businessName: 'The Chop Shop',
    address: '6347 Slicen Drive',
    city: 'Getting Away',
    state: 'Florida',
    zipCode: '32006',
    phoneNumber: '555 - 555 - 5555',
    website: 'https://www.dawsonknives.com/',
    bioText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas.',
    active: true,

    photos: [
      {
        id: 'First picture',
        link: 'https://res.cloudinary.com/makerspotlight/image/upload/v1615657705/testKnifeImg4.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis.'
      },
      {
        id: 'Second picture',
        link: 'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg3_jdecau.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 'Third picture',
        link: 'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg2_hhbvdz.webp',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas.'
      },
      {
        id: 'Fourth picture',
        link: 'https://res.cloudinary.com/makerspotlight/image/upload/v1615655489/testKnifeImg1_gzlddh.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex voluptate maxime neque fugit ab consequuntur voluptatum molestiae similique perspiciatis. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum iure consectetur temporibus eum quis eius perspiciatis voluptas.'
      },
    ],
    date: Date()
  }
];

db.Newsletters.remove({})
  .then(() => db.Newsletters.collection.insertMany(newsLettersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

