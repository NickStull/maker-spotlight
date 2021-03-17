const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/makerspotlight");

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
    bioPicture: "https://earthsky.org/upl/2018/07/Sun-Size-Difference-Perihelion2016-Aphelion2017-Mutare-Zimbabwe-Peter-Lowenstein-1-300x300.jpg",
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

