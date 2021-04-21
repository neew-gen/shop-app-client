export function textSlicer(input: string, length: number): string {
  if (input.length <= length) return input
  const sizeWithoutDots = length - 3
  const sliced = input.slice(0, sizeWithoutDots)
  return sliced + '...'
}
