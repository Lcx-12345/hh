# Code Wiki 文档

## 项目概述

这是一个基于 React + TypeScript + Vite 构建的现代化音乐发现和播放平台。项目使用 Zustand 进行状态管理，Tailwind CSS 进行样式开发，提供了一个美观且功能丰富的音乐应用界面。

### 技术栈

- **框架**: React 18.3.1
- **语言**: TypeScript 5.8.3
- **构建工具**: Vite 6.3.5
- **状态管理**: Zustand 5.0.8
- **路由**: React Router DOM 7.3.0
- **样式**: Tailwind CSS 3.4.17
- **UI 组件**: Lucide React (图标库), Sonner (提示组件)

---

## 项目架构

### 目录结构

```
/workspace
├── public/                  # 静态资源
│   └── favicon.svg
├── src/                     # 源代码
│   ├── assets/             # 资源文件
│   │   └── react.svg
│   ├── components/         # 可复用组件
│   │   ├── Empty.tsx
│   │   └── TrackCard.tsx
│   ├── data/               # 数据相关
│   │   └── mockData.ts
│   ├── hooks/              # 自定义 Hooks
│   │   └── useTheme.ts
│   ├── lib/                # 工具库
│   │   └── utils.ts
│   ├── pages/              # 页面组件
│   │   └── Home.tsx
│   ├── store/              # 状态管理
│   │   └── musicStore.ts
│   ├── types/              # TypeScript 类型定义
│   │   └── index.ts
│   ├── App.tsx             # 根组件
│   ├── main.tsx            # 应用入口
│   ├── index.css           # 全局样式
│   └── vite-env.d.ts       # Vite 环境声明
├── .vercel/                # Vercel 配置
├── .gitignore
├── README.md
├── eslint.config.js        # ESLint 配置
├── index.html              # HTML 模板
├── package.json            # 项目配置和依赖
├── postcss.config.js       # PostCSS 配置
├── tailwind.config.js      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
└── vite.config.ts          # Vite 配置
```

---

## 主要模块职责

### 1. 类型系统 ([types/index.ts](file:///workspace/src/types/index.ts))

定义了项目中所有核心数据模型的 TypeScript 接口：

- **Track**: 音乐曲目信息
  - `id`: 唯一标识
  - `title`: 曲目标题
  - `artist`: 艺术家名称
  - `artwork`: 封面图片 URL
  - `url`: 音频文件 URL
  - `duration`: 时长（秒）

- **Artist**: 艺术家信息
  - `id`: 唯一标识
  - `name`: 艺术家名称
  - `image`: 头像图片 URL
  - `bio`: 个人简介

- **Album**: 专辑信息
  - `id`: 唯一标识
  - `title`: 专辑标题
  - `artist`: 艺术家名称
  - `artwork`: 封面图片 URL
  - `releaseDate`: 发布日期
  - `tracks`: 包含的曲目列表

- **Playlist**: 播放列表
  - `id`: 唯一标识
  - `name`: 播放列表名称
  - `tracks`: 包含的曲目列表
  - `createdAt`: 创建时间

### 2. 状态管理 ([store/musicStore.ts](file:///workspace/src/store/musicStore.ts))

使用 Zustand 实现的全局状态管理，负责音乐应用的核心状态：

**状态属性**：
- `currentTrack`: 当前播放的曲目
- `isPlaying`: 播放状态
- `volume`: 音量（0-1）
- `tracks`: 所有曲目列表
- `artists`: 所有艺术家列表
- `albums`: 所有专辑列表
- `playlists`: 所有播放列表
- `searchQuery`: 搜索查询
- `selectedGenre`: 选中的音乐流派

**动作方法**：
- `playTrack(track)`: 播放指定曲目
- `pauseTrack()`: 暂停播放
- `setVolume(volume)`: 设置音量
- `setSearchQuery(query)`: 设置搜索查询
- `setSelectedGenre(genre)`: 设置选中的流派
- `setState(state)`: 批量更新状态
- `getState()`: 获取当前状态

### 3. 模拟数据 ([data/mockData.ts](file:///workspace/src/data/mockData.ts))

提供了项目开发和演示所需的模拟数据：

- `mockTracks`: 示例曲目列表
- `mockArtists`: 示例艺术家列表
- `mockAlbums`: 示例专辑列表
- `mockPlaylists`: 示例播放列表
- `genres`: 音乐流派列表（Pop, Rock, Jazz, Hip Hop, Classical, Electronic）

