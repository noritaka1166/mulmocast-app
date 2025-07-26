# MulmoCast App テストガイド

このディレクトリには MulmoCast Electron アプリの Playwright テストが含まれています。

## テストファイル

### 1. `automated-e2e-test.js` 
**完全自動E2Eテスト（CI/CD対応）**

- Electronアプリを自動で起動・終了
- 新規プロジェクト作成テスト
- 全Scriptタブのクリックテスト
- GitHub Actions での使用を想定

**使用方法:**
```bash
node test/automated-e2e-test.js
```

**特徴:**
- ✅ 自動でElectronアプリを起動
- ✅ テスト完了後に自動でアプリを終了
- ✅ CI/CD環境での使用が可能
- ✅ プロセスグループ終了によるクリーンアップ

### 2. `manual-electron-test.js`
**手動起動済みアプリへの接続テスト**

- 既に起動中のElectronアプリに接続
- CDP (Chrome DevTools Protocol) 経由でアクセス
- 開発時の手軽なテストに適している

**使用方法:**
```bash
# 1. まずElectronアプリを起動
yarn start

# 2. 別のターミナルでテストを実行
node test/manual-electron-test.js
```

**特徴:**
- ✅ 既に起動中のアプリに接続
- ✅ アプリの起動・終了は手動
- ✅ 開発時の反復テストに便利
- ✅ CDP接続（ポート9222）

## 前提条件

### 1. 依存関係のインストール
```bash
yarn install
```

### 2. Playwright の設定
- `playwright` パッケージがインストール済み
- `src/main/main.ts` で開発環境でのCDP有効化済み

### 3. 環境設定
開発環境でのみCDPポートが有効化されるよう設定済み:
```typescript
// src/main/main.ts
if (isDev) {
  app.commandLine.appendSwitch("remote-debugging-port", "9222");
}
```

## テスト内容

両方のテストで以下の操作を実行:

1. **新規プロジェクト作成**
   - 「新規作成」ボタンをクリック
   - 日付+時刻のタイトルを入力（例: `20250127_123456`）
   - 「Create」ボタンをクリック

2. **Scriptタブテスト**
   - 全6つのタブをクリック: `Text`, `YAML`, `JSON`, `Media`, `Style`, `Ref`
   - 各タブのアクティブ状態を確認

## GitHub Actions での使用

`.github/workflows/playwright-test.yml` で `automated-e2e-test.js` が使用されます:

```yaml
- name: Run Playwright tests (with xvfb)
  run: |
    xvfb-run -a node test/automated-e2e-test.js
  env:
    CI: true
    NODE_ENV: test
```

## トラブルシューティング

### よくある問題

1. **「No browser contexts found」エラー**
   - Electronアプリが完全に起動していない
   - 15秒程度待ってから再試行

2. **「Network service crashed」メッセージ**
   - 正常な終了プロセスの一部
   - エラーではありません

3. **プロセスが残り続ける**
   - `automated-e2e-test.js` では解決済み
   - プロセスグループ終了を使用

4. **CDP接続エラー**
   - ポート9222が使用中の可能性
   - 他のElectronプロセスを終了してから再試行

## 開発者向けメモ

- 新しいテストを追加する場合は適切なファイル名を使用
- CI/CD用テストは `automated-` プレフィックス
- 手動テスト用は `manual-` プレフィックス
- 全てのテストでプロジェクトタイトルにタイムスタンプを使用