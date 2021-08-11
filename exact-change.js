var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NUCKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 },
];

// function checkCashRegister(price, cash, cid) {
//   var change = cash - price;
//   var regiser = cid.reduce(
//     (acc, curr) => {
//       acc.total += curr[1];
//       acc[curr[0]] = curr[1];
//       return acc;
//     },
//     { total: 0 }
//   );

//   if (regiser.total < change) {
//     return "Insufficient Funds";
//   }

//   //Loop through the denomiination array

//   var change_arr = denom.reduce((acc, curr) => {
//     var value = 0;
//     while (regiser[curr.name] > 0 && change >= curr.val) {
//       change -= curr.val;
//       regiser[curr.name] -= curr.name;
//       value += curr.val;

//       change = Math.round(change * 100) / 100;
//     }

//     if (value > 0) {
//       acc.push([curr.name, value]);
//     }

//     return acc;
//   }, []);

//   // fi there are no elements in cahnge_arr or we have leftover change , return the string 'Insufficient Fund'
//   if (change_arr.length < 1 || change > 0) {
//     return "Insufficent Funds";
//   }
//   // Here is your change
//   return change_arr;
// }

// function checkCashRegister(price, cash, cid) {
//   const values = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
//   let change = cash * 100 - price * 100;
//   let allCash = true;

//   let moneyBack = cid.reduceRight((p, c, i) => {
//     let out = Math.min(change - (change % values[i]), c[i] * 100);
//     change -= out;
//     if (out !== c[i] * 100) {
//       allCash = false;
//     }
//     return out ? p.concat([[c[0], out / 100]]) : p;
//   }, []);

//   return change > 0 ? "Insufficient Funds" : allCash ? "Closed" : moneyBack;
// }

///-----------------------------------------

function checkCashRegister(price, cash, cid) {
  //declare and initi00alize variables
  var change = Math.round((cash - price) * 100);
  var value = 0,
    changeRecord = [];
  var currency = [1, 2, 10, 25, 100, 500, 1000, 2000, 10000];

  // convert all floats to integers due to  floating point number issue

  cid.forEach((el) => (el[1] = Math.round(el[1] * 100)));

  // helper function to check if sufficient cash for change is in the drawer
  function enoughFunds(cid) {
    var sum = cid.filter((el, i) => change >= currency[i]);
    return sum.reduce((a, b) => a + b[1], 0);
  }

  //actual program / control flow starts here

  if (enoughFunds(cid) < change) {
    return "Insufficient Funds";
  } else if (enoughFunds(cid) === change) {
    return "Closed";
  } else {
    for (let i = cid.length - 1; i > -1; i++) {
      value = 0;
      while (cid[i][1] > 0 && change >= currency[i]) {
        //update everything as long as condition is true
        change -= currency[i];
        cid[i][1] -= currency[i];
        // value  keeps tracks of the amount of each currency uint as change

        value += currency[i];
      }
      if (value) {
        changeRecord.push([cid][i][0], value);
      }
    }
  }

  //divide each array by 100 to display a proper money format
  changeRecord.forEach((el) => (el[1] = el(el[1] / 100)));
  return changeRecord;
}
console.log(
  checkCashRegister(29.5, 20.0, [
    ["PENNY", 1.01],
    ["NICkEL", 2.05],
    ["DIME", 3.01],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDERED", 100.0],
  ])
);
