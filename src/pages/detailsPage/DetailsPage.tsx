import { AuthContext } from "contexts/AuthContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";
import { WorkTypes } from "pages/mainPage/MainPage";
//styles
import styles from "./DetailsPage.module.scss";
const DetailsPage = () => {
  //context
  const {
    isAuthenticated,
    currentUser: { activityLog },
  } = useContext(AuthContext);
  //state
  const [searchInput, setSearchInput] = useState<string>("");
  const [workTypeFilter, setWorkTypeFilter] = useState<WorkTypes>(
    WorkTypes.All
  );
  const [currentWorkDuration, setCurrentWorkDuration] = useState<string>("");
  //callbacks
  const onSearchInputChange = useCallback((e) => {
    const { value } = e.target;
    setSearchInput(value);
  }, []);
  const onSelectChange = useCallback((e) => {
    const { value } = e.target;
    setWorkTypeFilter(value);
  }, []);
  const getWorkDuration = useCallback(({ exitTime, entranceTime }) => {
    return `
       Work duration:
          ${moment
            .duration(
              moment(exitTime === null ? new Date() : exitTime).diff(
                moment(entranceTime)
              )
            )
            .hours()}
          hours
          ${moment
            .duration(
              moment(exitTime === null ? new Date() : exitTime).diff(
                moment(entranceTime)
              )
            )
            .minutes()}
          minutes
          ${moment
            .duration(
              moment(exitTime === null ? new Date() : exitTime).diff(
                moment(entranceTime)
              )
            )
            .seconds()}
          seconds
   `;
  }, []);
  const handleCurrentWorkDuration = useCallback(() => {
    if (activityLog.length > 0) {
      const currentWorkDuration = getWorkDuration({
        exitTime: new Date(),
        entranceTime: activityLog[activityLog.length - 1].entranceTime,
      });
      setCurrentWorkDuration(currentWorkDuration);
    }
  }, [activityLog, getWorkDuration]);
  //life cycle hooks
  useEffect(() => {
    //handle the initial amount of duration
    handleCurrentWorkDuration();
    //set up the timer
    const basicInterval = setInterval(handleCurrentWorkDuration, 1000);
    return () => clearInterval(basicInterval);
  }, [activityLog, handleCurrentWorkDuration]);
  return isAuthenticated ? (
    <div className={styles.container}>
      <input
        placeholder="جستجو در میان فعالیت ها"
        value={searchInput}
        onChange={onSearchInputChange}
      />
      <label htmlFor="workType">لطفا نوع کار خود را انتخاب کنید</label>
      <select
        onChange={onSelectChange}
        id="workType"
        name="workType"
        value={workTypeFilter}
      >
        <option>{WorkTypes.All}</option>
        <option>{WorkTypes.InOffice}</option>
        <option>{WorkTypes.Remote}</option>
      </select>

      {activityLog.length > 0 ? (
        <ol>
          {activityLog
            .filter(
              ({ workDescription, workType }) =>
                workDescription?.includes(searchInput) &&
                (workTypeFilter === WorkTypes.All ||
                  workType === workTypeFilter)
            )
            .map(
              ({ workType, entranceTime, exitTime, id, workDescription }) => (
                <li key={id}>
                  {workType},
                  {moment(entranceTime).format("MMMM Do YYYY, h:mm:ss")},
                  {exitTime !== null ? (
                    moment(exitTime).format("MMMM Do YYYY, h:mm:ss")
                  ) : (
                    <span style={{ color: "red" }}>هنوز خارج نشده اید</span>
                  )}
                  ,
                  {exitTime !== null ? (
                    getWorkDuration({ exitTime, entranceTime })
                  ) : (
                    <span style={{ color: "blue" }}>{currentWorkDuration}</span>
                  )}
                  <span>{workDescription}</span>
                </li>
              )
            )}
        </ol>
      ) : (
        <p>فعالیتی وجود ندارد</p>
      )}
    </div>
  ) : (
    <Redirect to="/authentication" />
  );
};

export default DetailsPage;
