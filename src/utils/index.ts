export const merge = <O1 extends object, O2 extends object>(a: O1, b: O2) => ({
  ...a,
  ...b,
})

export const defaultTo = <T>(fallback: T) => <U>(value?: U | null) => value || fallback

export const joinClassNames = (classNames: (string | undefined)[]) => classNames.join(' ')
