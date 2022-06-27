export const GET_INPUT_DATA = "GET_INPUT_DATA";
export const SORT_BY_LOCATION = "SORT_BY_LOCATION"
export const SORT_BY_JOB_TYPE = "SORT_BY_JOB_TYPE"
export const SORT_BY_CATEGORY = "SORT_BY_CATEGORY"
export const getInputData =(payload) => {
    return{
        type:GET_INPUT_DATA,
        payload
    }
}

export const sortByLocation =(payload) => {
    return{
        type: SORT_BY_LOCATION ,
        payload
    }
}
export const sortByJobType =(payload) => {
    return{
        type: SORT_BY_JOB_TYPE ,
        payload
    }
}
export const sortByCategory =(payload) => {
    return{
        type: SORT_BY_CATEGORY ,
        payload
    }
}

