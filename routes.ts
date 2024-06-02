/**
 * This file contains all routes that are public
 * not required to be authenticated
 * @type {string[]}
 */

export const publicRoute: string[] = ["/"];

/**
 * This file contains all routes that are protected
 * required to be authenticated. Will redirect user to /settings
 * @type {string[]}
 */
export const authRoute: string[] = ["/auth/login", "/auth/register"];

/**
 * The prefix API for authenticated routes.
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiRoutePrefix: string = "/api/auth";

/**
 * The default redirect after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
