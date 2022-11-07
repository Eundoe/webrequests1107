fetch('https://jsonplaceholder.typicode.com/users/',{
  method : 'GET'
})
.then((refer) => {return refer.text()})
.then((result) => {
  const users = JSON.parse(result);
  console.log(users[1])
  return users[6]
})
.then((user7) => {
  const {address} = user7
  console.log(address)
  return address
})
.then((addgeo) => {
  const {geo} = addgeo;
  console.log(geo)
  return geo
})
.then((geolat) => {
  const {lat} = geolat
  console.log(lat)
  return lat
})
.then((latdata) => {
  document.write(`
  <p>
    latdata : ${Number(latdata)}
  </p>
  `)
})