import axe from 'axe-core';
import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import Works from './Works';

test('ユーザーがWorksを開くと、Allタブが選択された状態で全ての作品が表示される', async () => {
  const screen = await render(<Works />);

  await expect.element(screen.getByText('Othello')).toBeVisible();
  await expect.element(screen.getByText('TsDaily')).toBeVisible();
});

test('ユーザーがGamesタブをクリックすると、ゲーム以外の作品が一覧から消える', async () => {
  const screen = await render(<Works />);

  await screen.getByRole('button', { name: 'Games' }).click();

  await expect.element(screen.getByText('Othello')).toBeVisible();
  await expect.element(screen.getByText('TsDaily')).not.toBeInTheDocument();
});

test('ユーザーが作品カードをクリックすると、その作品の詳細モーダルが開く', async () => {
  const screen = await render(<Works />);

  await screen.getByText('Othello').click();

  await expect.element(screen.getByText('使用技術')).toBeVisible();
});

test('ユーザーが詳細モーダルを開いた状態で、アクセシビリティ違反がない', async () => {
  const screen = await render(<Works />);

  await screen.getByText('Othello').click();
  await expect.element(screen.getByText('使用技術')).toBeVisible();

  const results = await axe.run(screen.container);

  expect(results).toHaveNoViolations();
});
