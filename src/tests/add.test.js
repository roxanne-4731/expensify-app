const add = (a, b) => a + b;
const generateGretting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two number', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test ('should generate greeting from name ', () => {
    const result = generateGretting('Roxanne');
    expect(result).toBe('Hello Roxanne!');
});

test ('should generate greeting for no name', () => {
   const result = generateGretting();
   expect(result).toBe('Hello Anonymous!');
});