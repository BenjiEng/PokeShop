(function() {
  var app = angular.module('store', ['store-directives']);

  //STORE CONTROLLER
  app.controller('StoreController', function() {
    this.products = pokemon;
  });

  //Review CONTROLLER
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

//GEMS
var pokemon = [{
 name: 'Bulbasaur',
 description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
 type: 'Grass',
 price: 110.50,
 rarity: 7,
 color: '#CCC',
 weaknesses: "Fire, Ice, Psychic",
 images: ["images/bulbasaur-01.jpg"],
 reviews: [{
  stars: 4,
  body: "I think this Bulbasaur was meh, if he could have learned Cut at level 3 I would have saved SO much time.",
  author: "GaryOak@pokemon.org",
  createdOn: 1397490980837
  }, {
  stars: 5,
  body: "Bulbasaur has been with me for a long time and I can always count on him in a tough situation!",
  author: "Ash@AKetchum.com",
  createdOn: 1397490980817
  }]
}, {
 name: 'Charmander',
 description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
 type: "Fire",
 price: 200.90,
 rarity: 8,
 color: '#EEE',
 weaknesses: "Water, Rock",
 images: ["images/charmander-01.jpg"],
 reviews: [{
  stars: 2,
  body: "I had a friend evolve one and he just stopped listening to him because he didn't have enough badges.",
  author: "Brock@GeoDudes.gov",
  createdOn: 1397490980827
  }, {
  stars: 3,
  body: "Ember is a really good ability in the early stages.",
  author: "Lance@Elite4.com",
  createdOn: 1397490980847
  }]
}, {
 name: 'Squirtle',
 description: "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
 type: "Water",
 price: 150.25,
 rarity: 4,
 color: '#000',
 weaknesses: "Electic, Water",
 images: ["images/squirtle-01.jpg"],
 reviews: [{
  stars: 1,
  body: "My friend picked on up off of some goon squad, but he's still no match for Starmie.",
  author: "Misty@CeruleanCity.gov",
  createdOn: 1397490980837
  }, {
  stars: 4,
  body: "He's my big bro and I'll always support him.",
  author: "Squirtle@SquirtleSquad.org",
  createdOn: 1397490980837
  }, {
  stars: 3,
  body: "Probably a safe starting pokemon",
  author: "ProfessorOak@Tofu.com",
  createdOn: 1397490980837
  }]
}, {
  name: 'Caterpie',
  description: "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
  type: "Bug",
  price: 150.25,
  rarity: 2,
  color: '#000',
  weaknesses: "Fire, Flying, Rock",
  images: ["images/caterpie-01.jpg"],
  reviews: [{
   stars: 4,
   body: "He'll always be my friend @_@.",
   author: "Ash@Ketchum.com",
   createdOn: 1397490980837
 }]
}, {
  name: 'Weedle',
  description: "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
  type: "Bug",
  price: 150.50,
  rarity: 2,
  color: '#000',
  weaknesses: "Fire, Flying, Rock",
  images: ["images/weedle-01.jpg"],
  reviews: [{
   stars: 2,
   body: "He's like the better version of Caterpie.",
   author: "BugCatcher@BugType.com",
   createdOn: 1397490980837
 }]
}];

})();
