

// Asynchronous operations using promises


function firstFunction(location) {
    return new Promise( ( resolve, reject) => {
      console.log(`making request to ${location}`)

      if (location === 'google') {
         resolve(`${location} is saying hi`)
      }

      else {
        reject('we can only talk to Google')
      }
    });
}
// Asynchronous operations using promises

function secondFunction(response) {
    return new Promise( (resolve, reject) => {
      console.log('Processing Response')
      resolve(`Extra Information + ${response}`)
    })
}

// Asynchronous operations using promises

// firstFunction('google').then( response => {
//     // console.log(response);
//     console.log('Promise response from first Function Received')
//      return secondFunction(response) // resolved response from firstFunction passed has an argument to secondFunction Parameter
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })


// Asynchronous operations using async and await

async function processFunctions() {
  try {
    let response = await firstFunction('google')
   console.log('Reponse Received');
   let processedResponse = await secondFunction(response);
   console.log(processedResponse);

  }
  catch (err) {
    console.log(err)
  }
   
}


processFunctions()