import React from "react";
import { Style, StyleElement, CSSProp, CSSProps } from "../src";

export default {
  title: "App",
};

const CssButton = (
  <CSSProps>
    <CSSProp name="border" value="1px solid orange" />
    <CSSProp name="padding" value="1rem" />
    <CSSProp name="marginLeft" value="1rem" />
  </CSSProps>
);

export const init = () => {
  return (
    <StyleElement>
      <div>
        <Style
          value={{
            border: "1px solid green",
            padding: "1rem",
            marginLeft: "1rem",
          }}
        >
          <button>Enter</button>
          <button>Enter</button>
        </Style>

        <StyleElement>
          <StyleElement>
            {CssButton}
            <button>Enter #2</button>

            <CSSProp name="borderWidth" value="3px" />
            <button>Enter #21</button>

            <CSSProp name="borderRadius" value="4px" />
            <button>Enter #21</button>
          </StyleElement>

          <StyleElement>
            <CSSProp name="border" value="1px solid red" />
            <CSSProp name="marginLeft" value="1rem" />
            <button>Enter #2</button>

            <CSSProp name="padding" value="1rem" />
            <button>Enter #2</button>

            <CSSProp name="borderWidth" value="3px" />
            <CSSProp name="borderRadius" value="4px" />

            <button>Enter #2</button>
          </StyleElement>

          <CSSProp name="cursor" value="pointer" />
        </StyleElement>
      </div>

      <CSSProp name="display" value="flex" />
    </StyleElement>
  );
};
