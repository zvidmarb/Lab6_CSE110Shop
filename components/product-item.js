// product-item.js

class ProductItem extends HTMLElement {
  constructor () {
    super()
    
    //Create a shadow root
    this.root = this.attachShadow({mode: 'open'})
    
    //Create custom list item
    
    const listItem = document.createElement("li")
    this.setAttribute("class", "product")
    root.appendChild(listItem)

    let imgURL
    if (this.hasAttribute("img")) {
      imgURL = this.getAttribute("img")
    }
    const image = listItem.appendChild(document.createElement("img"))
    image.setAttribute("src", imgUrl)
    image.setAttribute("alt", title)

    let title
    if (this.hasAttribute("title")) {
      title = this.getAttribute("title")
    }
    const titleHTML = listItem.appendChild(document.createElement("p"))
    titleHTML.setAttribute("class", "title")
    titleHTML.innerText = title

    let price
    if (this.hasAttribute("price")) {
      price = this.getAttribute("price")
    }
    const priceHTML = listItem.appendChild(document.createElement("p"))
    priceHTML.setAttribute("class", "price")
    priceHTML.innerText = price

    const button = listItem.appendChild(document.createElement("button"))
    button.setAttribute("onclick", "alert('Added to Cart!')")
    button.innerText = "Add to Cart"

    
  
  }
  connectedCallback() {
    console.log(this)
  }  
}

customElements.define('product-item', ProductItem);