import React from "react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

import TinyEditor from "./tinyMCE";

/**
 * @module multiplaLinesHTML
 */

const tinyEditor = React.createRef(),
  MultipleLinesHTML = () => {
    return (
      <Fabric>
        <TinyEditor ref={tinyEditor} />
      </Fabric>
    );
  };

/**
 * @exports multiplaLinesHTML/MultipleLinesHTML
 */
export default MultipleLinesHTML;
