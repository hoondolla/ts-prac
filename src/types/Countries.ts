export interface Country {
  name: {
    common: string;
  };
  region: string;
  flags: {
    png: string;
  };
  isdone: boolean; // 좋아하는 나라 여부
  area: number; // id 값 대신 사용
}
