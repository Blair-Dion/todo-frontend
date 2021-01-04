import Card from './Card'

export default interface List {
  id: number;
  name: string;
  board_id: number;
  archived_datetime: string;
  cards: Card[];
  archived: boolean;
}
