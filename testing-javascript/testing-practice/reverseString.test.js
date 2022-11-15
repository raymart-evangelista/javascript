const reverseString = require('./reverseString')

test('car reversed is rac', () => {
  expect(reverseString('car')).toBe('rac')
})