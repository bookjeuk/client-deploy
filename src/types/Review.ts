import { TagReponse } from "@/types/Tag";

export type Review = {
  title: string;
  like: number;
  body: string;
  username: string;
  date: string;
  tags: TagReponse[];
}