import {UserType} from "../../shared/enums/user-type.enum";
import {OwnerInfo} from "./owner-info.model";
import {Role} from "./role.model";

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  role_id: UserType;
  owner?: OwnerInfo;
  role: Role
}
