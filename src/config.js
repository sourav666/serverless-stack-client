export default {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "faq-notes-app-uploads",
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL:
      "https://wgfgx3cxl1.execute-api.ap-southeast-2.amazonaws.com/prod/notes",
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_Ubyp411Jw",
    APP_CLIENT_ID: "29052qnnov8uoavc62dea0n05c",
    IDENTITY_POOL_ID: "ap-southeast-2:34c67634-fc60-431f-ba62-90bd9c6b7c1b",
  },
};
