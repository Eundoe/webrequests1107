
fetch('https://jsonplaceholder.typicode.com/todos/1',
  {
    method : "GET"
  }
)
.then((response) => {return response.text()})
.then((base) => {console.log(base)})

async function fetchStr(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1',{method: 'GET'})
  const result = await response.text()
  console.log(result)
}
fetchStr()