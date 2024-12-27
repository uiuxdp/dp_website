import { HOME_PAGE } from "@/constants/apiRoutes";
import { deleteFetcher, apiFetcher } from "@/utils/fetcher";
import strapiFetch from "@/utils/strapiFetch";

const options = {
    method: 'GET',
    // headers: {
    //     accept: 'application/json',
    //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    // },
    next: {
        revalidate: 0, // data will be cached for 1 day
    }
};


const nextFetch = async (slug) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
        { options }
    );

    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}${slug}`);

    if (!res.ok) {
        return undefined;
    }

    return res.json();
};