import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
  timeFilter: string;
  categoryFilter: string;
  sortFilter: string;
  onTimeFilterChange: (value: string) => void;
  onCategoryFilterChange: (value: string) => void;
  onSortFilterChange: (value: string) => void;
}

export function FilterBar({
  timeFilter,
  categoryFilter,
  sortFilter,
  onTimeFilterChange,
  onCategoryFilterChange,
  onSortFilterChange,
}: FilterBarProps) {
  return (
    <div className="flex gap-3 mb-8 flex-wrap">
      <div className="flex items-center gap-2">
        <span className="text-gray-600">≡ 필터</span>
      </div>
      
      <div className="relative">
        <select
          value={timeFilter}
          onChange={(e) => onTimeFilterChange(e.target.value)}
          className="appearance-none pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="0">현재 시간</option>
          <option value="1">1시간 전</option>
          <option value="2">2시간 전</option>
          <option value="3">3시간 전</option>
          <option value="4">4시간 전</option>
          <option value="5">5시간 전</option>
          <option value="6">6시간 전</option>
          <option value="7">7시간 전</option>
          <option value="8">8시간 전</option>
          <option value="9">9시간 전</option>
          <option value="10">10시간 전</option>
          <option value="11">11시간 전</option>
          <option value="12">12시간 전</option>
          <option value="24">24시간 전</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
      </div>
      
      <div className="relative">
        <select
          value={categoryFilter}
          onChange={(e) => onCategoryFilterChange(e.target.value)}
          className="appearance-none pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="all">전체 카테고리</option>
          <option value="스포츠">스포츠</option>
          <option value="기술">기술</option>
          <option value="자동차">자동차</option>
          <option value="연예">연예</option>
          <option value="정치">정치</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
      </div>
      
      <div className="relative">
        <select
          value={sortFilter}
          onChange={(e) => onSortFilterChange(e.target.value)}
          className="appearance-none pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="growth">급상승률순</option>
          <option value="volume">검색량순</option>
          <option value="recent">최신순</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
      </div>
    </div>
  );
}
