# 배포 및 인프라 가이드

## 아키텍처

```
GitHub (creator-pando/string-health-co)
    ↓ push to main
Vercel (자동 배포)
    ↓
stronghealth.co (Cloudflare DNS)
```

## Vercel

- **플랜**: Hobby (무료)
- **계정**: creator-pando
- **연결 레포**: creator-pando/string-health-co
- **배포 브랜치**: main
- **커스텀 도메인**: stronghealth.co
- **구 도메인**: string-health-co.vercel.app → stronghealth.co 리다이렉트

## Cloudflare

- **도메인**: stronghealth.co
- **DNS 설정**:
  - A 레코드: `@` → Vercel IP (DNS only, 주황구름 OFF)
  - CNAME: `www` → cname.vercel-dns.com (DNS only)
- **SSL**: Vercel이 자동 발급 (Let's Encrypt)
- **Email Routing**: contact@stronghealth.co → creator.pando@gmail.com

## 로컬 개발

```bash
cd ~/Projects/string-health-co
npm run dev       # http://localhost:3000
npm run build     # 프로덕션 빌드 확인
```

## 배포 절차

```bash
# 수정 후
git add .
git commit -m "feat/fix/chore: 변경 내용"
git push origin main
# → Vercel 자동 배포 (보통 1분 이내)
```

## 주요 설정 파일

| 파일 | 내용 |
|------|------|
| `next.config.ts` | `images.unoptimized: true` |
| `src/app/layout.tsx` | 메타데이터 (title, description) |
| `src/app/globals.css` | Tailwind import |
