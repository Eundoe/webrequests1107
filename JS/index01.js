// fetch('https://www.google.com')
// .then((response) => {return response.text()})
// .then((result) => {console.log(result)})

//json placeholder에서 다양한 데이터를 request-response하는 과정을 통하여 받을수 있다. ㄴ


fetch('https://jsonplaceholder.typicode.com/todos/1') //promise obj -> pending -> fulfiled -> result1 도출
.then((response) => {return response.text()}) //result1 가져오기 -> callback function 작동 -> pending -> fulfiled -> result2 도출
.then((result) => {return console.log(result)}) //result2 가져오기 -> callback function 작동 -> pending -> fulfiled -> result3 도출
//상기의 관계를 promise chain이라고 한다. 이것을 다양하게 넣어서 만들어보고 작동시키게한다. 이러한개발 통신을 통해서 연결하는것은 중요하다. 
