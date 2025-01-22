## Try the Sample with Teams Toolkit CLI
1. Install [Node.js](https://nodejs.org/en/download/) (use the latest v14 LTS release)
1. To install the Teams Toolkit CLI, use the npm package manager:
    ```
    npm install -g @microsoft/teamsapp-cli
    ```
1. Create todo-list project.
    ```
    teamsapp new sample todo-list-with-Azure-backend --interactive false
    ```
1. Provision the project to azure. You will be asked to input admin name and password of SQL.
    ```
    teamsapp provision
    ```
1. Deploy.
    ```
    teamsapp deploy
    ```
1. Open **env/.env.dev** file, you could get the database name in `PROVISIONOUTPUT__AZURESQLOUTPUT__DATABASENAME` output. In Azure portal, find the database and use [query editor](https://docs.microsoft.com/en-us/azure/azure-sql/database/connect-query-portal) with below query to create tables:
    ```sql
    CREATE TABLE Todo
    (
        id INT IDENTITY PRIMARY KEY,
        description NVARCHAR(128) NOT NULL,
        objectId NVARCHAR(36),
        channelOrChatId NVARCHAR(128),
        isCompleted TinyInt NOT NULL default 0,
    )
    ```
1. Refer to [manually add user](https://github.com/OfficeDev/TeamsFx/blob/dev/docs/fx-core/sql-help.md#step-2-add-database-user-manually) to add user in database.
1. Once you have successfully created DB Table and added user, you can now try previewing the app running in Azure. In Visual Studio Code, open `Run and Debug` and select `Launch Remote (Edge)` or `Launch Remote (Chrome)` in the dropdown list and Press `F5` or green arrow button to open a browser.