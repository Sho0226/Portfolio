import { School } from 'lucide-react';
import { describe, expect, it } from 'vitest';
import type { TimelineItem } from '../data/timeline';
import type { Work } from '../data/works';
import { filterTimelineByCategory, filterWorksByCategory } from './filters';

const works: Work[] = [
  { id: 1, name: 'A', description: '', image: '', fullDescription: '', technologies: [], category: 'game' },
  { id: 2, name: 'B', description: '', image: '', fullDescription: '', technologies: [], category: 'product' },
  { id: 3, name: 'C', description: '', image: '', fullDescription: '', technologies: [], category: 'hackathon' },
];

const timelineItems: TimelineItem[] = [
  { id: 1, date: '', title: 'A', description: '', icon: School, category: 'student' },
  { id: 2, date: '', title: 'B', description: '', icon: School, category: 'professional' },
];

describe('filterWorksByCategory', () => {
  it('returns all works when category is "all"', () => {
    expect(filterWorksByCategory(works, 'all')).toEqual(works);
  });

  it('returns only works matching the given category', () => {
    expect(filterWorksByCategory(works, 'game')).toEqual([works[0]]);
  });

  it('returns an empty array when no work matches', () => {
    const noHackathon = works.filter((w) => w.category !== 'hackathon');
    expect(filterWorksByCategory(noHackathon, 'hackathon')).toEqual([]);
  });
});

describe('filterTimelineByCategory', () => {
  it('returns only items matching the given category', () => {
    expect(filterTimelineByCategory(timelineItems, 'student')).toEqual([timelineItems[0]]);
  });

  it('returns an empty array when no item matches', () => {
    const onlyStudent = timelineItems.filter((i) => i.category === 'student');
    expect(filterTimelineByCategory(onlyStudent, 'professional')).toEqual([]);
  });
});
