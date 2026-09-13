import axe from 'axe-core';
import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import Timeline from './Timeline';

test('ユーザーが活動履歴を開くと、学生タブが選択された状態で学生時代の経歴が表示される', async () => {
  const screen = await render(<Timeline />);

  await expect.element(screen.getByText('東洋大学入学')).toBeVisible();
});

test('ユーザーが社会人タブをクリックすると、卒業後の経歴だけが表示される', async () => {
  const screen = await render(<Timeline />);

  await screen.getByRole('button', { name: '社会人' }).click();

  await expect.element(screen.getByText('株式会社PR TIMES 入社')).toBeVisible();
  await expect.element(screen.getByText('東洋大学入学')).not.toBeInTheDocument();
});

test('ユーザーが社会人タブに切り替えた状態で、アクセシビリティ違反がない', async () => {
  const screen = await render(<Timeline />);

  await screen.getByRole('button', { name: '社会人' }).click();
  await expect.element(screen.getByText('株式会社PR TIMES 入社')).toBeVisible();

  const results = await axe.run(screen.container);

  expect(results).toHaveNoViolations();
});
