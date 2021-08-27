import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { todoEndpoint } from "../../utils/endpoints";
import toast from "react-hot-toast";
import axiosSession from "../../utils/axios-session";

interface IProps {
  onCreated: () => void | Promise<void>;
}

const CreateItem: React.FC<IProps> = ({ onCreated }) => {
  const [text, setText] = useState("");

  const keypress: React.KeyboardEventHandler<HTMLDivElement> = async (
    event
  ) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      await save();
    }
  };

  const save = async () => {
    if (text.trim().length < 1) return;
    try {
      const res = await axiosSession.post(todoEndpoint, { title: text });
      if (res.status === 201) {
        await onCreated();
        setText("");
        toast.success("Todo item created!");
        return;
      }

      toast.error("An error occured!");
    } catch (e) {
      console.log(e);
      toast.error("An error occured!");
    }
  };
  return (
    <div>
      <TextField
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
        label="Add a task"
        placeholder="Write a todo app"
        variant="standard"
        onKeyDown={keypress}
        fullWidth
      />
      <Fade in={text.length > 0}>
        <Button variant="contained" onClick={() => save()}>
          Save
        </Button>
      </Fade>
    </div>
  );
};

export default CreateItem;
