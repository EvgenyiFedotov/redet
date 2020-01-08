import * as React from "react";

interface Props {
  value?: React.CSSProperties;
  style?: React.CSSProperties;
}

export const setStyle = (
  children: React.ReactNode,
  style?: React.CSSProperties,
) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: { ...child.props.style, ...style },
      });
    }

    return child;
  });
};

export const Style: React.FC<Props> = (props) => {
  return (
    <>
      {props.children &&
        setStyle(props.children, {
          ...props.value,
          ...props.style,
        })}
    </>
  );
};
