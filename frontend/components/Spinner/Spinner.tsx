import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import {css} from "@emotion/react";
// Can be a string as well. Need to ensure each key-value pair ends with ;

const override = css`
  display: flex;
  margin: 2rem auto;
`;

interface SpinnerProps {
    removeMargin?: boolean,
    size?: number
}

const Spinner: React.VFC<SpinnerProps> = ({removeMargin, size}) => {

    const overriddenCss = removeMargin
        ? css`
              display: flex;
              margin: auto;
        `
        : override

    return (
        <ClipLoader size={size ? size : 50} color={"#34cbad"}
            // @ts-ignore
                    css={overriddenCss}/>
    );
}

export default Spinner;
