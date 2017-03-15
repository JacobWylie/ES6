'use strict';

let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];

let [a, b, c, ...d] = widgets;

console.log(a);  //Logs: widget1
console.log(d);  //Logs: ['widget4', 'widget5']