## Try sample with Teams Toolkit CLI

1. Install [Node.js](https://nodejs.org/en/download/) (Recommend LTS 16.x)
1. To install the Teams Toolkit CLI, use the npm package manager:
    ```
    npm install -g @microsoft/teamsapp-cli
    ```
1. Create dev-assist-dashboard project.
    ```
    teamsapp new sample dev-assist-dashboard --interactive false
    ```
1. Provision the project to Azure.
    ```
    teamsapp provision
    ```
1. Deploy.
    ```
    teamsapp deploy
    ```