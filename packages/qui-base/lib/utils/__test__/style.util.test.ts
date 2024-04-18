import { replaceClassName } from '..';

describe('replaceClassName', () => {
  test('타깃 클래스를 replacer 객체를 통해 치환한다.', () => {
    const targetClass = 'button';
    const className = `${targetClass} fit_content`;
    const replacer = { [targetClass]: 'qui-button' };
    expect(replaceClassName(className, replacer)).toBe(
      'qui-button fit_content'
    );
  });

  test('replacer 객체가 없다면 기존 클래스를 전달한다.', () => {
    const targetClass = 'button';
    const className = `${targetClass} fit_content`;
    const replacer = undefined;
    expect(replaceClassName(className, replacer)).toBe('button fit_content');
  });
});
