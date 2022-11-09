
const fStr1 = async function(){
  try{
    const respond1 = await fetch('https://jsonplaceholder.typicode.com/todos/1',{method : 'GET'})
    const result = await respond1.text()
    console.log(result)
  }
  //error false의경우에 작동되는 공간
  catch(error){
    console.log('errorcode 101')
  }
  //막마
  finally{
    console.log('작업이 완료했습니다.')
  }
}
fStr1()