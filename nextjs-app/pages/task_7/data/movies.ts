export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "인터스텔라",
    overview: "우주로 떠나는 감동적인 이야기",
    release_date: "2014-11-07",
  },
  {
    id: 2,
    title: "인셉션",
    overview: "꿈 속의 꿈을 넘나드는 액션",
    release_date: "2010-07-16",
  },
  {
    id: 3,
    title: "테넷",
    overview: "시간을 거꾸로 되돌리는 스파이 액션",
    release_date: "2020-08-26",
  },
];

export default movies;
