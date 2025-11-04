import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
  timeFilter: string;
  categoryFilter: string;
  sortFilter: string;
  onTimeFilterChange: (value: string) => void;
  onCategoryFilterChange: (value: string) => void;
  onSortFilterChange: (value: string) => void;
  year: number;
  month: number; // 1-12
  day: number;   // 1-31
  onYearChange: (value: number) => void;
  onMonthChange: (value: number) => void;
  onDayChange: (value: number) => void;
  onResetToNow: () => void;
}

export function FilterBar({
  timeFilter,
  categoryFilter,
  sortFilter,
  onTimeFilterChange,
  onCategoryFilterChange,
  onSortFilterChange,
  year,
  month,
  day,
  onYearChange,
  onMonthChange,
  onDayChange,
  onResetToNow,
}: FilterBarProps) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear - 5 + i); // 현재년도-5 ~ 현재년도
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="mb-8">
      {/* 모든 필터를 1줄에 배치 */}
      <div className="flex gap-2 sm:gap-3 flex-wrap items-stretch">
        {/* Year */}
        <div className="relative flex-1 min-w-[250px]">
          <select
            value={year}
            onChange={(e) => onYearChange(parseInt(e.target.value, 10))}
            className="w-full text-sm sm:text-base appearance-none px-4 pr-10 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 cursor-pointer text-gray-700 transition-colors"
            aria-label="년도 선택"
          >
            {years.map((y) => (
              <option key={y} value={y}>{y}년</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
        {/* Month */}
        <div className="relative flex-1 min-w-[100px]">
          <select
            value={month}
            onChange={(e) => onMonthChange(parseInt(e.target.value, 10))}
            className="w-full text-sm sm:text-base appearance-none px-4 pr-10 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 cursor-pointer text-gray-700 transition-colors"
            aria-label="월 선택"
          >
            {months.map((m) => (
              <option key={m} value={m}>{m}월</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
        {/* Day */}
        <div className="relative flex-1 min-w-[100px]">
          <select
            value={day}
            onChange={(e) => onDayChange(parseInt(e.target.value, 10))}
            className="w-full text-sm sm:text-base appearance-none px-4 pr-10 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 cursor-pointer text-gray-700 transition-colors"
            aria-label="일 선택"
          >
            {days.map((d) => (
              <option key={d} value={d}>{d}일</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
        {/* Hour */}
        <div className="relative flex-1 min-w-[100px]">
          <select
            value={timeFilter}
            onChange={(e) => onTimeFilterChange(e.target.value)}
            className="w-full text-sm sm:text-base appearance-none px-4 pr-10 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 cursor-pointer text-gray-700 transition-colors"
            aria-label="시간 선택"
          >
            {hours.map((h) => (
              <option key={h} value={String(h).padStart(2, '0')}>{String(h).padStart(2, '0')}시</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
        {/* Category */}
        <div className="relative flex-[1.5] min-w-[150px]">
          <select
            value={categoryFilter}
            onChange={(e) => onCategoryFilterChange(e.target.value)}
            className="w-full text-sm sm:text-base appearance-none px-4 pr-10 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 cursor-pointer text-gray-700 transition-colors"
          >
            <option value="all">전체 카테고리</option>
            <option value="건강">건강</option>
            <option value="게임">게임</option>
            <option value="과학">과학</option>
            <option value="기술">기술</option>
            <option value="기타">기타</option>
            <option value="기후">기후</option>
            <option value="미용 및 패션">미용 및 패션</option>
            <option value="법률 및 정부">법률 및 정부</option>
            <option value="반려동물 및 동물">반려동물 및 동물</option>
            <option value="비즈니스 및 금융">비즈니스 및 금융</option>
            <option value="쇼핑">쇼핑</option>
            <option value="스포츠">스포츠</option>
            <option value="식음료">식음료</option>
            <option value="엔터테이먼트">엔터테이먼트</option>
            <option value="자동차">자동차</option>
            <option value="정치">정치</option>
            <option value="취업 및 교육">취업 및 교육</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
        {/* Reset Button */}
        <button
          type="button"
          onClick={onResetToNow}
          style={{ backgroundColor: '#4285f4' }}
          className="flex-shrink-0 px-4 py-3 text-white font-medium rounded-lg shadow-sm hover:opacity-80 active:opacity-50 transition-opacity text-center whitespace-nowrap min-w-[100px]"
        >
          현재시간
        </button>
      </div>
    </div>
  );
}

