import API, { apiGet, apiPost } from "./api";

/**
 * SAFE FETCH REPLACEMENT RULES:
 * - Always use apiGet / apiPost
 * - Never use raw fetch or localhost
 */

export const get = apiGet;
export const post = apiPost;
export { API };
