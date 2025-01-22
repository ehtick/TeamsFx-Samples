import * as ACData from "adaptivecards-templating";
import express from "express";
import { conversationBot } from "./internal/initialize";
import notificationTemplate from "./adaptiveCards/notification-default.json";
import { SimpleBot } from "./simpleBot";

const teamsBot = new SimpleBot();

// Create express application.
const expressApp = express();
expressApp.use(express.json());

const server = expressApp.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`\nBot Started, ${expressApp.name} listening to`, server.address());
});

// Register an API endpoint with `express`.
//
// This endpoint is provided by your application to listen to events. You can configure
// your IT processes, other applications, background tasks, etc - to POST events to this
// endpoint.
//
// In response to events, this function sends Adaptive Cards to Teams. You can update the logic in this function
// to suit your needs. You can enrich the event with additional data and send an Adaptive Card as required.
//
// You can add authentication / authorization for this API. Refer to
// https://aka.ms/teamsfx-notification for more details.
expressApp.post(
  "/api/notification",
  async (req, res, next) => {
    // By default this function will iterate all the installation points and send an Adaptive Card
    // to every installation.
    for (const target of await conversationBot.notification.installations()) {
      await target.sendAdaptiveCard(
        new ACData.Template(notificationTemplate).expand({
          $root:
          {
            title: "New Event Occurred!",
            appName: "Contoso App Notification",
            description: `This is a sample http-triggered notification to ${target.type}`,
            notificationUrl: "https://www.adaptivecards.io/",
          }
        })
      );

      // Note - you can filter the installations if you don't want to send the event to every installation.

      /** For example, if the current target is a "Group" this means that the notification application is
       *  installed in a Group Chat.
      if (target.type === NotificationTargetType.Group) {
        // You can send the Adaptive Card to the Group Chat
        await target.sendAdaptiveCard(...);

        // Or you can list all members in the Group Chat and send the Adaptive Card to each Team member
        const members = await target.members();
        for (const member of members) {
          // You can even filter the members and only send the Adaptive Card to members that fit a criteria
          await member.sendAdaptiveCard(...);
        }
      }
      **/

      /** If the current target is "Channel" this means that the notification application is installed
       *  in a Team.
      if (target.type === NotificationTargetType.Channel) {
        // If you send an Adaptive Card to the Team (the target), it sends it to the `General` channel of the Team
        await target.sendAdaptiveCard(...);

        // Alternatively, you can list all channels in the Team and send the Adaptive Card to each channel
        const channels = await target.channels();
        for (const channel of channels) {
          await channel.sendAdaptiveCard(...);
        }

        // Or, you can list all members in the Team and send the Adaptive Card to each Team member
        const members = await target.members();
        for (const member of members) {
          await member.sendAdaptiveCard(...);
        }
      }
      **/

      /** If the current target is "Person" this means that the notification application is installed in a
       *  personal chat.
      if (target.type === NotificationTargetType.Person) {
        // Directly notify the individual person
        await target.sendAdaptiveCard(...);
      }
      **/
    }

    res.json({});
  }
);

expressApp.post("/api/messages", async (req, res, next) => {
  await conversationBot.requestHandler(req, res, async (context) => {
    // unprocessed request fall through custom bot
    await teamsBot.run(context);
  });
});
