import { Product } from "../models/product";

const url = `https://my-json-server.typicode.com/MarcosPaulo62/mae-terra-react/produtos`
export const getProducts = (): Promise<Product[]> => {

    const headers = new Headers();
    headers.append("Content-type", "application/json");

    const requestOptions = {
        method: "GET",
        headers: headers,
    };

    return fetch(url, requestOptions)
    .then(response => response.json())
}