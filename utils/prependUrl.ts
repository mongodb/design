const prependUrl = (url: string) =>
  `${!url.startsWith('http') ? 'https:' : ''}${url}`;

export default prependUrl;
