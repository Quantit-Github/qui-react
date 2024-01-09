import iconJson from '../../assets/icons.json';
import { combineClassNames } from '../../utils';
import classnames from './icon.module.scss';
import { IconType } from './type';

type IconSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type IconVariantType = 'primary' | 'secondary' | 'ghost' | 'outline';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: IconSizeType;
  type: IconType;
  variant?: IconVariantType;
}

type PresetIconProps = Omit<IconProps, 'type'>;

export function Icon({
  className,
  size = 'xl',
  type,
  variant = 'ghost',
  ...props
}: IconProps) {
  const { path, viewBox } = iconJson[type];
  return (
    <svg
      className={combineClassNames(
        classnames.svg,
        classnames[size],
        classnames[`${variant}__icon`],
        className
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
