import React from 'react'

const Products = () => {
    return (
        <div className="row">
            <h3>Products</h3>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className='card'>
                        <img src='/images/iphone_15_promax.webp' className='card-img-top' alt='Product Image'/>
                        <div className='card-body'>
                            <h5 className="card-title">Iphone 15 Pro Max</h5>
                            <p className='card-text'>$1199.99</p>
                            <a href='#' className ='btn btn-primary'>Add to cart</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className='card'>
                        <img src='/images/Lenovo_ThinkPad.jpeg' className='card-img-top' alt='Product Image'/>
                        <div className='card-body'>
                            <h5 className="card-title">Lenovo ThinkPad</h5>
                            <p className='card-text'>$321.99</p>
                            <a href='#' className ='btn btn-primary'>Add to cart</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className='card'>
                        <img src='/images/macbook_air.jpg' className='card-img-top' alt='Product Image'/>
                        <div className='card-body'>
                            <h5 className="card-title">Macbook Air</h5>
                            <p className='card-text'>$1159.99</p>
                            <a href='#' className ='btn btn-primary'>Add to cart</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className='card'>
                        <img src='/images/acer_laptop.jpg' className='card-img-top' alt='Product Image'/>
                        <div className='card-body'>
                            <h5 className="card-title">Acer Laptop</h5>
                            <p className='card-text'>$1135.99</p>
                            <a href='#' className ='btn btn-primary'>Add to cart</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className='card'>
                        <img src='/images/HP_PC.webp' className='card-img-top' alt='Product Image'/>
                        <div className='card-body'>
                            <h5 className="card-title">HP PC</h5>
                            <p className='card-text'>$16.99</p>
                            <a href='#' className ='btn btn-primary'>Add to cart</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className='card'>
                        <img src='/images/Gigabyte_Laptop.webp' className='card-img-top' alt='Product Image'/>
                        <div className='card-body'>
                            <h5 className="card-title">Gigabyte Laptop</h5>
                            <p className='card-text'>$23.99</p>
                            <a href='#' className ='btn btn-primary'>Add to cart</a>
                        </div>
                    </div>
                </div>




            {/* {products.map(item => {
                return (
                    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <img src={item.thumbnail} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">${item.price}</p>
                                <a href="#" className="btn btn-sm btn-success" onClick={() => addCartItem(item)}><i className="fas fa-shopping-cart"></i>Add to Cart</a>
                            </div>
                        </div>
                    </div>
                )
            })} */}
        </div>
    )
}

export default Products