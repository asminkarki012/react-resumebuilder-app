import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Personal(props) {
  const { personalInfo, personalEditHandler } = props;
  const firstNameRef = useRef();
  // const lastNameRef = useRef();
  // const [clicked, setClicked] = useState(false);
  return (
    <React.Fragment>
      <div className="flex justify-between m-4">
        <div className="font-bold text-4xl m-4 flex flex-col justify-start gap-4">
          <input
            ref={firstNameRef}
            id="firstName"
            onChange={(event) => personalEditHandler(event)}
            // onChange={(e)=>personalEditHandler(e)}
            value={personalInfo.firstName[0]}
          />
          <input
            id="lastName"
            // ref={lastNameRef}
            onChange={(event) => personalEditHandler(event)}
            value={personalInfo.lastName[0]}
          />

          <input
            id="currentRole"
            onChange={(event) => personalEditHandler(event)}
            className="text-base font-semibold"
            value={personalInfo.currentRole[0]}
          />
        </div>
        <div className="text-base my-4 flex flex-col gap-2">
          <input
            id="address1"
            onChange={(event) => personalEditHandler(event)}
            value={personalInfo.address1[0]}
          />

          <input
            id="address2"
            onChange={(event) => personalEditHandler(event)}
            value={personalInfo.address2[0]}
          />
          <span>
            <FontAwesomeIcon className="mr-2" icon={faPhone} />
            <input
              id="phone"
              onChange={(event) => personalEditHandler(event)}
              value={personalInfo.phone[0]}
              className=""
            />
          </span>

          <span>
            <FontAwesomeIcon className="mr-2" icon={faMailForward} />
            <input
              id="email"
              onChange={(event) => personalEditHandler(event)}
              value={personalInfo.email[0]}
            />
          </span>

          <span>
            <FontAwesomeIcon className="mr-2" icon={faLink} />
            <input
              id="linkedin"
              onChange={(event) => personalEditHandler(event)}
              value={personalInfo.linkedin[0]}
            />
          </span>
        </div>
      </div>
      <hr className="border-t-4 mx-6 square border-gray-400" />
    </React.Fragment>
  );
}

export default Personal;
