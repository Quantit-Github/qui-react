import { createElement } from 'react';
import { combineClassNames } from '../../utils';
import classnames from './Typography.module.scss';
import { TypographyProps, TypographySize, TypographyVarint } from './type';

export function Typography({
  as = 'span',
  bold,
  className,
  decoration,
  variant = 'body-large',
  ...props
}: TypographyProps) {
  const [variantKey, size] = variant.split('-') as [
    TypographyVarint,
    TypographySize
  ];

  return createElement(as, {
    className: combineClassNames(
      classnames.typography,
      classnames[variantKey],
      classnames[size],
      bold ? classnames[bold] : '',
      decoration ? classnames[decoration] : '',
      className
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
