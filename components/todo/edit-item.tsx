import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import { ITodoItem } from "../../types/types";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axiosSession from "../../utils/axios-session";
import { todoEndpoint } from "../../utils/endpoints";
import Button from "@material-ui/core/Button";

interface IProps {
  item: ITodoItem;
  onEdited: () => void | Promise<void>;
}

const EditItem: React.FC<IProps> = ({ item, onEdited }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(item.title);

  const handleClose = () => {
    setOpen(false);
  };

  const keypress: React.KeyboardEventHandler<HTMLDivElement> = async (
    event
  ) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      await saveChanges();
    }
  };

  const saveChanges = async () => {
    if (text.trim().length < 1) return;

    const res = await axiosSession.put(`${todoEndpoint}/${item.id}`, {
      title: text,
    });

    handleClose();
    await onEdited();
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit todo title</DialogTitle>
        <DialogContent>
          <TextField
            value={text}
            onChange={(event) => setText(event.currentTarget.value)}
            label="Add a task"
            placeholder="Write a todo app"
            variant="standard"
            onKeyDown={keypress}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveChanges} disabled={text.trim().length < 1}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditItem;
