import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Personal from "./components/Personal";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skill from "./components/Skill";
import jsPDF from "jspdf";
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
      workingMode: true,
    };
  }

  personalEditHandler = (event) => {
    const { workingMode } = this.state;
    const toEditId = event.target.id;
    
    if (workingMode) {
      this.setState(
        (prevState) =>
          (prevState.personalInfo[toEditId][0] = event.target.value)
      );
    }
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

  workingModeHandler = (mode) => {
    const workingModeBtn = document.getElementById("workingmode");
    const previewModeBtn = document.getElementById("previewmode");
    // const mainBody = document.getElementById("main-body");
    const orangeMode = ["bg-orange-500", "hover:bg-orange-600"];
    const whiteMode = ["bg-white", "hover:bg-gray-300"];

    if (mode === "workingmode") {
      this.setState({
        workingMode: true,
      });
      // workingModeBtn.classList.add("bg-orange-500");
      // console.log(workingModeBtn);
      previewModeBtn.classList.add(whiteMode[0], whiteMode[1]);
      previewModeBtn.classList.remove(orangeMode[0], orangeMode[1]);

      workingModeBtn.classList.add(orangeMode[0], orangeMode[1]);
      workingModeBtn.classList.remove(whiteMode[0], whiteMode[1]);

      // mainBody.classList.remove("h-[29.7 cm]");
    } else if (mode === "previewmode") {
      this.setState({
        workingMode: false,
      });
      console.log("previewMode");

      workingModeBtn.classList.remove(orangeMode[0], orangeMode[1]);
      workingModeBtn.classList.add(whiteMode[0], whiteMode[1]);

      previewModeBtn.classList.remove(whiteMode[0], whiteMode[1]);
      previewModeBtn.classList.add(orangeMode[0], orangeMode[1]);

      // mainBody.classList.add("h-[29.7 cm]");
    }
  };

  generatePdfHandler = () => {
    console.log("generatePDfHandler");
    const { workingMode } = this.state;
    if (workingMode === false) {
      const doc = new jsPDF("p", "px", "a4");
      doc.html(document.getElementById("main-body"), {
        callback: function (pdf) {
          pdf.save(`${Math.round((Date.now() / 60) * 60 * 1000)}.pdf`);
        },
      });
    }
  };

  saveInfoHandler = () => {
    const { workInfo, skillInfo, educationInfo, personalInfo } = this.state;

    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    localStorage.setItem("workInfo", JSON.stringify(workInfo));
    localStorage.setItem("educationInfo", JSON.stringify(educationInfo));
    localStorage.setItem("skillInfo", JSON.stringify(skillInfo));
    // localStorage.setItem("workingMode",workingMode)
  };

  clearInfoHandler = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  render() {
    const { personalInfo, workInfo, educationInfo, skillInfo, workingMode } =
      this.state;
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="items-center my-4">
          <h2 className="text-3xl font-bold text-white text-center">
            <span>
              <FontAwesomeIcon icon={faFile} />
            </span>
            <div>Resume Builder App</div>
          </h2>

          <div className="flex gap-2">
            <div
              id="workingmode"
              className="font-semibold w-36 bg-orange-500 text-base text-center px-2 py-2  rounded my-4 hover:bg-orange-600"
            >
              <button
                type="button"
                onClick={() => this.workingModeHandler("workingmode")}
              >
                Working Mode
              </button>
            </div>
            <div
              id="previewmode"
              className="font-semibold w-36 bg-white text-base text-center py-2 rounded my-4 hover:bg-gray-300"
            >
              <button
                type="button"
                onClick={() => this.workingModeHandler("previewmode")}
              >
                Preview Mode
              </button>
            </div>
          </div>
        </div>
        <div id="main-body" className="bg-white w-[21cm] border-4">
          <Personal
            personalInfo={
              localStorage.getItem("personalInfo")
                ? JSON.parse(localStorage.getItem("personalInfo"))
                : personalInfo
            }
            personalEditHandler={this.personalEditHandler}
          />

          <WorkExperience
            workInfo={
              localStorage.getItem("workInfo")
                ? JSON.parse(localStorage.getItem("workInfo"))
                : workInfo
            }
            addInfoHandler={this.addInfoHandler}
            removeInfoHandler={this.removeInfoHandler}
            category="workInfo"
            workingMode={workingMode}
          />

          <Education
            educationInfo={
              localStorage.getItem("educationInfo")
                ? JSON.parse(localStorage.getItem("educationInfo"))
                : educationInfo
            }
            addInfoHandler={this.addInfoHandler}
            removeInfoHandler={this.removeInfoHandler}
            category="educationInfo"
            workingMode={workingMode}
          />

          <Skill
            skillInfo={
              localStorage.getItem("skillInfo")
                ? JSON.parse(localStorage.getItem("skillInfo"))
                : skillInfo
            }
            removeInfoHandler={this.removeInfoHandler}
            addInfoHandler={this.addInfoHandler}
            category="skillInfo"
            workingMode={workingMode}
          />
        </div>
        {workingMode ? null : (
          <div className="flex gap-2">
            {/* <button
              className="font-semibold w-36 bg-green-500 text-base text-center px-2 py-2 text-white rounded my-4 hover:bg-green-400"
              type="button"
              onClick={this.generatePdfHandler}
            >
              Generate PDF
            </button> */}

            <button
              className="font-semibold w-36 bg-green-500 text-base text-center px-2 py-2 text-white rounded my-4 hover:bg-green-400"
              type="button"
              onClick={this.saveInfoHandler}
            >
              Save Info
            </button>

            <button
              className="font-semibold w-36 bg-red-500 text-base text-center px-2 py-2 text-white rounded my-4 hover:bg-red-400"
              type="button"
              onClick={this.clearInfoHandler}
            >
              Clear Info
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
