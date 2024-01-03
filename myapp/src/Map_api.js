import React, { useEffect, useState } from 'react';


const Api = () => {

    const [api, setApi] = useState(null)



    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setApi(json))

    }, [])

    console.log(api)


    return (

        <div>
            {
                api && api.products.filter((item) => (item.price > 500)).map(item => {

                    return <div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://i.dummyjson.com/data/products/1/1.jpg" class="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                })
            }


        </div>


    )
}
export default Api
