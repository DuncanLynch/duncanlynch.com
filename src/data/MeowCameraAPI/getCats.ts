'use server'
import axios from "axios";

const FEATURED_URL: string = "https://api.meow.camera/catHouses/random";
//const CAT_URL: string = "https://api.meow.camera/catHouse/";


export async function getCats() {
    const response = await axios.get(FEATURED_URL, { timeout: 5000 });
    const cameras = response['data'];
    return JSON.stringify(cameras);
}

