const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCuCbtKhVGePifCSyXk5U7DGwXoGBkDrOw",
  authDomain: "kunz-sushi-35c35.firebaseapp.com",
  projectId: "kunz-sushi-35c35"
});

var db = firebase.firestore();

var menu = [
  {
    name: "Ramen",
    number: "1414",
    price: 7.5,
    type: "dish"
  },
  {
    name: "Hühnersuppe mit Cocos",
    number: "1401",
    price: 4.5,
    type: "dish"
  },
  {
    name: "Hühnersuppe",
    number: "1402",
    price: 3.5,
    type: "dish"
  },
  {
    name: "Krautsalat",
    number: "1403",
    price: 4.5,
    type: "dish"
  },
  {
    name: "Sushi Plätte",
    number: "1404",
    price: 15.5,
    type: "sushi"
  },
  {
    name: "Futo Maki",
    number: "1405",
    options: [
      "Lachs",
      "Thun",
      "Garnele",
      "Mango",
      "Gurke",
      "Avo",
      "Frischkäse"
    ],
    price: 8.5,
    type: "sushi"
  },
  {
    name: "Hoso Maki",
    number: "1411",
    options: [
      "Lachs",
      "Thun",
      "Garnele",
      "Mango",
      "Gurke",
      "Avo",
      "Frischkäse"
    ],
    price: 6.5,
    type: "sushi"
  },
  {
    name: "Ura Maki",
    number: "1406",
    options: ["Lachs", "Thun", "Garnele"],
    price: 9.5,
    type: "sushi"
  },
  {
    name: "Zen Roll",
    number: "1412",
    price: 11.5,
    type: "sushi"
  },
  {
    name: "Red Dragon Roll",
    number: "1413",
    price: 13.5,
    type: "sushi"
  },
  {
    name: "Nigiri",
    number: "1408",
    options: ["Lachs", "Thun"],
    price: 2.25,
    type: "sushi"
  },
  {
    name: "Nigiri",
    number: "1410",
    options: {
      "2": "Garnele"
    },
    price: 3.25,
    type: "sushi"
  },
  {
    name: "Sashimi",
    number: "1409",
    options: ["Lachs", "Thun"],
    price: 9.5,
    type: "sushi"
  },
  {
    name: "Roses",
    number: "1408",
    options: ["Lachs", "Thun"],
    price: 2.25,
    type: "sushi"
  },
  {
    name: "Wasser mit Sprudel (0.70)",
    number: "",
    price: 3.5,
    type: "sonstige"
  },
  {
    name: "Wasser ohne Sprudel (0.7l)",
    number: "",
    price: 3.5,
    type: "sonstige"
  },
  {
    name: "Apfelschorle (0.5l)",
    number: "",
    price: 2.5,
    type: "sonstige"
  },
  {
    name: "Cola (0.2l)",
    number: "",
    price: 2.0,
    type: "sonstige"
  },
  {
    name: "Chiemseer Helles (0.33l)",
    number: "",
    price: 2.9,
    type: "bier"
  },
  {
    name: "Chiemseer Helles (0,5l)",
    number: "",
    price: 3.1,
    type: "bier"
  },
  {
    name: "Weißbier Hirzinger(0.5l)",
    price: 3.1,
    type: "bier"
  },
  {
    name: "Weißbier Unertl Leicht",
    price: 3.1,
    type: "bier"
  },
  {
    name: "Weißbier Unertl alkoholfrei",
    price: 3.1,
    type: "bier"
  },
  {
    name: "Glas Weißwein, Chardonnay Villa Santa Flavia",
    price: 4.5,
    type: "wein"
  },
  {
    name: "Glas Rotwein, Merlot Villa Santa Flavia (0.25)",
    price: 4.5,
    type: "wein"
  },
  {
    name: "Weißweinschorle",
    price: 4.5,
    type: "wein"
  },
  {
    name: "Weißwein Crossutti (0.75l) ",
    price: 15.9,
    type: "wein"
  },
  {
    name: "Weißwein La Solca (0.75l)",
    price: 16.9,
    type: "wein"
  },
  {
    name: "Weißwein Sylvana Muschelkalk (0,75l)",
    price: 24.9,
    type: "wein"
  },
  {
    name: "Rotwein, Modello del Venzie Masi",
    price: 23.92,
    type: "wein"
  },
  {
    name: "Cremant d' Alsass (blanc de blac)",
    price: 17.9,
    type: "wein"
  },
  {
    name: "Cremant d' Alsass, rose",
    price: 19.9,
    type: "wein"
  },
  {
    name: "Temaki",
    number: "1415",
    options: ["Lachs", "Thun"],
    price: 3.5,
    type: "sushi"
  },
  {
    name: "Grüner Tee",
    price: 2.9,
    type: "sonstige"
  },
  {
    name: "Espresso",
    price: 2.0,
    type: "sonstige"
  },
  {
    name: "Glas Champagner",
    price: 9.5,
    type: "wein"
  },
  {
    name: "Champagner Rose Flasche ",
    price: 59.0,
    type: "wein"
  },
  {
    name: "Mangoschorle",
    price: 4.5,
    type: "sonstige"
  },
  {
    name: "Glas Cremant",
    price: 4.5,
    type: "wein"
  },
  {
    name: "Weißwurstfrühstück",
    price: 5.5,
    type: "dish"
  },
  {
    name: "Cappuccino ",
    price: 2.5,
    type: "sonstige"
  },
  {
    name: "Erdbeerkuchen",
    price: 3.9,
    type: "dish"
  },
  {
    name: "Green",
    price: 16.9,
    type: "wein"
  },
  {
    name: "Spezi",
    price: 2.5,
    type: "sonstige"
  },
  {
    name: "Minuty",
    price: 18.9,
    type: "wein"
  },
  {
    name: "Terlaner",
    price: 23.9,
    type: "wein"
  },
  {
    name: "Rainbow",
    number: "1407",
    options: ["Lachs", "Thun"],
    price: 11.5,
    type: "sushi"
  },
  {
    name: "SternchenMenü",
    price: 18.0,
    type: "sushi"
  },
  {
    name: "Brotzeit",
    price: 6.9,
    type: "dish"
  },
  {
    name: "Dessert",
    price: 6.5,
    type: "dish"
  }
];

menu.forEach(function(obj) {
  if (obj.options) {
    db.collection("menu")
      .add({
        name: obj.name,
        price: obj.price,
        options: obj.options,
        type: obj.type
      })
      .then(function(docRef) {
        console.log("Document written with ID:", docRef.id);
      })
      .catch(function(error) {
        console.log("Error adding document:", error);
      });
  } else {
    db.collection("menu")
      .add({
        name: obj.name,
        price: obj.price,
        type: obj.type
      })
      .then(function(docRef) {
        console.log("Document written with ID:", docRef.id);
      })
      .catch(function(error) {
        console.log("Error adding document:", error);
      });
  }
});
