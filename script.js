const cart = []
let editProductItem = ""

const addProduct = () => {
    if (product.value === "") {
        // alert('Error')
        errorMsg.style.display = "block"
    } else {
        errorMsg.style.display = "none"
        cart.push(product.value)
        display()
        product.value = ""
    }
}

const delProduct = (figure) => {
    const confirmMsg = confirm(" Are You Sure You Want To Delete \nThis Action Can Not Be Reversed")
    if (confirmMsg == true) {
        cart.splice(figure, 1)
        display()
    } else {
        display()
    }

}

const editProduct = (item, index) => {
    disapper.style.display = 'block'
    plus.style.display = 'none'
    product.value = item
    editProductItem = index
}

const updateProduct = () => {
    disapper.style.display = 'none'
    plus.style.display = 'block'
    cart.splice(editProductItem, 1, product.value)
    display()
    product.value = ""
}

const delAll = () => {
    const delLongItem = confirm(" Are You Sure You Want To Delete All Product")
    if (delLongItem == true) {
        cart.splice(editProductItem, cart.length)
        display()
         
    } else {
        display()
    }

}

const display = () => {
    show.innerHTML = ""
    cart.map((item, index) => {
        show.innerHTML += `
        <tr>
                <td class="table-light fs-3 text-center">${index + 1}.</td>
                <td class="table-light fs-3 text-center">${item}</td>
                <td class="table-light">
                <button onclick='editProduct(${JSON.stringify(item)}, ${index} )' class=" btn btn-success text-center   w-50 "> Edit Product</button>
                </td>

                <td class="table-light"><button onclick='delProduct(${index})' class=" btn btn-danger text-center w-50 "> Delete Product</button></td>
            </tr>
       `
    })

    if (cart.length >= 2) {
        allDel.style.display = "block"
    } else {
        allDel.style.display = "none"
    }
}