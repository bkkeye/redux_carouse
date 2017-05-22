
/**
 * Created by u on 2017/5/11.
 */
import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import CarouseNav from './CarouseNav.jsx';
import actions from '../actions/actions'
import  "../style.css";
class Carousel extends Component {
    render() {
        let {carouseReducer, actions} = this.props;
        let {currentIndex, imageSrc} = carouseReducer;
          console.log(imageSrc)
        return (
            <div className="carousel">
                <div>
                    <img
                        src={imageSrc[currentIndex]}
                        key={imageSrc[currentIndex]}
                    />
                </div>
                <div>
                    <CarouseNav imageSrc={imageSrc} currentIndex={currentIndex} selectImage={actions.selectImage}/>
                </div>
                <div>
                    <button onClick={actions.preImage}>上一张</button>
                    <button onClick={actions.nextImage}>下一张</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ //接收store中的state
    carouseReducer: state.carouseReducer
});

/* Map Redux actions to component props
 return {
 onIncreaseClick: () => dispatch(increaseAction) 将props的方法设置为一个发送action
 }*/
const mapDispatchToProps = dispatch => ({ //接收store中的dispatch
    actions: bindActionCreators(actions, dispatch) //dispatch(actions.xx) 可以直接调用action.xx
});

export default connect(mapStateToProps,mapDispatchToProps)(Carousel)
