import React from "react";

const ProfileHeader = () => (
  <div className="p-5 tracking-wide">
    <div className="w-2/5 m-auto flex flex-col items-center p-5 shadow-md">
      <h3 className="my-2">Victor Rivera</h3>
      <p className="my-2">Orlando, Florida</p>
      <div className="w-full flex justify-around">
        <div className="my-2 flex flex-col items-center">
          Movies <span>50</span>
        </div>
        <div className="my-2 flex flex-col items-center">
          Followers <span>120</span>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
