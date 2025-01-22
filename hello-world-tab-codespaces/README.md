# Getting Started with Hello World Tab Sample

[![Open app in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=v3&repo=348288141&machine=standardLinux32gb&location=WestUs2&devcontainer_path=.devcontainer%2Fhello-world-tab-codespaces%2Fdevcontainer.json&resume=1)

Microsoft Teams supports the ability to run web-based UI inside "custom tabs" that users can install either for just themselves (personal tabs) or within a team or group chat context.

Hello World Tab shows you how to build a tab app without single sign on.

![Hello world Tab in Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/assets/images/teams-toolkit-v2/first-tab/tab-app-localdebug.png)

## This sample illustrates
- How to use Teams Toolkit build a Teams tab app.
- How to use [Codespaces](https://github.com/features/codespaces) to run and preview a Tab app in Teams.

## Prerequisite to use this sample
- A GitHub account which will be used to create a codespace with fully configured dev environments in the cloud. 
- A Microsoft 365 tenant in which you have permission to upload Teams apps. You can get a free Microsoft 365 developer tenant by joining the [Microsoft 365 developer program](https://developer.microsoft.com/en-us/microsoft-365/dev-program).

## Minimal path to awesome

### Run the app in Codespaces
1. Click [Open in GitHub Codespaces badge](#getting-started-with-hello-world-tab-sample) to create a codespace for the sample app.

    > Note: you can customize the creation options (e.g. region, machine type) according to your needs.

1. Once your codespace is created, Select the Teams Toolkit icon on the left in the VS Code toolbar. And then select `Preview your Teams app (F5)` from Teams Toolkit or simply press `F5` to run and preview your application.

1. When Teams Web Client is launched in the browser, select the `Add` button in the dialog to install your app to Teams.

   > **Note**: You may need to **allow pop-ups** so that Codespace can open a new browser to sideload the app to Teams:
   >
   > ![image](https://user-images.githubusercontent.com/10163840/225506097-18d04d70-ea4c-4a10-bde4-9d38654a2e72.png)

### Deploy the app to Azure
- From VS Code: 
    1. Sign into Azure by clicking the `Sign in to Azure` under the `ACCOUNTS` section from sidebar.
    1. Click `Provision` from `LIFECYCLE` section or open the command palette and select: `Teams: Provision`.
    1. Click `Deploy` or open the command palette and select: `Teams: Deploy`.
- From Teams Toolkit CLI:
    1. Run command: `teamsapp auth login azure`.
    1. Run command: `teamsapp provision --env dev`.
    1. Run command: `teamsapp deploy --env dev`.

### Preview the app in Teams
- From VS Code: 
    1. Open the `Run and Debug Activity` Panel. Select `Launch Remote (Codespaces)` from the launch configuration drop-down.
- From Teams Toolkit CLI:
    1. Run command: `teamsapp preview --env dev`.

## Version History
|Date| Author| Comments|
|---|---|---|
|Apr 3, 2023| Dooriya Li | Add hello world tab sample for codespaces |

## Feedback
We really appreciate your feedback! If you encounter any issue or error, please report issues to us following the [Supporting Guide](https://github.com/OfficeDev/TeamsFx-Samples/blob/dev/SUPPORT.md). Meanwhile you can make [recording](https://aka.ms/teamsfx-record) of your journey with our product, they really make the product better. Thank you!
