
describe('Sample spec', () => {
  let a;

  it('and so is a spec', () => {
    a = true;

    expect(a).toBe(true);
  });
  xit('will not work', () => {
    expect(false).toBe(true);
  });
});
