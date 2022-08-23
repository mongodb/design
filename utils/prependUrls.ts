const prependUrls = (url: string) => {
  if (!url.startsWith('http://')) return `http://${url}`;
};

export default prependUrls;
