
export const SET_PAGE_TO_1 = "SET_PAGE_TO_1";
export const SET_PAGE_TO_2 ="SET_PAGE_TO_2";
export const SET_PAGE_TO_3 = "SET_PAGE_TO_3";


export const resetRegPage = () => ({
   type:SET_PAGE_TO_1
})

export const goToSecondPage = () => ({
    type:SET_PAGE_TO_2
})

export const goToThirdPage = () => ({
    type:SET_PAGE_TO_3
})
