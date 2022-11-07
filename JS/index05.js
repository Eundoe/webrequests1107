const people = {
  "userId": 9,
  "title": "title 19",
  "completed": false
}


fetch('https://jsonplaceholder.typicode.com/todos/116',
{
  //수정된 내용은 보이지 않으나 기존 id에서 수정했다는것을 알수있음 
  method : 'PUT',
  body : JSON.stringify(people)
})
.then((response) => {return response.text()})
.then((result) => {console.log(result)})