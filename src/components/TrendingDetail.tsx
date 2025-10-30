import { ArrowLeft, TrendingUp, Share2, Bookmark, Sparkles } from 'lucide-react';
import { TrendingData } from './TrendingItem';

interface TrendingDetailProps {
  data: TrendingData;
  onBack: () => void;
}

export function TrendingDetail({ data, onBack }: TrendingDetailProps) {
  // Mock AI summary based on category
  const getAISummary = () => {
    switch (data.category) {
      case '스포츠':
        return {
          summary: `토트넘 홋스퍼의 주장 손흥민이 프리미어리그 홈경기에서 맹활약을 펼쳤습니다. 전반 23분 첫 골을 시작으로 후반 15분, 38분에 추가 골을 성공시키며 완벽한 해트트릭을 달성했습니다. 이번 해트트릭은 손흥민의 프리미어리그 통산 4번째 해트트릭이며, 이번 시즌 첫 해트트릭입니다. 경기 후 인터뷰에서 손흥민은 "팀 동료들의 도움 덕분에 좋은 결과를 낼 수 있었다"며 겸손한 모습을 보였습니다. 토트넘은 이번 승리로 리그 1위로 올라서며 우승 경쟁에 청신호를 켰습니다.`,
          sources: 15,
          keyPoints: ['시즌 첫 해트트릭 달성', '프리미어리그 통산 4번째', '토트넘 리그 1위 등극'],
        };
      case '기술':
        return {
          summary: `OpenAI가 공식적으로 GPT-5 모델을 출시했습니다. 새로운 모델은 이전 GPT-4 대비 추론 능력이 40% 향상되었으며, 멀티모달 처리 성능이 크게 개선되었습니다. 특히 이미지 생성 및 분석, 영상 이해, 음성 합성 분야에서 두드러진 발전을 보였습니다. GPT-5는 더욱 긴 컨텍스트 윈도우를 지원하여 최대 100만 토큰까지 처리 가능하며, 실시간 대화 능력도 강화되었습니다. 산업 전문가들은 이번 출시가 AI 산업에 새로운 전환점이 될 것으로 전망하고 있습니다.`,
          sources: 23,
          keyPoints: ['추론 능력 40% 향상', '멀티모달 기능 강화', '100만 토큰 컨텍스트 지원'],
        };
      case '자동차':
        return {
          summary: `코엑스에서 개최된 2025 서울 모빌리티 쇼에는 국내외 주요 자동차 제조사들이 참가하여 미래 모빌리티 기술을 선보였습니다. 현대자동차는 차세대 전기차 아이오닉 9를 공개했으며, 기아는 완전 자율주행 기술이 적용된 콘셉트카를 전시했습니다. 특히 배터리 기술의 혁신이 주목받았는데, 10분 충전으로 500km 주행이 가능한 차세대 배터리가 공개되었습니다. 이번 모터쇼는 역대 최대 규모로 진행되었으며, 5일간 약 30만 명의 관람객이 방문할 것으로 예상됩니다.`,
          sources: 18,
          keyPoints: ['아이오닉 9 세계 최초 공개', '10분 충전 500km 주행 배터리', '예상 관람객 30만 명'],
        };
      default:
        return {
          summary: `${data.title}에 대한 주요 기사들을 분석한 결과, 해당 키워드는 최근 24시간 동안 급격한 관심 증가를 보이고 있습니다. 여러 언론사에서 다양한 관점으로 보도하고 있으며, SNS를 중심으로 활발한 논의가 이루어지고 있습니다. ${data.description} 전문가들은 이번 이슈가 단기적인 화제에 그치지 않고 중장기적으로 지속될 가능성이 높다고 분석하고 있습니다.`,
          sources: 12,
          keyPoints: ['급격한 관심 증가', 'SNS 활발한 논의', '중장기적 이슈로 전망'],
        };
    }
  };

  const aiSummary = getAISummary();

  // Mock related articles
  const relatedArticles = [
    { title: '관련 기사 1: ' + data.title + ' 상세 분석', source: '뉴스 A', time: '1시간 전' },
    { title: '관련 기사 2: ' + data.title + ' 여론 반응', source: '뉴스 B', time: '2시간 전' },
    { title: '관련 기사 3: 전문가 의견 종합', source: '뉴스 C', time: '3시간 전' },
  ];

  // Mock trend chart data
  const chartData = [
    { time: '00:00', value: 20 },
    { time: '04:00', value: 35 },
    { time: '08:00', value: 55 },
    { time: '12:00', value: 100 },
    { time: '16:00', value: 85 },
    { time: '20:00', value: 75 },
    { time: '24:00', value: 90 },
  ];

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>목록으로 돌아가기</span>
        </button>

        {/* Main Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  #{data.rank}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {data.category}
                </span>
              </div>
              <h1 className="text-blue-600 mb-4">{data.title}</h1>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bookmark size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">검색량</p>
              <p className="text-gray-900">{data.searchVolume}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">급상승률</p>
              <div className="flex items-center justify-center gap-1 text-green-600">
                <TrendingUp size={16} />
                <span>+{data.growthRate.toLocaleString()}%</span>
              </div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">데이터 기준</p>
              <p className="text-gray-900 text-sm">24시간</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3">검색어 설명</h3>
            <p className="text-gray-700">{data.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3">관련 태그</h3>
            <div className="flex gap-2 flex-wrap">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Trend Chart */}
          <div>
            <h3 className="mb-4">검색량 추이 (24시간)</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-end justify-between h-48 gap-2">
                {chartData.map((point, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex items-end justify-center h-40">
                      <div
                        className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                        style={{ height: `${(point.value / maxValue) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">{point.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Summary Card */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-purple-900">AI 요약</h2>
              <p className="text-sm text-purple-700">{aiSummary.sources}개 기사를 분석했습니다</p>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 mb-4">
            <p className="text-gray-800 leading-relaxed">{aiSummary.summary}</p>
          </div>

          <div>
            <h4 className="text-purple-900 mb-3">핵심 포인트</h4>
            <div className="space-y-2">
              {aiSummary.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">{index + 1}</span>
                  </div>
                  <p className="text-gray-800">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="mb-4">관련 뉴스</h2>
          <div className="space-y-4">
            {relatedArticles.map((article, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h4 className="mb-2">{article.title}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{article.source}</span>
                  <span>•</span>
                  <span>{article.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
