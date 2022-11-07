
const user = {
  userId : 4,
  title : 'title01',
  completed : true
}
//추가하는 방식에 대한 내용 json placeholder에서는 자동으로 id값을 할당해주기 때문에 201 이들어온다 확인할것
//POST GET DELETE PUT
fetch('https://jsonplaceholder.typicode.com/todos',
  {
    method : 'POST',//추가하는 구간
    body : JSON.stringify(user)
  })
.then((response) => {return response.text()})
.then((result) => {console.log(result)})