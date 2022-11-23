import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';
import './index.css';
export const PageLayout = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="container-superior">
      <div className="container-inferior">
        <div className="wrap">
          <div className="base">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
