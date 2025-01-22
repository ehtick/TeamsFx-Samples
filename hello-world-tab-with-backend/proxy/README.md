# Run the app locally with Graph API proxy

To run the app locally with Graph API proxy, you can skip the user login flow and get the customized Graph API responses regardless on the permission.

## Changes in the project

1. Add an option `Debug in Teams with proxy (Edge)` in `Run and Debug Activity` Panel for VS Code.
1. Add a package script command `proxy:teamsfx` to start dev proxy.
1. Add folder `proxy` for dev proxy configuration.
1. Add the hooking code in `src/components/sample/HookForProxy.tsx` to skip the authentication flow of login/getToken for proxy mode in browser environment.
1. Add the hooking code in `api/getUserProfile/HookForProxy.ts` to set the proxy agent configure and set the authenticationProvider and proxy agent for Graph client 
   
## How it works

- From VS Code:
    1. In `.vscode/tasks.json`, add the `Check dev proxy` task to ensure the `devproxy` command available. 
    1. In `.vscode/tasks.json`, set environment `REACT_APP_HOOK_FOR_PROXY` in `Start frontend with proxy` task and `HOOK_FOR_PROXY` in `Start backend with proxy` task to enable the hooking code.
    1. Add the `Start dev proxy` task to start the devproxy. It leverages the package script command `proxy:teamsfx`.
   
When the app is running, the authentication flow for login and get access token will be hooked to skip. The Graph API requests will be sent to the devproxy listening address(127.0.0.1:54000).

## Usage of proxy
### Customize Graph API response
All the mocked Graph API responses are listed in `proxy/graph-mocks.json`. To update the  Please refer to [how-to-mock-responses](https://learn.microsoft.com/en-us/microsoft-cloud/dev/dev-proxy/how-to/mock-responses) to learn more. You can See the samples in [Microsoft Graph mocks from Microsoft Graph API docs](https://adoption.microsoft.com/en-us/sample-solution-gallery/sample/pnp-devproxy-microsoft-graph-docs-mocks/) and [Microsoft Graph mocks from Microsoft Graph API docs with sandbox data](https://adoption.microsoft.com/en-us/sample-solution-gallery/sample/pnp-devproxy-microsoft-graph-sandbox-mocks/).
### Simulate errors on Graph API
To test the app with random errors from Graph API, update the package script command `proxy:teamsfx` to `"devproxy -p 54000 --as-system-proxy false -c proxy/graph.json -f 100 --record"` and rerun the app again. 
Refer to [Simulate errors](https://learn.microsoft.com/en-us/microsoft-cloud/dev/dev-proxy/how-to/test-my-app-with-random-errors) to learn more.
### Minimal Graph API permissions
To get the minimal permission for Graph API, launch the app by `Debug in Teams with proxy (Edge)` in VS Code and test the app by calling all the Graph API requests, then switch to the `Start dev proxy` task window and input S, the devproxy will print the minimal permissions in the output.
Refer to [Detect minimal Microsoft Graph API permissions](https://learn.microsoft.com/en-us/microsoft-cloud/dev/dev-proxy/how-to/detect-minimal-microsoft-graph-api-permissions) to learn more.

## Known issues
### Launch failed for devproxy not found in MacOS
In MacOS, it may fail to run the app locally with proxy for devproxy not found even if the devproxy has already been installed. Because the `Check dev proxy` and `Start dev proxy` depend on the `VS Code` custom tasks execution mechanism. As the default task shell is `/bin/sh` for VS Code in MacOS, the PATH set by devproxy installation may not take effect for it. To make sure `Check dev proxy` and `Start dev proxy` can be executed successfully, you can set the PATH of devproxy in `/etc/paths` or other files which can make the `/bin/sh` find the devproxy. 

