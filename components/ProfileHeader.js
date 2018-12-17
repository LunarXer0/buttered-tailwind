import React from "react";

const ProfileHeader = () => (
  <div className="w-1/2 z-50 absolute pin-x bg-white m-auto -mt-20 flex flex-col items-center p-5 shadow-md">
    <h3 className="my-2 bg-white">Victor Rivera</h3>
    <p className="my-2 bg-white">Orlando, Florida</p>
    <div className="w-full flex justify-around">
      <div className="my-2 flex flex-col items-center">
        Movies <span>50</span>
      </div>
      <div className="my-2 flex flex-col items-center">
        Followers <span>120</span>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
