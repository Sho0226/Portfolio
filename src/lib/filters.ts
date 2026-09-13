import type { TimelineCategory, TimelineItem } from '../data/timeline';
import type { Work, WorkCategory } from '../data/works';

export function filterWorksByCategory(works: Work[], category: WorkCategory | 'all'): Work[] {
  if (category === 'all') return works;
  return works.filter((work) => work.category === category);
}

export function filterTimelineByCategory(
  items: TimelineItem[],
  category: TimelineCategory,
): TimelineItem[] {
  return items.filter((item) => item.category === category);
}
