import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchHeader } from './SearchHeader';
import { FilterBar } from './FilterBar';
import { TrendingItem } from './TrendingItem';
import api from '../api/axiosConfig';

interface TrendingData {
  id: number;
  region: string;
  rank: number;
  keyword: string;
  description: string;
  approx_traffic: string;
  category: string;
  tags: string[];
  createdAt: string;
}

export function TrendingList() {
  const navigate = useNavigate();
  
  const handleItemClick = (id: number) => {
    navigate(`/trend/${id}`);
  };
  const [timeFilter, setTimeFilter] = useState('0');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortFilter, setSortFilter] = useState('rank');
  const [trends, setTrends] = useState<TrendingData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        setLoading(true);
        const response = await api.get('/trend');
        setTrends(response.data);
        setError(null);
      } catch (err) {
        console.error('트렌드 데이터를 불러오는 중 오류 발생:', err);
        setError('트렌드 데이터를 불러오는 데 실패했습니다. 나중에 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
  }, []);

  const filteredData = trends.filter(trend => {
    // 시간 필터 적용
    if (trend.createdAt) {
      const trendDate = new Date(trend.createdAt);
      const currentDate = new Date();
      const hoursAgo = parseInt(timeFilter);
      
      // N시간 전의 시간대 계산
      const targetDate = new Date(currentDate);
      targetDate.setHours(currentDate.getHours() - hoursAgo);
      
      // N시간 전의 시간대와 일치하는지 확인
      const isSameHour = 
        trendDate.getFullYear() === targetDate.getFullYear() &&
        trendDate.getMonth() === targetDate.getMonth() &&
        trendDate.getDate() === targetDate.getDate() &&
        trendDate.getHours() === targetDate.getHours();
      
      if (!isSameHour) return false;
    }
    
    // 카테고리 필터 적용
    if (categoryFilter === 'all') return true;
    return trend.category === categoryFilter;
  }).sort((a, b) => {
    if (sortFilter === 'rank') {
      return a.rank - b.rank;
    } else if (sortFilter === 'volume') {
      const aVolume = parseInt(a.approx_traffic.replace(/[^0-9]/g, '') || '0');
      const bVolume = parseInt(b.approx_traffic.replace(/[^0-9]/g, '') || '0');
      return bVolume - aVolume;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <SearchHeader />
        <FilterBar
          timeFilter={timeFilter}
          categoryFilter={categoryFilter}
          sortFilter={sortFilter}
          onTimeFilterChange={setTimeFilter}
          onCategoryFilterChange={setCategoryFilter}
          onSortFilterChange={setSortFilter}
        />

        <div className="mb-6">
          <p className="text-gray-600">{new Date().toLocaleString()}</p>
          <p className="text-gray-600">{filteredData.length}개의 급상승 검색어</p>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-gray-600">로딩 중...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">
              {error}
            </div>
          ) : filteredData.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              표시할 트렌드가 없습니다.
            </div>
          ) : (
            filteredData.map((item) => (
              <div key={item.id} onClick={() => handleItemClick(item.id)}>
                <TrendingItem 
                  data={{
                    ...item,
                    title: item.keyword,
                    searchVolume: item.approx_traffic,
                    growthRate: 0,
                  }} 
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
