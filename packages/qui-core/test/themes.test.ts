import { createTypography } from '../src/styles/themes/typography.util';

describe('Typography 유틸함수 테스트', () => {
  test('createTypography 함수에 전달한 파라미터가 올바른 객체를 리턴하는지 테스트', () => {
    const fontSize = '16px';
    const lineHeight = '24px';
    expect(createTypography(fontSize, lineHeight)).toMatchObject({
      cssString: `font-size:${fontSize};line-height:${lineHeight}`,
      fontSize,
      lineHeight,
    });
  });
});
