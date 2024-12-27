import axios from "axios";

const BaseURL = process.env.NEXT_PUBLIC_BASE_URL

// const fetcher = async url => {
//     const res = await fetch(url)


   
//     // If the status code is not in the range 200-299,
//     // we still try to parse and throw it.
//     if (!res.ok) {
//       const error = new Error('An error occurred while fetching the data.')
//       // Attach extra info to the error object.
//       error.info = await res.json()
//       error.status = res.status
//       throw error
//     }
   
//     return res.json()
//   }

const fetcher = url => axios.get(url).then(res => res.data);


const apiFetcher = async (url, data=null, options) => {

    const method = options?.method?.toLowerCase();
    const headers = options?.headers;
    
    console.log(headers, "is here");
    try {
        const res = await axios[method](`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, data !== null ? data : {}, { headers});
        return res.data;
    } catch (err) {
        console.error("Error in POST request:", err);
        return err.response.data;
    }
};


export default fetcher
export {apiFetcher }