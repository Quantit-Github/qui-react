import iconJson from '../../assets/icons.json';
import { combineClassNames } from '../../utils';
import classnames from './icon.module.scss';
import { IconType } from './type';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  type: IconType;
}

type PresetIconProps = Omit<IconProps, 'type'>;

export function Icon({ className, type, ...props }: IconProps) {
  const { width, height, path } = iconJson[type];
  return (
    <svg
      className={combineClassNames(classnames.svg, className)}
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
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
