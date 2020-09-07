
export const SESSION_SHELF_LIFE = 1000 * 60 * 60 * 24 * 7

export const adminCookieName = "xaid"
export const userCookieName = "xuid"
export const cookieOptions = {
    httpOnly: true,
    sameSite: true,
    signed: true,
    secure: (process.env.NODE_EVN === "production") ? true : false,
    maxAge: SESSION_SHELF_LIFE,
    path: "/"
}