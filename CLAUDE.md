# CLAUDE.md — 강건한건강 AI 유지보수 가이드

이 파일은 Claude Code가 이 레포를 관리하고 유지보수할 때 참조하는 가이드입니다.

## 프로젝트 개요

**강건한건강**은 서비스 외주 플랫폼의 회사 소개 페이지입니다.
통신판매업 신고 요건을 충족하기 위해 제작되었습니다.

- **도메인**: https://stronghealth.co
- **레포**: https://github.com/creator-pando/string-health-co
- **배포**: Vercel (Hobby) — `main` 브랜치 push 시 자동 배포
- **DNS**: Cloudflare

---

## 디렉토리 구조

```
string-health-co/
├── CLAUDE.md                  # 이 파일
├── src/
│   └── app/
│       ├── page.tsx           # 메인 페이지 (유일한 페이지)
│       ├── layout.tsx         # 메타데이터, 폰트
│       └── globals.css        # Tailwind 글로벌 스타일
├── next.config.ts             # images.unoptimized: true
├── docs/
│   ├── business-info.md       # 사업자 정보 원본
│   └── deployment.md          # 배포 및 인프라 가이드
└── public/                    # 정적 파일
```

---

## 자주 하는 수정

### 사업자 정보 업데이트

모든 사업자 정보는 `src/app/page.tsx` footer 섹션에 있습니다.

```
통신판매업신고번호 취득 시 → [신고번호] 를 실제 번호로 교체
대표자명 추가 시 → footer에 <p> 항목 추가
```

### 페이지 콘텐츠 수정

`src/app/page.tsx` 한 파일에서 모두 수정 가능:
- **Header**: 회사명
- **Hero**: 메인 문구 + 부제
- **서비스 섹션**: 카드 3개 (아이콘, 제목, 설명)
- **Footer**: 사업자 정보

### 메타데이터 수정

`src/app/layout.tsx`의 `metadata` 객체에서 title/description 수정.

---

## 배포

```bash
# 로컬 개발 서버
npm run dev

# 빌드 확인
npm run build

# main에 push하면 Vercel 자동 배포
git push origin main
```

---

## 규칙

1. **단일 페이지 유지** — 추가 페이지는 필요할 때만
2. **사업자 정보 정확성** — footer 정보는 실제 서류와 반드시 일치
3. **통신판매업신고번호** — 취득 즉시 `[신고번호]` 교체 후 배포
