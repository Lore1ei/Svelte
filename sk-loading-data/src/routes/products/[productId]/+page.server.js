import {error} from "@sveltejs/kit";

export const load = async (serverLoadEvent) =>{
    const {fetch, params, url, route} = serverLoadEvent
    const {productId} = params

    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();
    console.log(product)
    if (Object.keys(product).length === 0) {
        throw error(404, 'NotFound')
    }
    return {product}
}