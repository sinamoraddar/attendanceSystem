import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import { EntranceShape, WeekDays } from "App";
import moment from "moment";
export enum WorkTypes {
  All = "All",
  InOffice = "In Office",
  Remote = "Remote",
}

const MainPage = ({
  SubmitEntrance,
  SubmitExit,
}: {
  SubmitEntrance: ({ workType }: { workType: WorkTypes }) => void;
  SubmitExit: ({ workDescription }: { workDescription: string }) => void;
}) => {
  //context
  const { isAuthenticated, currentUser } = useContext(AuthContext);
  //state
  const [error, setError] = useState<string>("");
  const [workType, setWorkType] = useState<WorkTypes>(WorkTypes.InOffice);
  const [workDescription, setWorkDescription] = useState<string>("");
  //callbacks
  const onSelectChange = useCallback((e) => {
    const { value } = e.target;
    setWorkType(value);
  }, []);
  const onTextareaChange = useCallback((e) => {
    const { value } = e.target;
    setWorkDescription(value);
  }, []);
  useEffect(() => {
    if (
      new Date().getDay() === WeekDays.Thursday ||
      new Date().getDay() === WeekDays.Friday
    ) {
      setError("ثبت ورود و خروج در روز های تعطیل امکان پذیر نیست");
    }
  }, []);
  return isAuthenticated ? (
    error.length > 0 ? (
      <h3>{error}</h3>
    ) : (
      <div>
        {currentUser.activityLog.length > 0 &&
        currentUser.activityLog[currentUser.activityLog.length - 1]
          .hasEntered &&
        currentUser.activityLog[currentUser.activityLog.length - 1].exitTime ===
          null ? (
          <>
            <h3>
              ورود در :
              {moment(
                currentUser.activityLog[currentUser.activityLog.length - 1]
                  .entranceTime
              ).format("h:mm:ss a")}
            </h3>
            <label htmlFor="activityDetails">
              خلاصه فعالیت هاتون رو اینجا وارد کنید
            </label>

            <textarea
              name="activityDetails"
              id="activityDetails"
              placeholder="خلاصه فعالیت..."
              onChange={onTextareaChange}
              value={workDescription}
            ></textarea>
            <button onClick={SubmitExit.bind(null, { workDescription })}>
              ثبت خروج از شرکت
            </button>
          </>
        ) : (
          <>
            <label htmlFor="workType">لطفا نوع کار خود را انتخاب کنید</label>
            <select
              onChange={onSelectChange}
              id="workType"
              name="workType"
              value={workType}
            >
              <option>{WorkTypes.Remote}</option>
              <option>{WorkTypes.InOffice}</option>
            </select>

            <button onClick={SubmitEntrance.bind(null, { workType })}>
              ثبت ورود به شرکت
            </button>
          </>
        )}

        {currentUser.activityLog.length > 0 && (
          <>
            <Link to="/details">Details</Link>
          </>
        )}
      </div>
    )
  ) : (
    <Redirect to="/authentication" />
  );
};

export default MainPage;
