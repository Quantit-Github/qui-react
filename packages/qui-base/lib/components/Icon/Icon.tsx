import classNames from 'classnames';
import iconJson from '../../assets/icons.json';
import { IconProps, PresetIconProps } from './type';
import { replaceClassName } from '../../utils';

export function Icon({
  className,
  classReplacer,
  size = 'xl',
  type,
  variant = 'ghost',
  ...props
}: IconProps) {
  const { path, viewBox } = iconJson[type];
  return (
    <svg
      className={replaceClassName(
        classNames('svg', size, variant, className),
        classReplacer
      )}
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      {...props}
    >
      <path d={path} />
    </svg>
  );
}

Icon.Check = function IconCheck({ ...props }: PresetIconProps) {
  return <Icon type="check" {...props} />;
};
Icon.Smile = function IconSmile({ ...props }: PresetIconProps) {
  return <Icon type="smile" {...props} />;
};
Icon.Indeterminate = function IconIndeterminate({ ...props }: PresetIconProps) {
  return <Icon type="indeterminate" {...props} />;
};
