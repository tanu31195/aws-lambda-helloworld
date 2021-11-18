# aws-lambda-helloworld

<https://www.serverless.com/framework/docs/providers/aws>
<https://aws.amazon.com/lambda/features/>

## AWS

Cloud Provider
Can use on demand and easy to scale servers
Netflix uses AWS
200+ services

### EC2

Virtual Servers in the cloud
Limited RAM and CPU
Continuous running

### Lambda

Virtual functions
Limited by time (execution time)
Run on demand
Scaling is automated
Pay per request and compute time
Easy monitoring through CloudWatch (Power tools)
10GB Max RAM, 15 minute duration, 10GB application artifact
Can use Fargate if the process runs for more than 15mins
Lambda power tuning can be used
Can add permissions to restrict services
Can create additional threads/processes
Can use SAM(Serverless Application Model) to automate deployment

### API Gateway

Fully managed, automatic scaling
Supports multiple protocols(RESTful, WebSockets)
Native connectivity to AWS services and HTTP endpoints
Privacy with VPC
Swagger support
Authorization can be open, IAM, Cognito and lambda authorizers
CORS is supported

## Serverless framework

Allows to create, deploy, manage and debug lambda functions
Has CloudFormation support

Go to IAM in AWS console,
Add new user, Name user: serverless-admin
Select AWS credential type: Access key - Programmatic access
Give Permission > Attach existing policies directly > AdministratorAccess

Step 2: Install serverless
`npm install -g serverless`

Step 3: Setup serverless
`serverless config credentials --provider aws --key XXX --secret YYY --profile serverless-admin`

`sls`

`sls create --template aws-nodejs --path hello-world-nodejs`

Add to serverless.yml
`provider: serverless-admin`
`region: 'ap-southeast-1'`

Deploy all, the stack(initial and if stack is updated)
`sls deploy`
Verbose mode
`sls deploy -v` 
-v will be deprecated so use --verbose
`sls deploy --verbose`

Deploy function only(if only function changes are done)
`sls deploy function -f hello`

Invoke locally
`sls invoke -f hello -l`
-f : function
-l : logs

Fetch logs(Invoke from new cli)
`sls logs -f hello -t`
-t: tail(continuous reading)

Remove the all
`sls remove`

`sls create --template aws-nodejs --path nodejs-example`
`sls create --template aws-java-maven --path java-maven-example`

<https://app.serverless.com/tanu31195/apps/python-example/python-example/dev/us-east-1/interact>

## YAML

Markup language used to edit serverless.yml
Key value pairs
Nested Objects
Support Arrays ( - one index of array)
Multi line strings ( | is used)
( --- ) is used to show beginning of yml file
Multi lines with ( > ) will consider as single line

### Functions timeout and memory

    functions:
      hello-short-timeout:
        handler: handler.hello
        memorySize: 128
        timeout: 3
      hello-long-timeout:
        handler: handler.hello
        memorySize: 256
        timeout: 6

Depending on function invocation duration(can be checked from Monitor tab) timeout can be changed
Memory can be set at the top level in provider block they will be applied to all functions except if they have defined in function
