
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 25000, years: 3, rate: 10})).toBe(806.68);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 24563, years: 10, rate: 10})).toBe(324.60);
});

it('should throw an error if any of the inputs are NaN', function(){
  expect(() => calculateMonthlyPayment({amount: 'hello', years: 10, rate: 10})).toThrowError();
})