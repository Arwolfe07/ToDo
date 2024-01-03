import React from "react";
import { Snackbar,Slide } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const Notification = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.notificationReducer);

  const closeHandler = () => {
    dispatch({ type: "CLEAR_MESSAGE" });
  };

  return (
    <Snackbar
      TransitionComponent={TransitionLeft}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      ContentProps={{
        'aria-describedby': 'message-id',
        sx: {
            display: 'block',
            textAlign: 'center'
        }
    }}
      open={!!message}
      autoHideDuration={2500}
      onClose={closeHandler}
      message={message}
    />
  );
};

export default Notification;
