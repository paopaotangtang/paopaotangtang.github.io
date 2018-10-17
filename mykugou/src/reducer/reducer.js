
const changelist = "change_list";
const changehash = "change_hash";
function reducer(state={},action){
    switch(action.type){
        case changelist:
            return{
                ...state,
                songlist:action.songlist
            }
            break;
        case changehash:
            return{
                ...state,
                hash:action.hash
            }
            break;
        default:
            return state;
    }

}
export default reducer;