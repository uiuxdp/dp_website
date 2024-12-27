import { ISSUE_SINGLE, LEADER_SINGLE, MEDIA_SINGLE, PAGES } from "@/constants/apiRoutes";
import strapiFetch from "@/utils/strapiFetch";


export async function getPage(slug, lang) {
    const url = `${PAGES}/${slug}`
    const urlParamsObject = {
        locale: lang,
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}


export async function getSingleLeader(slug, lang) {
    const url = `${LEADER_SINGLE}/${slug}`
    const urlParamsObject = {
        locale: lang,
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}

export async function getSingleIssue(slug, lang) {
    const url = `${ISSUE_SINGLE}/${slug}`
    const urlParamsObject = {
        locale: lang,
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}




export async function getSingleMedia(slug, lang) {
    const url = `${MEDIA_SINGLE}/${slug}`
    const urlParamsObject = {
        locale: lang,
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}
