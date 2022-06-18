export type MockedClass<T> = {
  [P in keyof Partial<T>]: jest.Mock;
};
