import { BLOGS, BLOG_PAGE } from "@/constants/apiRoutes";
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

export async function getLatestBlogs() {
    const urlParamsObject = {
        populate: {
            articles: {
                populate: "cover",
            },
        }
    };
    const url = `${BLOG_PAGE}`;
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}


export async function getBlogs(page) {
    const url = `${BLOGS}`;
    const urlParamsObject = {
        populate: "cover",
        pagination: {
            page: page,
            pageSize: 9
        }
    };
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}

export async function getAllBlogs(page) {
    const url = `${BLOGS}`;
    const urlParamsObject = {
        populate: "cover",
        pagination: {
            page: page,
            pageSize: 9
        }
    };
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}

export async function getTags() {
    const url = `/api/tags`;
    const data = await strapiFetch(url, options);
    return data;
}


export async function getSingleBlog(slug) {
    const url = `${BLOGS}/${slug}?populate=relatedArticles.cover,seo`
    const data = await strapiFetch(url, options);
    return data;
}