import { createAlova } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import VueHook from "alova/vue";
const alovaInstance = createAlova({
  // Suppose we need to interact with the server for this domain name
  baseURL: "https://642ec3bd2b883abc6416702f.mockapi.io/api/v1/",

  // VueHook can help us use vue's ref function to create request-related states that can be managed by Alova, including request state loading, response data data, request error object error, etc. (details to follow)
  statesHook: VueHook,

  // request adapter, we recommend and provide fetch request adapter
  requestAdapter: GlobalFetch(),
  responsed: (response) => response.json(),
});

export default alovaInstance;
