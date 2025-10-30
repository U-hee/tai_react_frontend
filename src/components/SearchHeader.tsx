import { Search } from 'lucide-react';

export function SearchHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-blue-600 mb-2">실시간 급상승 검색어</h1>
      <p className="text-gray-600 mb-6">한국에서 급상승 중인 검색어를 실시간으로 확인하세요</p>
      
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="검색어 입력"
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
