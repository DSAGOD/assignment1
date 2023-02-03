import React from "react";
import './detail.css'
function Detaileddrawer({ temp, id }) {
  console.log(temp);
  return (
    <div>
      <div className="description">
        <h3>Description</h3>
        <h3>{temp.company.catchPhrase}</h3>
      </div>
      <div className="gird">
        <div className="section-1">
          <h3>Contact Person</h3>
          <h3>{temp.name}</h3>
        </div>
        <div className="section-1">
        <h3>Address</h3>
          <h3>{temp.address.suite + " " + temp.address.street + " " + temp.address.city + " " + temp.address.zipcode}</h3>
        </div>
        <div className="section-1">
        <h3>Username</h3>
          <h3>{temp.username}</h3>
        </div>
        <div className="section-1">
        <h3>City</h3>
          <h3>{temp.address.city}</h3>
        </div>
        <div className="section-1">
        <h3>Emails</h3>
          <h3>{temp.email}</h3>
        </div>
        <div className="section-1">
        <h3>Street</h3>
          <h3>{temp.address.street}</h3>
        </div>
        <div className="section-1">
        <h3>Phones</h3>
          <h3>{temp.phone}</h3>
        </div>
        <div className="section-1">
        <h3>Website</h3>
          <h3>{temp.website}</h3>
        </div>
      </div>
    </div>
  );
}

export default Detaileddrawer;
