let objects = [
    {
        name: 'Elnur',
        surname: 'Maharramli',
        age: 28
    },
    {
        name: 'Akif',
        surname: 'Talibov',
        age: 34
    },
    {
        name: 'Fuad',
        surname: 'Aghazada',
        age: 29
    }
]

let result = objects.filter((value => value.age < 30))

// console.log(result)
//Filter
//elem.length > 5

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function MyFilter(array){
  if(Array.isArray(array)){
  	let result = [];
    for(let element of array){
      if(element.length > 5){
        result.push(element)
        }
      }
    return result
  }else return 'input must be an array'
}
console.log(`Method filter output: ${MyFilter(words)}`)

//Some

function MySome(array){
  if(array.constructor === Array){
    for(let element of array){
      if(element.length > 5) return true
    }
  }else return 'input must be an array'
}
console.log(`Method some output: ${MySome(words)}`)

//Every
numbers = [5,3,2,4,1,5]
function MyEvery(array){
  if(array instanceof Array){
    let flag = false
    for(let element of array){
      if(element > 3){
        flag = true
      }
    }
    return flag
  }else return 'input must be an array'
}
console.log(`Method every output: ${MyEvery(numbers)}`)

//Find
function MyFind(array, conditionedElement){
  if(Array.isArray(array)){
  	for(let element of array){
      if(element === conditionedElement){
        return element
      } 
    }
  }else return 'first parameter must be an array'
}

console.log(`Method Find output: ${MyFind(numbers, 5)}`)



