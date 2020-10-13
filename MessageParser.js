class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();

      if(lowercase.includes("autosys"))
        this.actionProvider.handleAutosys();

      if(lowercase.includes("database"))
        this.actionProvider.handleDatabase();
    }
  }
  
  export default MessageParser;