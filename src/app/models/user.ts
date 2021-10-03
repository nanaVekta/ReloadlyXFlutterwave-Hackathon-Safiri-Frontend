import { UserProfile } from './user-profile';
export interface User {
  access_token?: string;
  token_type?: string;
  expires_in?: string;
  user? : UserProfile;
}
