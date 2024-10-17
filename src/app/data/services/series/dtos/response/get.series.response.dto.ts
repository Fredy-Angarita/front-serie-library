export interface GetSeriesResponse {
  id: string;
  title: string;
  synopsis: string;
  thumbnail: string;
  totalChapters: number;
  publicationDate: string;
  progress: {
    chapter: number;
  }[];
}
