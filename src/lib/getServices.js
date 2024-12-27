import { CAREERS_LISTING, SERVICE_LISTING } from "@/constants/apiRoutes";
import strapiFetch from "@/utils/strapiFetch";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    },
    next: {
        revalidate: 60 * 60 * 24, // data will be cached for 1 day
    }
};

export async function getServices() {
    const url = `${SERVICE_LISTING}`;
    const urlParamsObject = {
        populate: {
            sub_categories:{
                populate: {
                    cover: true
                }
            },
            thumb:{
                populate: true
            }
        }
    };
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}


export async function getSingleService(slug) {
    const url = `${SERVICE_LISTING}/${slug}`
    const urlParamsObject = {
        populate: {
            sub_categories:{
                populate: {
                    cover: true
                },
                populate: {
                    content: true
                }
            },
            relatedArticles:{
                populate: {
                    cover: true
                }
            }
        }
    };
    // const urlParamsObject = {
    //     populate: "relatedArticles.cover",
    // };
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}


// populate: {
//     cover: {
//       populate: true,
//     },
//     category: {
//       populate: true,
//     },
//     blocks: {
//       populate: true,
//     },
//     authorsBio: {
//       populate: true
//     },
//     seo: {
//       populate: true
//     }