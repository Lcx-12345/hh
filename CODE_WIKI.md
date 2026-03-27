# Code Wiki

## 1. 项目整体架构 (Project Architecture)

本项目是一个基于 **React 18** + **TypeScript** 构建的现代化音乐流媒体前端 Web 应用。项目采用 **Vite** 作为构建工具，拥有快速的冷启动和热更新体验。

### 核心技术栈
- **前端框架**: React 18, React DOM
- **开发语言**: TypeScript
- **构建工具**: Vite
- **路由管理**: React Router DOM v7
- **状态管理**: Zustand
- **样式方案**: Tailwind CSS, PostCSS
- **图标库**: Lucide React
- **工具库**: `clsx` (类名合并), `tailwind-merge` (解决 Tailwind 样式冲突), `sonner` (Toast 提示)

### 目录结构
```text
/workspace
├── public/                 # 静态资源目录
├── src/                    # 源代码目录
│   ├── assets/             # 项目资产 (图片、图标等)
│   ├── components/         # 可复用的通用 UI 组件
│   ├── data/               # 静态/模拟数据 (如 mockData.ts)
│   ├── hooks/              # 自定义 React Hooks (如 useTheme.ts)
│   ├── lib/                # 工具函数与核心逻辑 (如 utils.ts)
│   ├── pages/              # 页面级组件 (如 Home.tsx)
│   ├── store/              # 全局状态管理 (Zustand)
│   ├── types/              # TypeScript 类型定义
│   ├── App.tsx             # 应用程序根组件 (路由配置)
│   ├── index.css           # 全局样式 (Tailwind 引入)
│   └── main.tsx            # React 挂载入口
├── eslint.config.js        # ESLint 配置文件
├── package.json            # 项目依赖和 NPM 脚本
├── tailwind.config.js      # Tailwind CSS 配置文件
├── tsconfig.json           # TypeScript 配置文件
└── vite.config.ts          # Vite 配置文件
```

---

## 2. 主要模块职责 (Module Responsibilities)

- **`src/main.tsx` & `src/App.tsx`**: 
  - `main.tsx` 是应用的入口，负责将 React 应用挂载到 DOM。
  - `App.tsx` 负责配置应用的全局路由（通过 `react-router-dom`），目前定义了 `/` (Home 页) 及其他占位路由。
  
- **`src/pages/` (页面层)**: 
  - 承载独立路由页面的业务逻辑。例如 `Home.tsx` 展示了应用的着陆页，包含推荐歌曲、热门流派、最近专辑等业务区块，并连接到全局 Store。

- **`src/components/` (组件层)**: 
  - 存放页面中可复用的 UI 视图组件。如 `TrackCard.tsx` 用于展示单曲的卡片视图，并封装了点击播放的交互。

- **`src/store/` (状态管理层)**: 
  - 利用 Zustand 实现全局单一数据源。`musicStore.ts` 存储了当前播放状态、播放列表、音量以及所有曲目/艺术家等核心领域数据。

- **`src/types/` (类型定义层)**: 
  - 提供全局的 TS 接口抽象，如 `Track` (单曲)、`Artist` (艺术家)、`Album` (专辑)、`Playlist` (播放列表)。保证了项目的数据一致性和类型安全。

---

## 3. 关键类与函数说明 (Key Classes & Functions)

### 状态管理 (`src/store/musicStore.ts`)
全局通过 Zustand 创建的 Hook: `useMusicStore`

**核心状态 (State):**
- `currentTrack: Track | null`: 当前正在播放的曲目。
- `isPlaying: boolean`: 播放状态。
- `volume: number`: 当前音量大小 (0-1)。
- `tracks`, `artists`, `albums`, `playlists`: 音乐媒体库的集合数据。

**核心动作 (Actions):**
- `playTrack(track: Track)`: 播放指定的曲目，同时将 `isPlaying` 设为 `true`。
- `pauseTrack()`: 暂停当前播放。
- `setVolume(volume: number)`: 设置全局音量。
- `setSearchQuery(query: string)`: 更新搜索关键词。
- `setSelectedGenre(genre: string)`: 筛选并设置当前选中的音乐流派。

### 关键组件
**`TrackCard` (`src/components/TrackCard.tsx`)**
- **功能**: 渲染单首歌曲的卡片（封面、标题、艺术家），并提供鼠标悬浮的播放按钮。
- **Props**: 接收 `track: Track` 对象和 `index: number`。
- **交互**: 点击卡片或播放按钮时，会调用 `useMusicStore` 提供的 `playTrack` 方法。

**`Home` (`src/pages/Home.tsx`)**
- **功能**: 应用的主页组件。在 `useEffect` 中完成对本地 mock 数据的初始化，将默认的曲目、艺术家等数据注入到 `useMusicStore` 中，并渲染复杂的展示网格。

---

## 4. 依赖关系 (Dependencies)

### 核心运行时依赖 (Dependencies)
- **`react` & `react-dom` (^18.3.1)**: UI 渲染核心。
- **`react-router-dom` (^7.3.0)**: 处理客户端页面路由导航。
- **`zustand` (^5.0.8)**: 轻量级的全局状态管理工具，用于处理跨组件的播放状态同步。
- **`lucide-react` (^0.511.0)**: 提供精美、统一的 SVG 图标集合（如播放、趋势、音乐图标等）。
- **`tailwind-merge` (^3.0.2) & `clsx` (^2.1.1)**: 用于在组件化开发中动态合并和处理 Tailwind CSS 类名，避免样式冲突。
- **`sonner` (^2.0.2)**: 现代化的 React Toast 通知组件。

### 开发依赖 (Dev Dependencies)
- **`vite` (^6.3.5)**: 极速的现代前端构建工具。
- **`typescript` (~5.8.3)**: 静态类型检查。
- **`tailwindcss` (^3.4.17) & `postcss` & `autoprefixer`**: 实用优先的 CSS 框架及其构建插件。
- **`eslint` & `typescript-eslint`**: 代码质量和规范检查工具。

---

## 5. 项目运行方式 (How to Run)

环境要求: Node.js (建议 v18+)

1. **安装依赖**
   在项目根目录下运行：
   ```bash
   npm install
   ```

2. **启动本地开发服务器**
   ```bash
   npm run dev
   ```
   *这将在本地启动 Vite dev server，支持模块热替换 (HMR)。默认端口通常为 `http://localhost:5173`。*

3. **类型检查**
   ```bash
   npm run check
   ```
   *运行 TypeScript 编译器检查代码中的类型错误，但不生成编译文件。*

4. **构建生产版本**
   ```bash
   npm run build
   ```
   *这会首先执行 TypeScript 检查，然后通过 Vite 打包优化后的静态文件，输出到 `dist/` 目录。*

5. **本地预览生产版本**
   ```bash
   npm run preview
   ```
   *在本地启动一个静态服务器，用于测试通过 `npm run build` 生成的生产版本构建产物。*
