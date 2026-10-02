function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {

  let buyingCake = totalMoney - cakeCost;

  if (buyingCake < 0) {

    return buyingCake;
  }

  let donutsCount = Math.floor(buyingCake / donutCost);

  return buyingCake - (donutsCount * donutCost);
}

console.log(calculateRemainingMoney(100,20,10))