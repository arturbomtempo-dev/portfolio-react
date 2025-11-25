# Data Layer

This directory contains all static data used throughout the application, organized as a centralized API-like structure.

## Structure

```
data/
├── types.ts              # TypeScript interfaces and types
├── index.ts              # Central export file
├── projects/
│   └── index.ts         # Project data
├── about/
│   └── index.ts         # About page data (achievements, tech, testimonials, timeline)
└── content/
    └── index.ts         # Content page data (videos, articles)
```

## Usage

### Import from specific module:

```typescript
import { projects } from '@/data/projects';
import { achievements, techCategories } from '@/data/about';
import { contents } from '@/data/content';
```

### Import from central index:

```typescript
import { projects, achievements, contents } from '@/data';
```

### Import types:

```typescript
import { Project, Content, ContentType } from '@/data/types';
```

## Adding New Data

1. Define TypeScript interfaces in `types.ts`
2. Create a new folder for your data category (e.g., `services/`)
3. Create an `index.ts` file inside with your data
4. Export from the main `data/index.ts`

## Benefits

- **Centralized**: All data in one place
- **Type-safe**: Full TypeScript support
- **Maintainable**: Easy to update and extend
- **Scalable**: Clear structure for growth
- **DRY**: No data duplication across pages
