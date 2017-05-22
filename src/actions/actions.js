/**
 * Created by u on 2017/5/20.
 */
let actions = {

    //选择图片
    selectImage : (id) => {
        return {
            type : "SELECT_IMAGE",
            id :id
        }
    },
    preImage : () => {
        return {
            type : "PRE_IMAGE"
        }
    },
    nextImage : () => {
        return {
            type : "NEXT_IMAGE"
        }
    }
}

export default actions;

