console.log('a')
async function play(){
  console.log('b') //promise 진입전
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1',{method : 'GET'})//await에 진입후 대기되며 await이후의값이 매개변수에 return된다.
  console.log('C')
  const result = await response.text();
  console.log(result)
  console.log('D')
}
console.log('E')
play();//작동되는 시점에서 작동됨 
console.log('F')