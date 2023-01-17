import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import DisplaySummaryInfo from "./DisplaySummaryInfo";

function WorkExperience(props) {
  const { addWorkExperienceHandler, workInfo, removeInfoHandler,category} = props;
  const workExpObj = {uniqueId:uuidv4()};
  const [experienceAdd, setExperienceAdd] = useState(true);

  const workExperienceChangeHandler = (event) => {
    workExpObj[event.target.id] = event.target.value;
  };
  const displaySummaryInfo = (displayInfo) => {
    console.log(displayInfo);
    return (
      <div className="flex justify-between my-4" key={displayInfo.uniqueId}>
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
          onClick={() => removeInfoHandler(category,displayInfo.uniqueId)}
        >
          <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
        </button>
      </div>
    );
  };
  const joinWorkSummaryInfo = () => {
    let joinWorkSummaryInfo = [];
    console.log("joinWorkSUmmary info");
    for (let i in workInfo) {
      joinWorkSummaryInfo.push(displaySummaryInfo(workInfo[i]));
      // <DisplaySummaryInfo displayInfo={workInfo[i]} workInfo={workInfo} key={`workInfo ${i}`} removeInfoHandler={removeInfoHandler} />
      // );
    }

    return <>{joinWorkSummaryInfo}</>;

    // return (
    //   <div className="flex justify-between my-4">
    //     <div className="flex">
    //       <hr className="border-l-4 border-gray-400 h-full"></hr>
    //       <div className="ml-4">
    //         <p>{workInfo[0].expStorComp}</p>
    //         <p>{workInfo[0].expStorCity}</p>
    //         <p>
    //           {workInfo[0].expStorYrFrom}-{workInfo[0].expStorYrTo}
    //         </p>
    //       </div>
    //     </div>

    //     <div>
    //       <p>{workInfo[0].expStorRole}</p>
    //       <p>{workInfo[0].expStorRoleDesc}</p>
    //     </div>

    //     <button className="my-auto bg-gray-300 rounded-md p-2 px-4 hover:bg-gray-400">
    //       <span>
    //         <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
    //       </span>
    //     </button>
    //   </div>
    // );
  };

  const addWorkExperience = () => {
    return (
      <form
        className="my-4 flex flex-col gap-4 w-full"
        onSubmit={(event) => {
          addWorkExperienceHandler(event, workExpObj);
          setExperienceAdd(false);
        }}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Company Name</label>
          <input
            type="text"
            id="expStorComp"
            className="p-2 border-2 rounded"
            placeholder="Company Name"
            onChange={(event) => workExperienceChangeHandler(event)}
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">City</label>
          <input
            type="text"
            id="expStorCity"
            className="p-2 border-2 rounded"
            placeholder="City"
            onChange={(event) => workExperienceChangeHandler(event)}
          ></input>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-sm font-semibold">From</label>
            <input
              type="number"
              min="0"
              max="2030"
              id="expStorYrFrm"
              className="p-2 border-2 rounded"
              placeholder="YYYY"
              onChange={(event) => workExperienceChangeHandler(event)}
            ></input>
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-sm font-semibold">To</label>
            <input
              type="number"
              max="2030"
              min="0"
              id="expStorYrTo"
              className="p-2 border-2 rounded"
              placeholder="YYYY or Present"
              onChange={(event) => workExperienceChangeHandler(event)}
            ></input>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Role</label>
          <input
            type="text"
            id="expStorRole"
            className="p-2 border-2 rounded"
            placeholder="Role"
            onChange={(event) => workExperienceChangeHandler(event)}
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">
            Further Descriptions or Achievements
          </label>
          <textarea
            type="text"
            id="expStorRoleDesc"
            className="p-2 h-32 border-2 rounded"
            placeholder="Keep it short and simple. Maximum 3 sentences"
            onChange={(event) => workExperienceChangeHandler(event)}
          ></textarea>
        </div>

        <div className="flex gap-4">
          <div className="font-semibold w-24 bg-gray-300 text-base px-4 py-2 text-gray-600 rounded my-4 hover:bg-gray-400">
            <button onClick={() => setExperienceAdd(false)}>Cancel</button>
          </div>
          <div className="font-semibold w-48 bg-gray-300 text-base px-4 py-2 text-gray-600 rounded my-4 hover:bg-gray-400">
            <button type="submit">+Work Experience</button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <div className="flex flex-col mx-6 my-4 items-start">
        <p className="text-xl font-semibold">WORK EXPERIENCES</p>
        <hr className="border-t-4 w-12 square border-gray-400" />
        <div className="w-full">
          {workInfo.length !== 0
            ? joinWorkSummaryInfo()
            : null}
        </div>
        <div className="w-full">
          {experienceAdd ? (
            addWorkExperience()
          ) : (
            <div className="font-semibold bg-gray-300 w-48 text-base px-4 py-2 text-gray-600 rounded my-4 hover:bg-gray-400">
              <button onClick={() => setExperienceAdd(true)}>
                +Work Experience
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className="border-t-4 mx-6 square border-gray-400" />
    </>
  );
}

export default WorkExperience;
