import Image from "next/image";

async function DetailProduct(params) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`)
    const data = await res.json()

    return data
}

export default async function Page({params}) {
    const product = await DetailProduct(params);
    // console.log(product);
    return (
        <>
            <table style={{fontSize: '24px'}}>
                <tbody>                
                <tr>                    
                    <td colSpan={3}><Image src={product.thumbnail} alt="Thubmnail Product"  width={400} height={400} /></td>                    
                </tr>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>{product.title}</td>                    
                </tr>
                <tr>
                    <td>Brand</td>
                    <td>:</td>
                    <td>{product.brand}</td>                    
                </tr>
                <tr>
                    <td>Deskripsi</td>
                    <td>:</td>
                    <td>{product.description}</td>                    
                </tr>
                <tr>
                    <td>Rating</td>
                    <td>:</td>
                    <td>{product.rating}</td>
                </tr>
                <tr>
                    <td>Stok</td>
                    <td>:</td>
                    <td>{product.stock}</td>
                </tr>
                <tr>
                    <td>Harga</td>
                    <td>:</td>
                    <td>{product.price}</td>
                </tr>
                </tbody>
            </table>
        </>    
    )
};
