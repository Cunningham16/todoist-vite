export type todosObject = {
    userId: number;
    id: number,
    title: string,
    completed: boolean
}

export type inputTaskProps = {
    addTask: (text: string) => void;
}

export type taskProps = {
  text: string;
  checked: boolean;
}

export type taskObject = {
  text: string;
  checked: boolean;
}

export type responseObject = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}