'use strict';

module.exports.hello = async (event) => {
  console.log('Hello world updated 2');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world NodeJs',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
