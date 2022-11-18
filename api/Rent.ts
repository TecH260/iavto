﻿import axiosAuth from 'app/axiosAuth';
import { API_URL } from 'app/config';

export const SET_RENT_URL = `${API_URL}/rent/car`;

// set array with user token and car id
export async function setCarRent(car_id: number) {
  return axiosAuth
    .post(SET_RENT_URL, { cid: car_id })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}