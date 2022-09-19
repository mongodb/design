const prependUrl = (url: string) => (
  `${!url.startsWith('http') ? 'http:' : ''}${url}`
)

export default prependUrl;