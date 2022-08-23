const getKebabCaseName = (componentName: string) => {
  return componentName.toLowerCase().replace(' ', '-');
}

export default getKebabCaseName;