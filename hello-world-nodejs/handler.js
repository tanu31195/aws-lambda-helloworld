'use strict';

module.exports.hello = async (event) => {
  setTimeout(() => {console.log("5 second timeout")}, 5000);
  console.log('Hello world updated 2');
  const timeout = 5000;
  await sleep(timeout);
  console.log(`Timeout ${timeout}`);

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Hello world NodeJs',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
