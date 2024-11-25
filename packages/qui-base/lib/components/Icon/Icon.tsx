import classNames from 'classnames';
import iconJson from '../../assets/icons.json';
import { replaceClassName } from '../../utils';
import { IconProps, PresetIconProps } from './type';

interface IconJson {
  path: string;
  additionalPaths?: string[];
  viewBox: string;
}

export function Icon({
  className,
  classReplacer,
  size = 'xl',
  type,
  variant = 'ghost',
  ...props
}: IconProps) {
  const { path, additionalPaths, viewBox } = iconJson[type] as IconJson;
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
      {additionalPaths?.map((path: string) => (
        <path d={path} />
      ))}
    </svg>
  );
}

Icon.Check = function CheckIcon({ ...props }: PresetIconProps) {
  return <Icon type="check" {...props} />;
};
Icon.Close = function CloseIcon({ ...props }: PresetIconProps) {
  return <Icon type="close" {...props} />;
};
Icon.Delete = function DeleteIcon({ ...props }: PresetIconProps) {
  return <Icon type="delete" {...props} />;
};
Icon.Document = function DocumentIcon({ ...props }: PresetIconProps) {
  return <Icon type="document" {...props} />;
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
Icon.ThumbsDown = function ThumbsDownIcon({ ...props }: PresetIconProps) {
  return <Icon type="thumbsDown" {...props} />;
};
