import Link from "next/link";

async function getProduct() {
    const res = await fetch('https://dummyjson.com/products?limit=5', {cache: 'no-store'})
    const data = await res.json();

    return data;
}

export default async function BlogLayout({children}) {
    const {products} = await getProduct();
    // console.log(products);
    return (
        <>
            <h1>Daftar Produck</h1>
            {products.map(data => {
                return(
                    <Link style={{display: 'block', margin: '20px 0', fontSize: '24px', textDecoration: 'none'}} href={`blog/${data.id}`} key={data.id}>{data.title}</Link>
                )
            })}
            <hr/>
            <h1>Detail Product</h1>
            {children}
        </>

    )
};
