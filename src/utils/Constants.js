import profile from '../utils/userIcon.png'
export const NET_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const TOP_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
export const TOP_BGW = "url(https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg)"

export const CSS_INPUT = "h-6 w-[100%] rounded-sm py-7 px-4 placeholder:h-6 text-left p-4 bg-transparent border-solid border-gray-500 border-[1px]"

export const AVATAR = profile;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API}`
    }
  };
  

export const IMG_LINK = "https://image.tmdb.org/t/p/w200";


export const GPT_AI = process.env.REACT_APP_GPT_AI;