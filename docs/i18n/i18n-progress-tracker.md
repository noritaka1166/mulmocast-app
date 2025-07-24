# MulmoCast App i18n 進捗管理シート

MulmoCastアプリケーションの国際化プロジェクトの進捗を追跡するための管理シートです。

## 📊 プロジェクト概要

| 項目 | 値 | 更新日時 |
|------|----|---------| 
| プロジェクト開始日 | YYYY-MM-DD | - |
| 最終更新日 | YYYY-MM-DD | - |
| 実行者 | [担当者名] | - |
| 対象ブランチ | [ブランチ名] | - |
| 総コンポーネント数 | 0 | - |
| 完了コンポーネント数 | 0 | - |
| 進捗率 | 0% | - |

## 🎯 フェーズ別進捗

### Phase 1: 現状分析 (Audit)
- [ ] **実行日時**: YYYY-MM-DD HH:MM
- [ ] **実行コマンド**: `/i18n-workflow audit all`
- [ ] **結果ファイル**: `docs/i18n-audit-YYYYMMDD.md`

#### 分析結果サマリー
| カテゴリ | 現在値 | 目標値 | 状態 |
|----------|--------|--------|------|
| 翻訳カバレッジ | 0% | 100% | ❌ 未実行 |
| 構造問題数 | 0 | 0 | ❌ 未実行 |
| 未翻訳項目数 | 0 | 0 | ❌ 未実行 |
| ハードコード箇所 | 0 | 0 | ❌ 未実行 |

### Phase 2: 実装計画 (Planning)
- [ ] **実行日時**: YYYY-MM-DD HH:MM
- [ ] **実行コマンド**: `/i18n-workflow plan all`
- [ ] **計画ファイル**: `docs/i18n-plan-YYYYMMDD.md`

#### 実装優先度
| 優先度 | コンポーネント群 | 予想工数 | 状態 |
|--------|-----------------|----------|------|
| High | ❌ 未計画 | - | ❌ 未実行 |
| Medium | ❌ 未計画 | - | ❌ 未実行 |  
| Low | ❌ 未計画 | - | ❌ 未実行 |

### Phase 3: 構造リファクタリング (Refactor)
- [ ] **実行日時**: YYYY-MM-DD HH:MM
- [ ] **実行コマンド**: `/i18n-refactor all`
- [ ] **バックアップ**: ✅ Git commit済み / ❌ 未実行

#### リファクタリング結果
| 修正項目 | 修正前 | 修正後 | 状態 |
|----------|--------|--------|------|
| 構造改善 | - | - | ❌ 未実行 |
| 未翻訳補完 | - | - | ❌ 未実行 |
| キー統一 | - | - | ❌ 未実行 |

### Phase 4: コンポーネント実装 (Implementation)
- [ ] **実行日時**: YYYY-MM-DD HH:MM  
- [ ] **実行コマンド**: `/i18n-batch "**/*.vue" both`

#### コンポーネント別進捗

##### 🏠 Dashboard Components
| コンポーネント | 状態 | 実行日時 | 翻訳キー数 | 備考 |
|---------------|------|----------|------------|------|
| `pages/dashboard/dashboard.vue` | ❌ 未実行 | - | - | - |
| `pages/dashboard/components/grid_view.vue` | ❌ 未実行 | - | - | - |
| `pages/dashboard/components/list_view.vue` | ❌ 未実行 | - | - | - |
| `pages/dashboard/components/new_project_dialog.vue` | ❌ 未実行 | - | - | - |

##### 🎬 Project Components  
| コンポーネント | 状態 | 実行日時 | 翻訳キー数 | 備考 |
|---------------|------|----------|------------|------|
| `pages/project/project.vue` | ❌ 未実行 | - | - | - |
| `pages/project/components/script_editor.vue` | ❌ 未実行 | - | - | - |
| `pages/project/components/beats_viewer.vue` | ❌ 未実行 | - | - | - |
| `pages/project/components/generate.vue` | ❌ 未実行 | - | - | - |
| `pages/project/components/chat.vue` | ❌ 未実行 | - | - | - |
| `pages/project/components/product_tabs.vue` | ❌ 未実行 | - | - | - |
| `pages/project/components/script_editor/beat_editor.vue` | ❌ 未実行 | - | - | - |
| `pages/project/components/script_editor/beat_preview.vue` | ❌ 未実行 | - | - | - |
| `pages/project/components/script_editor/beat_selector.vue` | ❌ 未実行 | - | - | - |

