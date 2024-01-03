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
                       
                    </div>
                })
            }


        </div>


    )
}
export default Api
