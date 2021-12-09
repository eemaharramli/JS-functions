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

//filter, find, every, some

const test = [2,6,1,5,3,4]


//Method Find

function MethodFind(array, findElement){
    for (let i = 0; i < array.length - 1; i++){
        if (array[i] === findElement){
            return array[i]
        }
    }
}

// console.log(myFind([1,2,3,4,5], 3))

//Method Some

function MethodSome(array){
    let flag = false
    for (let arrayElement of array) {
        arrayElement > 5 ? flag = false : flag = true
    }
    return flag
}

// console.log(MethodSome([1,2,3,4,5]))

//Method every

function MyEvery(array) {
    for (let number of array) {
        number += 2
    }
}

console.log(MyEvery(test))

//Method Filter

const MyFilter = array => {
    for (let number of array) {
        if (number > 3){
            console.log(number)
        }
    }
}
// MyFilter(array)

//elem.length > 5

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function MyFilterMethod(array){
	let result = [];
  for(let element of array){
  if(element.length > 5){
  	result.push(element)
  	}
  }
  return result
}
console.log(MyFilter(words))


