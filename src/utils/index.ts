export const combineClassNames = (...args: (string | undefined)[]): string => args.filter(Boolean).join(' ')
