const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

let lowerCaseWords = (mixedArray) => {
    return new Promise((resolved, rejected) => {
        if ((mixedArray.length >= 0) && (Array.isArray(mixedArray))) {
               let new_arr = mixedArray.filter((x) => typeof x === "string")
               let arr_new_update = new_arr.map((array_sort) =>
               array_sort.toLowerCase()
        );
  
        resolved(arr_new_update)
      } 
      else {
        rejected("Rejected")
      }
    });
  };
  
   
  lowerCaseWords(mixedArray).then((output) =>
        console.log(output)
    )
    .catch((error) =>
          console.log(error)
    );


