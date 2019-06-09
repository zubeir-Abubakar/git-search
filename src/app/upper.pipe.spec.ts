import { UpperPipe } from './upper.pipe';

describe('UpperPipe', () => {
  it('creat e an instance', () => {
    const pipe = new UpperPipe();
    expect(pipe).toBeTruthy();
  });
});
