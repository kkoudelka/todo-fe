import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Layout } from "../components/layout";
import { TodoList } from "../components/todo";
import { ITodoItem } from "../types/types";
import axiosSession from "../utils/axios-session";
import { todoEndpoint } from "../utils/endpoints";

interface IProps {
  items: ITodoItem[];
}

const HomePage: React.FC<IProps> = ({ items }) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Todo App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TodoList initialItems={items} />
      </div>
    </Layout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const res = await axiosSession.get<ITodoItem[]>(todoEndpoint);

  if (res.status !== 200) {
    return { props: { items: [] } };
  }

  return { props: { items: res.data } };
};
