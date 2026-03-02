export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">

      {/* Header */}
      <header className="border-b border-gray-100 py-6 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight text-green-700">강건한건강</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-24 px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold leading-snug mb-6 text-gray-900">
            건강한 삶을 위한<br />든든한 파트너
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            강건한건강은 고객의 건강한 일상을 지원하는 건강 전문 기업입니다.<br />
            신뢰를 바탕으로 최적의 건강 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl mb-3">🌿</div>
            <h3 className="font-semibold text-gray-800 mb-2">건강 제품</h3>
            <p className="text-sm text-gray-500">엄선된 건강 제품을 통해 일상 속 건강을 챙기세요.</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">💊</div>
            <h3 className="font-semibold text-gray-800 mb-2">전문 상담</h3>
            <p className="text-sm text-gray-500">고객 맞춤형 건강 상담으로 최적의 방법을 안내합니다.</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-semibold text-gray-800 mb-2">빠른 배송</h3>
            <p className="text-sm text-gray-500">신속하고 안전한 배송으로 제품을 전달합니다.</p>
          </div>
        </div>
      </section>

      {/* Footer — 통신판매업 신고 필수 정보 */}
      <footer className="border-t border-gray-200 py-10 px-8 text-sm text-gray-500">
        <div className="max-w-4xl mx-auto space-y-1">
          <p className="font-semibold text-gray-700 mb-3">사업자 정보</p>
          <p><span className="font-medium text-gray-600">상호</span>　강건한건강</p>
          <p><span className="font-medium text-gray-600">사업자등록번호</span>　674-37-01539</p>
          <p><span className="font-medium text-gray-600">주소</span>　인천광역시 서구 완정로 179, 6층 601-794호(왕길동, 제이원검단메디컬프라자)</p>
          <p><span className="font-medium text-gray-600">이메일</span>　creator.pando@gmail.com</p>
          <p><span className="font-medium text-gray-600">통신판매업신고번호</span>　[신고번호]</p>
          <p className="pt-4 text-xs text-gray-400">© 2026 강건한건강. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
