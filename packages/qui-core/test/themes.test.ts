import { TypographyValue } from '../src/styles/theme/typography.util';

describe('TypographyValue 유틸 클래스 테스트', () => {
  test('TypographyValue 함수에 전달한 파라미터가 올바른 객체를 리턴하는지 테스트', () => {
    const fontSize = '16px';
    const lineHeight = '24px';
    const typo = new TypographyValue(fontSize, lineHeight);
    expect(typo.css).toBe(`font-size:${fontSize};line-height:${lineHeight};`);
  });
});
