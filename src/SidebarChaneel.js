import React from "react";
import { useDispatch } from "react-redux";
import "./SidebarChannel.css";
import { setChannelInfo } from "./features/appSlice";

const SidebarChaneel = ({ id, channelName }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChaneel;
