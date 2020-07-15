// Jest globals are automatically provide so no need to use require()
const { calculateTip } = require('../src/math')

test('Should calculate total with tip', ()=> {
    const total = calculateTip(10, .2)
    // Assertion
   expect(total).toBe(12)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    // Assertion
    expect(total).toBe(12.5)
})