/**
 * Created by u on 2017/5/20.
 */

import React,{ Component} from 'react';


class CarouseNav extends Component {
    getNavItem(imageSrc,currentIndex,selectImage) {
        const data = [];

        imageSrc.forEach((image,i,arr) => {
            if (i == currentIndex) {
                data.push(<li className="carousel-nav-item carousel-nav-item-active" key={i} onClick={selectImage.bind(this,i)}></li>)
            } else{
                data.push(<li className="carousel-nav-item" key={i} onClick={selectImage.bind(this,i)}></li>)
            }
        });
        return data;
    }
    render() {

        let {imageSrc,currentIndex,selectImage} = this.props;
        return (
            <ul className="carousel-nav" >
                {this.getNavItem(imageSrc,currentIndex,selectImage)}
            </ul>

        )
    }
}

export default CarouseNav;