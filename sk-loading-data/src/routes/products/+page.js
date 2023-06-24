export const load = async (loadEvent) =>{
    const {fetch} = loadEvent
    const title = 'Wow so good';
    const response = await fetch('http://localhost:4000/products/');
    const products = await response.json();
    return {title, products}
}