/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
function tidyUpString(stringArr) {

 // let arrayTidy = ["   /Daniel ", "  irina/ ", "     Gordon", "ashleigh "];
  
  for (i = 0; i<stringArr.length; i = i+1){
  
  stringArr[i] = stringArr[i].trim();
  stringArr[i] = stringArr[i].replace('/','');
  stringArr[i] = stringArr[i].toLowerCase();
  }
    return stringArr; 
  }



/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (typeof num ==='number'&&
      num%2 == 0 &&
      num <=100){
        return true;
      }
      else {
        return false;
      }
}

/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/


function remove(arr, index){
  const beforeIndex=arr.slice(0, index) // TAkes the part before the index and assigns to new array
  const afterIndex=arr.slice(index+1) //TAkes the part after the index and assigns to new array
  const neweArray = beforeIndex.concat(afterIndex) //Concats those two new arrays to a new array
  return neweArray; // complete this statement

}
//ANOTHER WAY
// function remove(arr,index){

//   newArray = [];

//    for (i = 0 ; i<arr.length; i++){
//       if (i !== index){
//         newArray.push(arr[i])
//       }
//    }
//     return newArray;
// }



  // const beforeIndex=arr.slice(0, index) // Removes the first element of the array
  // const afterIndex=arr.slice(index+1)
  // const newArray = beforeIndex.concat(afterIndex)
  // return newArray; // complete this statement
// }

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  for (i=0; i<arr.length; i++){
    if (arr[i] > 100){
      arr[i] = 100;
    }
    if (!Number.isInteger(arr[i])){
      arr[i] = arr[i].toFixed(2)
    }
  arr[i] = `${arr[i]}%`;
  }
  
  return arr
}

/* ======= TESTS - DO NOT MODIFY ===== */

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "tidyUpString function works - case 1",
  arraysEqual(tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]), [
    "daniel",
    "irina",
    "gordon",
    "ashleigh"
  ])
);
test(
  "tidyUpString function works - case 2",
  arraysEqual(
    tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
    ["sanyia", "michael", "anthony", "tim"]
  )
);

test("validate function works - case 1", validate(10) === true);
test("validate function works - case 2", validate(18) === true);
test("validate function works - case 3", validate(17) === false);
test("validate function works - case 4", validate("Ten") === false);
test("validate function works - case 5", validate(108) === false);

test(
  "remove function works - case 1",
  arraysEqual(remove([10, 293, 292, 176, 29], 3), [10, 293, 292, 29])
);
test(
  "remove function works - case 1",
  arraysEqual(remove(["a", "b", "c", "d", "e", "f", "g"], 6), [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ])
);

test(
  "formatPercentage function works - case 1",
  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    "23%",
    "18%",
    "100%",
    "0.37%"
  ])
);