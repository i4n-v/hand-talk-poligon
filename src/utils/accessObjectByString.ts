function accessObjectByString(object: Record<string, any>, string: string): any {
  const splitedString = string.split('.');

  const attribute = splitedString.reduce((previous, current) => {
    return previous[current];
  }, object);

  return attribute;
}

export default accessObjectByString;
