import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';

/**
 * Converts a string to title case while preserving the lowercase format for specific prepositions,
 * unless they appear as the first word.
 *
 * E.g.
 *
 *```
  'the quick brown fox' -> 'The Quick Brown Fox'
  'the quick brown fox of the forest' -> 'The Quick Brown Fox of the Forest' 
 * ```
 *
 * @param {string} str - The string to convert to title case.
 * @returns {string} The string in title case.
 */
const titleWithPrepositions = (str: string): string => {
  const lowerCaseExceptions = ['of'];

  return startCase(toLower(str))
    .split(' ')
    .map((word, index) => {
      if (lowerCaseExceptions.includes(word.toLowerCase()) && index !== 0) {
        return word.toLowerCase();
      }
      return word;
    })
    .join(' ');
};

/**
 * This function is used to convert a string to title case.
 * @param {string} component - The string to convert to title case.
 * @returns {string} The string in title case.
 */
export const titleCase = (component: string): string => {
  return titleWithPrepositions(component);
};
