/**
 * Created by u on 2017/5/20.
 */
import { fromJS } from 'immutable';

const initState = {
    imageSrc:[
        '../images/1.jpeg',
        '../images/2.jpeg',
        '../images/3.jpeg',
        '../images/4.jpeg',
        '../images/5.jpeg'

    ],
    currentIndex :4
}

export default (state = initState,action) => {
    console.log(state)

    let length = state.imageSrc.length;
    switch (action.type) {
        case "SELECT_IMAGE" :

            return fromJS(state).set("currentIndex",action.id).toJS();
        case "PRE_IMAGE" :
            let preIndex = state.currentIndex - 1;
            preIndex = preIndex < 0 ? length : preIndex;
            return fromJS(state).set("currentIndex",preIndex).toJS();
        case "NEXT_IMAGE" :
            let nextIndex = state.currentIndex + 1;
            nextIndex = nextIndex % length;
            return fromJS(state).set("currentIndex",nextIndex).toJS();
        default :
            return state;
    }
}
