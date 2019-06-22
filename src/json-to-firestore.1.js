const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCuCbtKhVGePifCSyXk5U7DGwXoGBkDrOw",
  authDomain: "kunz-sushi-35c35.firebaseapp.com",
  projectId: "kunz-sushi-35c35"
});

var db = firebase.firestore();

var History = [
  
    
     
      {
        "doneTime" : "2019-6-5 11:42",
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Avo", "Frischkäse" ],
        "orderTime" : "2019-6-5 10:1",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 11:40",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-5 10:0",
        "price" : 15.5,
        "quantity" : "3",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 11:42",
        "name" : "Hoso Maki",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 11:31",
        "price" : 6.5,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 11:42",
        "name" : "Hoso Maki",
        "options" : [ "Avo" ],
        "orderTime" : "2019-6-5 11:31",
        "price" : 6.5,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 11:51",
        "price" : 2.25,
        "quantity" : "3",
        "status" : "paid"
      },
      {
        "name" : "Nigiri",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-5 11:51",
        "price" : 2.25,
        "quantity" : "3",
        "status" : "paid"
      },
      {
        "name" : "Weißwein La Solca (0.75l)",
        "orderTime" : "2019-6-5 11:50",
        "price" : 16.9,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Rainbow",
        "orderTime" : "2019-6-5 11:50",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-5 11:50",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-5 11:58",

        "price" : 3.5,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-5 12:50",
        "name" : "Sashimi",
        "options" : [ "Thun", "Lachs" ],
        "orderTime" : "2019-6-5 11:59",

        "price" : 9.5,
        "quantity" : "1",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-5 12:50",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 11:59",

        "price" : 2.25,
        "quantity" : "5",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-5 12:50",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 12:0",

        "price" : 2.25,
        "quantity" : "1",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-5 12:50",
        "name" : "Rainbow",
        "orderTime" : "2019-6-5 12:1",

        "price" : 11.5,
        "quantity" : "1",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-5 13:11",
        "name" : "Sashimi",
        "options" : [ "Lachs", "Thun" ],
        "orderTime" : "2019-6-5 12:49",

        "price" : 9.5,
        "quantity" : "1",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-5 13:11",
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-5 12:48",

        "price" : 13.5,
        "quantity" : "1",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-5 12:51",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 13:2",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-5 12:53",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Gurke", "Avo", "Frischkäse" ],
        "orderTime" : "2019-6-5 13:1",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 13:45",
        "name" : "Futo Maki",
        "options" : [ "Thun", "Frischkäse", "Avo" ],
        "orderTime" : "2019-6-5 13:39",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 13:45",
        "name" : "Ura Maki",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-5 13:38",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 17:0",
        "name" : "Rainbow",
        "orderTime" : "2019-6-5 16:48",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 16:55",
        "name" : "Futo Maki",
        "options" : [ "Garnele", "Gurke", "Avo" ],
        "orderTime" : "2019-6-5 16:47",
        "price" : 10.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 17:28",
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Frischkäse", "Gurke" ],
        "orderTime" : "2019-6-5 16:49",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 17:28",
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-5 16:48",
        "price" : 13.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 16:55",
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Avo", "Mango" ],
        "orderTime" : "2019-6-5 16:47",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 17:5",
        "name" : "Zen Roll",
        "orderTime" : "2019-6-5 16:48",
        "price" : 11.5,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 17:20",
        "name" : "Rainbow",
        "orderTime" : "2019-6-5 16:55",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 17:21",
        "name" : "Sashimi",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-5 16:55",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 17:15",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-5 16:55",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 17:23",
        "name" : "Futo Maki",
        "options" : [ "Thun", "Gurke", "Avo" ],
        "orderTime" : "2019-6-5 16:56",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Futo Maki",
        "orderTime" : "2019-6-5 17:41",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Rainbow",
        "orderTime" : "2019-6-5 17:41",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Garnele" ],
        "orderTime" : "2019-6-5 17:41",
        "price" : 10.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-5 17:41",
        "price" : 13.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Futo Maki",
        "orderTime" : "2019-6-5 17:41",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Champagner Rose Flasche ",
        "orderTime" : "2019-6-5 17:44",
        "price" : 59,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Sashimi",
        "orderTime" : "2019-6-5 17:45",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 17:45",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Nigiri",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-5 17:45",
        "price" : 2.25,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 17:59",
        "name" : "Rainbow",
        "orderTime" : "2019-6-5 17:48",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 17:47",
        "price" : 2.25,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Nigiri",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-5 17:47",
        "price" : 2.25,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Nigiri",
        "orderTime" : "2019-6-5 17:51",
        "price" : 3.25,
        "quantity" : "4",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Sashimi",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 18:23",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 18:23",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Nigiri",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-5 18:23",
        "price" : 2.25,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "name" : "Hühnersuppe mit Cocos",
        "orderTime" : "2019-6-5 18:43",

        "price" : 4.5,
        "quantity" : "2",
        "status" : "open",
        "table" : "",
        "type" : "dish"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-5 18:42",

        "price" : 4.5,
        "quantity" : "2",
        "status" : "open",
        "table" : "",
        "type" : "wein"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-5 16:52",

        "price" : 3.5,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-5 18:45",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-5 18:43",

        "price" : 15.5,
        "quantity" : "2",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-5 18:42",

        "price" : 3.5,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-5 18:49",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 18:49",
        "price" : 2.25,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:49",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 18:49",
        "price" : 2.25,
        "quantity" : "5",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 18:49",
        "name" : "Sashimi",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-5 18:49",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Glas Weißwein, Chardonnay Villa Santa Flavia",
        "orderTime" : "2019-6-5 19:14",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 20:24",
        "name" : "Rainbow",
        "orderTime" : "2019-6-5 20:9",
        "price" : 11.5,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-5 20:10",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Chiemseer Helles (0.33l)",
        "orderTime" : "2019-6-5 20:11",
        "price" : 2.9,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-5 20:13",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "name" : "Chiemseer Helles (0.33l)",
        "orderTime" : "2019-6-5 20:12",
        "price" : 2.9,
        "quantity" : "1",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-5 20:22",
        "name" : "Rainbow",
        "orderTime" : "2019-6-5 20:12",
        "price" : 11.5,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-5 20:17",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid"
      },
      {
        "doneTime" : "2019-6-7 16:45",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-7 16:2",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-7 16:49",
        "name" : "Nigiri",
        "orderTime" : "2019-6-7 16:20",
        "price" : 3.25,
        "quantity" : "5",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-7 16:49",
        "name" : "Futo Maki",
        "options" : [ "Mango", "Frischkäse" ],
        "orderTime" : "2019-6-7 16:48",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Chiemseer Helles (0,5l)",
        "orderTime" : "2019-6-8 12:33",

        "price" : 3.1,
        "quantity" : "2",
        "status" : "open",
        "table" : "",
        "type" : "bier"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-8 12:33",

        "price" : 3.1,
        "quantity" : "2",
        "status" : "open",
        "table" : "",
        "type" : "bier"
      },
      {
        "name" : "Weißwurstfrühstück",

        "price" : 5.5,
        "quantity" : "2",
        "status" : "open",
        "table" : "",
        "type" : "dish"
      },
      {
        "name" : "Chiemseer Helles (0,5l)",
        "orderTime" : "2019-6-8 12:35",
        "price" : 3.1,
        "quantity" : "2",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-8 12:35",
        "price" : 3.1,
        "quantity" : "2",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Weißwurstfrühstück",
        "orderTime" : "2019-6-8 12:35",
        "price" : 5.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Weißwurstfrühstück",
        "orderTime" : "2019-6-8 12:37",
        "price" : 5.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Weißwurstfrühstück",
        "orderTime" : "2019-6-8 12:37",
        "price" : 5.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Cappuccino ",
        "orderTime" : "2019-6-8 12:37",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-8 12:37",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-8 12:37",
        "price" : 3.1,
        "quantity" : "3",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-8 12:38",
        "price" : 3.1,
        "quantity" : "2",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Weißwurstfrühstück",
        "orderTime" : "2019-6-8 12:39",
        "price" : 5.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Chiemseer Helles (0,5l)",
        "orderTime" : "2019-6-8 12:39",
        "price" : 3.1,
        "quantity" : "2",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-8 12:39",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Chiemseer Helles (0,5l)",
        "orderTime" : "2019-6-8 12:40",
        "price" : 3.1,
        "quantity" : "2",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-8 12:41",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Cappuccino ",
        "orderTime" : "2019-6-8 12:41",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Champagner Rose Flasche ",
        "orderTime" : "2019-6-8 12:50",
        "price" : 59,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Erdbeerkucheb",
        "orderTime" : "2019-6-8 13:0",
        "price" : 3.9,
        "quantity" : "3",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Erdbeerkucheb",
        "orderTime" : "2019-6-8 13:1",
        "price" : 3.9,
        "quantity" : "2",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Champagner Rose Flasche ",
        "orderTime" : "2019-6-8 13:31",
        "price" : 59,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Glas Weißwein, Chardonnay Villa Santa Flavia",
        "orderTime" : "2019-6-10 9:32",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-10 9:34",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-10 9:32",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-10 9:34",
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Mango" ],
        "orderTime" : "2019-6-10 9:33",
        "price" : 8.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Erdbeerkuchen",
        "orderTime" : "2019-6-10 9:32",
        "price" : 3.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-10 17:33",
        "name" : "Futo Maki",
        "options" : [ "Garnele", "Gurke" ],
        "orderTime" : "2019-6-10 10:44",
        "price" : 10.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-10 10:45",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Chiemseer Helles (0.33l)",
        "orderTime" : "2019-6-10 10:45",
        "price" : 2.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Ramen",
        "orderTime" : "2019-6-10 10:45",
        "price" : 7.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-10 17:36",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-10 17:34",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-10 17:36",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-10 17:34",
        "price" : 2.25,
        "quantity" : "9",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "name" : "Cappuccino ",
        "orderTime" : "2019-6-10 17:46",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Espresso",
        "orderTime" : "2019-6-10 17:46",
        "price" : 2,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-10 17:59",
        "name" : "Hoso Maki",
        "options" : [ "Thun", "Frischkäse" ],
        "orderTime" : "2019-6-10 17:46",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "name" : "Chiemseer Helles (0,5l)",
        "orderTime" : "2019-6-10 17:58",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "doneTime" : "2019-6-10 17:59",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-10 17:58",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-10 17:59",
        "name" : "Futo Maki",
        "options" : [ "Garnele", "Lachs" ],
        "orderTime" : "2019-6-10 17:58",
        "price" : 10.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-11 14:10",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-11 14:10",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-11 14:10",
        "name" : "Hoso Maki",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-11 14:10",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-11 14:10",
        "name" : "Rainbow",
        "orderTime" : "2019-6-11 14:10",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 11:8",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-11 14:48",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 10:58",
        "name" : "Futo Maki",
        "options" : [ "Thun", "Avo", "Frischkäse" ],
        "orderTime" : "2019-6-11 14:49",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-12 8:6",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Apfelschorle (0.5l)",
        "orderTime" : "2019-6-12 8:6",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Cola (0.2l)",
        "orderTime" : "2019-6-12 8:7",
        "price" : 2,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-12 11:8",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 10:44",

        "price" : 15.5,
        "quantity" : "1",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 11:28",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 11:26",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 11:28",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 10:48",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-12 10:49",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Cappuccino ",
        "orderTime" : "2019-6-12 10:49",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-12 11:34",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 11:28",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 12:54",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 11:29",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 13:17",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 13:8",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:13",
        "name" : "Nigiri",
        "orderTime" : "2019-6-12 14:16",
        "price" : 2.25,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:13",
        "name" : "Nigiri",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-12 14:16",
        "price" : 2.25,
        "quantity" : "8",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:5",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 14:15",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:8",
        "name" : "Nigiri",
        "orderTime" : "2019-6-12 14:16",
        "price" : 3.25,
        "quantity" : "6",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:13",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 14:16",
        "price" : 2.25,
        "quantity" : "10",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:5",
        "name" : "Nigiri",
        "orderTime" : "2019-6-12 14:16",
        "price" : 2.25,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:13",
        "name" : "Sashimi",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 14:16",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 16:40",
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-12 16:13",
        "price" : 13.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 16:45",
        "name" : "Roses",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 16:13",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 16:19",
        "name" : "Futo Maki",
        "options" : [ "Avo", "Gurke", "Lachs" ],
        "orderTime" : "2019-6-12 16:12",
        "price" : 8.5,
        "quantity" : "4",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 16:22",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 16:13",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 16:30",
        "name" : "Zen Roll",
        "orderTime" : "2019-6-12 16:13",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:27",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 17:9",
        "price" : 11.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:27",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 17:9",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Apfelschorle (0.5l)",
        "orderTime" : "2019-6-12 17:7",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-12 17:8",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Cola (0.2l)",
        "orderTime" : "2019-6-12 17:18",
        "price" : 2,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-12 17:40",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 17:23",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:40",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 17:23",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Weißwein La Solca (0.75l)",
        "orderTime" : "2019-6-12 17:22",
        "price" : 16.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-12 17:40",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 17:24",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:40",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 17:24",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:9",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 17:34",
        "price" : 2.25,
        "quantity" : "6",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:59",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 17:35",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:58",
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Frischkäse", "Mango" ],
        "orderTime" : "2019-6-12 17:35",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:2",
        "name" : "Sashimi",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 17:33",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:0",
        "name" : "Sashimi",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-12 17:34",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:2",
        "name" : "Hoso Maki",
        "options" : [ "Gurke", "Avo", "Thun" ],
        "orderTime" : "2019-6-12 17:34",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:51",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 17:40",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 17:51",
        "name" : "Temaki",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 17:40",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Chiemseer Helles (0,5l)",
        "orderTime" : "2019-6-12 17:58",

        "price" : 3.1,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "bier"
      },
      {
        "doneTime" : "2019-6-12 18:8",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 17:58",

        "price" : 15.5,
        "quantity" : "1",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:40",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 18:13",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:40",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 18:13",
        "price" : 2.25,
        "quantity" : "10",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:40",
        "name" : "Nigiri",
        "orderTime" : "2019-6-12 18:13",
        "price" : 2.25,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:2",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 18:25",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:2",
        "name" : "Futo Maki",
        "orderTime" : "2019-6-12 18:25",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:2",
        "name" : "Futo Maki",
        "orderTime" : "2019-6-12 18:25",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:55",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 18:26",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-12 18:20",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Weißwein Crossutti (0.75l) ",
        "orderTime" : "2019-6-12 18:8",
        "price" : 15.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-12 18:19",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Cremant d' Alsass, rose",
        "orderTime" : "2019-6-12 18:19",
        "price" : 19.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-12 18:54",
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Avo", "Mango" ],
        "orderTime" : "2019-6-12 18:41",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:52",
        "name" : "Hoso Maki",
        "options" : [ "Avo" ],
        "orderTime" : "2019-6-12 18:41",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 18:51",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 18:41",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Green",
        "orderTime" : "2019-6-12 18:42",
        "price" : 16.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Chiemseer Helles (0,5l)",
        "orderTime" : "2019-6-12 18:35",

        "price" : 3.1,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "bier"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-12 18:48",

        "price" : 4.5,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "wein"
      },
      {
        "name" : "Spezi",
        "orderTime" : "2019-6-12 18:46",

        "price" : 2.5,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "sonstige"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-12 18:47",
   
        "price" : 4.5,
        "quantity" : "3",
        "status" : "open",
        "table" : "",
        "type" : "wein"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-12 18:49",

        "price" : 4.5,
        "quantity" : "4",
        "status" : "open",
        "table" : "",
        "type" : "wein"
      },
      {
        "name" : "Spezi",
        "orderTime" : "2019-6-12 18:49",
 
        "price" : 2.5,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "sonstige"
      },
      {
        "name" : "Krautsalat",
        "orderTime" : "2019-6-12 18:59",
        "price" : 4.5,
        "quantity" : "4",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-12 19:28",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 19:1",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:32",
        "name" : "Zen Roll",
        "orderTime" : "2019-6-12 19:1",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:2",
        "name" : "Futo Maki",
        "options" : [ "Thun", "Avo", "Frischkäse" ],
        "orderTime" : "2019-6-12 18:59",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:20",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 19:1",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:17",
        "name" : "Hoso Maki",
        "orderTime" : "2019-6-12 18:59",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:17",
        "name" : "Sashimi",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-12 19:0",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:24",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 19:0",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-12 19:8",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Apfelschorle (0.5l)",
        "orderTime" : "2019-6-12 19:9",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Espresso",
        "orderTime" : "2019-6-12 19:9",
        "price" : 2,
        "quantity" : "2",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-12 19:39",
        "name" : "Futo Maki",
        "options" : [ "Thun", "Avo", "Frischkäse" ],
        "orderTime" : "2019-6-12 19:13",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:38",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 19:13",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:53",
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-12 19:14",
        "price" : 13.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:44",
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-12 19:14",
        "price" : 13.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:49",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 19:14",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 19:46",
        "name" : "Futo Maki",
        "options" : [ "Thun", "Avo", "Frischkäse" ],
        "orderTime" : "2019-6-12 19:14",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-12 19:15",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Hühnersuppe mit Cocos",
        "orderTime" : "2019-6-12 19:15",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-12 19:56",
        "name" : "Hoso Maki",
        "options" : [ "Frischkäse", "Avo", "Gurke", "Mango" ],
        "orderTime" : "2019-6-12 19:17",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Ramen",
        "orderTime" : "2019-6-12 19:15",
        "price" : 7.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-12 19:59",
        "name" : "Hoso Maki",
        "options" : [ "Garnele", "Mango", "Frischkäse", "Avo", "Gurke" ],
        "orderTime" : "2019-6-12 19:19",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-12 19:35",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-12 19:35",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-12 19:36",
        "price" : 4.5,
        "quantity" : "3",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Weißbier Unertl Leicht",
        "orderTime" : "2019-6-12 19:36",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Chiemseer Helles (0,5l)",
        "orderTime" : "2019-6-12 19:11",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Spezi",
        "orderTime" : "2019-6-12 19:10",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-12 20:22",
        "name" : "Nigiri",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-12 19:36",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 20:1",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 19:35",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-12 19:11",
        "price" : 4.5,
        "quantity" : "4",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-12 20:21",
        "name" : "Zen Roll",
        "orderTime" : "2019-6-12 19:35",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Hühnersuppe",
        "orderTime" : "2019-6-12 19:54",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-12 20:35",
        "name" : "Sashimi",
        "orderTime" : "2019-6-12 19:55",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 20:39",
        "name" : "Ura Maki",
        "orderTime" : "2019-6-12 19:55",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 20:33",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 19:55",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Cappuccino ",
        "orderTime" : "2019-6-12 19:57",
        "price" : 2.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-12 21:3",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-12 19:57",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 21:3",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 19:57",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 20:50",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 19:56",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 21:3",
        "name" : "Roses",
        "orderTime" : "2019-6-12 19:57",
        "price" : 2.25,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 21:3",
        "name" : "Ura Maki",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-12 19:57",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-12 20:0",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Chiemseer Helles (0.33l)",
        "orderTime" : "2019-6-12 20:0",
        "price" : 2.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Cremant d' Alsass, rose",
        "orderTime" : "2019-6-12 20:0",
        "price" : 19.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Spezi",
        "orderTime" : "2019-6-12 20:4",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-12 20:4",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-12 21:20",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 20:11",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Krautsalat",
        "orderTime" : "2019-6-12 20:11",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-12 21:20",
        "name" : "Futo Maki",
        "options" : [ "Thun", "Avo", "Frischkäse" ],
        "orderTime" : "2019-6-12 20:18",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-12 21:20",
        "name" : "Ura Maki",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-12 20:18",
        "price" : 9.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-12 20:19",

        "price" : 3.5,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "sonstige"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-12 20:20",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Terlaner",
        "orderTime" : "2019-6-12 20:25",
        "price" : 23.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Minuty",
        "orderTime" : "2019-6-12 20:29",
        "price" : 18.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Terlaner",
        "orderTime" : "2019-6-12 20:29",
        "price" : 23.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-12 20:35",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-12 20:36",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-12 20:38",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Chiemseer Helles (0.33l)",
        "orderTime" : "2019-6-12 20:38",
        "price" : 2.9,
        "quantity" : "2",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Chiemseer Helles (0.33l)",
        "orderTime" : "2019-6-12 20:38",
        "price" : 2.9,
        "quantity" : "2",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-12 20:41",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Chiemseer Helles (0.33l)",
        "orderTime" : "2019-6-12 21:18",
        "price" : 2.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-12 21:17",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Champagner Rose Flasche ",
        "orderTime" : "2019-6-12 21:18",
        "price" : 59,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Chiemseer Helles (0.33l)",
        "orderTime" : "2019-6-12 21:18",
        "price" : 2.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-12 21:19",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Spezi",
        "orderTime" : "2019-6-12 21:20",
        "price" : 2.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-12 21:40",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-14 16:54",
        "name" : "Nigiri",
        "orderTime" : "2019-6-12 21:59",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-14 16:54",
        "name" : "Rainbow",
        "orderTime" : "2019-6-12 21:59",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-14 16:54",
        "name" : "Zen Roll",
        "orderTime" : "2019-6-12 21:59",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-14 16:54",
        "name" : "Sashimi",
        "orderTime" : "2019-6-12 22:0",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-14 16:54",
        "name" : "Roses",
        "orderTime" : "2019-6-12 22:0",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-14 16:54",
        "name" : "Futo Maki",
        "orderTime" : "2019-6-12 21:59",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "name" : "Espresso",
        "orderTime" : "2019-6-12 22:20",
        "price" : 2,
        "quantity" : "2",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Minuty",
        "orderTime" : "2019-6-12 22:35",

        "price" : 18.9,
        "quantity" : "2",
        "status" : "open",
        "table" : "",
        "type" : "wein"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-13 12:0",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Avo" ],
        "orderTime" : "2019-6-13 12:0",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Ura Maki",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-13 12:0",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-13 16:41",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Garnele" ],
        "orderTime" : "2019-6-13 16:41",
        "price" : 10.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-14 16:59",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "SternchenMenü",
        "orderTime" : "2019-6-14 16:59",
        "price" : 18,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-14 17:6",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Hühnersuppe mit Cocos",
        "orderTime" : "2019-6-14 17:6",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-14 17:7",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Mango", "Avo" ],
        "orderTime" : "2019-6-14 17:7",
        "price" : 8.5,
        "quantity" : 1,
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Ura Maki",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-14 17:7",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Nigiri",
        "options" : [ "Garnele" ],
        "orderTime" : "2019-6-14 17:8",
        "price" : 5.25,
        "quantity" : "15",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-16 16:23",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Ramen",
        "orderTime" : "2019-6-16 16:23",
        "price" : 7.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Mango", "Thun" ],
        "orderTime" : "2019-6-16 16:23",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Mango", "Garnele", "Frischkäse" ],
        "orderTime" : "2019-6-16 16:23",
        "price" : 10.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Chiemseer Helles (0.33l)",
        "orderTime" : "2019-6-18 17:29",
        "price" : 2.9,
        "quantity" : 0,
        "status" : "paid",
        "type" : "bier"
      },
      {
        "doneTime" : "2019-6-19 11:12",
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Gurke" ],
        "orderTime" : "2019-6-18 17:29",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "",
        "type" : "done-sushi"
      },
      {
        "name" : "Ramen",
        "orderTime" : "2019-6-18 17:43",
        "price" : 7.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Hühnersuppe",
        "orderTime" : "2019-6-18 17:43",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-19 11:12",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 11:12",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 11:12",
        "name" : "Hoso Maki",
        "orderTime" : "2019-6-19 11:12",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 12:17",
        "name" : "Futo Maki",
        "orderTime" : "2019-6-19 11:51",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 12:17",
        "name" : "Nigiri",
        "orderTime" : "2019-6-19 11:51",
        "price" : 2.25,
        "quantity" : "3",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Glas Weißwein, Chardonnay Villa Santa Flavia",
        "orderTime" : "2019-6-19 11:57",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Weißwein Crossutti (0.75l) ",
        "orderTime" : "2019-6-19 12:7",
        "price" : 15.9,
        "quantity" : 0,
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-19 12:52",
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-19 12:17",
        "price" : 13.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 12:52",
        "name" : "Ura Maki",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-19 12:17",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 12:28",
        "name" : "Futo Maki",
        "orderTime" : "2019-6-19 12:17",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Glas Weißwein, Chardonnay Villa Santa Flavia",
        "orderTime" : "2019-6-19 12:50",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 12:49",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-19 13:3",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 12:49",
        "price" : 15.5,
        "quantity" : "3",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 13:9",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 13:1",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Glas Weißwein, Chardonnay Villa Santa Flavia",
        "orderTime" : "2019-6-19 13:2",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Mangoschorle",
        "orderTime" : "2019-6-19 13:5",

        "price" : 4.5,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-19 13:8",
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-19 13:4",

        "price" : 13.5,
        "quantity" : "1",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 13:34",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 13:34",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-19 13:48",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-19 14:8",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 13:48",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 14:8",
        "name" : "Roses",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-19 13:50",
        "price" : 2.25,
        "quantity" : "3",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 14:8",
        "name" : "Roses",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-19 13:50",
        "price" : 2.25,
        "quantity" : "3",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Hühnersuppe",
        "orderTime" : "2019-6-19 14:38",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-19 14:47",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 14:38",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 14:39",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-19 18:5",
        "name" : "Sashimi",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-19 16:28",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 17:57",
        "name" : "Ura Maki",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-19 16:30",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 18:4",
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-19 16:27",
        "price" : 13.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 18:5",
        "name" : "Sashimi",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-19 16:28",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 18:5",
        "name" : "Sashimi",
        "orderTime" : "2019-6-19 16:28",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 18:0",
        "name" : "Rainbow",
        "orderTime" : "2019-6-19 16:27",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Lachs", "Gurke", "Avo" ],
        "orderTime" : "2019-6-19 16:54",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Rainbow",
        "orderTime" : "2019-6-19 16:54",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 16:55",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Glas Weißwein, Chardonnay Villa Santa Flavia",
        "orderTime" : "2019-6-19 16:56",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Cremant d' Alsass (blanc de blac)",
        "orderTime" : "2019-6-19 16:56",
        "price" : 17.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-19 17:29",
        "name" : "Futo Maki",
        "options" : [ "Avo", "Gurke", "Frischkäse" ],
        "orderTime" : "2019-6-19 17:5",
        "price" : 8.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 17:29",
        "name" : "Futo Maki",
        "options" : [ "Garnele", "Frischkäse", "Avo" ],
        "orderTime" : "2019-6-19 17:5",
        "price" : 10.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Weißwein Crossutti (0.75l) ",
        "orderTime" : "2019-6-19 17:33",
        "price" : 15.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-19 17:33",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Weißbier Unertl Leicht",
        "orderTime" : "2019-6-19 17:33",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 17:38",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Green",
        "orderTime" : "2019-6-19 17:38",
        "price" : 16.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Rainbow",
        "orderTime" : "2019-6-19 17:51",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 17:56",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-19 17:57",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Rainbow",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-19 17:57",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-19 17:58",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Futo Maki",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-19 17:58",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Rainbow",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-19 17:58",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Weißbier Unertl Leicht",
        "orderTime" : "2019-6-19 17:59",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 18:3",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-19 18:3",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Cola (0.2l)",
        "orderTime" : "2019-6-19 18:3",
        "price" : 2,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-19 18:10",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Cremant d' Alsass, rose",
        "orderTime" : "2019-6-19 18:12",
        "price" : 19.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-19 18:12",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 18:12",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Rainbow",
        "orderTime" : "2019-6-19 18:12",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Roses",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-19 18:12",
        "price" : 2.25,
        "quantity" : "4",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Futo Maki",
        "orderTime" : "2019-6-19 18:18",
        "price" : 8.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Hühnersuppe",
        "orderTime" : "2019-6-19 18:18",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "doneTime" : "2019-6-19 18:54",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 18:20",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 18:53",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 18:20",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Weißwein La Solca (0.75l)",
        "orderTime" : "2019-6-19 18:20",
        "price" : 16.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-19 18:54",
        "name" : "Sashimi",
        "options" : [ "Lachs", "Thun" ],
        "orderTime" : "2019-6-19 18:21",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 18:20",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 18:39",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-19 18:40",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "doneTime" : "2019-6-19 19:13",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 18:41",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:13",
        "name" : "Rainbow",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-19 18:41",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:3",
        "name" : "Sashimi",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-19 18:41",
        "price" : 9.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:13",
        "name" : "Rainbow",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-19 18:42",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:0",
        "name" : "Nigiri",
        "options" : [ "Garnele" ],
        "orderTime" : "2019-6-19 18:48",
 
        "price" : 5.25,
        "quantity" : "3",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:1",
        "name" : "Nigiri",
        "options" : [ "Thun" ],
        "orderTime" : "2019-6-19 18:48",

        "price" : 2.25,
        "quantity" : "3",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:0",
        "name" : "Nigiri",
        "options" : [ "Lachs" ],
        "orderTime" : "2019-6-19 18:48",

        "price" : 2.25,
        "quantity" : "3",
        "status" : "",
        "table" : "",
        "type" : "done-sushi"
      },
      {
        "name" : "Green",
        "orderTime" : "2019-6-19 18:50",
        "price" : 16.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Krautsalat",
        "orderTime" : "2019-6-19 18:50",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 18:51",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-19 19:17",
        "name" : "Nigiri",
        "orderTime" : "2019-6-19 18:54",
        "price" : 2.25,
        "quantity" : "3",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:17",
        "name" : "Nigiri",
        "orderTime" : "2019-6-19 18:54",
        "price" : 3.25,
        "quantity" : "3",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:17",
        "name" : "Nigiri",
        "orderTime" : "2019-6-19 18:54",
        "price" : 2.25,
        "quantity" : "3",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-19 18:55",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-19 19:25",
        "name" : "Rainbow",
        "orderTime" : "2019-6-19 18:58",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:25",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 18:58",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 20:27",
        "name" : "Red Dragon Roll",
        "orderTime" : "2019-6-19 19:5",
        "price" : 13.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 20:28",
        "name" : "Rainbow",
        "orderTime" : "2019-6-19 19:5",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-19 19:6",
        "price" : 4.5,
        "quantity" : "3",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Espresso",
        "orderTime" : "2019-6-19 19:14",
        "price" : 2,
        "quantity" : "2",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 19:14",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Green",
        "orderTime" : "2019-6-19 19:14",
        "price" : 16.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-19 18:59",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Glas Cremant",
        "orderTime" : "2019-6-19 19:17",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-19 19:33",
        "name" : "Sushi Plätte",
        "orderTime" : "2019-6-19 19:19",
        "price" : 15.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "doneTime" : "2019-6-19 19:34",
        "name" : "Rainbow",
        "orderTime" : "2019-6-19 19:20",
        "price" : 11.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Espresso",
        "orderTime" : "2019-6-19 19:21",
        "price" : 2,
        "quantity" : "2",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "doneTime" : "2019-6-19 19:23",
        "name" : "Hoso Maki",
        "orderTime" : "2019-6-19 19:22",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 19:23",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Weißwein Crossutti (0.75l) ",
        "orderTime" : "2019-6-19 19:25",
        "price" : 15.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "doneTime" : "2019-6-19 20:7",
        "name" : "SternchenMenü",
        "orderTime" : "2019-6-19 19:26",
        "price" : 18,
        "quantity" : "3",
        "status" : "paid",
        "type" : "done-sushi"
      },
      {
        "name" : "Wasser ohne Sprudel (0.7l)",
        "orderTime" : "2019-6-19 19:25",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Glas Weißwein, Chardonnay Villa Santa Flavia",
        "orderTime" : "2019-6-19 19:39",
        "price" : 4.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Weißwein La Solca (0.75l)",
        "orderTime" : "2019-6-19 19:39",
        "price" : 16.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-19 19:43",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Dessert",
        "orderTime" : "2019-6-19 20:0",
        "price" : 6.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Brotzeit",
        "orderTime" : "2019-6-19 20:0",
        "price" : 6.9,
        "quantity" : "3",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Brotzeit",
        "orderTime" : "2019-6-19 20:0",
        "price" : 6.9,
        "quantity" : "2",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Weißwein Crossutti (0.75l) ",
        "orderTime" : "2019-6-19 20:1",

        "price" : 15.9,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "wein"
      },
      {
        "name" : "Glas Rotwein, Merlot Villa Santa Flavia (0.25)",
        "orderTime" : "2019-6-19 20:1",

        "price" : 4.5,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "wein"
      },
      {
        "name" : "Brotzeit",
        "orderTime" : "2019-6-19 20:1",

        "price" : 6.9,
        "quantity" : "2",
        "status" : "open",
        "table" : "",
        "type" : "dish"
      },
      {
        "name" : "Brotzeit",
        "orderTime" : "2019-6-19 20:3",
        "price" : 6.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 20:13",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Brotzeit",
        "orderTime" : "2019-6-19 20:56",
        "price" : 6.9,
        "quantity" : "2",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-19 20:58",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "open",
        "table" : "",
        "type" : "bier"
      },
      {
        "name" : "Weißbier Hirzinger(0.5l)",
        "orderTime" : "2019-6-19 20:58",
        "price" : 3.1,
        "quantity" : "1",
        "status" : "paid",
        "type" : "bier"
      },
      {
        "name" : "Wasser mit Sprudel (0.70)",
        "orderTime" : "2019-6-19 21:16",
        "price" : 3.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "sonstige"
      },
      {
        "name" : "Weißwein La Solca (0.75l)",
        "orderTime" : "2019-6-19 21:16",
        "price" : 16.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Weißweinschorle",
        "orderTime" : "2019-6-19 21:23",
        "price" : 4.5,
        "quantity" : "2",
        "status" : "paid",
        "type" : "wein"
      },
      {
        "name" : "Dessert",
        "orderTime" : "2019-6-19 21:23",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Dessert",
        "orderTime" : "2019-6-19 21:54",
        "price" : 6.5,
        "quantity" : "1",
        "status" : "paid",
        "type" : "dish"
      },
      {
        "name" : "Weißwein Crossutti (0.75l) ",
        "orderTime" : "2019-6-19 21:55",
        "price" : 15.9,
        "quantity" : "1",
        "status" : "paid",
        "type" : "wein"
      }
    
  

]
  

History.forEach(function(obj) {
    if (!obj.doneTime) {
      obj.doneTime = ""
    }
    if (!obj.options) {
      obj.options = []
    }
    if (!obj.status) {
      obj.status = ""
    }
    if (!obj.quantity) {
      obj.quantity = 1
    }
    if(!obj.type) {
      obj.type = ""
    }
    if(!obj.orderTime) {
      obj.orderTime = ""
    }

    db.collection("History")
      .add({
        name: obj.name,
        price: obj.price,
        options: obj.options,
        type: obj.type,
        orderTime: obj.orderTime,
        quantity: obj.quantity,
        doneTime: obj.doneTime,
        status: obj.status
      })
      .then(function(docRef) {
        console.log("Document written with ID:", docRef.id);
      })
      .catch(function(error) {
        console.log("Error adding document:", error);
      });

    
});
