import { useState } from 'react';
import { TrendingList } from './components/TrendingList';
import { TrendingDetail } from './components/TrendingDetail';
import { TrendingData } from './components/TrendingItem';

const mockData: TrendingData[] = [
  {
    id: 1,
    rank: 1,
    title: '손흥민 해트트릭',
    searchVolume: '130K+',
    category: '스포츠',
    growthRate: 5200,
    description: '토트넘의 손흥민이 프리미어리그 경기에서 시즌 첫 해트트릭을 기록했습니다. 팀의 4-1 대승을 이끌며 리그 1위로 올라섰습니다.',
    tags: ['토트넘', '프리미어리그', '축구'],
  },
  {
    id: 2,
    rank: 2,
    title: 'GPT-5 출시',
    searchVolume: '250K+',
    category: '기술',
    growthRate: 4200,
    description: 'OpenAI가 차세대 AI 모델 GPT-5를 공식 출시했습니다. 이전 버전 대비 추론 능력이 크게 향상되었으며, 멀티모달 기능이 강화되어 이미지, 영상, 음성을 더욱 정교하게 처리할 수 있습니다.',
    tags: ['OpenAI', '인공지능', '챗GPT'],
  },
  {
    id: 3,
    rank: 3,
    title: '2025 서울 모빌리티 쇼',
    searchVolume: '500K+',
    category: '자동차',
    growthRate: 3500,
    description: '서울 강남구 코엑스에서 2025 서울 모빌리티 쇼가 개최되어 최신 전기차와 자율주행 기술이 공개되었습니다. 현대차, 기아 등 주요 자동차 제조사들이 참가하여 미래 모빌리티 기술을 선보였습니다.',
    tags: ['전기차', '코엑스', '자율주행'],
  },
  {
    id: 4,
    rank: 4,
    title: '아이유 컴백',
    searchVolume: '180K+',
    category: '연예',
    growthRate: 3100,
    description: '가수 아이유가 2년 만에 정규 앨범으로 컴백합니다. 타이틀곡은 유명 프로듀서와 협업한 감성 발라드곡으로 알려졌습니다.',
    tags: ['아이유', '컴백', 'K-POP'],
  },
  {
    id: 5,
    rank: 5,
    title: '비트코인 신고가',
    searchVolume: '220K+',
    category: '기술',
    growthRate: 2800,
    description: '비트코인이 사상 최고가를 경신하며 10만 달러를 돌파했습니다. 기관 투자자들의 유입과 비트코인 ETF 승인이 주요 원인으로 분석됩니다.',
    tags: ['비트코인', '암호화폐', '투자'],
  },
  {
    id: 6,
    rank: 6,
    title: '서울 첫눈',
    searchVolume: '95K+',
    category: '날씨',
    growthRate: 2500,
    description: '서울에 올 겨울 첫눈이 내렸습니다. 평년보다 5일 늦은 첫눈으로, 중부지방에는 최대 3cm의 적설량이 예상됩니다.',
    tags: ['첫눈', '날씨', '겨울'],
  },
  {
    id: 7,
    rank: 7,
    title: '삼성 갤럭시 S26 공개',
    searchVolume: '170K+',
    category: '기술',
    growthRate: 2300,
    description: '삼성전자가 플래그십 스마트폰 갤럭시 S26 시리즈를 공개했습니다. AI 기능이 대폭 강화되고 배터리 수명이 개선되었습니다.',
    tags: ['삼성', '갤럭시', '스마트폰'],
  },
  {
    id: 8,
    rank: 8,
    title: '한일 정상회담',
    searchVolume: '140K+',
    category: '정치',
    growthRate: 2100,
    description: '한국과 일본 정상이 도쿄에서 회담을 갖고 양국 관계 개선과 경제 협력 방안을 논의했습니다.',
    tags: ['정상회담', '외교', '한일관계'],
  },
];

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setSelectedId(id);
  };

  const handleBack = () => {
    setSelectedId(null);
  };

  const selectedData = mockData.find((item) => item.id === selectedId);

  return (
    <>
      {selectedId === null || !selectedData ? (
        <TrendingList onItemClick={handleItemClick} />
      ) : (
        <TrendingDetail data={selectedData} onBack={handleBack} />
      )}
    </>
  );
}
