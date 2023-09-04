document.querySelector('button').addEventListener('click', getFetch())

function getFetch (){
    // const foodSearch = document.querySelector('input').value
    fetch('https:www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}