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
    const toEditId = event.target.id;
    this.setState(
      (prevState) => (prevState.personalInfo[toEditId][0] = event.target.value)
    );
  };

  addWorkExperienceHandler = (event, workExpObj) => {
    // console.log(Ref.current);
    event.preventDefault();
    console.log(workExpObj);
    // const toEditId = event.target.id;
    //mapping object
    this.setState(
      (prevState) => (prevState.workInfo = [...prevState.workInfo, workExpObj])
    );
    console.log(this.state);
  };

  removeInfoHandler = (category, id) => {
    console.log("removeInfoHandler");
    // console.log(event);
    // let id = event.target.id;
    // alert(event.target.id);
    // id = id.split(" ");
    // const info = id[0];
    // const keyId = id[1];
    // console.log(keyId);

    // this.setState( (prevState) =>()
    //   prevState[info] = prevState[info].filter((_,))
    // );

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

    console.log(this.state);
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
            category = "workInfo"
          />

          <Education educationInfo={educationInfo} 
            removeInfoHandler={this.removeInfoHandler}
            category = "educationInfo"
          
          />

          {/* <Skill skillInfo={educationInfo} 
            removeInfoHandler={this.removeInfoHandler}
            category = "skillInfo"
          
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
