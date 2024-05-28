// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
const baseUrl = 'https://dummyjson.com';
const getCarts = baseUrl + '/carts'
fetch(getCarts)
    .then(value => value.json())
    .then((response) => {
        let carts = response["carts"];
        const divCarts = document.getElementsByClassName("carts")[0]
        for (const cart of carts) {
            console.log(cart)
            const divCart = document.createElement("div");
            divCart.classList.add("cart");
            divCarts.appendChild(divCart);
            const id = document.createElement("h3");
            id.innerText = `Id of cart: ${cart.id}`;
            divCart.appendChild(id);
            const products = document.createElement("h3");
            products.innerText = `Products:`;
            id.after(products);
            const ol = document.createElement("ol")
            products.after(ol)
            const discountedTotal = document.createElement("h3");
            discountedTotal.innerText = `Discounted total: ${cart.discountedTotal}`;
            ol.after(discountedTotal);
            const totalProducts = document.createElement("h3");
            totalProducts.innerText = `Total products: ${cart.totalProducts}`;
            discountedTotal.after(totalProducts);
            const totalQuantity = document.createElement("h3");
            totalQuantity.innerText = `Total quantity: ${cart.totalQuantity}`;
            totalProducts.after(totalQuantity);
            const total = document.createElement("h3");
            total.innerText = `Total quantity: ${cart.total}`;
            totalQuantity.after(total);
            const userId = document.createElement("h3");
            userId.innerText = `Total quantity: ${cart.userId}`;
            total.after(userId);
            for (const product of cart["products"]) {
                const liProduct = document.createElement("li")
                liProduct.innerHTML = `Product ${product.title}: <br>`;
                const pId = document.createElement("p");
                pId.innerText = `Id: ${product.id}`;
                liProduct.appendChild(pId)
                const img = document.createElement("img");
                img.setAttribute("src", `${product["thumbnail"]}`)
                pId.prepend(img);
                ol.appendChild(liProduct);
                const ul = document.createElement("ul")
                liProduct.appendChild(ul);
                const pPrice = document.createElement("p");
                pPrice.innerText = `Price: ${product["price"]}`;
                pId.after(pPrice);
                const pDiscountPercentage = document.createElement("p");
                pDiscountPercentage.innerText = `Discount percentage: ${product["discountPercentage"]}`;
                pPrice.after(pDiscountPercentage);
                const pDiscountedTotal = document.createElement("p");
                pDiscountedTotal.innerText = `Discount total: ${product["discountedTotal"]}`;
                pDiscountPercentage.after(pDiscountedTotal);
                const pQuantity = document.createElement("p");
                pQuantity.innerText = `Quantity: ${product["quantity"]}`;
                pDiscountedTotal.after(pQuantity);
                const pTotal = document.createElement("p");
                pTotal.innerText = `Total: ${product["total"]}`;
                pQuantity.after(pTotal);
            }
        }
    })
