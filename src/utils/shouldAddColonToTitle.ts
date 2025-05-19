const colonExceptions = ['Copy'];

/**
 * Checks if the title starts with one of the words in the colonExceptions array and does not already contain a colon.
 * If so, it replaces "Copy" with "Copy:" and returns the modified title.
 * Otherwise, it returns the original title.
 *
 * @param {string} title - The title to check and potentially modify.
 * @returns {string} - The modified or original title.
 */
export const shouldAddColonToTitle = (title: string) => {
  for (const exception of colonExceptions) {
    if (title.startsWith(exception) && !title.startsWith(`${exception}:`)) {
      return title.replace(exception, `${exception}:`);
    }
  }
  return title;
};
