class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    handleAutosys = () => {
      const message = this.createChatBotMessage("Great! You have chosen Autosys.",
      {
        widget: "autosys",
      }
      );
      
      this.updateChatbotState(message);
    };

    handleDatabase = () => {
      const message = this.createChatBotMessage("Great! You have chosen Database.",
      {
        widget: "database",
      }
      );
      this.updateChatbotState(message);
    };

    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;