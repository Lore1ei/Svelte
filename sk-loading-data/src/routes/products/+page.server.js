export const load = async (serverLoadEvent) =>{
    const {fetch} = serverLoadEvent
    const title = 'Wow so good';
    const response = await fetch('http://localhost:4000/products/');
    const products = await response.json();
    return {title, products}
}