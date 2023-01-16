import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
function DisplaySummaryInfo(props) {
  const { displayInfo, key,removeInfoHandler } = props;

  console.log("Checking Display Summary info");
  console.log(displayInfo);

  return (
    <div className="flex justify-between my-4">
      <div className="flex">
        <hr className="border-l-4 border-gray-400 h-full"></hr>
        <div className="ml-4">
          <p>{displayInfo.expStorComp}</p>
          <p>{displayInfo.expStorCity}</p>
          <p>
            {displayInfo.expStorYrFrom}-{displayInfo.expStorYrTo}
          </p>
        </div>
      </div>

      <div>
        <p>{displayInfo.expStorRole}</p>
        <p>{displayInfo.expStorRoleDesc}</p>
      </div>

      <button
        className="my-auto bg-gray-300 rounded-md p-2 px-4 hover:bg-gray-400"
        id={key}
        onClick={(event) => removeInfoHandler(event)}
      >
        <span>
          <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
        </span>
      </button>
    </div>
  );
}

export default DisplaySummaryInfo;
