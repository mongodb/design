const isEmptyRichText = richText => {
  let isEmpty = true;

  if ('text' in richText) {
    return richText.text === '';
  }
  richText.children &&
    richText.children.forEach(childNode => {
      if (!isEmptyRichText(childNode)) {
        isEmpty = false;
      }
    });
  return isEmpty;
};

export default isEmptyRichText;
