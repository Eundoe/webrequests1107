const { post } = require("jquery")

fetch('https://jsonplaceholder.typicode.com/users',
{
  method : 'GET'
})
.then((refer1) => {return refer1.text()})
.then((base) => {
  const base2 =  JSON.parse(base)
  const {id} = base2[0]
  console.log(id)
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`,{
    method : 'GET'
  })
  .then((refer2) => {return refer2.text()})
  .then((posts) => {
    console.log(posts)
  })
})