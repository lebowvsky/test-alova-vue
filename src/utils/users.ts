import alovaInstance from "@/api/alova-instance";
import { User } from "@/types/users";

export const fetchAllUsers = () =>
  alovaInstance.Get("users", {
    transformData(users: User[], header) {
      return users as User[];
    },
  });
