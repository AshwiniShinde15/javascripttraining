//**3a:** Use `map` to turn each rating into a percentage string, e.g. `85` becomes `"85%"`.


let patientRatings =[85, 92, 78, 95, 88, 73, 90];

let ratingPercentages= patientRatings.map(rating => `${rating}%`);
console.log(ratingPercentages);


//2. **3b:** Use `map` to turn each rating into `"COMPLETED"` if it's 80 or above, otherwise `"CANCELLED"`.

let ratingCompleted = patientRatings.map(rating  => {

    return rating >=80 ? "COMPLETED" : "CANCELLED";
});

console.log(ratingCompleted);


//3. **3c:** Use `map` (with the index parameter) to turn each rating into an object: `
// { visitNumber, rating, status, tier }`, where `visitNumber` is the 1-based position, `status`
//  follows the same rule as 3b, and `tier` is `"A"` for 90+, `"B"` for 80-89, `"C"` below 80.

let ratingIndex = patientRatings.map((rating,index) => {
    return {
        visitNumber : index+1,
        rating : rating,
        status : rating >=80 ? "COMPLETED" : "CANCELLED",
        tier : rating>=90 ? "A" : rating >=80 ? "B":"C"


    }


});
console.log(ratingIndex);