import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const endpoint =
  publicRuntimeConfig?.endpoint ?? "http://localhost:8080";

export const todoEndpoint = `${endpoint}/todo`;
