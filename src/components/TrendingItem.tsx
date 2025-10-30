import { TrendingUp } from 'lucide-react';

export interface TrendingData {
  id: number;
  rank: number;
  title: string;
  searchVolume: string;
  category: string;
  growthRate: number;
  description: string;
  tags: string[];
}

interface TrendingItemProps {
  data: TrendingData;
  onClick: () => void;
}

export function TrendingItem({ data, onClick }: TrendingItemProps) {
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
            <span>{data.searchVolume} 검색</span>
            <span>•</span>
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
        </div>
      </div>
    </div>
  );
}
