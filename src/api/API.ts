import axios from 'axios'
// const cors = require("cors");

export const url = process.env.REACT_APP_PROXY_URL

export let instance = axios.create({
    withCredentials: false,
    baseURL: url,
    headers: {
        // Authorization: localStorage.getItem('apikey') ? 'Bearer ' + localStorage.getItem('apikey') : getTocken(),
        Authorization: 'Bearer ' + localStorage.getItem('apikey'),
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Accept': "application/json"
    }
})



export const addToken = (token: string) => {
    instance = axios.create({
        withCredentials: false,
        baseURL: url,
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('apikey'),
            'Content-Type': 'application/json',
            'Accept': "application/json"
        }
    })
}

export const requestActionBase = (fetch: any, fetchParams: any, callbackSuccess:any, callbackError:any) => {

}

export const prepearFilterParams = (params: any): string => {

    let filterParam = ''
    if (params.page) {
        filterParam = 'page=' + params.page.toString()
        delete params.page
    }
    if (params.per_page) {
        filterParam = filterParam + '&per_page=' + params.per_page.toString()
        delete params.per_page
    }

    for (let key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            console.log('PARAMS', params);
            const element = params[key];
                if (element) {
                    filterParam = filterParam+'&filter['+key+']='+element
                }
        }
    }
    return filterParam
}