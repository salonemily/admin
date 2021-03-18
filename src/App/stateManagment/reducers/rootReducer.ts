import { combineReducers } from '@reduxjs/toolkit'
import getDressData from './DressReducers/getDressDataReducer'
import getOneDress from './DressReducers/getOneDressReducer'
import postDress from './DressReducers/postDressReducer'
import updateDress from './DressReducers/updateDressReducer'
import getClientData from './ClientsReducers/getClientsDataReducer'
import getOneClient from './ClientsReducers/getOneClientReducer'
import postClient from './ClientsReducers/postClientReducer'
import updateClient from './ClientsReducers/updateClientReducer'
import getRentOrderData from './RentOrderReducers/getRentOrderDataReducer'
import getRentOneOrder from './RentOrderReducers/getOneRentOrderReducer'
import dressSearchReducer from './Serchers/dressSearchReducer'
import clientSearchReducer from './Serchers/clientSearchReducer'
import postRentOrderReducer from './RentOrderReducers/postRentOrderReducer'
import deleteDressReducer from './DressReducers/deleteDressReducer'
import deleteClientReducer from './ClientsReducers/deleteClientReducer'
import loginReducer from './UserReducers/loginReducer'
import getUserReducer from './UserReducers/getUserReducer'
import postSaleOrderReducer from './SaleOrderReducers/postSaleOrderReducer'
import getSaleOrderDataReducer from './SaleOrderReducers/getSaleOrderDataReducer'
import getOneSaleOrderReducer from './SaleOrderReducers/getOneSaleOrderReducer'
import  deleteOrderDressReducer from './OrderDressReducers/deleteOrderDressReducer'
import  getOneOrderDressReducer from './OrderDressReducers/getOneOrderDressReducer'
import  getOrderDressReducer from './OrderDressReducers/getOrderDressDataReducer'
import  updateOrderDressReducer from './OrderDressReducers/updateOrderDressReducer'
import updateSaleOrderReducer from './SaleOrderReducers/updateSaleOrderReducer'
import editSaleOrderStatusReducer from './SaleOrderReducers/editSaleOrderStatusReducer'
import getClosingSaleOrderDataReducer from './ClosingSalesOrderReducers/getClosingSaleOrderDataReducer'
import getOneClosingSaleOrderReducer from './ClosingSalesOrderReducers/getOneSaleOrderReducer'
import postClosingSaleOrderReducer from './ClosingSalesOrderReducers/postSaleOrderReducer'
import editClosingSaleOrderStatusReducer from './ClosingSalesOrderReducers/editClosingSaleOrderStatusReducer'
import editRentOrderStatusReducer from './RentOrderReducers/editRentOrderStatusReducer'
import deleteRentOrderReducer from './RentOrderReducers/deleteRentOrderReducer'
import editRentOrderCreditReducer from './RentOrderReducers/editRentOrderCreditReducer'
import updateRentOrderReducer from './RentOrderReducers/updateRentOrderReducer'
import deleteClosingSaleOrderReducer from './ClosingSalesOrderReducers/deleteClosingSaleOrderReducer'
import updateClosingSaleOrderReducer from './ClosingSalesOrderReducers/updateClosingSaleOrderReducer'
import editClosingSaleOrderCreditReducer from './ClosingSalesOrderReducers/editClosingSaleOrderCreditReducer'
import editSaleOrderCreditReducer from './SaleOrderReducers/editSaleOrderCreditReducer'
import deleteSaleOrderReducer from './SaleOrderReducers/deleteSaleOrderReducer'


const rootReducer = combineReducers({
     deleteRentOrderReducer,
     editRentOrderCreditReducer,
     updateClosingSaleOrderReducer,
     editClosingSaleOrderCreditReducer,
     editSaleOrderCreditReducer,
     deleteClosingSaleOrderReducer,
     deleteSaleOrderReducer,
     getDressData,
     getOneDress,
     postDress,
     updateDress,
     deleteDressReducer,
     getClientData,
     deleteClientReducer,
     getRentOrderData,
     getRentOneOrder,
     dressSearchReducer,
     clientSearchReducer,
     getOneClient,
     postClient,
     updateClient,
     postRentOrderReducer,
     loginReducer,
     getUserReducer,
     getOneSaleOrderReducer,
     getSaleOrderDataReducer,
     postSaleOrderReducer,
     deleteOrderDressReducer,
     getOneOrderDressReducer,
     getOrderDressReducer,
     updateOrderDressReducer,
     updateSaleOrderReducer,
     editSaleOrderStatusReducer,
     getClosingSaleOrderDataReducer,
     getOneClosingSaleOrderReducer,
     postClosingSaleOrderReducer,
     editRentOrderStatusReducer,
     editClosingSaleOrderStatusReducer,
     updateRentOrderReducer
})
  
export default rootReducer
