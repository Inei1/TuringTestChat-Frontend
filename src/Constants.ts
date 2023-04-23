const getBaseUrl = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return "/";
  } else {
    return "https://api.turingtestchat.com/";
  }
};

export class Constants {
  static readonly BASE_URL: string = getBaseUrl();
}
