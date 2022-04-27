import { ConcatenadorPipe } from './concatenador.pipe';

describe('ConcatenadorPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatenadorPipe();
    expect(pipe).toBeTruthy();
  });
});
