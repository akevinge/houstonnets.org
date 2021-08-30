type IconProps = {
  customTwClass?: string;
  style?: import("react").CSSProperties;
};

type IconComponent = import("react").FC<
  import("react").SVGProps<SVGSVGElement> & IconProps
>;
