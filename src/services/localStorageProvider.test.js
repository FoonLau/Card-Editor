import localStorageProvider from './localStorageProvider';

it('should get correctly', () => {
  const temp = localStorageProvider.get('temp');

  expect(temp).toEqual(global.localStorage.getItem('temp'));
});

it('should set correctly', () => {
  const key = 'key';
  const value = 'value';
  localStorageProvider.set(key, value);

  expect(global.localStorage.getItem(key)).toBe(JSON.stringify(value));
});
