document.getElementById('ingredientButton').addEventListener('click', getFood)
document.getElementById('hiddenIngredientButton').addEventListener('click', getFood)
document.getElementById('recipeButton').addEventListener('click', cookDirections)

function scrollChildCheck () {
    let targetList = document.getElementById('recipeList')
    while (targetList.firstChild) {
        targetList.removeChild(targetList.lastChild)
    }
}

function recipeIngredientChildCheck () {
    let targetList = document.getElementById('recipeIngredients')
    while (targetList.firstChild) {
        targetList.removeChild(targetList.lastChild)
    }
}


function getFood () {
    document.getElementById('hideSection').classList.remove('hidden')
    document.getElementById('hideSection').scrollIntoView()
    let foodSearch = document.getElementById('ingredientInput').value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodSearch}`)
    .then(res => res.json())
    .then(data => {
        scrollChildCheck()
        if(data.meals === null) {
            document.getElementById('resultNum').innerText = 'No Items found! Try again with a different food.'
        } else {
            document.getElementById('resultNum').innerText = `${data.meals.length} Items Found!`
            for (let i = 0; i < data.meals.length; i++) {
                let li = document.createElement('li')
                let mealName = data.meals[i].strMeal
                li.textContent += mealName
                document.getElementById('recipeList').appendChild(li)
            }
        }
        })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function cookDirections () {
    document.getElementById('hideSection').classList.remove('hidden')
    document.getElementById('hideSection').scrollIntoView()
    let recipeSearch = document.getElementById('recipeSearch').value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeSearch}`)
    .then(res => res.json())
    .then(data => {
        recipeIngredientChildCheck()
        document.getElementById('midPic').src = data.meals[0].strMealThumb
        document.getElementById('midLink').href = data.meals[0].strYoutube
        if (data.meals[0] === null) {
            document.h3.innerText = 'Recipe Not Found! Try again.'
        } else {
            let h3 = document.getElementById('recipeTitle')
            let ingredientString = ''
            let ingredientListDOM = document.getElementById('recipeIngredients')
            let p = document.getElementById('recipeDirections')
            let recMeal = data.meals[0] 
            h3.innerText = data.meals[0].strMeal
            
            ingredientString = 
            recMeal.strMeasure1 + ' ' + recMeal.strIngredient1 + '. ' + 
            recMeal.strMeasure2 + ' ' + recMeal.strIngredient2 + '. ' +
            recMeal.strMeasure3 + ' ' + recMeal.strIngredient3 + '. ' +
            recMeal.strMeasure4 + ' ' + recMeal.strIngredient4 + '. ' +
            recMeal.strMeasure5 + ' ' + recMeal.strIngredient5 + '. ' +
            recMeal.strMeasure6 + ' ' + recMeal.strIngredient6 + '. ' +
            recMeal.strMeasure7 + ' ' + recMeal.strIngredient7 + '. ' +
            recMeal.strMeasure8 + ' ' + recMeal.strIngredient8 + '. ' +
            recMeal.strMeasure9 + ' ' + recMeal.strIngredient9 + '. ' +
            recMeal.strMeasure10 + ' ' + recMeal.strIngredient10 + '. ' +
            recMeal.strMeasure11 + ' ' + recMeal.strIngredient11 + '. ' +
            recMeal.strMeasure12 + ' ' + recMeal.strIngredient12 + '. ' +
            recMeal.strMeasure13 + ' ' + recMeal.strIngredient13 + '. ' +
            recMeal.strMeasure14 + ' ' + recMeal.strIngredient14 + '. ' +
            recMeal.strMeasure15 + ' ' + recMeal.strIngredient15 + '. ' +
            recMeal.strMeasure16 + ' ' + recMeal.strIngredient16 + '. ' +
            recMeal.strMeasure17 + ' ' + recMeal.strIngredient17 + '. ' +
            recMeal.strMeasure18 + ' ' + recMeal.strIngredient18 + '. ' +
            recMeal.strMeasure19 + ' ' + recMeal.strIngredient19 + '. ' +
            recMeal.strMeasure20 + ' ' + recMeal.strIngredient20 + '. '

            ingredientString = ingredientString.replace(/null/g, '')
            ingredientListDOM.innerHTML = ingredientString

            p.innerText = data.meals[0].strInstructions
            


            // this is coming back with undefined. Need to figure out a way to append 1-20 to 'strIngredient' without type conflict...Until then, I'm going to do this a much less elegant way.

            // for (let i = 0; i < 21; i++) {
            //     if (data.meals.strInstructions[i] === null || data.meals.strInstructions[i] === '') {
            //         continue
            //     } else{
            //         let li = document.createElement('li')
                    
            //         let ingredient = data.meals[0].strIngredient[String(i)]
            //         li.textContent = ingredient
            //         document.ul.appendChild(li)
            //     }
        
            // }
        }
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