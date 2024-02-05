import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation, updatePic } from "../../actions/auth";
import axios from "axios";

const EditProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const user = useSelector((state) => state.currentUserReducer);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    console.log(selectedFile)
    if(selectedFile)
    {
      console.log("changed")
      dispatch(updatePic(formData));
    }
  }, [selectedFile]);

  const dispatch = useDispatch();
  const getLocationHandler = async () => {
    // small api to get location i.e. coordinates and place (might give false results on non-gps devices)
    const { data } = await axios.get("https://ipapi.co/json");
    dispatch(
      updateLocation({
        location: {
          latitude: data.latitude,
          longitude: data.longitude,
          area: `${data.city}, ${data.region}`,
        },
      })
    );
  };
  return (
    <div className="flex flex-col py-32 px-2 items-center">
      <div className="xl:w-1/3 sm:w-1/2 w-full flex flex-col sm:py-12 py-6 px-2 sm:px-8 items-center duration-300 hover:shadow-lg rounded-lg">
        <label htmlFor="img-change">
          <div className="relative">
            <div className="absolute top-0 left-0 z-10 w-24 h-24 rounded-full flex justify-center items-center bg-white bg-opacity-40 opacity-0 hover:opacity-90 cursor-pointer border-gray-100 border-2 object-cover hover:scale-110 duration-300 hover:z-20">
              <FaCamera className="w-8 h-8" />
            </div>
            <img
              className="w-24 h-24 rounded-full cursor-pointer border-gray-100 border-2 object-cover hover:scale-110 duration-300"
              src={user?.result?.profilePic}
            />
          </div>
        </label>
            <p className="text-xs text-red-600 lg:hidden">***Tap on profile pic to change it</p>
        <input
          id="img-change"
          type="file"
          className="hidden"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileChange}
        />
        <div className=" w-full text-md px-2 py-4">
          <p className="w-full flex justify-between">
            <span className="font-bold tracking-tight">Name: </span>
            <span className="text-sm text-gray-700">{user?.result?.name}</span>
          </p>
          <p className="w-full flex justify-between">
            <span className="font-bold tracking-tight">Email: </span>
            <span className="text-sm text-gray-700">{user?.result?.email}</span>
          </p>
          <p className="w-full flex justify-between">
            <span className="font-bold tracking-tight">Location: </span>
            <span className="text-sm text-gray-700">
              {user?.result?.location?.area}
            </span>
          </p>
        </div>
        <div className="w-full flex justify-between">
          {user?.result?.verified ? <button
            type="button"
            className="flex py-2.5 items-center justify-center rounded-sm bg-green-100 text-green-700 px-3 text-sm font-semibold leading-6 duration-300 cursor-not-allowed"
          >
            Verified
          </button>:
          <button
          type="button"
          className="flex py-2.5 items-center justify-center rounded-md bg-bgWhite px-3 text-sm font-semibold leading-6 text-black shadow-md duration-300 hover:bg-gray-100 "
          onClick={()=> alert("Working on it")}
          >
            Verify
          </button>
          }
          <button
            type="button"
            className="flex py-2.5 items-center justify-center rounded-md bg-primary px-3 text-sm font-semibold leading-6 text-white duration-300 shadow-md hover:bg-other focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            onClick={getLocationHandler}
          >
            Get Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
