// Initialize the Amazon SDK
AWS.config.region = 'ap-northeast-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-1:X',
});

// Initialize the Amazon Cognito credentials provider
AWSCognito.config.region = 'ap-northeast-1'; // Region
AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-1:X'
});

//Get UserPool
var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool({
    UserPoolId : 'ap-northeast-X',
    ClientId : 'X'
});
