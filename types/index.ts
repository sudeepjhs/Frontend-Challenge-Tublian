export type UserProfile = {
  fullname: string;
  location: string;
  priceInUSD: string | number;
  title?: string;
  profilePic?: string;
}

export type UserCompleteInfo = UserInfo & UserInfoWithImage & { infoType: "text" | "image" }

export type UserInfo = {
  tag?: string;
  title: string;
  content?: string;
  lastUpdated?: string;
}

export type UserInfoWithImage = {
  imgSrc?: string;
  title: string;
}