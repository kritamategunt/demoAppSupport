import { PublicClientApplication, Configuration ,LogLevel} from "@azure/msal-browser";
const msalConfig: Configuration = {
  auth: {
    clientId: "fe277e5f-f705-4302-858a-38f15b7c602f", // This is the ONLY mandatory field that you need to supply.
    authority:
      "https://login.microsoftonline.com/52f315ba-de63-468c-87c7-a8247c35c604", // Defaults to "https://login.microsoftonline.com/common"
    redirectUri: "/", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
    clientCapabilities: ["CP1"], // this lets the resource owner know that this client is capable of handling claims challenge.
  },
  cache: {
    cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: any, message: any, containsPii: any) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export const protectedResources = {
  apiTodoList: {
    endpoint:
      "http://localhost:5001/api/v1/slaughter-wage/main-product-rate-code",
    scopes: {
      read: ["api://17c2d009-0629-4767-b39b-d2dc7bba0101/Todolist.Read"],
      write: ["api://17c2d009-0629-4767-b39b-d2dc7bba0101/Todolist.ReadWrite"],
    },
  },
};

export { msalInstance };