##### ⚙️ Settings Components
| コンポーネント | 状態 | 実行日時 | 翻訳キー数 | 備考 |
|---------------|------|----------|------------|------|
| `pages/settings/settings.vue` | ❌ 未実行 | - | - | - |

##### 🎨 UI Components
| コンポーネント | 状態 | 実行日時 | 翻訳キー数 | 備考 |
|---------------|------|----------|------------|------|
| `components/header.vue` | ❌ 未実行 | - | - | - |
| `components/layout.vue` | ❌ 未実行 | - | - | - |
| `components/media_modal.vue` | ❌ 未実行 | - | - | - |
| `components/code_editor.vue` | ❌ 未実行 | - | - | - |

##### 📋 Parameter Components
| コンポーネント | 状態 | 実行日時 | 翻訳キー数 | 備考 |
|---------------|------|----------|------------|------|
| `script_editor/parameters/audio_params.vue` | ❌ 未実行 | - | - | - |
| `script_editor/parameters/image_params.vue` | ❌ 未実行 | - | - | - |
| `script_editor/parameters/movie_params.vue` | ❌ 未実行 | - | - | - |
| `script_editor/parameters/text_slide_params.vue` | ❌ 未実行 | - | - | - |
| `script_editor/parameters/canvas_size_params.vue` | ❌ 未実行 | - | - | - |
| `script_editor/parameters/caption_params.vue` | ❌ 未実行 | - | - | - |
| `script_editor/parameters/speech_params.vue` | ❌ 未実行 | - | - | - |

### Phase 5: 最終検証 (Validation)
- [ ] **実行日時**: YYYY-MM-DD HH:MM
- [ ] **実行コマンド**: `/i18n-workflow audit all` (再実行)

#### 検証チェックリスト
- [ ] 全コンポーネントでハードコードテキスト0件
- [ ] en.ts と ja.ts の翻訳対応100%
- [ ] 翻訳キー命名規則の統一
- [ ] 動作確認（言語切り替えテスト）
- [ ] パフォーマンス影響の確認
- [ ] Git commit とPR作成

## 📈 統計情報

### 翻訳キー統計
| ファイル | 追加キー数 | 総キー数 | 最終更新 |
|----------|------------|----------|----------|
| `en.ts` | 0 | 0 | - |
| `ja.ts` | 0 | 0 | - |
| `common.ts` | 0 | 0 | - |

### 工数記録
| フェーズ | 予想工数 | 実工数 | 効率 |
|----------|----------|--------|------|
| Audit | ~30分 | - | - |
| Planning | ~30分 | - | - |
| Refactor | ~60分 | - | - |
| Implementation | ~3-4時間 | - | - |
| Validation | ~30分 | - | - |
| **合計** | **~5-6時間** | **0時間** | **-%** |

## ⚠️ 課題・注意事項

### 発見された問題
| 問題 | 深刻度 | 状態 | 対応予定 | 備考 |
|------|--------|------|----------|------|
| - | - | - | - | 問題が発見されたら記録 |

### 技術的制約
- [ ] Vue 3 Composition API使用必須
- [ ] 既存の`vue-i18n`設定との互換性維持  
- [ ] 翻訳キー命名規則: 最終版構造（`ui.common.{noun}`, `ui.actions.{verb}`, `beat.{type}.{field}`, `parameters.{type}.{field}`）
- [ ] common.tsは技術用語・固有名詞のみ
- [ ] プレースホルダー方式の活用（文字列連結禁止）
- [ ] 役割別キー分離（add/addThingをペアで管理）

### リスク管理
- [ ] 作業前のGitバックアップ
- [ ] 段階的コミットによるロールバック対応
- [ ] 動作確認後のマージ
- [ ] レビュープロセスの実施

## 📝 作業ログ

### YYYY-MM-DD
- **時刻**: HH:MM
- **作業**: 作業内容
- **結果**: 結果サマリー  
- **次回**: 次回予定

---

### 更新履歴
- **YYYY-MM-DD**: シート作成
- **YYYY-MM-DD**: Phase 1完了
- **YYYY-MM-DD**: Phase 2完了
- **YYYY-MM-DD**: 全フェーズ完了

---

**📌 使用方法**:
1. `/i18n-workflow`コマンド実行時にこのシートを更新
2. 各フェーズ完了時にチェックボックスを更新
3. 問題発生時は課題セクションに記録
4. 最終的にGitコミット時に完了マーク