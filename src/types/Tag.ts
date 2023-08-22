export type TagReponse = {
  tag_idx: string;
  tag_name: string;
  tag_type: number;
  tag_count: number;
}

export type Tag = {
  title: string;
  onClick?: () => void;
}