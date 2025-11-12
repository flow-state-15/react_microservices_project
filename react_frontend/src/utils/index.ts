import axios from "axios";
import type { operators } from "../types";

//common utilites

export async function ping_api(slug?: string) {
  const url: string = slug
    ? import.meta.env.VITE_API_URL + slug
    : import.meta.env.VITE_API_URL;
  const res: any = await axios.get(url);
  console.log("ping_api, res: ", res);
  return res;
}

//calculator utilites

export function operator_string(history_string: string, operator: string): string {
  return history_string + operator;
}

export function calc_operate(
  operator: operators,
  operand1: number,
  operand2: number,
): number | "undefined" {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand2 ? operand1 / operand2 : "undefined";
  }
}
