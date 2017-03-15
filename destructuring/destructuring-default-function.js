'use strict';

const getData = ({ url, method = 'post' } = {}, callback) => callback(url, method);

getData({ url: 'myposturl.com' }, (url, method) => console.log(url, method));

getData({ url: 'myputurl.com', method: 'put' }, (url, method) => console.log(url, method));