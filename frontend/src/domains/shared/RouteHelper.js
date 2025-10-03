export const buildUrlWithParams = (routeFunction, params) => {
    return typeof routeFunction === 'function' ? routeFunction(params) : routeFunction;
};

export const addQueryParamsToUrl = (url, params = {}) => {
    const urlObj = new URL(url, window.location.origin);
    Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
            urlObj.searchParams.set(key, params[key]);
        }
    });
    return urlObj.toString();
};

export const buildCompleteApiUrl = (routeFunction, pathParams, queryParams = {}) => {
    const baseUrl = buildUrlWithParams(routeFunction, pathParams);
    return Object.keys(queryParams).length > 0
        ? addQueryParamsToUrl(baseUrl, queryParams)
        : baseUrl;
};