### 4. 页面组件

#### [Home.tsx](file:///workspace/src/pages/Home.tsx) - 主页组件

应用的首页，包含以下功能区块：

1. **Hero 区域**: 展示应用核心价值主张
   - 主标题和副标题
   - 开始探索按钮
   - 特色曲目播放按钮

2. **热门曲目**: 展示当前热门音乐
   - 使用 TrackCard 组件展示
   - 查看全部热门链接

3. **音乐流派**: 展示各种音乐流派
   - 网格布局展示
   - 点击切换选中的流派

4. **最近专辑**: 展示最新发布的专辑
   - 卡片式布局
   - 悬停显示播放按钮

**关键特性**:
- 使用 useEffect 初始化 store 数据
- 响应式设计，适配各种屏幕尺寸
- 渐变色背景和动画效果

### 5. UI 组件

#### [TrackCard.tsx](file:///workspace/src/components/TrackCard.tsx) - 曲目卡片组件

展示单首曲目的卡片组件：

**功能**:
- 显示曲目封面、标题和艺术家
- 悬停显示播放按钮
- 点击卡片或播放按钮播放曲目

**Props**:
- `track`: Track 类型对象
- `index`: 索引位置（暂未使用）

#### [Empty.tsx](file:///workspace/src/components/Empty.tsx) - 空状态组件

简单的空状态占位组件，点击显示 toast 提示"Coming soon"。

### 6. 自定义 Hooks

#### [useTheme.ts](file:///workspace/src/hooks/useTheme.ts) - 主题切换 Hook

管理应用的明暗主题切换：

**功能**:
- 从 localStorage 读取保存的主题
- 支持系统主题偏好检测
- 自动切换 document 根元素的 class
- 保存主题偏好到 localStorage

**返回值**:
- `theme`: 当前主题（'light' | 'dark'）
- `toggleTheme`: 切换主题函数
- `isDark`: 是否为暗黑模式

### 7. 工具函数

#### [lib/utils.ts](file:///workspace/src/lib/utils.ts)

包含 `cn` 函数，用于合并 Tailwind CSS 类名：

```typescript
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

结合 `clsx` 和 `tailwind-merge`，安全地合并 CSS 类名，避免类名冲突。

### 8. 根组件和路由

#### [App.tsx](file:///workspace/src/App.tsx) - 应用根组件

配置 React Router 路由：

- `/`: 首页（Home 组件）
- `/other`: 占位页面（Coming Soon）

#### [main.tsx](file:///workspace/src/main.tsx) - 应用入口

渲染 React 应用：
- 使用 StrictMode
- 集成 Toaster 组件（sonner）
- 挂载到 #root 元素

---

## 关键类与函数说明

### Zustand Store - useMusicStore

**创建位置**: [store/musicStore.ts](file:///workspace/src/store/musicStore.ts#L26)

```typescript
export const useMusicStore = create<MusicStore>((set, get) => ({
  // 初始状态和方法实现
}));
```

**使用方式**:

```typescript
// 选择特定状态
const currentTrack = useMusicStore(state => state.currentTrack);
const isPlaying = useMusicStore(state => state.isPlaying);

// 选择动作方法
const playTrack = useMusicStore(state => state.playTrack);
const pauseTrack = useMusicStore(state => state.pauseTrack);

// 访问 store 的 getState 和 setState
useMusicStore.getState();
useMusicStore.setState({ ... });
```

### cn 函数

**位置**: [lib/utils.ts](file:///workspace/src/lib/utils.ts#L4)

```typescript
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**用途**: 安全合并 Tailwind CSS 类名，处理类名冲突。

**示例**:
```typescript
cn('bg-white p-4', condition && 'text-red-500', 'hover:bg-gray-100')
```

### useTheme Hook

