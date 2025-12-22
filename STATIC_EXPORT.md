# Static Export Configuration

## Cấu hình đã hoàn tất

### 1. next.config.ts
- ✅ `output: 'export'` - Tự động export static files
- ✅ `images.unoptimized: true` - Tắt optimization cho static hosting
- ✅ `basePath` & `assetPrefix` - Comment sẵn, uncomment nếu deploy trên subpath

### 2. Tất cả ảnh đã dùng absolute path
- ✅ Format: `/images/...`
- ✅ Không có relative path (`../`, `./`)
- ✅ Tất cả Image components đã đúng format

### 3. Build & Deploy

```bash
# Build static files (sẽ tự động export vào thư mục out/)
npm run build

# Kiểm tra thư mục out/ đã được tạo
ls -la out/
```

**Lưu ý:** Next.js 16 không còn lệnh `next export` riêng. Khi có `output: 'export'`, `npm run build` sẽ tự động tạo static files trong `out/`.

### 4. Ví dụ code đúng

#### Hiển thị ảnh từ public/images/legacy/solutions/gp1.jpg:
```tsx
import Image from "next/image";

<Image
  src="/images/legacy/solutions/gp1.jpg"
  alt="HSafe Team"
  fill
  className="object-cover"
/>
```

#### Hiển thị ảnh từ public/images/HSafe-hero.png:
```tsx
import Image from "next/image";

<Image
  src="/images/HSafe-hero.png"
  alt="HSafe Hero"
  fill
  priority
  className="object-cover"
/>
```

#### Hoặc dùng <img> nếu cần:
```tsx
<img
  src="/images/HSafe-hero.png"
  alt="HSafe Hero"
  className="w-full h-auto"
/>
```

### 5. Deploy trên GitHub Pages

1. Build: `npm run build`
2. Deploy thư mục `out/` lên GitHub Pages
3. Nếu deploy trên subpath (ví dụ: `/repo-name/`), uncomment và sửa trong `next.config.ts`:
   ```ts
   basePath: '/repo-name',
   assetPrefix: '/repo-name',
   ```

### 6. Kiểm tra

Sau khi build, kiểm tra:
- Thư mục `out/` đã được tạo
- Tất cả ảnh trong `out/images/` đã được copy
- HTML files trong `out/` có đường dẫn ảnh đúng `/images/...`

