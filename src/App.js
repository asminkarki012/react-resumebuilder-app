import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Personal from "./components/Personal";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalPreviousEdit: "",
      personalInfo: {
        firstName: ["First Name", false],
        lastName: ["Last Name", false],
        currentRole: ["Current Role", false],
        address1: ["Address 1", false],
        address2: ["Address 2", false],
        phone: ["Phone", false],
        email: ["Email", false],
        linkedin: ["Linkedin", false],
      },
      workInfo: [],
      educationInfo: {
        eduStorComp: [],
        eduStorCity: [],
        eduStorYrFrm: [],
        eduStorYrTo: [],
        eduStorRole: [],
        eduStorRoleDesc: [],
        eduInpComp: "",
        eduInpCity: "",
        eduInpYrFrm: "",
        eduInpYrTo: "",
        eduInpRole: "",
        eduInpRoleDesc: "",
        educationAdd: false,
      },
      skillInfo: {
        expertStor: [],
        expertInp: [],
        skillsAdd: false,
      },
    };
  }

  personalEditHandler = (event) => {
    // console.log(Ref.current);
    console.log(event.target.id);
    const toEditId = event.target.id;
    this.setState(
      (prevState) => (prevState.personalInfo[toEditId][0] = event.target.value)
    );
  };

  addWorkExperienceHandler = (event, workExpObj) => {
    // console.log(Ref.current);
    event.preventDefault();
    console.log(workExpObj);
    console.log("addWorkExperience function");
    // const toEditId = event.target.id;
    //mapping object
    this.setState(
      (prevState) => (prevState.workInfo = [...prevState.workInfo, workExpObj])
    );
    console.log(this.state);
  };

  removeInfoHandler = (event) => {
    console.log("removeInfoHandler");
    let id = event.target.id;
    id = id.split(" ");
    const info = id[0];
    const key = id[1];
    this.setState(
      (prevState) =>
        (prevState[info] = prevState[info].filter((index) => index != key))
    );
    console.log(this.state.workInfo);
  };

  render() {
    const { personalInfo, workInfo, educationInfo } = this.state;
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="items-center my-4">
          <h2 className="text-3xl font-bold text-white text-center">
            <span>
              <FontAwesomeIcon icon={faFile} />
            </span>
            <div>Resume Builder App</div>
          </h2>
        </div>
        <div id="main-body" className="bg-white h-[29.7cm] w-[21cm] border-4">
          <Personal
            personalInfo={personalInfo}
            personalEditHandler={this.personalEditHandler}
          />

          <WorkExperience
            workInfo={workInfo}
            addWorkExperienceHandler={this.addWorkExperienceHandler}
            removeInfoHandler={this.removeInfoHandler}
          />

          <Education educationInfo={educationInfo} />
        </div>
      </div>
    );
  }
}

export default App;
