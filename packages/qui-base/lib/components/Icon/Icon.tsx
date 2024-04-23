import classNames from 'classnames';
import iconJson from '../../assets/icons.json';
import { replaceClassName } from '../../utils';
import { IconProps, PresetIconProps } from './type';

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

Icon.Check = function CheckIcon({ ...props }: PresetIconProps) {
  return <Icon type="check" {...props} />;
};
Icon.Close = function CloseIcon({ ...props }: PresetIconProps) {
  return <Icon type="close" {...props} />;
};
Icon.Up = function UpIcon({ ...props }: PresetIconProps) {
  return <Icon type="up" {...props} />;
};
Icon.Down = function DownIcon({ ...props }: PresetIconProps) {
  return <Icon type="down" {...props} />;
};
Icon.Smile = function SmileIcon({ ...props }: PresetIconProps) {
  return <Icon type="smile" {...props} />;
};
Icon.Indeterminate = function IndeterminateIcon({ ...props }: PresetIconProps) {
  return <Icon type="indeterminate" {...props} />;
};
