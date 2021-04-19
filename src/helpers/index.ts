// The method goes through all fields of the passed reactive object,
// and assigns values from the passed object with the data received from the request to the server.
export function assignFieldsForReactive(
  // TODO i need to refactor this types
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inputReactiveObject: any,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inputFetchData: any,
): void {
  for (const prop in inputReactiveObject) {
    inputReactiveObject[prop] = inputFetchData[prop]
  }
}
