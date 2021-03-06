import React, { useCallback, useContext, useEffect, useState } from "react";
//third party components
import moment from "moment";
import { Button, InputLabel, MenuItem, Select } from "@material-ui/core";
//utils
import { AuthContext } from "utils/contexts/AuthContext";
import { WeekDays, WorkTypes } from "utils/types";
//styles
import styles from "./MainPage.module.scss";

const MainPage = ({
  SubmitEntrance,
  SubmitExit,
}: {
  SubmitEntrance: ({ workType }: { workType: WorkTypes }) => void;
  SubmitExit: ({ workDescription }: { workDescription: string }) => void;
}) => {
  //context
  const { currentUser } = useContext(AuthContext);
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
    const today = new Date().getDay();
    if (today === WeekDays.Thursday || today === WeekDays.Friday) {
      setError("ثبت ورود و خروج در روز های تعطیل امکان پذیر نیست");
    }
  }, []);
  return (
    <div className={styles.container}>
      {error.length > 0 ? (
        <h3>{error}</h3>
      ) : (
        <div className={styles.innerBox}>
          {currentUser.activityLog.length > 0 &&
          currentUser.activityLog[currentUser.activityLog.length - 1]
            .hasEntered &&
          currentUser.activityLog[currentUser.activityLog.length - 1]
            .exitTime === null ? (
            <>
              <h3>
                شما در
                <span className={styles.time}>
                  {moment(
                    currentUser.activityLog[currentUser.activityLog.length - 1]
                      .entranceTime
                  ).format("HH:mm:ss")}
                </span>
                وارد شرکت شدید
              </h3>
              <label htmlFor="activityDetails">
                خلاصه فعالیت هاتون رو اینجا وارد کنید
              </label>

              <textarea
                name="activityDetails"
                id="activityDetails"
                placeholder="خلاصه فعالیت ها..."
                onChange={onTextareaChange}
                value={workDescription}
              ></textarea>
              <Button
                variant={"contained"}
                color="secondary"
                onClick={SubmitExit.bind(null, { workDescription })}
              >
                ثبت خروج از شرکت
              </Button>
            </>
          ) : (
            <>
              <InputLabel id="demo-simple-select-helper-label">
                لطفا نوع کار خود را انتخاب کنید
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={workType}
                onChange={onSelectChange}
                name="workType"
                className={styles.select}
              >
                <MenuItem value={WorkTypes.Remote}>{WorkTypes.Remote}</MenuItem>
                <MenuItem value={WorkTypes.InOffice}>
                  {WorkTypes.InOffice}
                </MenuItem>
              </Select>
              <Button
                variant="contained"
                color="primary"
                onClick={SubmitEntrance.bind(null, { workType })}
              >
                ثبت ورود به شرکت
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MainPage;
