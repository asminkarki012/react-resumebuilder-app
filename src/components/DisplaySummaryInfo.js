import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
function DisplaySummaryInfo(props) {
  const { displayInfo, removeInfoHandler, category } = props;

  console.log("Checking Display Summary info");
  console.log(displayInfo);
  if (category === "workInfo") {
    return (
      <div className="flex justify-between my-4">
        <div className="flex">
          <hr className="border-l-4 border-gray-400 h-full"></hr>
          <div className="ml-4">
            <p>{displayInfo.expStorComp}</p>
            <p>{displayInfo.expStorCity}</p>
            <p>
              {displayInfo.expStorYrFrm}-{displayInfo.expStorYrTo}
            </p>
          </div>
        </div>

        <div>
          <p>{displayInfo.expStorRole}</p>
          <p>{displayInfo.expStorRoleDesc}</p>
        </div>

        <button
          className="my-auto bg-gray-300 rounded-md p-2 px-4 hover:bg-gray-400"
          onClick={() => removeInfoHandler(category, displayInfo.uniqueId)}
        >
          <span>
            <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
          </span>
        </button>
      </div>
    );
  } else if (category === "educationInfo") {
    return (
      <div className="flex justify-between my-4">
        <div className="flex">
          <hr className="border-l-4 border-gray-400 h-full"></hr>
          <div className="ml-4">
            <p>{displayInfo.eduStorComp}</p>
            <p>{displayInfo.eduStorCity}</p>
            <p>
              {displayInfo.eduStorYrFrm}-{displayInfo.eduStorYrTo}
            </p>
          </div>
        </div>

        <div>
          <p>{displayInfo.eduStorRole}</p>
          <p>{displayInfo.eduStorRoleDesc}</p>
        </div>

        <button
          className="my-auto bg-gray-300 rounded-md p-2 px-4 hover:bg-gray-400"
          onClick={() => removeInfoHandler(category, displayInfo.uniqueId)}
        >
          <span>
            <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
          </span>
        </button>
      </div>
    );
  } else if (category === "skillInfo") {
    return (
      <div className="flex my-4 mx-4 w-72 justify-between gap-8 items-center">
        <div>
          <ul className="list-disc">
            <li> {displayInfo.skillStor}</li>
          </ul>
        </div>
        <div>
          <button
            className="my-auto bg-gray-300 rounded-md p-2 px-4 hover:bg-gray-400"
            onClick={() => removeInfoHandler(category, displayInfo.uniqueId)}
          >
            <span>
              <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default DisplaySummaryInfo;
