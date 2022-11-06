import {
  ProfilePage_v3 as v3,
  ProfilePage_v3Props as v3Props,
} from "./ProfilePage_v3";
import {
  ProfilePage_v2 as v2,
  ProfilePage_v2Props as v2Props,
} from "./ProfilePage_v2";
import {
  ProfilePage_v1 as v1,
  ProfilePage_v1Props as v1Props,
  ProfilePropsFromApp_v1,
} from "./ProfilePage_v1";

export type ProfilePropsFromApp = ProfilePropsFromApp_v1;
export type ProfilePageProps = ProfilePage_v3Props;
export const ProfilePage = v3;

export type ProfilePage_v1Props = v1Props;
export const ProfilePage_v1 = v1;

export type ProfilePage_v2Props = v2Props;
export const ProfilePage_v2 = v2;

export const ProfilePage_v3 = v3;
export type ProfilePage_v3Props = v3Props;
