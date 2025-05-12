import Button, { Variant } from '@leafygreen-ui/button';
import Popover from '@leafygreen-ui/popover';
import { css } from '@leafygreen-ui/emotion';
import Icon from '@leafygreen-ui/icon';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import Chatbot, {
  ChatWindow,
  FloatingActionButtonTrigger,
} from 'mongodb-chatbot-ui';
import { useRef, useState } from 'react';
import Card from '@leafygreen-ui/card';
import { spacing } from '@leafygreen-ui/tokens';

export const ChatbotComponent = () => {
  const endpoint = process.env.NEXT_PUBLIC_CHATBOT_ENDPOINT;
  const { darkMode } = useDarkMode();
  const fabRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const handleFABClick = () => {
    setIsOpen(prev => !prev);
  };

  return endpoint ? (
    <Chatbot darkMode={darkMode} serverBaseUrl={endpoint}>
      <Button
        ref={fabRef}
        onClick={handleFABClick}
        variant={Variant.BaseGreen}
        size="large"
        leftGlyph={<Icon glyph="Sparkle" size="large" />}
        className={css`
          position: fixed;
          bottom: 24px;
          right: 24px;
        `}
      >
        {/* <span>Chat with LeafyGreen AI</span> */}
      </Button>

      <Popover
        active={isOpen}
        refEl={fabRef}
        spacing={spacing[200]}
        align={'bottom'}
        justify={'end'}
        className={css`
          min-width: 33vw;
          max-width: 50vw;
          /* max-height: 50vh; */
        `}
      >
        <ChatWindow
          className={css`
            height: 100%;
            width: 100%;
          `}
          windowTitle="LeafyGreen AI"

          // initialMessageText="Welcome to LeafyGreen AI. What can I help you with?"
          // initialMessageSuggestedPrompts={suggestedPrompts}
        />
      </Popover>
    </Chatbot>
  ) : null;
};
