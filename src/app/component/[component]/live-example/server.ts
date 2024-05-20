import { Data } from "@/components/live-example/types";
import { composeStories } from "@storybook/react";

export async function getStories(componentName: string) {
  return await import(`@leafygreen-ui/${componentName}/stories`)
    .then((response) => {
      const { LiveExample } = composeStories(response);
      return { LiveExample, allData: response } as Data;
    })
    .catch((error) => console.warn(error));
}
