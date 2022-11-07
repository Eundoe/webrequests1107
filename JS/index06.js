fetch('https://jsonplaceholder.typicode.com/todos/3',
{
  method : 'DELETE'
  //GET과 DELETE는 따로 body를 필요로 하지 않는다 가져오기와 삭제하기 이기 때문에 별도로 필요가 없기 때문
})
.then((response) => {return response.text()})
.then((result) => {console.log(result)})
//없어졌기 때문에 없다라고 나온다