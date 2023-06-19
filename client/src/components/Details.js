import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { CardContent } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Details = () => {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Abhishek</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <button className="btn btn-primary mx-2">
              <CreateIcon />
            </button>
            <button className="btn btn-danger">
              <DeleteIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="/profile.png" style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3">
                Name: <span>Abhishek</span>
              </h3>
              <h3 className="mt-3">
                Age: <span>19</span>
              </h3>
              <p className="mt-3">
                <MailIcon />
                Email: <span>omi@gmail.com</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occupation: <span>Web Developer</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                <PhoneAndroidIcon />
                Mobile: <span>+91 9090909090</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon />
                Location: <span>Varanasi</span>
              </p>
              <p className="mt-3">
                Description:
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Velit laoreet id donec ultrices tincidunt.
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
