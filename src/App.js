import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Personal from "./components/Personal";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skill from "./components/Skill";
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
      educationInfo: [],
      skillInfo: [],
      pdfMode: false,
    };
  }

  personalEditHandler = (event) => {
    // console.log(Ref.current);
    const toEditId = event.target.id;
    this.setState(
      (prevState) => (prevState.personalInfo[toEditId][0] = event.target.value)
    );
  };

  addInfoHandler = (event, category, infoObj) => {
    this.setState(
      (prevState) => (prevState[category] = [...prevState[category], infoObj])
    );

    event.preventDefault();
  };

  removeInfoHandler = (category, id) => {
    console.log("removeInfoHandler");

    this.setState(
      (prevState) =>
        (prevState[category] = prevState[category].filter(
          (x = prevState[category]) => x.uniqueId !== id
        ))
    );
    // this.setState((prevState) => ({
    //   workInfo: prevState.workInfo.filter((workInfo) => workInfo.uniqueId !== id),
    // }));

    // this.setState({
    //   workInfo: this.state.workInfo.filter((_, uniqueId) => uniqueId !== id),
    // });
  };

  render() {
    const { personalInfo, workInfo, educationInfo, skillInfo } = this.state;
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
        <div id="main-body" className="bg-white w-[21cm] border-4">
          <Personal
            personalInfo={personalInfo}
            personalEditHandler={this.personalEditHandler}
          />

          <WorkExperience
            workInfo={workInfo}
            addInfoHandler={this.addInfoHandler}
            removeInfoHandler={this.removeInfoHandler}
            category="workInfo"
          />

          <Education
            educationInfo={educationInfo}
            addInfoHandler={this.addInfoHandler}
            removeInfoHandler={this.removeInfoHandler}
            category="educationInfo"
          />

          <Skill
            skillInfo={skillInfo}
            removeInfoHandler={this.removeInfoHandler}
            addInfoHandler={this.addInfoHandler}
            category="skillInfo"
          />
        </div>
      </div>
    );
  }
}

export default App;
