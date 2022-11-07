//image를 불러오는경우

fetch('https://jsonplaceholder.typicode.com/photos')
.then((response) => {return response.text()})
.then((result) => {
  const base = JSON.parse(result)
  const num01 = base.filter((st1) => {return st1.id === 1})

  //array형식으로 들어오는거 잊지말것 반드시 확인해서 이용하느게 좋음 나중에라도 혹시 헷갈려서 잘못 받게되면 일이 커질 수있음
  console.log(num01)
  console.log(num01[0].title)
  document.querySelector('figure>img').setAttribute('src', num01[0].thumbnailUrl)
  document.querySelector('figure>figcaption').innerHTML = num01[0].title;

  // for (let i of num01){
  //  document.write(
  //   `
  //   <figure>
  //   <img src = "${i.thumbnailUrl}" alt = "${i.title}">
  //   <figcaption>${i.title}</figcaption>
  //   </figure>
  //   `
  //  )
  // }

})