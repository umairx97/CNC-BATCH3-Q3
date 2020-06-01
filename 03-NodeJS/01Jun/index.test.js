const add = (a, b) => {
  return a + b
}

test('Should test add function', () => {
  expect(add(2, 3)).toBe(5)
})

test('should return 12', () => {
  expect(add(7, 5)).toBe(12)
})
