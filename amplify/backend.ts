import { defineBackend } from '@aws-amplify/backend';
import { chatbot } from './functions/chatbot/resource';

defineBackend({
  chatbot,
});
