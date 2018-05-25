const axios = require('axios');

class Api {
    constructor(options) {
        this.resetOptions(options);
    }

    resetOptions(options) {
        this.options = options || {};
    }

    setOptions(options) {
        this.options = this._mergeOptions(options);
    }

    setHeaders(headers) {
        this.options.headers = Object.assign(this.options.headers, headers);
    }

    get(resource, id, options) {
        return axios.get(this._url(resource, id), this._mergeOptions(options));
    }

    post(resource, data, options) {
        return axios.post(resource, data, this._mergeOptions(options));
    }

    patch(resource, id, data, options) {
        return axios.post(this._url(resource), data, this._mergeOptions(options));
    }

    put(resource, id, data, options) {
        return axios.put(this._url(resource), data, this._mergeOptions(options));
    }

    delete(resource, id, options) {
        return axios.delete(this._url(resource, id), this._mergeOptions(options));
    }

    _mergeOptions(options) {
        return Object.assign(this.options, options);
    }

    _url(resource, id) {
        return resource + (id != null ? '/' + id : '');
    }
}

export default Api;
