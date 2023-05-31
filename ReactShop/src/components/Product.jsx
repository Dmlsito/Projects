
export function Product ({ products }) {
    console.log(products)
    return (
        <main className="products-main">
            <ul>
                {
                  products.map(product => {
                    return <li key={product.id}>
                            <strong>{product.title}</strong>
                            <img src={product.thumbnail}/>
                    </li>
                  })
                }
            </ul>
        </main>
    )
}