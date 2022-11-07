// fetch('https://www.google.com')
// .then((response) => {return response.text()})
// .then((result) => {console.log(result)})

//json placeholder에서 다양한 데이터를 request-response하는 과정을 통하여 받을수 있다. ㄴ

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {return response.text()})
.then((result) => {console.log(result)})