import { API_URL } from 'app/config'
import { ICarparkModel } from 'app/models'
import axios, { AxiosResponse } from 'axios'

export const GET_HOTTENDER_PARK = `${API_URL}/carpark/getHotTender`
export const GET_LASTENDER_PARK = `${API_URL}/carpark/getLastTender`
export const GET_ALL_CARPARK = `${API_URL}/carpark/all`
export const GET_CARPARK = `${API_URL}/carpark/one`

export function getHotTender() {
  return axios.get<AxiosResponse<ICarparkModel>>(GET_HOTTENDER_PARK)
}

export function getLastTender() {
  return axios.get<AxiosResponse<ICarparkModel>>(GET_LASTENDER_PARK)
}

export function getAllCarparks() {
  return axios.get<AxiosResponse<ICarparkModel>>(GET_ALL_CARPARK)
}

export function getCarpark(id: number) {
  return axios.get<AxiosResponse<ICarparkModel>>(GET_CARPARK, {
    params: {
      cid: id
    }
  })
}
