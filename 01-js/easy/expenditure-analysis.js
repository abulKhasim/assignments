/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // const categoryTotals = [];

  // // Iterate through each transaction
  // for (const transaction of transactions) {
  //   const category = transaction.category;
  //   const price = transaction.price;

  //   // Find the corresponding category object in the `categoryTotals` array
  //   const categoryObject = categoryTotals.find((obj) => obj.category === category);

  //   // If the category object exists, update its total price
  //   if (categoryObject) {
  //     categoryObject.totalSpent += price;
  //   } else {
  //     // Create a new category object and add it to the `categoryTotals` array
  //     categoryTotals.push({
  //       category: category,
  //       totalSpent: price,
  //     });
  //   }
  // }

  // return categoryTotals;

  const categoryTotal = {};

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    if (!categoryTotal[category]) {
      categoryTotal[category] = { category:category, totalSpent: 0 };
    }

    categoryTotal[category].totalSpent += price;
  }

  const categoryTotalsArray = Object.values(categoryTotal);

  return categoryTotalsArray;
}

module.exports = calculateTotalSpentByCategory;
