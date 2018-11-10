import React from 'react'
import './BrandImage.css'



const brandImage = props=> {

    let brandImagePicClass = ''
    let headerClass
        if(props.pictureUrl === "BrandImagePicOne" ){
            brandImagePicClass =    "col-12 BrandImagePicOne"
        }
        if(props.pictureUrl ==="BrandImagePicOne" && props.isHovered){
            brandImagePicClass = "col-12 BrandImagePicOne BrandImageOnHover"
            headerClass = "headerClassOne"
        }
        if(props.pictureUrl ==="BrandImagePicTwo"){
            brandImagePicClass =  "col-12 BrandImagePicTwo"
        }
        if(props.pictureUrl ==="BrandImagePicTwo" && props.isHovered){
            brandImagePicClass = "col-12 BrandImagePicTwo BrandImageOnHover"
            headerClass = "headerClassTwo"
        }


   return ( <div className="Brand col-12">
        <div className="Overlay">

        </div>
        <div className={brandImagePicClass}>
        </div>

        <h1 className={headerClass} onMouseOver={props.onMouseOverHandler} onMouseLeave={props.onMouseLeaveHandler}>
            {props.preContent} <span style={{
                color: 'red'
        }}>{props.spanContent}</span>{props.postContent}
        </h1>
    </div>)
}

export default brandImage