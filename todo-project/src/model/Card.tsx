export default interface Card {
  id: number;
  title: string;
  contents: string;
  pos?: number;
  user_id?: string;
  profile_image_url?: string;
  list_id: number;
  archived_datetime?: string;
  archived?: boolean;
}

export interface EditCard {
  listId: number;
  cardId: number;
  editedTitle: string;
  editedContents: string;
}
