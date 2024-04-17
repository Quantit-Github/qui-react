import classNames from 'classnames';
import { createElement } from 'react';
import { TypographyProps, TypographySize, TypographyVarint } from './type';
import { replaceClassName } from '../../utils';

export function Typography({
  as = 'span',
  bold,
  className,
  classReplacer,
  decoration,
  variant = 'body-large',
  ...props
}: TypographyProps) {
  const [variantKey, size] = variant.split('-') as [
    TypographyVarint,
    TypographySize
  ];

  return createElement(as, {
    className: replaceClassName(
      classNames(
        'typography',
        variantKey,
        size,
        bold || '',
        decoration || '',
        className
      ),
      classReplacer
    ),
    ...props,
  });
}

Typography.p = (props: TypographyProps) => <Typography as="p" {...props} />;
Typography.h1 = (props: TypographyProps) => <Typography as="h1" {...props} />;
Typography.h2 = (props: TypographyProps) => <Typography as="h2" {...props} />;
Typography.h3 = (props: TypographyProps) => <Typography as="h3" {...props} />;
Typography.h4 = (props: TypographyProps) => <Typography as="h4" {...props} />;
Typography.h5 = (props: TypographyProps) => <Typography as="h5" {...props} />;
Typography.h6 = (props: TypographyProps) => <Typography as="h6" {...props} />;
Typography.label = (props: TypographyProps) => (
  <Typography as="label" {...props} />
);
Typography.span = (props: TypographyProps) => (
  <Typography as="span" {...props} />
);
