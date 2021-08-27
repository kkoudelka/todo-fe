import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React, { useState } from "react";
import { CreateItem } from ".";
import { ITodoItem } from "../../types/types";
import axiosSession from "../../utils/axios-session";
import { todoEndpoint } from "../../utils/endpoints";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import styles from "../../styles/TodoList.module.scss";
import EditItem from "./edit-item";

interface IProps {
  initialItems: ITodoItem[];
}

const TodoList: React.FC<IProps> = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const refetch = async () => {
    const res = await axiosSession.get<ITodoItem[]>(todoEndpoint, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    if (res.status === 200) setItems(res.data);
  };

  const removeItem = async (item: ITodoItem) => {
    const res = await axiosSession.delete(`${todoEndpoint}/${item.id}`);
    if (res.status === 404) console.log("Item not found");
    else await refetch();
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.List}>
        <List>
          {items.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <div>
                  <EditItem item={item} onEdited={refetch} />
                  <IconButton onClick={() => removeItem(item)}>
                    <DeleteForeverIcon />
                  </IconButton>
                </div>
              }
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={styles.AddItem}>
        <CreateItem onCreated={refetch} />
      </div>
    </div>
  );
};

export default TodoList;
