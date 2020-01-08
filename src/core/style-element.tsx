import * as React from "react";
import { setStyle } from "./style";

type Name = keyof React.CSSProperties;

type Value = React.CSSProperties[Name];

interface CSSPropProps {
  name: Name;
  value: Value;
}

export const CSSProp: React.FC<CSSPropProps> = () => <></>;

export const CSSProps: React.FC = () => <></>;

interface StyleElementProps {
  children: [React.ReactElement, ...React.ReactElement<CSSPropProps>[]];
  style?: React.CSSProperties;
}

export const StyleElement: React.FC<StyleElementProps> = (
  props: StyleElementProps,
) => {
  const elements: React.ReactElement[] = [];
  let style: React.CSSProperties = {};

  React.Children.toArray(props.children).forEach((child) => {
    if (child.type === CSSProp) {
      style = { ...style, [child.props.name]: child.props.value };
    } else if (child.type === CSSProps) {
      React.Children.toArray(child.props.children).forEach((subChild) => {
        if (subChild.type === CSSProp) {
          style = { ...style, [subChild.props.name]: subChild.props.value };
        }
      });
    } else {
      elements.push(React.cloneElement(child, { style }));
    }
  });

  return (
    <>
      {setStyle(elements, {
        ...props.style,
      })}
    </>
  );
};
