const add = (a, b) => a + b;
const generateGreeing = (name = 'Anonymous') => `Hello ${name}!`;

test('should add tow numbers', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
    // if (result !==7) {
    //     throw new Error(`You add 4 and 3. and result was ${result}. Expect 7`)
    // }
});

test('should be Hello with name', () => {
    const greeting = generateGreeing("Annie")
    expect(greeting).toBe("Hello Annie!")
})

test('should generate greeting for no name', () => {
    const result = generateGreeing(); 
    expect(result).toBe('Hello Anonymous!');
})