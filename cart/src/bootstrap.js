import faker from "faker";

const mount = (el) => {
    el.innerText = getRandomText();
}

// TO load data on internal tree for testing
if ("Development") {
    const divElement = document.getElementById("dev-cart-dev");
    if (divElement) {
        mount(divElement);
    }
}

function getRandomText() {
    return `You have ${faker.random.number()}`;
}

export {mount}
