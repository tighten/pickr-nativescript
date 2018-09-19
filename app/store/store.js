import get from 'lodash/get';
import isUndefined from 'lodash/isundefined';
import set from 'lodash/set';
import Vue from 'nativescript-vue';

class Store {
    constructor(resources, api) {
        this.api = api;

        for (var key in resources) {
            if (typeof resources[key] == 'object' && resources[key].fetch) {
                this.api.get(resources[key].fetch).then((response) => {
                    resources[key] = response.data;
                });
            }
        }

        this.data = new Vue({ data: resources });
    }

    get(resource, id) {
        if (Array.isArray(resource)) {
            if (id) {
                resource.push(id);
            }

            return this._getNested(resource);
        }

        if (id) {
            return this.findById(resource, id);
        }

        return get(this.data, resource);
    }

    set(resource, data) {
        this.update(resource, data);
    }

    append(resource, data) {
        let target = this.get(resource);

        if (! isUndefined(target)) {
            target.push(data);
        }
    }

    prepend(resource, data) {
        let target = this.get(resource);

        if (! isUndefined(target)) {
            target.unshift(data);
        }
    }

    update(resource, data) {
        let target = this.get(resource);

        if (Array.isArray(target) && target.length) {
            let index = this.getIndex(target, data);

            if (index == null) {
                this.append(resource, data);
            } else {
                target.splice(index, 1, data);
            }
        } else {
            set(this.data, resource, data);
        }
    }

    remove(resource, data) {
        let target = this.get(resource);
        let index = this.getIndex(target, data);

        if (index != null) {
            target.splice(index, 1);
        }
    }

    getIndex(target, data) {
        if (typeof target === 'string') {
            target = this.get(target);
        }

        let id = Number.isInteger(data) ? data : data.id;

        if (Array.isArray(target)) {
            let index = target.indexOf(
                target.find((element) => element.id == id)
            );

            return index > -1 ? index : null;
        }
    }

    findById(resource, id) {
        let target = this.get(resource);

        if (Array.isArray(target)) {
            return target.find((element) => element.id == id);
        }
    }

    _getNested(resource_path) {
        let scope = get(this.data, resource_path.shift());

        if (scope) {
            let result = resource_path.reduce((scope, value) => {
                if (scope && this._isNumeric(value)) {
                    scope = scope.find(element => element.id == parseInt(value));
                } else {
                    scope = get(scope, value);
                }

                return scope;
            }, scope)

            return result;
        }
    }

    _isNumeric(value) {
        return ! isNaN(value);
    }

    /**
     * API methods
     */
    fetch(endpoint, id, resource, options) {
        return new Promise((resolve, reject) => {
            this.api.get(this._url(endpoint), id, options)
                .then((response) => {
                    this.set(resource || endpoint, response.data);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    post(endpoint, data, resource, options) {
        return new Promise((resolve, reject) => {
            this.api.post(this._url(endpoint), data, options)
                .then((response) => {
                    this.append(resource || endpoint.split('/'), response.data);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    patch(endpoint, data, resource, options) {
        return new Promise((resolve, reject) => {
            this.api.patch(this._url(endpoint), data.id, data, options)
                .then((response) => {
                    this.update(resource || endpoint.split('/'), response.data);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    put(endpoint, data, resource, options) {
        return new Promise((resolve, reject) => {
            this.api.put(this._url(endpoint + '/' + data.id), data.id, data, options)
                .then((response) => {
                    this.update(resource || endpoint.split('/'), response.data);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    delete(endpoint, id, resource, options) {
        return new Promise((resolve, reject) => {
            this.api.delete(this._url(endpoint), id, options)
                .then((response) => {
                    this.remove(resource || endpoint.split('/'), id);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    _url(endpoint) {
        return Array.isArray(endpoint) ? endpoint.join('/') : endpoint;
    }
}

export default Store;
