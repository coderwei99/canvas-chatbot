export const DEFAULT_CHAT_MODEL: string = "deepseek-chat";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "deepseek-chat",
    name: "DeepSeek Chat",
    description: "Advanced conversational AI model with strong reasoning capabilities",
  },
  {
    id: "deepseek-reasoner", 
    name: "DeepSeek Reasoner",
    description: "DeepSeek model with advanced chain-of-thought reasoning for complex problems",
  },
];
