---
presentation:
  # プレゼンテーションのテーマ
  # === 使用可能なテーマ ===
  # "beige.css"
  # "black.css"
  # "blood.css"
  # "league.css"
  # "moon.css"
  # "night.css"
  # "serif.css"
  # "simple.css"
  # "sky.css"
  # "solarized.css"
  # "white.css"
  # "none.css"
  theme: white.css

  # プレゼンテーションの「通常の」サイズ、アスペクト比は、
  # プレゼンテーションが異なる解像度に合うように拡大縮小されたときに
  # 保持されます。パーセント単位で指定できます。
  width: 1440
  height: 1024

  # コンテンツの周りで空のままにしておくべきディスプレイサイズの係数
  margin: 0.1

  # コンテンツに適用できる最小/最大の拡大倍率
  minScale: 0.2
  maxScale: 1.5

  # 右下隅にコントロールを表示
  controls: true

  # プレゼンテーションの進行状況バーを表示する
  progress: true

  # 現在のスライドのページ番号を表示
  slideNumber: false

  # スライドの各変更をブラウザの履歴にプッシュする
  history: false

  # ナビゲーションのキーボードショートカットを有効にする
  keyboard: true

  # スライド概要モードを有効にする
  overview: true

  # スライドの垂直方向の中央揃え
  center: true

  # タッチ入力を備えたデバイスでタッチナビゲーションを有効にする
  touch: true

  # プレゼンテーションをループする
  loop: false

  # 文字方向を右から左(RTL)に変更する
  rtl: false

  # プレゼンテーションが読み込まれるたびにスライドの順序をランダム化する
  shuffle: false

  # フラグメントをグローバルにオン/オフにします
  fragments: true

  # プレゼンテーションが埋め込みモードで実行する、
  # 例: 画面の限られた部分に埋め込む
  embedded: false

  # ?キーが押されたときにヘルプオーバーレイを表示する
  help: true

  # スピーカーノートをすべての視聴者に表示するかどうか
  showNotes: false

  # 次のスライドに自動的に進むまでのミリ秒。
  # 0に設定すると無効になります。
  # この値はスライドのdata-autoslide属性を使用して上書きできます
  autoSlide: 0

  # ユーザー入力後に自動スライドを停止する
  autoSlideStoppable: true

  # マウスホイールによるスライドナビゲーションを有効にする
  mouseWheel: false

  # モバイルデバイスのアドレスバーを非表示にする
  hideAddressBar: true

  # iframeプレビューオーバーレイでリンクを開く
  previewLinks: false

  # 遷移スタイル
  transition: 'default' # [ none, fade, slide, convex, concave, zoom ]

  # 遷移速度
  transitionSpeed: 'default' # [ default, fast, slow ]

  # ページ全体のスライドの背景の遷移スタイル
  backgroundTransition: 'default' # [ none, fade, slide, convex, concave, zoom ]

  # 現在のスライドから表示するスライドの数
  viewDistance: 1

  # 視差背景画像
  parallaxBackgroundImage: '' # 例: "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

  # 視差背景サイズ
  parallaxBackgroundSize: '' # CSS構文, 例: "2100px 900px" - 現在のところ、Pixelのみサポートされています。(%とautoは使用しないでください)

  # スライドごとに視差背景を移動するピクセル数
  # - 指定されない限り自動的に計算されます
  # - 軸に沿った移動を無効にするには0に設定します
  parallaxBackgroundHorizontal: 200
  parallaxBackgroundVertical: 50

  # スピーカーノートを有効にする
  enableSpeakerNotes: false
---

<!-- slide -->

# Code Block

Syntax Highlighting

```javascript {.line-numbers}
function add(x, y) {
  return x + y;
}
```

<!-- slide -->

# Tables

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

<!-- slide -->

# Images

![画像](https://picsum.photos/401/300/?random)

```
Format: ![Alt Text](url)
```

<!-- slide -->

# Links

[GitHub](https://github.com)
