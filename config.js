import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import AdhocOptions from "./AdhocOptions";
import Autosys from "./Autosys";
import Database from "./Database";

const config = {
  botName: "AdhocBot",
  initialMessages: [
      createChatBotMessage(`Hi, I'm here to help. Please select the type of adhoc requests:`, {
      widget: "adhocoptions",
    })],
    widgets: [
      {
        widgetName: "adhocoptions",
        widgetFunc: (props) => <AdhocOptions {...props} />,
      },
      {
        widgetName: "autosys",
        widgetFunc: (props) => <Autosys {...props} />,
      },
      {
        widgetName: "database",
        widgetFunc: (props) => <Database {...props} />,
      },
  ],
};

export default config;