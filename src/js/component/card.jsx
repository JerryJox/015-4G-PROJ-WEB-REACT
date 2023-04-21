import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
function Card(){
    return(<div className="card my-3" style={{width: "270px"}}>
                <img src={rigoImage} className="card-img-top" alt="..." />
                <div className="card-body justify-content-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>)
}
export default Card
