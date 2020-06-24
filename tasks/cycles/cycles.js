/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;

    if (redemption >= 0 && redemption <= 350) {
      discount = 0;
    } else if (redemption > 350 && redemption <= 1350) {
      discount = 15;
    } else if (redemption > 1350 && redemption <= 2700) {
      discount = 30;
    } else if (redemption > 2700 && redemption <= 6500) {
      discount = 45;
    } 
  return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
  let forFactorial = 1;
  let whileFactorial = 1;
  let j = 1;
  let doWhileFactorial = 1;
  let k = 1;
  //============================================
  for (let j = 1; j <= i; j++) {
    forFactorial *= j;
  }
  console.log(forFactorial);
  //============================================= 
  while (j <= i) {
    whileFactorial *= j;
    j++;
  }
  console.log(whileFactorial);
  //=============================================
  do {
    doWhileFactorial *= k;
    k++;

  }
  while (k <= i);
  console.log(doWhileFactorial);

}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  let result = '';
  for (let i = 0; i < substr.length; i++) {
    result += substr[i]
  }

  console.log(result);
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
  let totalIncome=0;
  for (let summ in personIncomes)
  {
    totalIncome+=personIncomes[summ];
  }
  console.log(totalIncome);
}

module.exports = calculateDiscount;
