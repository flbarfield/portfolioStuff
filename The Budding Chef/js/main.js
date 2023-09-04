document.getElementById('ingredientButton').addEventListener('click', getFood)
document.getElementById('recipeButton').addEventListener('click', cookDirections)

function getFood () {
    let foodSearch = document.querySelector('input').value
    console.log(foodSearch)
    let resultNum = []
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodSearch}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('resultNum').innerText = `${data.meals.length} Items Found!`
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function cookDirections () {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

//------for GET FOOD ----
// All data is within an array called meals. 
// strMeal = title of the meals
// strMealThumb = url picture of the meal

// -----for COOK DIRECTIONS -----
// all data is within an array called meals
// strMeal is the title of the meals

// could have strIngredients1-20, empty elements are either null or ""...These appear to be matched with strMeasure1-20

// strInstructions are the instructions for the dish

// may have an attached youtube url video on strYoutube