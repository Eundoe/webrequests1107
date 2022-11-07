fetch('https://jsonplaceholder.typicode.com/users',
{
  method : 'GET'
})
.then((refer1) => {return refer1.text()})
.then((base1) => {
  const basejson = JSON.parse(base1)
  const {id} = basejson[0]
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`,{
    method : 'GET'
  })
  .then((refer2) => {return refer2.text()})
  .then((base2) => {
    const basepost = JSON.parse(base2)
    console.log(basepost);
    const title1 = basepost[0].title
    console.log(title1)
    
  })
})
