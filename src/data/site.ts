export const site={
  "name": "정보이용료 확인순서",
  "description": "검색 표현을 주문·회선 청구·외부 약속의 세 기록으로 바꾸어 읽는 안내입니다.",
  "editor": "결제노트 편집",
  "updatedAt": "2026-10-30",
  "keyword": "정보이용료현금화방법",
  "slug": "content-payment-check-order",
  "tag": "처음 확인하는 순서",
  "number": "06",
  "answer": "정보이용료현금화방법을 찾는다면 구매 상품과 청구 주체, 외부 상대의 지급 조건을 먼저 나눠 확인하세요. 공식 결제 승인이나 환불 접수가 외부 지급을 보장하지 않으며, 인증 정보를 넘기는 절차는 안내하지 않습니다.",
  "intro": "검색 표현을 주문·회선 청구·외부 약속의 세 기록으로 바꾸어 읽는 안내입니다.",
  "steps": [
    {
      "name": "시작점은 실제 주문",
      "description": "어느 서비스에서 무엇을 구매했거나 구매하려는지 적습니다. 주문이 아직 없다면 결제 가능액과 상품 조건을 구분하세요. 방법이라는 검색 표현만으로 공식 지원 절차가 정해지지는 않습니다."
    },
    {
      "name": "금액마다 이름 붙이기",
      "description": "청구 예정액, 약속한 지급액, 추가 공제와 실제 확인된 금액을 따로 적습니다. 하나의 지급률로 모두 설명하지 마세요. 아직 받은 내역이 없는 금액은 예정 또는 미확인으로 표시합니다."
    },
    {
      "name": "원하는 결과에 맞는 문의",
      "description": "회선 제한은 통신사, 상품 제공은 실제 구매처, 환불은 해당 상품의 공식 정책을 확인합니다. 외부 상담이 이 권한을 대신한다고 가정하지 않습니다. 설명에 필요한 최소 자료만 준비하고 비밀번호는 공유하지 마세요."
    }
  ],
  "accent": "#224641" ,
  contact: {
    name: '누티켓', phone: '010-8111-1555', kakaoId: 'N1348',
    kakaoUrl: 'https://qr.kakao.com/talk/MBsKvshDmtamG2EuQNKdmPuGFJQ-',
    sourceUrl: 'https://xn--od1b246c0uc.kr', verifiedAt: '2026-10-03'
  }
} as const;
export const topics=[{id:'basics',name:"처음 확인하는 순서",number:'01',description:"검색 표현을 주문·회선 청구·외부 약속의 세 기록으로 바꾸어 읽는 안내입니다."}] as const;
export const phoneHref='tel:'+site.contact.phone.replaceAll('-','');
