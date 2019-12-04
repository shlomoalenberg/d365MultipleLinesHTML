import React from "react";
import { Provider } from "react-redux";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

import store from "../js/store";
import TinyEditor from "./tinyMCE";

/**
 * @module multiplaLinesHTML
 */

const tinyEditor = React.createRef(),
  MultipleLinesHTML = () => {
    return (
      <Provider store={store}>
        <Fabric>
          <TinyEditor ref={tinyEditor} />
        </Fabric>
      </Provider>
    );
  };

/**
 * @exports multiplaLinesHTML/MultipleLinesHTML
 */
export default MultipleLinesHTML;

/**
 * @exports multiplaLinesHTML/loadHTML
 * @param {string} html
 */
export const loadHTML = html => {
  console.log(`loadHTML(${html})`);
  tinyEditor.current.editor.setContent(html);
};
