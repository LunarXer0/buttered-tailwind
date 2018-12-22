import React from "react";

const ProfileCard = () => (
  <div className="w-1/3 bg-white rounded-lg m-auto flex flex-col items-center p-5 shadow-md">
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

export default ProfileCard;
