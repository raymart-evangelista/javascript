const capitalize = require('./capitalize')

test('two capitalized is TWO', () => {
  expect(capitalize('two')).toBe('TWO')
})