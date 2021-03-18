import axios, { AxiosResponse } from "axios";
import IClient, { IPostClient } from "../models/clients";
import IOrder, {
  IRentOrderPost,
  IRentOrderPostCombine,
} from "../models/rentOrders";
import IDress from "../models/salonDress";
import { toast } from "react-toastify";
import { history } from "../..";
import { ILoggin, IUser } from "../models/user";
import IOrderDress, { IPostOrderDress } from "../models/orderDress";
import ISaleOrder, { ISaleOrderPost } from "../models/saleOrders";
import IClosingSaleOrder, {
  IClosingOrderPostCombine,
  IClosingSalePost,
} from "../models/closingSaleOrder";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("Network error - make sure API is running!");
  }
  const { status, data, config } = error.response;
  if (status === 404) {
    history.push("/notfound");
  }
  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
    history.push("/notfound");
  }
  if (status === 500) {
    toast.error("Server error - check the terminal for more info!");
  }
  throw error;
});

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url: string, body: {}) =>
    axios.put(url, body).then(sleep(1000)).then(responseBody),
  del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody),
};

const WeddingDress = {
  list: (isFree = false,isRent= false,isRentInProgress= false,isOrder= false,isSold= false): Promise<IDress[]> => 
  requests.get(`/SalonDresses?isFree=${isFree}&isRent=${isRent}&isRentInProgress=${isRentInProgress}&isOrder=${isOrder}&IsSold=${isSold}`),
  details: (id: string) => requests.get(`/SalonDresses/${id}`),
  create: (dress: IPostOrderDress) => requests.post("/SalonDresses", dress),
  update: (dress: IPostOrderDress) =>
    requests.put(`/SalonDresses/${dress.id}`, dress),
  delete: (id: string) => requests.del(`/SalonDresses/${id}`),
};
const Clients = {
  list: (): Promise<IClient[]> => requests.get("/Clients"),
  details: (id: string) => requests.get(`/Clients/${id}`),
  create: (client: IPostClient) => requests.post("/Clients", client),
  update: (client: IPostClient) =>
    requests.put(`/Clients/${client.id}`, client),
  delete: (id: string) => requests.del(`/Clients/${id}`),
};
const RentOrder = {
  list: (): Promise<IOrder[]> => requests.get("/RentOrders"),
  details: (id: string) => requests.get(`/RentOrders/${id}`),
  create: (rentOrder: IRentOrderPostCombine) =>
    requests.post("/RentOrders", rentOrder),
  update: (rentOrder: IRentOrderPost) =>
    requests.put(`/RentOrders/${rentOrder.id}`, rentOrder),
  editStatus: (id: string, status: number) =>
    requests.put(`/RentOrders/status/${id}`, { status: status }),
  editCredit: (id: string, price: number) =>
    requests.put(`/RentOrders/changeCredit/${id}`, { price: price }),
  delete: (id: string) => requests.del(`/ClosingSalesOrder/${id}`),  
};
const User = {
  current: (): Promise<IUser> => requests.get("/User"),
  login: (loginData: ILoggin): Promise<IUser> =>
    requests.post("/User/login", loginData),
};
const OrderDresses = {
  list: (): Promise<IOrderDress[]> => requests.get("/OrderDresses"),
  details: (id: string) => requests.get(`/OrderDresses/${id}`),
  create: (dress: IPostOrderDress) => requests.post("/OrderDresses", dress),
  update: (dress: IPostOrderDress) =>
    requests.put(`/OrderDresses/${dress.id}`, dress),
  delete: (id: string) => requests.del(`/OrderDresses/${id}`),
};
const SaleOrder = {
  list: (): Promise<ISaleOrder[]> => requests.get("/SalesOrders"),
  details: (id: string) => requests.get(`/SalesOrders/${id}`),
  create: (saleOrder: ISaleOrderPost) =>
    requests.post("/SalesOrders", saleOrder),
  update: (saleOrder: ISaleOrderPost) =>
    requests.put(`/SalesOrders/${saleOrder.id}`, saleOrder),
  editStatus: (id: string, status: number) =>
    requests.put(`/SalesOrders/status/${id}`, { status: status }),
  editCredit: (id: string, price: number) =>
    requests.put(`/SalesOrders/changeCredit/${id}`, { price: price }),
    delete: (id: string) => requests.del(`/SalesOrders/${id}`),  
};
const ClosingSaleOrder = {
  list: (): Promise<IClosingSaleOrder[]> => requests.get("/ClosingSalesOrder"),
  details: (id: string) => requests.get(`/ClosingSalesOrder/${id}`),
  update: (closingSalesOrder: IClosingSalePost) =>
    requests.put(`/ClosingSalesOrder/${closingSalesOrder.id}`, closingSalesOrder),
  editStatus: (id: string, status: number) =>
    requests.put(`/ClosingSalesOrder/status/${id}`, { status: status }),
  editCredit: (id: string, price: number) =>
    requests.put(`/ClosingSalesOrder/changeCredit/${id}`, { price: price }),
  create: (closingSalesOrder: IClosingOrderPostCombine) =>
    requests.post("/ClosingSalesOrder", closingSalesOrder),
    delete: (id: string) => requests.del(`/ClosingSalesOrder/${id}`),  
};

const request = {
  dress: WeddingDress,
  orderDresses: OrderDresses,
  client: Clients,
  rentOrder: RentOrder,
  closingSaleOrder: ClosingSaleOrder,
  user: User,
  saleOrder: SaleOrder,
};
export default request;
