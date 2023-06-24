export const load = async (serverLoadEvent) =>{
    const {fetch, params, url, route} = serverLoadEvent
    console.log(fetch, params, url, route)
    const {productId} = params
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();
    return {product}
}