import axe from 'axe-core';
import { userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import Works from './Works';

test('ユーザーがWorksを開くと、Allタブが選択された状態で全ての作品が表示される', async () => {
  const screen = await render(<Works />);

  await expect.element(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true');
  await expect.element(screen.getByText('Othello')).toBeVisible();
  await expect.element(screen.getByText('TsDaily')).toBeVisible();
});

test('ユーザーがGamesタブをクリックすると、ゲーム以外の作品が一覧から消える', async () => {
  const screen = await render(<Works />);

  await screen.getByRole('tab', { name: 'Games' }).click();

  await expect.element(screen.getByText('Othello')).toBeVisible();
  await expect.element(screen.getByText('TsDaily')).not.toBeInTheDocument();
});

test('ユーザーが作品カードをクリックすると、その作品の詳細ダイアログが開く', async () => {
  const screen = await render(<Works />);

  await screen.getByText('Othello').click();

  await expect.element(screen.getByRole('dialog')).toBeVisible();
  await expect.element(screen.getByText('使用技術')).toBeVisible();
});

test('ユーザーがEscapeキーを押すと、詳細ダイアログが閉じる', async () => {
  const screen = await render(<Works />);

  await screen.getByText('Othello').click();
  await expect.element(screen.getByRole('dialog')).toBeVisible();

  await userEvent.keyboard('{Escape}');

  await expect.element(screen.getByRole('dialog')).not.toBeInTheDocument();
});

test('ユーザーが詳細ダイアログを開いた状態で、アクセシビリティ違反がない', async () => {
  const screen = await render(<Works />);

  await screen.getByText('Othello').click();
  await expect.element(screen.getByText('使用技術')).toBeVisible();

  const results = await axe.run(screen.container);

  expect(results).toHaveNoViolations();
});
