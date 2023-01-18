import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DisplaySummaryInfo from "./DisplaySummaryInfo";

function Education(props) {
  const { addInfoHandler, educationInfo, removeInfoHandler, category } = props;
  const educationExpObj = { uniqueId: uuidv4() };
  const [educationAdd, setEducationAdd] = useState(false);

  const educationChangeHandler = (event) => {
    educationExpObj[event.target.id] = event.target.value;
  };
  const joinEducationSummaryInfo = () => {
    let joinEducationSummaryInfo = [];
    console.log("joinEducationSUmmary info");
    for (let i in educationInfo) {
      joinEducationSummaryInfo.push(
        <DisplaySummaryInfo
          displayInfo={educationInfo[i]}
          key={educationInfo[i].uniqueId}
          category={category}
          removeInfoHandler={removeInfoHandler}
        />
      );
      //   joinWorkSummaryInfo.push(displaySummaryInfo(workInfo[i]));
      // <DisplaySummaryInfo displayInfo={workInfo[i]} workInfo={workInfo} key={`workInfo ${i}`} removeInfoHandler={removeInfoHandler} />
      // );
    }

    return <>{joinEducationSummaryInfo}</>;
  };

  const addEducationExperience = () => {
    return (
      <form
        className="my-4 flex flex-col gap-4 w-full"
        onSubmit={(event) => {
          addInfoHandler(event, category, educationExpObj);
          setEducationAdd(false);
        }}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">University or School Name</label>
          <input
            type="text"
            id="eduStorComp"
            className="p-2 border-2 rounded"
            placeholder="University or School Name"
            onChange={(event) => educationChangeHandler(event)}
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">City</label>
          <input
            type="text"
            id="eduStorCity"
            className="p-2 border-2 rounded"
            placeholder="City"
            onChange={(event) => educationChangeHandler(event)}
          ></input>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-sm font-semibold">From</label>
            <input
              type="number"
              min="0"
              max="2030"
              id="eduStorYrFrm"
              className="p-2 border-2 rounded"
              placeholder="YYYY"
              onChange={(event) => educationChangeHandler(event)}
            ></input>
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-sm font-semibold">To</label>
            <input
              type="number"
              max="2030"
              min="0"
              id="eduStorYrTo"
              className="p-2 border-2 rounded"
              placeholder="YYYY or Present"
              onChange={(event) => educationChangeHandler(event)}
            ></input>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Degree or Stream</label>
          <input
            type="text"
            id="eduStorRole"
            className="p-2 border-2 rounded"
            placeholder="Your Degree or Stream"
            onChange={(event) => educationChangeHandler(event)}
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">
            Further Descriptions or Achievements
          </label>
          <textarea
            type="text"
            id="eduStorRoleDesc"
            className="p-2 h-32 border-2 rounded"
            placeholder="Keep it short and simple. Maximum 3 sentences"
            onChange={(event) => educationChangeHandler(event)}
          ></textarea>
        </div>

        <div className="flex gap-4">
          <div className="font-semibold w-24 bg-gray-300 text-base px-4 py-2 text-gray-600 rounded my-4 hover:bg-gray-400">
            <button onClick={() => setEducationAdd(false)}>Cancel</button>
          </div>
          <div className="font-semibold w-36 bg-gray-300 text-base px-4 py-2 text-gray-600 rounded my-4 hover:bg-gray-400">
            <button type="submit">+Education</button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <div className="flex flex-col mx-6 my-4 items-start">
        <p className="text-xl font-semibold">EDUCATION</p>
        <hr className="border-t-4 w-12 square border-gray-400" />
        <div className="w-full">
          {educationInfo.length !== 0 ? joinEducationSummaryInfo() : null}
        </div>
        <div className="w-full">
          {educationAdd ? (
            addEducationExperience()
          ) : (
            <div className="font-semibold bg-gray-300 w-36 text-base px-2 py-2 text-gray-600 rounded my-4 hover:bg-gray-400">
              <button onClick={() => setEducationAdd(true)}>+Education</button>
            </div>
          )}
        </div>
      </div>
      <hr className="border-t-4 mx-6 square border-gray-400" />
    </>
  );
}

export default Education;