**位置**: [hooks/useTheme.ts](file:///workspace/src/hooks/useTheme.ts#L5)

```typescript
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => { /* ... */ });
  // ...
  return { theme, toggleTheme, isDark };
}
```

**使用方式**:
```typescript
const { theme, toggleTheme, isDark } = useTheme();
```

---

## 依赖关系

### 核心依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| react | ^18.3.1 | UI 框架 |
| react-dom | ^18.3.1 | React DOM 渲染 |
| react-router-dom | ^7.3.0 | 路由管理 |
| zustand | ^5.0.8 | 状态管理 |
| lucide-react | ^0.511.0 | 图标库 |
| sonner | ^2.0.2 | Toast 提示组件 |
| clsx | ^2.1.1 | 条件类名构建 |
| tailwind-merge | ^3.0.2 | Tailwind 类名合并 |

### 开发依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| vite | ^6.3.5 | 构建工具和开发服务器 |
| @vitejs/plugin-react | ^4.4.1 | Vite React 插件 |
| typescript | ~5.8.3 | TypeScript 编译器 |
| tailwindcss | ^3.4.17 | CSS 框架 |
| autoprefixer | ^10.4.21 | CSS 自动前缀 |
| postcss | ^8.5.3 | CSS 转换工具 |
| eslint | ^9.25.0 | 代码检查工具 |
| babel-plugin-react-dev-locator | ^1.0.0 | React 开发定位工具 |
| vite-tsconfig-paths | ^5.1.4 | Vite tsconfig 路径别名 |

### 内部依赖关系图

```
main.tsx
  └─ App.tsx
      └─ Home.tsx
          ├─ TrackCard.tsx
          ├─ useMusicStore
          │   └─ types/index.ts
          └─ mockData.ts
              └─ types/index.ts

useTheme.ts (独立 Hook)

utils.ts (独立工具)
```

---

## 项目运行方式

### 前置要求

- Node.js (建议版本 >= 18)
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器（支持热模块替换）：

```bash
npm run dev
```

开发服务器默认运行在 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录

### 预览生产构建

```bash
npm run preview
```

预览构建后的应用

### 代码检查

```bash
npm run lint
```

运行 ESLint 检查代码质量

### 类型检查

```bash
npm run check
```

运行 TypeScript 类型检查（不生成输出文件）

---

## 配置说明

### Vite 配置 ([vite.config.ts](file:///workspace/vite.config.ts))

- 使用 React 插件，集成 babel-plugin-react-dev-locator
- 使用 vite-tsconfig-paths 支持路径别名（@/ 指向 src/）

### TypeScript 配置

主配置文件 [tsconfig.json](file:///workspace/tsconfig.json) 引用了 [tsconfig.app.json](file:///workspace/tsconfig.app.json)

### Tailwind CSS 配置 ([tailwind.config.js](file:///workspace/tailwind.config.js))

- 启用 class 模式的暗黑主题
- 配置内容扫描路径
- 启用居中容器

### ESLint 配置 ([eslint.config.js](file:///workspace/eslint.config.js))

使用最新的 ESLint 平级配置，集成 TypeScript 和 React 相关规则。

---

## 开发指南

### 添加新页面

1. 在 `src/pages/` 目录创建新页面组件
2. 在 `src/App.tsx` 中添加新路由

### 添加新组件

1. 在 `src/components/` 目录创建组件文件
2. 使用 `cn` 函数处理 Tailwind 类名
3. 导出组件供其他文件使用

### 扩展状态管理

1. 在 `src/types/index.ts` 中添加新类型（如需要）
2. 在 `src/store/musicStore.ts` 中添加新的状态属性和动作方法
3. 在组件中通过 `useMusicStore` 使用新状态

### 添加新的模拟数据

1. 在 `src/data/mockData.ts` 中添加新的模拟数据
2. 在 Home 组件或其他需要的地方初始化 store

---

## 注意事项

1. **路径别名**: 项目配置了 `@/` 作为 `src/` 目录的别名，导入时使用 `@/components/...` 而非相对路径
2. **状态初始化**: Home 组件在 useEffect 中检查并初始化 store 数据，避免重复初始化
3. **Tailwind 类名**: 使用 `cn` 函数合并类名，特别是条件类名
4. **主题切换**: useTheme Hook 会自动处理 localStorage 保存和 document class 切换

---

## 后续扩展建议

1. **播放器功能**: 实现实际的音频播放控制（当前只是状态管理）
2. **搜索功能**: 实现基于 searchQuery 的曲目搜索
3. **播放列表管理**: 添加创建、编辑、删除播放列表的功能
4. **用户认证**: 添加用户登录/注册功能
5. **更多页面**: 开发浏览、专辑详情、艺术家详情等页面
6. **API 集成**: 替换模拟数据，接入真实的音乐 API
7. **测试**: 添加单元测试和 E2E 测试
