// Array is a data structure used to store multiple values in a single variable. It is an ordered collection of items, where each item can be accessed by its index. Arrays can hold items of different data types, including numbers, strings, objects, and even other arrays.

// 1️ push() =Add at END

//  Adds element(s) to the end of the array

let arr1 = [1, 2, 3];
arr1.push(4);

console.log(arr1); 

// 2 ️ pop() = Remove from END
    // Removes the last element from the array
let arr2 = [1, 2, 3, 4];
arr2.pop();
console.log(arr2);

// 3️ unshift() = Add at BEGINNING  
// Adds element(s) to the beginning of the array
let arr3 = [2, 3, 4];
arr3.unshift(1);
console.log(arr3);

// 4️ shift() = Remove from BEGINNING
// Removes the first element from the array
let arr5 = [1, 2, 3, 4];
arr5.shift();
console.log(arr5);

// 5️ indexOf() = Find the INDEX of an element
// Returns the first index at which a given element can be found in the array
let arr6 = [1, 2, 3, 4];
let index = arr6.indexOf(1);
console.log(index);

//Map 
let arr7= [1,2,3,4,5];
let Re = arr7.map((value) => value*2);
console.log(Re);
let f = arr7.find((value) => value>4);  // find the element based on the condition 
console.log(f);
//let S = arr7.some((value) => value > );
//console.log(S);
//let E = arr7.every((value) => value );
//console.log(E);


// CHECK THE ARRAY
let arr8 = [5,4,3,2,1];
let isArray = Array.isArray(arr8);
console.log(isArray);


// let arr9 = [
//   { "_id": 2, "quantity": 5, "price": 25, "targetPrice": 100 },
//   { "_id": 1, "quantity": 10, "price": 15, "targetPrice": 120 },
//   { "_id": 3, "quantity": 6, "price": 35, "targetPrice": 100 },
//   { "_id": 4, "quantity": 5, "price": 55, "targetPrice": 150 },
//   { "_id": 5, "quantity": 5, "price": 55, "targetPrice": 150 }
// ];

// let result = arr9.map(value =>
//   quantity > 5 &&
//   price < 50 &&
//   targetPrice > 50
// );

// console.log(result);

let categories = [
  { _id: "64c2342de32f4a51b19b924e", name: "Electronics", slug: "electronics" },
  { _id: "64c2342de32f4a51b19b924f", name: "Home & Kitchen", slug: "home-kitchen" },
  { _id: "64c2342de32f4a51b19b9250", name: "Fashion", slug: "fashion" },
  { _id: "64c2342de32f4a51b19b9251", name: "Health & Beauty", slug: "health-beauty" },
  { _id: "64c2342de32f4a51b19b9252", name: "Sports & Outdoors", slug: "sports-outdoors" },
  { _id: "64c2342de32f4a51b19b9253", name: "Toys & Games", slug: "toys-games" },
  { _id: "64c2342de32f4a51b19b9254", name: "Automotive", slug: "automotive" },
  { _id: "64c2342de32f4a51b19b9255", name: "Books & Stationery", slug: "books-stationery" },
  { _id: "64c2342de32f4a51b19b9256", name: "Food & Beverages", slug: "food-beverages" },
  { _id: "64c2342de32f4a51b19b9257", name: "Pet Supplies", slug: "pet-supplies" },
  { _id: "64c2342de32f4a51b19b9258", name: "Furniture", slug: "furniture" },
  { _id: "64c2342de32f4a51b19b9259", name: "Jewelry & Accessories", slug: "jewelry-accessories" },
  { _id: "64c2342de32f4a51b19b925a", name: "Garden & Outdoor", slug: "garden-outdoor" },
  { _id: "64c2342de32f4a51b19b925b", name: "Electrical Appliances", slug: "electrical-appliances" },
  { _id: "64c2342de32f4a51b19b925c", name: "Baby & Kids", slug: "baby-kids" },
  { _id: "64c2342de32f4a51b19b925d", name: "Office Supplies", slug: "office-supplies" },
  { _id: "64c2342de32f4a51b19b925e", name: "Fitness & Wellness", slug: "fitness-wellness" },
  { _id: "64c2342de32f4a51b19b925f", name: "Arts & Crafts", slug: "arts-crafts" },
  { _id: "64c2342de32f4a51b19b9260", name: "Music & Instruments", slug: "music-instruments" },
  { _id: "64c2342de32f4a51b19b9261", name: "Travel & Luggage", slug: "travel-luggage" }
];

console.log(categories);