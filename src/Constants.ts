const getBaseUrl = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return "/";
  } else {
    return "";
  }
};

export class Constants {
  static readonly BASE_URL: string = getBaseUrl();
}
