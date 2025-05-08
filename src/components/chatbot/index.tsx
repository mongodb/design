import { css } from '@leafygreen-ui/emotion';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import Chatbot, { ChatWindow } from 'mongodb-chatbot-ui';

export const ChatbotComponent = () => {
  const { darkMode } = useDarkMode();
  const endpoint = process.env.NEXT_PUBLIC_CHATBOT_ENDPOINT;

  return endpoint ? (
    <Chatbot darkMode={darkMode} serverBaseUrl={endpoint}>
      <ChatWindow
        className={css`
          height: 100%;
        `}
        initialMessageText="Welcome to LeafyGreen AI. What can I help you with?"
        // initialMessageSuggestedPrompts={suggestedPrompts}
      />
    </Chatbot>
  ) : null;
};
