import { useRouter } from 'next/router';
import products from './data/products';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(p => p.id === id);

  if (!product) {
    return <p>❌ 제품을 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button onClick={() => router.back()}>← 목록으로 돌아가기</button>
    </div>
  );
}
