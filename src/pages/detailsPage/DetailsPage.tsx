import { AuthContext } from "contexts/AuthContext";
import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";
const DetailsPage = () => {
  const {
    isAuthenticated,
    currentUser: { activityLog },
  } = useContext(AuthContext);
  return isAuthenticated ? (
    <div>
      <Link to="/">Back to home page</Link>
      <ol>
        {activityLog.map(
          ({ workType, entranceTime, exitTime, id, workDescription }) => (
            <li key={id}>
              {workType},{moment(entranceTime).format("MMMM Do YYYY, h:mm:ss")},
              {exitTime !== null ? (
                moment(exitTime).format("MMMM Do YYYY, h:mm:ss")
              ) : (
                <span style={{ color: "red" }}>هنوز خارج نشده اید</span>
              )}
              ,
              {
                <>
                  duration:
                  <span>
                    {moment
                      .duration(
                        moment(exitTime === null ? new Date() : exitTime).diff(
                          moment(entranceTime)
                        )
                      )
                      .hours()}
                    hours
                  </span>
                  <span>
                    {moment
                      .duration(
                        moment(exitTime === null ? new Date() : exitTime).diff(
                          moment(entranceTime)
                        )
                      )
                      .minutes()}
                    minutes
                  </span>
                  <span>
                    {moment
                      .duration(
                        moment(exitTime === null ? new Date() : exitTime).diff(
                          moment(entranceTime)
                        )
                      )
                      .seconds()}
                    seconds
                  </span>
                </>
              }
              <span>{workDescription}</span>
            </li>
          )
        )}
      </ol>
    </div>
  ) : (
    <Redirect to="/authentication" />
  );
};

export default DetailsPage;
