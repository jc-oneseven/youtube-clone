const GOOGLE_API_KEY = "AIzaSyDEzIyNUsN9q2tUFSUITe-kRPwKS58Gwow";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SUGGEST_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=IN&key=${GOOGLE_API_KEY}&q=`;

export const OFFSET_LIVE_CHAT = 25;
