export const copyContextGuidelinesMap = {
  button: `
- Punctuation: Do not include punctuation such as exclamation marks or periods.
- Clarity and Precision: Ensure labels accurately describe content or actions in clear terms. 
   - When a page is not specific to a single action, such as our product entry walls, include the subject of the action that will be taken when a button is clicked. 
      - For example, “Create search index,” rather than “Create.”
   - Conversely, if the page is specific to performing a particular action, such as a full-page form, use the verb without including its subject. Usually these pages will include the subject of the action in the page's header.
   - Be consistent between call to actions, headers, etc with how terms are used to describe an action.
      - For example, if a button to enter a creation flow says "Create Cluster," don't refer to the subject being created as a "deployment" in a header or a CTA later in the flow.
- Action Names: Use the following simpler terminology when possible over alternatives. Note that this is a guideline and not a rule. Always opt for terminology that can be more easily understood if using simpler terminology is more confusing to users.
   - "Save," rather than "commit," "write," "apply," or similar.
   - "Confirm," rather than "accept," or similar.
   - "Create," rather than "deploy," "provision," "make," or similar.
   - "Cancel," rather than "exit," "escape," "nevermind," or similar.
   - "Delete," rather than "destroy," "deprovision," "erase," or similar.
   - "Next," rather than "forward," "continue," or similar.
      - Note: If it can be determined, tell the user where they are going, rather than using "Next" generically.
      - When using the stepper use the number of the step and the step title for the button. 
         - For example, “2. Configure” 
   - "Back," rather than "previous" or similar.
      - Note: If it can be determined, tell the user where they are going, rather than using "Back" generically.
      - When using the stepper use the number of the step and the step title for the button. 
         - For example, “1. Set Up” 
	`,
	inlineLink: `
- When linking to web pages in copy, use descriptive copy for the link, not a generic “this article” or similar. Do not include “Learn more” as part of the link if it is followed by a more descriptive title. 
- Example: “For information on how to back up and restore cluster data in MongoDB, read the Backup and Restore Cluster Data documentation.”
- OR Learn more about restoring cluster data in MongoDB. 
- Don’t use “click here or read more.” Use  “Learn more” sparingly. For example, in a page header or other place where we are limited in the number of characters we can use.  etc.) 
	`,

	standaloneLink: `
- Do not include punctuation at the end of standalone links.
- Standalone links should be included for a clickable title, instances where there are 3 CTAs  that need to be shown next to each other, or links within a table.
- Include no more than 1 standalone link outside of a list or table. 
- Be careful about text that would usually indicate a user is taking an action, such as links that start with the words “create” or “use.” Consider including the words “Learn how to” if directing the user to a tutorial and “Learn more about” if directing to reference information.
  `,

	inputLabel: `Use sentence case capitalization. Labels should be concise, but more importantly accurate to the desired content. They should not be longer than a single line.`,
	inputDescription: `Use sentence case capitalization. Limit to 2 lines max. `,
	inputPlaceholder: `Use sentence case capitalization. Placeholder text should be an example of what a user might write in that input. Placeholder text is not a necessity for all form fields, and should be omitted for most. Placeholder text can be beneficial when used to show an example of a complex input, like IP Address, or CIDR block.`,
	
	errorMessage: `
- Constructive Feedback: Clearly explain the issue and offer an actionable solution.
- Empathy and Understanding: Acknowledge any inconvenience caused.
	`,
	successMessage: `
- Clear: Be clear about what was successfully completed.
- Supportive: Acknowledge the users success and the benefits of the task they just completed.
	`,
	notifications: `
- Relevance: Content should relate directly to the user's current actions or context.
	`,
	tooltipsAndHelp: `
- Guidance Focus: Offer concise help and explanations where users might need clarification or direction.
- Brevity: Provide instructions in brief, straightforward language without extraneous detail.
	`,
} as const;

export type CopyContextGuidelinesKeys = keyof typeof copyContextGuidelinesMap;
