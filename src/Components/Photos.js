import React from "react"
import img from "./Photos/fix-it.jpg"
import img2 from "./Photos/issues-logo.jpg"
import img3 from "./Photos/insta_me.jpeg"
const Photos = (props) => {
    return(
        <div>
            <h1>Photos</h1>
            <div className="img-container">
                <img src={img} />
                <img src={img2} />
                <img src={img3} />
            </div>
        </div>
    )
}

export default Photos