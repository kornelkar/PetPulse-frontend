import {UserType} from "../../shared/enums/user-type.enum";

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  role_id: UserType;
}
