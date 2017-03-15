'use strict';

const submit = (name, comments, rating = 5) => {
  let data = { name, comments, rating };
  
  for (let key in data) {
    console.log(key + ':', data[key]);
  }
  // … do ajax request
}

submit('English', "Great course!", 9)
              
// Logs: 	name: English
//			comments: Great course!
//			rating: 9