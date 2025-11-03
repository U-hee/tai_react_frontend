import { TrendingUp } from "lucide-react";

export interface TrendingData {
  id: number;
  rank: number;
  title: string;
  searchVolume: string;
  category: string;
  growthRate: number;
  description: string;
  tags: string[];
  createdAt: string;
}

interface TrendingItemProps {
  data: TrendingData;
  onClick?: () => void;
}

export function TrendingItem({ data, onClick }: TrendingItemProps) {
  // 날짜 포맷 함수
  const formatDate = (dateString: string): string => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
          <span className="text-blue-600">{data.rank}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-blue-600">{data.title}</h3>
            <div className="flex items-center gap-1 text-green-600 flex-shrink-0">
              <TrendingUp size={16} />
              <span>+{data.growthRate.toLocaleString()}%</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
            <span>{data.category}</span>
          </div>

          <p className="text-gray-700 mb-4">{data.description}</p>

          <div className="flex gap-2 flex-wrap">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-2">
            {formatDate(data.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}
