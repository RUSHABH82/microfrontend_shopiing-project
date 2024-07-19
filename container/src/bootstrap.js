import {mount as productMount} from "products/ProductsIndex";
import {mount as cartMount} from "cart/CartIndex";

productMount(document.getElementById("dev-products-container"));
cartMount(document.getElementById("dev-cart-container"));
