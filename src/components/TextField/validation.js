import React from "react";
import { Field, reduxForm } from "redux-form";

export const required = (value) =>
  value || typeof value === "number" ? undefined : "Поле не заполнено";
export const maxLength = (max, name) => (value) =>
  value && value.length > max
    ? `${name} быть меньше ${max + 1} символа`
    : undefined;
export const minLength = (min, name) => (value) =>
  value && value.length < min
    ? `${name} быть больше ${min - 1} символа`
    : undefined;
const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue13 = minValue(13);
export const email = (value) =>
  value &&
  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
    ? "Неправильный email адрес"
    : undefined;
const tooYoung = (value) =>
  value && value < 13
    ? "You do not meet the minimum age requirement!"
    : undefined;
const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;
const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const phoneNumber = (value) =>
  value && !/\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/g.test(value)
    ? "Введите номер телефона из 10 цифр"
    : undefined;
export const promoNumber = (value) =>
  value && !/[0-9]{11}/m.test(value)
    ? "Введите промокод из 11 цифр"
    : undefined;
export const kirilicName = (value) =>
  value && !/[а-яА-ЯЁё-і]/g.test(value)
    ? "В этом поле доступна только кириллица"
    : undefined;
export const instaPost = (value) =>
  value && !/instagram.com\/p\/[a-zA-z0-9]{1,}/g.test(value)
    ? "Введите действительную ссылку на пост"
    : undefined;
export const instaUser = (value) =>
  value && !/@[a-zA-Z0-9]{1,}/g.test(value)
    ? "Введите действительный логин"
    : undefined;
export const isTrue =
  (error = "") =>
  (value) => {
    return value === true ? undefined : error || "Необходимо принять правила";
  };
export const pass = (value) =>
  value && !/[0-9]{6}/m.test(value) ? "Введите пароль из 6 цифр" : undefined;
