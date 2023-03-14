// Below is taken from the Banner component

const Variant = {
  Info: 'info',
  Caution: 'caution',
  Dont: 'dont',
  Do: 'do',
} as const;

type Variant = (typeof Variant)[keyof typeof Variant];

export { Variant };
