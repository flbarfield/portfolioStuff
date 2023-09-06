document.getElementById('ingredientButton').addEventListener('click', getFood)
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
    let foodSearch = document.querySelector('input').value
    console.log(foodSearch)
    let resultNum = []
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodSearch}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
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

// video wont load. needs embed, not watch in link: text = text.replace("watch?v=", "embed/")
function cookDirections () {
    let h3 = document.getElementById('recipeTitle')
    let ul = document.getElementById('recipeIngredients')
    let p = document.getElementById('recipeDirections')

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        recipeIngredientChildCheck()
        let youtubeLink = data.meals[0].strYoutube
        youtubeLink = youtubeLink.replace("watch?v=", "embed/")
        console.log(youtubeLink)

        document.getElementById('midPic').src = data.meals[0].strMealThumb
        document.getElementById('midVid').src = data.meals[0].strYoutube
        if (data.meals[0] === null) {
            document.getElementById('recipeTitle').innerText = 'Recipe Not Found! Try again.'
        } else {
            h3.innerText = data.meals[0].strMeal
            p.innerText = data.meals[0].strInstructions
            for (let i = 0; i < 21; i++) {
                if (data.meals.strInstructions[i] === null || data.meals.strInstructions[i] === '') {
                    continue
                } else {
                    let li = document.createElement('li')
                    let ingredient = data.meals[0].strIngredient[i]
                    li.textContent = ingredient
                    document.getElementById('recipeIngredients').appendChild(li)
                }
            }
                // let li2 = document.createElement('li')
                // let mealName = data.meals[i].strMeal
                // li.textContent += mealName
                // document.getElementById('recipeIngredients').appendChild(li)
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