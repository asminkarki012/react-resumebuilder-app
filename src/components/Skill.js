import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DisplaySummaryInfo from "./DisplaySummaryInfo";

function Skill(props) {
  const { addInfoHandler, skillInfo, removeInfoHandler, category } = props;
  const skillObj = { uniqueId: uuidv4() };
  const [addSkill, setAddSkill] = useState(false);

  const workChangeHandler = (event) => {
    skillObj[event.target.id] = event.target.value;
  };

  const joinSkillSummaryInfo = () => {
    let joinSkillSummaryInfo = [];
    for (let i in skillInfo) {
      joinSkillSummaryInfo.push(
        <DisplaySummaryInfo
          displayInfo={skillInfo[i]}
          key={skillInfo[i].uniqueId}
          category={category}
          removeInfoHandler={removeInfoHandler}
        />
      );
    }

    return <>{joinSkillSummaryInfo}</>;
  };

  const addSkillHandler = () => {
    return (
      <form
        className="my-4 flex flex-col gap-4 w-full"
        onSubmit={(event) => {
          addInfoHandler(event, category, skillObj);
          setAddSkill(false);
        }}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Skills</label>
          <input
            type="text"
            id="skillStor"
            className="p-2 border-2 rounded"
            placeholder="List your top 5 Skill here"
            onChange={(event) => workChangeHandler(event)}
          ></input>
        </div>

        <div className="flex gap-4">
          <div className="font-semibold w-24 bg-gray-300 text-base px-2 py-2 text-gray-600 rounded my-4 hover:bg-gray-400">
            <button onClick={() => setAddSkill(false)}>Cancel</button>
          </div>
          <div className="font-semibold w-36 bg-gray-300 text-base px-2 py-2 text-gray-600 rounded my-4 hover:bg-gray-400">
            <button type="submit">+Skill </button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <div className="flex flex-col mx-6 my-4 items-start">
        <p className="text-xl font-semibold">SKILLS</p>
        <hr className="border-t-4 w-12 square border-gray-400" />
        <div className="w-full">
          {skillInfo.length !== 0 ? joinSkillSummaryInfo() : null}
        </div>
        <div className="w-full">
          {addSkill ? (
            addSkillHandler()
          ) : (
            <div className="font-semibold bg-gray-300 w-36 text-base px-2 py-2 text-gray-600 rounded my-4 hover:bg-gray-400">
              <button onClick={() => setAddSkill(true)}>+Skills</button>
            </div>
          )}
        </div>
      </div>
      <hr className="border-t-4 mx-6 square border-gray-400" />
    </>
  );
}

export default Skill;
