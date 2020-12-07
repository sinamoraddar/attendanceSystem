import { AuthContext } from "contexts/AuthContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";
import { WorkTypes } from "pages/mainPage/MainPage";
//styles
import styles from "./ReportsPage.module.scss";
import {
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { InputLabel, TextField } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
const ReportsPage = () => {
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
          ${moment
            .duration(
              moment(exitTime === null ? new Date() : exitTime).diff(
                moment(entranceTime)
              )
            )
            .hours()}
          ساعت
          ${moment
            .duration(
              moment(exitTime === null ? new Date() : exitTime).diff(
                moment(entranceTime)
              )
            )
            .minutes()}
          دقیقه
          ${moment
            .duration(
              moment(exitTime === null ? new Date() : exitTime).diff(
                moment(entranceTime)
              )
            )
            .seconds()}
          ثانیه
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
      <div className={styles.innerBox}>
        <div className={styles.header}>
          <TextField
            label="جستجو در میان فعالیت ها"
            value={searchInput}
            onChange={onSearchInputChange}
            type="text"
          />
          <div>
            <InputLabel id="demo-simple-select-helper-label">
              لطفا نوع کار خود را انتخاب کنید
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={workTypeFilter}
              onChange={onSelectChange}
              name="workType"
              className={styles.select}
            >
              <MenuItem value={WorkTypes.All}>{WorkTypes.All}</MenuItem>
              <MenuItem value={WorkTypes.Remote}>{WorkTypes.Remote}</MenuItem>
              <MenuItem value={WorkTypes.InOffice}>
                {WorkTypes.InOffice}
              </MenuItem>
            </Select>
          </div>
        </div>
        {activityLog.length > 0 ? (
          <div className={styles.tableContainer}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>نوع</TableCell>
                  <TableCell align="right">زمان ورود</TableCell>
                  <TableCell align="right">زمان خروج</TableCell>
                  <TableCell align="right">مدت زمان کارکرد</TableCell>
                  <TableCell align="right">شرح فعالیت ها</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activityLog
                  .filter(
                    ({ workDescription, workType }) =>
                      workDescription?.includes(searchInput) &&
                      (workTypeFilter === WorkTypes.All ||
                        workType === workTypeFilter)
                  )
                  .map(
                    ({
                      workType,
                      entranceTime,
                      exitTime,
                      id,
                      workDescription,
                    }) => (
                      <TableRow key={id}>
                        <TableCell component="th" scope="row" align="right">
                          {workType}
                        </TableCell>
                        <TableCell align="right">
                          {moment(entranceTime).format("MMMM Do YYYY, h:mm:ss")}
                        </TableCell>
                        <TableCell align="right">
                          {exitTime !== null ? (
                            moment(exitTime).format("MMMM Do YYYY, h:mm:ss")
                          ) : (
                            <span className={styles.red}>
                              هنوز خارج نشده اید
                            </span>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {exitTime !== null ? (
                            getWorkDuration({ exitTime, entranceTime })
                          ) : (
                            <span className={styles.orange}>
                              {currentWorkDuration}
                            </span>
                          )}
                        </TableCell>
                        <TableCell align="right">{workDescription}</TableCell>
                      </TableRow>
                    )
                  )}
              </TableBody>
            </Table>
          </div>
        ) : (
          <p>فعالیتی وجود ندارد</p>
        )}
      </div>
    </div>
  ) : (
    <Redirect to="/authentication" />
  );
};

export default ReportsPage;
