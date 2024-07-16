import faker from "faker";

const mount = (el) => {
    const products = [];
    const productsContainer = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
        products[i] = `<li>${faker.commerce.productName()}</li>`;
    }
    productsContainer.innerHTML = products.join("");
    el.appendChild(productsContainer);
};

// TO load data on internal tree for testing
if ("Development") {
    const divElement = document.getElementById("dev-products-dev");
    if (divElement) {
        mount(divElement);
    }
}


export {mount};
