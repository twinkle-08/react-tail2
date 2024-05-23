// import React from "react";

// import Card from './Card';

// function Tours({tours,removeTour})
// {
//    return(
//     <div className="container">
//         <div className="title">
//             <h2>Plan with Love</h2>
//         </div>
//         <div className="cards">
//             {/* <card></card>
//             <card></card>
//             <card></card> 
//             <card></card>
//             <card></card>
//             <card></card>
//             <card></card> */}
//             {/* instead of making this 7 card make only one card with the help of map function  */}
//             {
//                 tours.map((tour) =>{
//                     return <card {...tour} removeTour={removeTour}/>
//                 })
//             }
//         </div>
//     </div>
//    );   
// }
// export default Tours;
import React from 'react'
import Card from './Card';
const Tours = (props) => {

    function removeHandler(id) {
        console.log(id);
        props.removeTours(id);
    }

    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Love</h2>
            </div>
            <div className='cards'>
                {
                    props.tours.map((tour) => {
                        return <Card {...tour} key={tour.id} removeTour={removeHandler} />;
                    })
                }
            </div>
        </div>
    )
}

export default Tours;