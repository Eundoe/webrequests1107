console.log('start')

fetch('https://jsonplaceholder.typicode.com/todos/3',
{
  method : 'GET'
}
)
.then((respon1) => {return respon1.text()})
.then((result1) => {console.log(result1)})

console.log('end')

