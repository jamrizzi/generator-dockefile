import expect from 'expect';
import message from '../src';

describe('Module template', () => {
  it('displays a welcome message', () => {
    expect(message).toContain('Welcome to generator-yohoho');
  });
});
