//promise체인을 만들억는 ㄴ내용을 작동시키게한다.
//then (실행, 에러)

// fetch('https://jsonplaceholder.typicode.com/posts/1',
// {
//   method : 'GET'
// })
// .then((respon) => {return respon.text()}, (error) => console.log(error))
// .then(
//   (result) => {console.log(result)}
// )


fetch('https://jsonplaceholder.typicode.com/posts/1',
{
  method : 'GET'
})
.then((respon) => {return respon.text()})
.then(
  (result) => {
    console.log('welcome')
    console.log(result)
  }
)
//전작업의 rejection경우의수를 추가한다 대상은 false값에 작동한다.
.catch(() => console.log('error가 발생하였습니다.'))
//promise상에서 있는경우 catch() finally() 가있다 finally는 전작업의 여부와 상관없이 작동한다. True/False를 가리지 않음
.finally(() => {console.log('작업이 끝났습니다.')})