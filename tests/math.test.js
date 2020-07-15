// Jest globals are automatically provide so no need to use require()
const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius } = require('../src/math')

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

test('Should convert 32 F to 0 C', ()=>{
    let temperature = fahrenheitToCelsius(32)
    expect(temperature).toBe(0)
})


test('Should convert 0 C to 32 F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32) 
})

// NNB: To do async tests, pass done as an arg and call it after your test has finished.