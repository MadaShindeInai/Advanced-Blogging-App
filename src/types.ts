export type Post = {
  id: number;
  uri: any;
  text: string;
  date: any;
  booked: boolean;
};

export type State = {
  post: {
    allPosts: Post[];
    bookedPosts: Post[];
  };
};
