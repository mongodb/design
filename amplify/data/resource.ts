import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { chatbot } from '../functions/chatbot/resource';

const schema = a.schema({
  chatbot: a
    .query()
    .arguments({
      name: a.string(),
    })
    .returns(a.string())
    .authorization(allow => [allow.guest()])
    .handler(a.handler.function(chatbot)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
