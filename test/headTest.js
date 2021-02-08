const assertEqual = require('../assertEqual');
const head = require('../head')

//assertEqual(result, 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");