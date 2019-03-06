class Product {
    constructor(name, price, year) {
        this.name = name
        this.price = price
        this.year = year
    }
}


class UI {
    addProduct(products) {
        const productsLIst = document.querySelector("#product-list")
        const elements = document.createElement("div")
        elements.innerHTML = `
            <ul class="cont-list">
            <li class="list"><span>Product Name:</span> ${products.name}</li>
            <li class="list"><span>Product Price:</span> ${products.price}</li>
            <li class="list"><span>Product Year:</span> ${products.year}</li>
            <a class="delete" name="delete" href="#">delete</a>
            </ul>
        `
        productsLIst.appendChild(elements)

    }
    resetForm() {
        document.querySelector("#product-form").reset()
    }
    deleteProduct(elements) {
        if (elements.name === "delete") {
            elements.parentElement.parentElement.parentElement.remove()
            this.showMessage("Product Deleted Successfully", "good-delete")
        }

    }
    showMessage(message, cssClass) {
        const div = document.createElement("div")
        div.className = `alert-remove ${cssClass}`
        div.appendChild(document.createTextNode(message))

        const container = document.querySelector(".container")
        const app = document.querySelector("#app")

        container.insertBefore(div, app)
        setTimeout(function () {
            document.querySelector(".alert-remove").remove()
        }, 3000)
    }
}

document.querySelector("#product-form")
    .addEventListener("submit", function (e) {
        e.preventDefault()
        const name = document.querySelector("#name").value
        const price = document.querySelector("#price").value
        const year = document.querySelector("#year").value

        const products = new Product(name, price, year);
        const ui = new UI()

        if (name === "" || price === "" || year === "") {
            return ui.showMessage("Complete Fields Please", "precaution")
        }

        ui.addProduct(products)
        ui.resetForm()
        ui.showMessage("Product Added Successfully", "good-alert")


    })
document.querySelector("#product-list").addEventListener("click", function (e) {
    const ui = new UI()
    ui.deleteProduct(e.target)
})