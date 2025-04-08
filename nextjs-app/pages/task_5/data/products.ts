export interface Product {
    id: string;
    name: string;
    description: string;
  }
  
  const products: Product[] = [
    { id: '1', name: '아이폰 15', description: '최신 아이폰 모델입니다.' },
    { id: '2', name: '갤럭시 S24', description: '삼성의 최신 스마트폰입니다.' },
    { id: '3', name: 'LG 그램', description: '초경량 노트북입니다.' },
  ];
  
  export default products;
  