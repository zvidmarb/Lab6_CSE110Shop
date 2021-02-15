// Script.js

window.addEventListener('DOMContentLoaded', () => {
  var jsonData  //data received from fetch
  var jsonString  //fetch data retrieved from localStorage

  //if the data hasn't been fetched yet
  if (localStorage.getItem("jsonArray") == null) {
    fetchProducts()
  }
  jsonString = localStorage.getItem("jsonArray")
  jsonString = JSON.parse(jsonString)
  console.log(jsonString)
  
  document.createElement("product-item.js")

});

async function fetchProducts() {
  let response = await fetch("https://fakestoreapi.com/products")
  jsonData = await response.json()
  //console.log(jsonObject)
  localStorage.setItem("jsonArray", JSON.stringify(jsonData))
}