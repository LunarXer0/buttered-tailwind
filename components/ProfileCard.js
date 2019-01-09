import React from "react";

const ProfileCard = () => (
  <div className="w-1/5 bg-twitter border border-solid border-twitter-grey rounded-lg flex mx-auto mt-10 flex-col items-center p-5 shadow-md">
    <h3 className="text-white">Victor Rivera</h3>
    <p className="my-2 text-twitter-font-grey">Orlando, Florida</p>
    <div className="w-full text-twitter-font-grey flex justify-around">
      <div className="my-2 flex flex-col items-center">
        Movies <span className="text-twitter-red">50</span>
      </div>
      <div className="my-2 flex flex-col items-center">
        Followers <span className="text-twitter-red">120</span>
      </div>
    </div>
  </div>
);

export default ProfileCard;
