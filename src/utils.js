import axios from 'axios'


export default class AjaxCaller {
    constructor() {
        this.apiPrefix = process.env.API_ROOT + '/api/';
        this.CancelToken = axios.CancelToken;
        this.source = this.CancelToken.source();
    }

    get(endpoint, data) {
        return new Promise(resolve => {

            axios.get(this.apiPrefix + endpoint, {
                params: data,
                cancelToken: this.source.token
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                console.log(error);
            })

        });
    }
    post(endpoint, data) {
        return new Promise(() => {
            axios.post(this.apiPrefix + endpoint, data)
        });
    }

    cancelRequest() {
        this.source.cancel('Operation canceled by the user.');
    }

    resumeRequests() {
        this.source = CancelToken.source();
    }

}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function groupBy(array) {
    return array.reduce((r, k) => {
        r[k] = 1 + r[k] || 1;
        return r
    }, {})
}

export function getCollectionsByLanguage(language) {
    switch (language) {
        case 'en':
            return [
                {text: 'General Terms', value: 'terms'},
                {text: 'Plastic Pollution', value: 'plastic_pollution'},
                {text: 'Innovations', value: 'innovations'},
                {text: 'Machines', value: 'machines'},
                {text: 'Products', value: 'products'},
                {text: 'Processes', value: 'processes'},
                {text: 'All Topics', value: 'all'},
            ];
        case 'de':
            return [
                {text: 'General Terms', value: 'terms'},
                {text: 'Innovations', value: 'innovations'},
                {text: 'Machines', value: 'machines'},
                {text: 'Products', value: 'products'},
                {text: 'Processes', value: 'processes'},
                {text: 'All Topics', value: 'all'},
            ];
        case 'nl': {
            return [
                {text: 'General Terms', value: 'terms'},
                {text: 'Innovations', value: 'innovations'},
                {text: 'Machines', value: 'machines'},
                {text: 'Products', value: 'products'},
                {text: 'Processes', value: 'processes'},
                {text: 'All Topics', value: 'all'},
            ];
        }
        case 'el':
            return [
                {text: 'General Terms', value: 'terms'},
                {text: 'Innovations', value: 'innovations'},
                {text: 'Machines', value: 'machines'},
                {text: 'Products', value: 'products'},
                {text: 'Processes', value: 'processes'},
                {text: 'All Topics', value: 'all'},
            ];
        default:
            console.error("no collection found for this language!")
    }
}