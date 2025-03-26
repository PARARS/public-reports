# Appendix : ChatGPT-生成AIリサーチ 実例 [o3 - deep research]

## Prompt:
生成AIのモデルについて、今使われているものをあるだけ調べて、それぞれの特徴を説明してください。

## Response:
生成AIのモデルにはさまざまな種類がありますが、特定の用途（例えば、テキスト生成、画像生成、音声合成など）に限定して調査しますか？ それとも、幅広くあらゆる種類の生成AIモデルを対象に調査しますか？

## Prompt:
テキスト生成を重視してください。
その他の領域については軽く触れる程度で大丈夫です。

## Response:
了解しました。最新のテキスト生成AIモデルを中心に、現在使用されているものを調査し、それぞれの特徴を説明します。また、その他の生成AI（画像、音声など）についても軽く触れます。

調査が完了次第、結果をお知らせしますので、少々お待ちください。

Research completed in 5m· 13 件の情報源

テキスト生成AIモデルの概要
==============

近年、**テキスト生成AI**（大規模言語モデル、LLM）の発展が目覚ましく、さまざまなモデルが登場しています。ここでは、現在広く使用されている主要なテキスト生成AIモデルについて、その特徴を説明し、**性能**・**用途**・**強み**・**制限**などを比較します。特に **GPT-4**（OpenAI）、**Claude**（Anthropic）、**Llama**（Meta）、**Mistral**（Mistral AI）といった代表的モデルを詳しく取り上げます。また、最後にテキスト以外の**画像生成**や**音声生成**といったその他の生成AIモデルについても簡単に紹介します。

GPT-4（OpenAI）
-------------

**概要と性能:** GPT-4は、OpenAI社が2023年に公開した最先端の大規模言語モデルです。前世代のGPT-3.5に比べて飛躍的に性能が向上しており、**プロの試験や学術ベンチマークで人間に近い成績**を収めています​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)

。例えば、法律試験（バー試験）のシミュレーションではGPT-4は上位10%のスコアで合格できたのに対し、GPT-3.5は下位10%程度のスコアでした​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)

。このように高度な推論や知識応用が求められるタスクで人間に匹敵する能力を示しています。またGPT-4は**多モーダル対応**が特徴で、テキストだけでなく画像を入力として受け取り解析することも可能です​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)

（ただし画像入力機能は限定的に提供されています）。

**用途と提供形態:** GPT-4は現在、**ChatGPT**の有料版（ChatGPT Plus）やマイクロソフトの**Bing Chat**などに搭載され、幅広いユーザが対話型AIアシスタントとして利用できます。また、OpenAIのAPIを通じて開発者がGPT-4を自分のアプリケーションに組み込むこともできます（利用には料金と申請が必要）。具体的なパラメータ数は非公開ですが、従来モデルより大幅にスケールした巨大モデルとされています。そのためクラウド上の強力な計算資源で動作しており、個人がローカル環境で動かすことはできません。

**強み:** 現存するテキスト生成モデルの中でも**トップクラスの汎用性能**を誇ります。高度な文章生成、創造的な物語作成、コードの生成やデバッグ、多言語対応など幅広い領域で高い能力を示します。特に複雑な指示への従順さや、長文コンテキストにおける一貫した応答などに優れています。OpenAIによると、事実志向の内部評価でもGPT-3.5より約40%高いスコアを達成し、より**幻覚（ハルシネーション）を減らす**改良がなされています​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=While%20still%20a%20real%20issue%2C,our%20internal%20adversarial%20factuality%20evaluations)

。知識面でも、大量のデータで訓練されているため一般常識から専門知識まで幅広く網羅しています。

**制限:** とはいえ**完全に信頼できるわけではない**点に注意が必要です。GPT-4でも依然として事実と異なる情報（幻覚）をもっともらしく作り出したり、論理的な誤りを犯したりすることがあります​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=Despite%20its%20capabilities%2C%20GPT,case)

。特に高い正確性が要求される業務で使う際は、人間による検証や追加の対策が推奨されています​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=Despite%20its%20capabilities%2C%20GPT,case)

。また、**知識のアップデート**にも限界があります。GPT-4のトレーニングデータは主に2021年9月までの情報に基づいており、それ以降の出来事については詳しく知りません​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=GPT,vulnerabilities%20into%20code%20it%20produces)

（ChatGPTでは限定的にブラウジング機能等で補完できますが、モデル自体が学習しているわけではありません）。さらに、モデルがブラックボックスであるため利用者側でチューニングできない、利用コストが高い、標準のコンテキスト長が8Kトークン（拡張版で32K）と限られるなどの制約もあります。総じて、GPT-4は**性能面では最強クラス**ですが、**閉源モデル**ゆえの融通の利かなさと依然残る誤答リスクが課題です。

Claude 2（Anthropic）
-------------------

**概要と性能:** **Claude**はAnthropic社が開発した大規模言語モデルで、2023年7月に最新版の**Claude 2**が公開されました。Claude 2では前バージョンから性能と安全性が向上しており、いくつかの指標ではGPT-4に迫る結果を示しています。例えば、大学院入試向けのGRE読解・文章整備では**受験者の上位90%以上に相当するスコア**を記録し、数学の推論力を測るGSM8Kでは88%の正答率に達しています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=For%20example%2C%20our%20latest%20model,median%20applicant%20on%20quantitative%20reasoning)

​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=In%20addition%2C%20our%20latest%20model,be%20slowly%20and%20iteratively%20deploying)

。法律試験の択一式でも76.5%正解と、Claude 1.3から改善が見られます​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=For%20example%2C%20our%20latest%20model,median%20applicant%20on%20quantitative%20reasoning)

。特筆すべきは**コンテキストウィンドウの長さ**で、Claude 2ではなんと**100,000トークン**（約75,000語）もの巨大なコンテキストを扱えます​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=As%20we%20work%20to%20improve,all%20in%20one%20go)

。これは他のモデルを大きく凌駕する長さで、長大なマニュアルや小説全文といった極めて長い文書でも一度に入力して分析・要約させることが可能です。

**用途と提供形態:** Claudeは現在、Anthropic社の提供するAPI経由で利用できるほか、一部地域（米国・英国）では一般ユーザ向けの対話型サービス（claude.ai）も提供されています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Think%20of%20Claude%20as%20a,our%20beta%20chat%20experience%20today)

​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Claude%202%20powers%20our%20chat,the%20most%20out%20of%20Claude)

。企業向けにはSlackのカスタマーサポートボットや、文章生成サービスJasperでの統合など事例も出てきています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=We%20are%20also%20currently%20working,Larson%2C%20VP%20of%20Engineering%20at)

。料金は同社の以前のモデルClaude 1.3と同じで提供されており、積極的に普及を図っています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Think%20of%20Claude%20as%20a,our%20beta%20chat%20experience%20today)

。モデルの詳細なサイズ（パラメータ数）は公表されていませんが、高性能ぶりから数千億規模ではないかと推測されています。

**強み:** Claude 2の最大の強みは前述の**超長文コンテキスト処理**能力です。例えば「数百ページに及ぶ技術文書を要約する」「長い会議の議事録を分析する」といった、これまで難しかった長文タスクを得意としています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=As%20we%20work%20to%20improve,all%20in%20one%20go)

。また**安全性**にも注力しており、Anthropic社独自の「憲法ベースAI（Constitutional AI）」という方針のもと、倫理的で有害性の低い出力を出すよう調整されています。内部の有害プロンプト耐性テストでは、Claude 2はClaude 1.3の2倍の割合で安全な応答を返せたとの結果もあります​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=We%27ve%20been%20iterating%20to%20improve,teaming%2C%20to%20improve%20its%20outputs)

。そのため、悪意ある指示や差別的内容への耐性は向上しています（ただし**完全に無効化できたわけではない**点には注意が必要​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=We%27ve%20been%20iterating%20to%20improve,teaming%2C%20to%20improve%20its%20outputs)

）。他にも、Claude 2は**コード生成能力**が大幅に改善されており、Pythonのコーディングテスト（HumanEval）で71.2%の正答率を記録しています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=In%20addition%2C%20our%20latest%20model,be%20slowly%20and%20iteratively%20deploying)

。これは前バージョンの56.0%から飛躍的な向上であり、コーディング支援用途でも実用的になりつつあります​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=In%20addition%2C%20our%20latest%20model,be%20slowly%20and%20iteratively%20deploying)

。総じて、Claudeは**親しみやすい会話スタイル**と**長文処理・安全性**で優れたバランスを持つモデルと言えます。

**制限:** 一方で、Claudeにもいくつかの制約があります。まず**完全に公開されたモデルではない（クローズドソース）**ため、内部にアクセスしたり自前で拡張したりはできません。利用もAnthropicのサービス経由に限られ、現在は対応地域が限定されています​****

****[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Claude%202%20powers%20our%20chat,the%20most%20out%20of%20Claude)****

****。性能面では、GPT-4ほどの卓越した正確性・汎用性にはまだ及ばないとの指摘があります。例えば法律試験の合格率や、高度な専門知識を伴う推論問題などでGPT-4の方が上位になるケースも報告されています（GPT-4はバー試験で上位10%、Claude 2はそれに次ぐ水準​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)

​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=For%20example%2C%20our%20latest%20model,median%20applicant%20on%20quantitative%20reasoning)

）。また、Claudeも他のLLM同様に**幻覚問題**や**不正確な回答**を起こしえます。長大な入力を与えられるがゆえに、与えた資料に矛盾があった場合の挙動や、逆に重要箇所の見落としといった課題も考えられます。加えて、**多言語対応**の詳細は明らかではありません（主に英語で訓練・評価されていると推測され、多言語能力はGPT-4ほど強調されていません）。要約すると、Claude 2は**長文入力や安全志向**では突出していますが、**全体的な知能や利用の自由度ではGPT-4に次ぐ**位置づけです。

Llama 2（Meta）
-------------

**概要と性能:** **Llama（ラマ）**はMeta（旧Facebook）が開発した大規模言語モデルファミリーで、**オープンソース志向**で提供されている点が特徴です。2023年2月に研究者向けに初版LLaMAが公開され（7B〜65Bパラメータのモデル群）、さらに改良された**Llama 2**が2023年7月に発表されました​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=,are%20providing%20resources%20to%20help)

。Llama 2は**研究・商用利用ともに無償で提供**されており、モデルの重みや対話用に調整済みのファインチュームデルまで含め公開されています​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=We%E2%80%99re%20now%20ready%20to%20open,It%20is%20also%20optimized%20to)

。モデル規模は7億〜700億パラメータ（7B, 13B, 70B）とバリエーションがあり、特に最大の70Bモデルは多くのベンチマークでOpenAIのGPT-3.5（ChatGPT相当）に匹敵する性能を示します​

[huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Meta%20developed%20and%20publicly%20released,models%20like%20ChatGPT%20and%20PaLM)

。Metaの発表によれば、Llama 2-Chat（対話最適化版）は**多くのベンチマークで他のオープンソースモデルを上回り、**人間による評価でも**ChatGPTやPaLMなど一部のクローズドモデルと同等の有用性・安全性**を示したとされています​

[huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Meta%20developed%20and%20publicly%20released,models%20like%20ChatGPT%20and%20PaLM)

。実際、ある比較実験では**Llama 2 70BはGPT-4に迫る正確性で要約を行い、GPT-3.5を明確に上回った**との報告もあります​

[anyscale.com](https://www.anyscale.com/blog/llama-2-is-about-as-factually-accurate-as-gpt-4-for-summaries-and-is-30x-cheaper#:~:text=%60Llama,turbo)

。このように、オープンモデルとしては非常に高い水準に達しています。

**用途と提供形態:** Llama 2は完全公開モデルのため、研究者や開発者が**自分の手元で実行・微調整**できます。モデルデータはMetaから直接ダウンロードでき、Hugging Faceなどのプラットフォームでもホスティングされています。商用利用も許可されています​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=,are%20providing%20resources%20to%20help)

（ただし一定規模以上のユーザ数でのサービス提供など、一部制限がライセンスにあります）。このオープン性により、コミュニティ主導で様々な応用が進んでいます。例えば、個人が手持ちのGPUで動かす軽量対話アシスタント、業務データに特化した微調整モデルの作成、プライバシー重視のオンプレミスAIなど、**柔軟なカスタマイズ**が可能です。また、MicrosoftのAzure AIやAmazonのAWS、Hugging Face経由でクラウド上から手軽に呼び出すこともできます​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=We%E2%80%99re%20now%20ready%20to%20open,It%20is%20also%20optimized%20to)

。加えて、Llama 2にはプログラミング用途に特化した**Code Llama**や、対話用のチューニングを施した**Llama-2-Chat**など、用途別の派生モデルも提供されています。

**強み:** Llama 2最大の強みはその**オープン性とカスタマイズ性**です。モデルの中身が公開されているため、ドメイン固有のデータで追加学習させたり、推論速度向上のため量子化・圧縮を行ったりと、ユーザ側で自由に工夫できます。またライセンス的にも緩やかで、企業も含め幅広く利用できる点は商用クローズドモデルにはない利点です​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=,are%20providing%20resources%20to%20help)

。性能面でも、70Bモデルであれば汎用的な対話や文章生成でChatGPT（GPT-3.5）級の有用さを示すため、多くの場面で実用になります​

[huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Meta%20developed%20and%20publicly%20released,models%20like%20ChatGPT%20and%20PaLM)

。さらにモデルサイズのバリエーション（7B/13B/70B）があるため、用途に応じて**軽量モデル**を選べるのも利点です（例えば組込みデバイス用に7Bを使う、高精度が必要なときは70Bを使う、など）。コミュニティによって日本語など非英語への微調整モデルも作成されており、多言語展開も進みつつあります。

**制限:** 一方、Llama 2は**オープンモデルゆえの課題**も抱えます。まず、**GPT-4ほどの万能さや精度は持たない**ことです。特に70B未満の小型モデルでは、文法の怪しさや指示への応答性能で依然GPT-3.5系に劣るケースもあります​

[anyscale.com](https://www.anyscale.com/blog/llama-2-is-about-as-factually-accurate-as-gpt-4-for-summaries-and-is-30x-cheaper#:~:text=Immediately%20we%20see%20a%20problem,of%20our%20efforts%20panned%20out)

。実際、Llama 2 7Bや13Bはモデルが小さいぶん理解力が限定的で、複雑な指示への対応が不十分なことが報告されています​

[anyscale.com](https://www.anyscale.com/blog/llama-2-is-about-as-factually-accurate-as-gpt-4-for-summaries-and-is-30x-cheaper#:~:text=Immediately%20we%20see%20a%20problem,of%20our%20efforts%20panned%20out)

。最高性能を発揮するには70Bが必要ですが、70Bモデルをフルに動かすには数十GBのGPUメモリなど**高い計算資源**が必要となり、個人利用にはハードルがあります。また**安全性や倫理面の調整**も、オープンモデルではユーザ次第です。公開時に基本的な有害発言抑制や人間フィードバックによる調整（RLHF）は施されていますが​

[huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Model%20Architecture%20Llama%202%20is,preferences%20for%20helpfulness%20and%20safety)

、クローズドモデルのように一貫した厳格なフィルタリングが保証されているわけではありません。そのため不適切な出力を防ぐには利用側で追加対策が必要になる場合もあります。さらに、Llama 2自体は2023年夏までのデータで訓練された**静的モデル**であり、新しい知識を自動で取り入れることはできません（継続学習は利用者が行う必要があります）。以上より、Llama 2は**柔軟性と費用対効果**で優れていますが、**絶対的性能や即戦力という点ではクローズド最先端モデルに一歩譲る**存在です。

Mistral 7B（Mistral AI）
----------------------

**概要と性能:** **Mistral 7B**は、2023年9月に新興企業Mistral AI（フランス）から公開された大規模言語モデルです。その名の通りパラメータ数は約70億と比較的小型ですが、**工夫された学習により従来の13Bクラスに匹敵する性能**を発揮するよう最適化されています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)

​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=more%20than%203x%20its%20size,of%20knowledge%20it%20can%20compress)

。Mistralチームの評価では、Mistral 7Bは**Llama 2 13Bをあらゆる指標で上回り、34B級のモデルに匹敵する結果**を示したとされています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)

。特に常識的推論やコード生成などのベンチマークでは顕著に優れており、**Llama 2 13Bを大きく上回る**スコアを記録しました​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)

。一方で世界知識を要する分野ではパラメータ数の限界からLlama 2 13B相当（同等レベル）に留まるとも分析されています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=more%20than%203x%20its%20size,of%20knowledge%20it%20can%20compress)

。総合的には、「7Bにしては異例」の高性能モデルと言え、公開時にはAIコミュニティで大きな注目を集めました。

**用途と提供形態:** Mistral 7Bは**Apache 2.0ライセンスで公開**されており、**商用・非商用問わず自由**に使える完全オープンなモデルです​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=We%27re%20releasing%20Mistral%207B%20under,can%20be%20used%20without%20restrictions)

。モデルの重みは誰でもダウンロードでき、目的に応じて微調整した派生モデルの作成や再配布も許可されています。Mistral AIからはデモとしてチャット対話に調整したファインチュームデル（Instructモデル）も提供されており、Llama 2 13B Chatを上回る対話性能を示すと報告されています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=Mistral%207B%20is%20easy%20to,outperforms%20Llama%202%2013B%20chat)

。推論環境についても、標準的なTransformer実装に加え、高速化のためのvLLMサーバやデプロイ手順がドキュメントで提示されています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=,Use%20it%20on%20HuggingFace)

。7Bというモデルサイズは**消費メモリや計算コストが小さい**ため、比較的手軽にローカル実行が可能です（16ビット精度でもGPUメモリ16GB程度、8ビット・4ビット量子化なら更に少ないメモリで動作）。このように、Mistral 7Bは**扱いやすさとライセンスの自由度**が特徴のモデルです。

**強み:** Mistral 7Bの最大の強みは、**小さいモデルで高い性能を実現**した点です。同程度の規模の旧来モデル（7B前後）と比べ飛躍的に優れ、先述の通り下位の13B〜30Bクラスにも肩を並べます​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)

。これはデータセットやアーキテクチャ最適化の成果であり、例えば**スライディングウィンドウ型の注意機構**を採用することで長い入力に対応しつつ計算量を抑える工夫もなされています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=Flash%20and%20Furious%3A%20Attention%20drift)

。その結果、**コストあたりの性能効率**が非常に高く、同等のタスクなら大規模モデルを使わずとも済む可能性を示しました​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=is%20to%20compute%20%E2%80%9Cequivalent%20model,of%20knowledge%20it%20can%20compress)

。さらにオープンライセンス（Apache 2.0）のため**商用利用の制約が一切ない**点も重要です​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=We%27re%20releasing%20Mistral%207B%20under,can%20be%20used%20without%20restrictions)

。企業がプロダクトに組み込む際にもライセンス面で安心感があります。コミュニティでもMistralを基盤とした対話ボットや専門特化モデルが次々と作られており、オープンソースLLMの新たな定番になりつつあります。

**制限:** とはいえ、Mistral 7Bは**絶対性能では大規模モデルに及びません**。7Bというサイズゆえに保持できる知識量には限界があり、百科事典的な網羅知識や高度な専門領域ではGPT-4やLlama 2 70Bといった大きなモデルに劣ります​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=,of%20knowledge%20it%20can%20compress)

。コンテキスト理解も、長文を扱える工夫はあるものの注意範囲は限定的で、本質的には**詳細な文脈保持力は大モデルに比べ低い**と考えられます。また、公開から日が浅いため**エコシステムが発展途上**です。たとえばGPT-4やLlama 2では多くのガイドやプロンプト手法が蓄積されていますが、Mistralは新しく最適な使いこなし法がまだコミュニティで模索されています。加えて、現時点では7B版のみであり、更に高性能を求める場合に選択肢が限られます（今後13Bやさらに大きなMistralが出てくる可能性はあります）。総じて、Mistral 7Bは**小さく効率的なモデル**として優秀ですが、**知識量や成熟度では大型モデルに軍配が上がる**と言えるでしょう。

主要モデルの比較まとめ
-----------

以上述べた主要なテキスト生成モデルについて、**性能・用途・強み・制限**を簡単に比較まとめします。

*   **性能（総合的な賢さ）:** 現状では **GPT-4** が総合的に最も高性能で、複雑な推論や専門知識の応用などあらゆる面でトップクラスです​
    
    [openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)
    
    。**Claude 2** はGPT-4に次ぐグループで、特定のテストでは人間上位層に届く優秀さを示しますが​
    
    [anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=For%20example%2C%20our%20latest%20model,median%20applicant%20on%20quantitative%20reasoning)
    
    、GPT-4ほどの安定した高精度には僅かに及びません。オープンモデルでは **Llama 2 (70B)** がChatGPT相当（GPT-3.5級）に近い実力を持ち、多くのベンチマークで良好な結果を出します​
    
    [huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Meta%20developed%20and%20publicly%20released,models%20like%20ChatGPT%20and%20PaLM)
    
    。**Mistral 7B** は小型ながら旧来の中型モデル並みの性能があり​
    
    [mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)
    
    、軽量モデルとしては最強クラスですが、流石に最上位モデル群と直接競うレベルには達していません。
    
*   **用途と適性:** **GPT-4/Claude** はクラウドサービス経由で提供され、高度な対話AIや専門助言、コーディング支援など**汎用AIアシスタント**的な用途に適しています。それぞれChatGPTやClaude AIとして多くのユーザに使われています。**Llama 2/Mistral** はモデルそのものが公開されているため、自社データでの追加学習やオンプレミスでの利用など**カスタムAI開発**に向いています。機密データを外部に出せない場合や、独自機能を組み込みたい場合に有用です。特にMistral 7Bは軽量なのでモバイルや組込みシステムでの動作も現実的です。一方、GPT-4やClaudeはAPI経由でしか使えないためインターネット接続や利用費用が前提になります。
    
*   **強みの比較:** **GPT-4** の強みは何と言っても**圧倒的な知能と多様なタスク適応力**です。高度な作文からプログラミングまで幅広くトップ性能を示します​
    
    [openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)
    
    。**Claude 2** は**超長文コンテキスト処理**と**安全な対話**が強みで、大量のテキスト分析や長編創作などで有利です​
    
    [anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=As%20we%20work%20to%20improve,all%20in%20one%20go)
    
    ​
    
    [anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=We%27ve%20been%20iterating%20to%20improve,teaming%2C%20to%20improve%20its%20outputs)
    
    。**Llama 2** は**オープンで自由に使える**点が大きな強みで、モデルを直接手元で動かしたり微調整できるため、創意工夫による付加価値を付けやすいです​
    
    [about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=,are%20providing%20resources%20to%20help)
    
    。**Mistral 7B** は**小型モデルで効率が非常に良い**点がユニークで、限られた計算資源でも比較的賢いAIを実装できるところが強みです​
    
    [mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=is%20to%20compute%20%E2%80%9Cequivalent%20model,of%20knowledge%20it%20can%20compress)
    
    。
    
*   **制限の比較:** **GPT-4** はクローズドゆえの**不透明性とコスト**が制限です。モデル内部を変更できずAPI利用料も高額であるため、大量利用や独自拡張には向きません。また知識更新が止まっている問題もあります​
    
    [openai.com](https://openai.com/index/gpt-4-research/#:~:text=GPT,vulnerabilities%20into%20code%20it%20produces)
    
    。**Claude 2** もクローズドであり、さらに提供地域が限られるなど**利用面の制約**があります​
    
    [anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Claude%202%20powers%20our%20chat,the%20most%20out%20of%20Claude)
    
    。性能面ではGPT-4ほどの安定感がないことが課題です。**Llama 2** は**性能限界と運用負荷**が制限です。最高の70BモデルでもGPT-4には届かず、また大きなモデルほど動作に巨大なリソースを要します。安全性もユーザの責任が大きくなります。**Mistral 7B** は**知識量の限界**が主な制約です​
    
    [mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=,of%20knowledge%20it%20can%20compress)
    
    。また現状7Bのみでこれ以上の精度が必要な場合は代替がない点もあります。総じて、クローズドモデルは「性能は高いが融通が利かない」、オープンモデルは「自由だが性能やサポートは自己責任」といったトレードオフが見られます。
    

以上のように、それぞれのモデルは**得意分野と弱点が異なり補完的**です。利用シーンに応じて最適なモデルを選ぶことが重要になります。

その他の生成AIモデル（画像・音声）
------------------

テキスト生成以外にも、**画像**や**音声**といった分野で生成AIが急速に発展しています。ここでは代表的なモデルをいくつか挙げます。

### 画像生成AI

*   **Stable Diffusion** – Stability AI社が2022年に公開した**オープンソースの画像生成モデル**です。拡散（Diffusion）モデルという手法に基づき、与えたテキスト記述から対応する画像を生成します​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/Stable_Diffusion#:~:text=Stable%20Diffusion%20is%20a%20deep,the%20ongoing%20artificial%20intelligence%20boom)
    
    。写真風のリアルな画像からアート風の絵まで多様な生成が可能で、公開後すぐに多くのユーザや開発者に利用されました​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/Stable_Diffusion#:~:text=Stable%20Diffusion%20is%20a%20deep,the%20ongoing%20artificial%20intelligence%20boom)
    
    。オープンモデルのため、ユーザがローカルPCで動かしたりカスタムモデル（アニメ風、絵画風など）を作ることも盛んに行われています。
    
*   **DALL-Eシリーズ** – OpenAIが開発した画像生成モデル群で、2021年初頭に初代DALL-Eを公開、その後高解像度化した**DALL-E 2**（2022年）、解像度と表現力をさらに上げた**DALL-E 3**（2023年）へと発展しています​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=The%20first%20version%20of%20DALL,4)
    
    ​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=September%202022%2C%20DALL,14)
    
    。テキストプロンプトから高度に詳細な画像を生成できる点が特徴で、特に最新のDALL-E 3は指示の解釈精度が飛躍的に向上し、複雑なシーン描写や文字を含む画像生成も得意です​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=September%202022%2C%20DALL,discounts%20are%20available%20to%20companies)
    
    。DALL-E 3はChatGPTに統合されて提供されており、ChatGPTの対話から直接画像を出力できます​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=The%20first%20version%20of%20DALL,4)
    
    。商用版APIも公開されており、MicrosoftのBing Image Creatorなどに組み込まれています​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=The%20first%20version%20of%20DALL,4)
    
    。
    
*   **Midjourney** – Midjourney社（独立系の研究所）が提供する画像生成モデルです。正式なモデル名は公表されていませんがバージョンを重ねており、2023年時点で**Midjourney v5**や**v5.2**などが公開されています。芸術性の高い美麗な画像を生成することで知られ、ユーザはDiscord上のチャットボットに対してプロンプトを送ることで簡単に画像を作成できます。クローズドなサービスですが、そのクオリティと手軽さから**アーティストやデザイナーにも広く利用**されています。
    

※この他、GoogleのImagenやStable Diffusionの上位モデル（SDXLなど）、AdobeのFireflyなど画像生成AIは多数存在します。それぞれ得意なスタイルや利用形態が異なります​

[semrush.com](https://www.semrush.com/contentshake/content-marketing-blog/best-ai-image-generator/#:~:text=Midjourney%20is%20a%20powerful%20AI,%C2%B7%20Leonardo%20AI)

​

[zapier.com](https://zapier.com/blog/best-ai-image-generator/#:~:text=The%207%20best%20AI%20image,quality%2C%20but%20it%20still)

。

### 音声生成AI

*   **テキスト読み上げ（音声合成）モデル:** 文章から人間の音声を合成するTTS（Text-to-Speech）は古くから研究されていますが、近年は**WaveNet**（DeepMind社、2016年）などの登場で音質が飛躍的に向上しました。WaveNetはディープラーニングで生の音波を生成するモデルで、人間らしい抑揚のある声を実現しました。その後のTTSモデル（Tacotron 2やFastSpeechなど）もディープラーニングベースで、高品質な音声アシスタントやナレーション生成に利用されています。
    
*   **音声クローン・ゼロショット音声合成:** 近年注目なのが、**少量の声サンプルからその話者の声質を真似て新たな発話を生成**する技術です。Microsoftが2023年初頭に発表した**VALL-E**は、わずか3秒程度の音声録音を聞かせるだけでその話者の声で任意の文章を読み上げることができます​
    
    [microsoft.com](https://www.microsoft.com/en-us/research/project/vall-e-x/#:~:text=We%20introduce%20a%20language%20modeling,E%20could%20preserve)
    
    。VALL-Eはニューラルコーデックを用いた言語モデルアプローチで、**ゼロショット（追加の話者訓練なし）で話者の音色や感情まで再現**できる点が画期的です​
    
    [microsoft.com](https://www.microsoft.com/en-us/research/project/vall-e-x/#:~:text=We%20introduce%20a%20language%20modeling,E%20could%20preserve)
    
    ​
    
    [microsoft.com](https://www.microsoft.com/en-us/research/project/vall-e-x/#:~:text=introduces%20a%20phoneme%20monotonic%20alignment,are%20originally%20designed%20for%20audio)
    
    。最新のVALL-E 2では音声合成の自然さ・話者の類似性で\*\*人間と遜色ないレベル（human parity）\*\*に達したとも報告されています​
    
    [microsoft.com](https://www.microsoft.com/en-us/research/project/vall-e-x/#:~:text=introduces%20a%20phoneme%20monotonic%20alignment,are%20originally%20designed%20for%20audio)
    
    。この技術により、任意の人の声で文章を読み上げたり、声優の声質を用いた音声コンテンツ生成などが現実味を帯びています。ただし悪用リスクもあるため、研究段階では利用制限がかけられています。
    
*   **音楽生成モデル:** 音声に関連し、音楽分野でも**テキストから楽曲を生成するAI**が登場しています。Googleの**MusicLM**は「ジャズ風のピアノ曲」「ギターリフで始まるアップテンポな曲」などテキストによる抽象的な説明から、それに合致する独自の音楽を作り出せます​
    
    [blog.google](https://blog.google/technology/ai/musiclm-google-ai-test-kitchen/#:~:text=MusicLM%20is%20an%20experimental%20text,on%20your%20ideas%20or%20descriptions)
    
    。これはメロディ・和音・楽器音色などを包括的に生成する高度なモデルで、2023年に試験公開されました​
    
    [blog.google](https://blog.google/technology/ai/musiclm-google-ai-test-kitchen/#:~:text=In%20January%2C%20we%20announced%20MusicLM%2C,will%20help%20improve%20the%20model)
    
    。OpenAIも過去に**Jukebox**という神経ネットワークで特定アーティスト風の楽曲を生成する試みを発表しており、今なおこの分野は活発に研究されています。
    

以上、テキスト以外の生成AIについても簡単に触れました。**画像**や**音声**の生成モデルは、芸術創作やコンテンツ制作、アクセシビリティ向上など幅広い応用が期待されています。ただし、これらのモデルもテキスト生成AIと同様に、それぞれ**品質のばらつき**や**倫理・著作権上の課題**（不適切な画像の生成、防犯上の声真似悪用など）があります。したがって、技術の進歩と並行して、適切な使い方やガイドライン整備も重要になっています。

おわりに
----

テキスト生成AIモデルの主要な例としてGPT-4、Claude、Llama 2、Mistral 7Bを中心に、その特徴や強み・制限を比較しました。それぞれ設計思想や提供形態が異なり、一長一短があります。**最先端の性能を求めるならクローズドモデル、カスタマイズ性やプライバシー重視ならオープンモデル**といった選択肢が存在します。また、画像や音声といった他の生成AI分野でも優れたモデルが登場しており、今後ますます生成AIが様々な領域に浸透していくことが予想されます。利用者としては各モデルの特徴を正しく理解し、**目的に合ったAIモデルを選択・活用すること**が大切です。その際、性能だけでなく倫理面・安全面にも配慮し、AIと上手に協調していくことが望まれます。

## Prompt:
了解しました。最新のテキスト生成AIモデルを中心に、現在使用されているものを調査し、それぞれの特徴を説明します。また、その他の生成AI（画像、音声など）についても軽く触れます。

調査が完了次第、結果をお知らせしますので、少々お待ちください。

Research completed in 5m· 13 件の情報源

テキスト生成AIモデルの概要
==============

近年、**テキスト生成AI**（大規模言語モデル、LLM）の発展が目覚ましく、さまざまなモデルが登場しています。ここでは、現在広く使用されている主要なテキスト生成AIモデルについて、その特徴を説明し、**性能**・**用途**・**強み**・**制限**などを比較します。特に **GPT-4**（OpenAI）、**Claude**（Anthropic）、**Llama**（Meta）、**Mistral**（Mistral AI）といった代表的モデルを詳しく取り上げます。また、最後にテキスト以外の**画像生成**や**音声生成**といったその他の生成AIモデルについても簡単に紹介します。

GPT-4（OpenAI）
-------------

**概要と性能:** GPT-4は、OpenAI社が2023年に公開した最先端の大規模言語モデルです。前世代のGPT-3.5に比べて飛躍的に性能が向上しており、**プロの試験や学術ベンチマークで人間に近い成績**を収めています​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)

。例えば、法律試験（バー試験）のシミュレーションではGPT-4は上位10%のスコアで合格できたのに対し、GPT-3.5は下位10%程度のスコアでした​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)

。このように高度な推論や知識応用が求められるタスクで人間に匹敵する能力を示しています。またGPT-4は**多モーダル対応**が特徴で、テキストだけでなく画像を入力として受け取り解析することも可能です​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)

（ただし画像入力機能は限定的に提供されています）。

**用途と提供形態:** GPT-4は現在、**ChatGPT**の有料版（ChatGPT Plus）やマイクロソフトの**Bing Chat**などに搭載され、幅広いユーザが対話型AIアシスタントとして利用できます。また、OpenAIのAPIを通じて開発者がGPT-4を自分のアプリケーションに組み込むこともできます（利用には料金と申請が必要）。具体的なパラメータ数は非公開ですが、従来モデルより大幅にスケールした巨大モデルとされています。そのためクラウド上の強力な計算資源で動作しており、個人がローカル環境で動かすことはできません。

**強み:** 現存するテキスト生成モデルの中でも**トップクラスの汎用性能**を誇ります。高度な文章生成、創造的な物語作成、コードの生成やデバッグ、多言語対応など幅広い領域で高い能力を示します。特に複雑な指示への従順さや、長文コンテキストにおける一貫した応答などに優れています。OpenAIによると、事実志向の内部評価でもGPT-3.5より約40%高いスコアを達成し、より**幻覚（ハルシネーション）を減らす**改良がなされています​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=While%20still%20a%20real%20issue%2C,our%20internal%20adversarial%20factuality%20evaluations)

。知識面でも、大量のデータで訓練されているため一般常識から専門知識まで幅広く網羅しています。

**制限:** とはいえ**完全に信頼できるわけではない**点に注意が必要です。GPT-4でも依然として事実と異なる情報（幻覚）をもっともらしく作り出したり、論理的な誤りを犯したりすることがあります​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=Despite%20its%20capabilities%2C%20GPT,case)

。特に高い正確性が要求される業務で使う際は、人間による検証や追加の対策が推奨されています​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=Despite%20its%20capabilities%2C%20GPT,case)

。また、**知識のアップデート**にも限界があります。GPT-4のトレーニングデータは主に2021年9月までの情報に基づいており、それ以降の出来事については詳しく知りません​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=GPT,vulnerabilities%20into%20code%20it%20produces)

（ChatGPTでは限定的にブラウジング機能等で補完できますが、モデル自体が学習しているわけではありません）。さらに、モデルがブラックボックスであるため利用者側でチューニングできない、利用コストが高い、標準のコンテキスト長が8Kトークン（拡張版で32K）と限られるなどの制約もあります。総じて、GPT-4は**性能面では最強クラス**ですが、**閉源モデル**ゆえの融通の利かなさと依然残る誤答リスクが課題です。

Claude 2（Anthropic）
-------------------

**概要と性能:** **Claude**はAnthropic社が開発した大規模言語モデルで、2023年7月に最新版の**Claude 2**が公開されました。Claude 2では前バージョンから性能と安全性が向上しており、いくつかの指標ではGPT-4に迫る結果を示しています。例えば、大学院入試向けのGRE読解・文章整備では**受験者の上位90%以上に相当するスコア**を記録し、数学の推論力を測るGSM8Kでは88%の正答率に達しています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=For%20example%2C%20our%20latest%20model,median%20applicant%20on%20quantitative%20reasoning)

​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=In%20addition%2C%20our%20latest%20model,be%20slowly%20and%20iteratively%20deploying)

。法律試験の択一式でも76.5%正解と、Claude 1.3から改善が見られます​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=For%20example%2C%20our%20latest%20model,median%20applicant%20on%20quantitative%20reasoning)

。特筆すべきは**コンテキストウィンドウの長さ**で、Claude 2ではなんと**100,000トークン**（約75,000語）もの巨大なコンテキストを扱えます​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=As%20we%20work%20to%20improve,all%20in%20one%20go)

。これは他のモデルを大きく凌駕する長さで、長大なマニュアルや小説全文といった極めて長い文書でも一度に入力して分析・要約させることが可能です。

**用途と提供形態:** Claudeは現在、Anthropic社の提供するAPI経由で利用できるほか、一部地域（米国・英国）では一般ユーザ向けの対話型サービス（claude.ai）も提供されています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Think%20of%20Claude%20as%20a,our%20beta%20chat%20experience%20today)

​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Claude%202%20powers%20our%20chat,the%20most%20out%20of%20Claude)

。企業向けにはSlackのカスタマーサポートボットや、文章生成サービスJasperでの統合など事例も出てきています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=We%20are%20also%20currently%20working,Larson%2C%20VP%20of%20Engineering%20at)

。料金は同社の以前のモデルClaude 1.3と同じで提供されており、積極的に普及を図っています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Think%20of%20Claude%20as%20a,our%20beta%20chat%20experience%20today)

。モデルの詳細なサイズ（パラメータ数）は公表されていませんが、高性能ぶりから数千億規模ではないかと推測されています。

**強み:** Claude 2の最大の強みは前述の**超長文コンテキスト処理**能力です。例えば「数百ページに及ぶ技術文書を要約する」「長い会議の議事録を分析する」といった、これまで難しかった長文タスクを得意としています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=As%20we%20work%20to%20improve,all%20in%20one%20go)

。また**安全性**にも注力しており、Anthropic社独自の「憲法ベースAI（Constitutional AI）」という方針のもと、倫理的で有害性の低い出力を出すよう調整されています。内部の有害プロンプト耐性テストでは、Claude 2はClaude 1.3の2倍の割合で安全な応答を返せたとの結果もあります​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=We%27ve%20been%20iterating%20to%20improve,teaming%2C%20to%20improve%20its%20outputs)

。そのため、悪意ある指示や差別的内容への耐性は向上しています（ただし**完全に無効化できたわけではない**点には注意が必要​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=We%27ve%20been%20iterating%20to%20improve,teaming%2C%20to%20improve%20its%20outputs)

）。他にも、Claude 2は**コード生成能力**が大幅に改善されており、Pythonのコーディングテスト（HumanEval）で71.2%の正答率を記録しています​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=In%20addition%2C%20our%20latest%20model,be%20slowly%20and%20iteratively%20deploying)

。これは前バージョンの56.0%から飛躍的な向上であり、コーディング支援用途でも実用的になりつつあります​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=In%20addition%2C%20our%20latest%20model,be%20slowly%20and%20iteratively%20deploying)

。総じて、Claudeは**親しみやすい会話スタイル**と**長文処理・安全性**で優れたバランスを持つモデルと言えます。

**制限:** 一方で、Claudeにもいくつかの制約があります。まず**完全に公開されたモデルではない（クローズドソース）**ため、内部にアクセスしたり自前で拡張したりはできません。利用もAnthropicのサービス経由に限られ、現在は対応地域が限定されています​****

****[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Claude%202%20powers%20our%20chat,the%20most%20out%20of%20Claude)****

****。性能面では、GPT-4ほどの卓越した正確性・汎用性にはまだ及ばないとの指摘があります。例えば法律試験の合格率や、高度な専門知識を伴う推論問題などでGPT-4の方が上位になるケースも報告されています（GPT-4はバー試験で上位10%、Claude 2はそれに次ぐ水準​

[openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)

​

[anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=For%20example%2C%20our%20latest%20model,median%20applicant%20on%20quantitative%20reasoning)

）。また、Claudeも他のLLM同様に**幻覚問題**や**不正確な回答**を起こしえます。長大な入力を与えられるがゆえに、与えた資料に矛盾があった場合の挙動や、逆に重要箇所の見落としといった課題も考えられます。加えて、**多言語対応**の詳細は明らかではありません（主に英語で訓練・評価されていると推測され、多言語能力はGPT-4ほど強調されていません）。要約すると、Claude 2は**長文入力や安全志向**では突出していますが、**全体的な知能や利用の自由度ではGPT-4に次ぐ**位置づけです。

Llama 2（Meta）
-------------

**概要と性能:** **Llama（ラマ）**はMeta（旧Facebook）が開発した大規模言語モデルファミリーで、**オープンソース志向**で提供されている点が特徴です。2023年2月に研究者向けに初版LLaMAが公開され（7B〜65Bパラメータのモデル群）、さらに改良された**Llama 2**が2023年7月に発表されました​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=,are%20providing%20resources%20to%20help)

。Llama 2は**研究・商用利用ともに無償で提供**されており、モデルの重みや対話用に調整済みのファインチュームデルまで含め公開されています​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=We%E2%80%99re%20now%20ready%20to%20open,It%20is%20also%20optimized%20to)

。モデル規模は7億〜700億パラメータ（7B, 13B, 70B）とバリエーションがあり、特に最大の70Bモデルは多くのベンチマークでOpenAIのGPT-3.5（ChatGPT相当）に匹敵する性能を示します​

[huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Meta%20developed%20and%20publicly%20released,models%20like%20ChatGPT%20and%20PaLM)

。Metaの発表によれば、Llama 2-Chat（対話最適化版）は**多くのベンチマークで他のオープンソースモデルを上回り、**人間による評価でも**ChatGPTやPaLMなど一部のクローズドモデルと同等の有用性・安全性**を示したとされています​

[huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Meta%20developed%20and%20publicly%20released,models%20like%20ChatGPT%20and%20PaLM)

。実際、ある比較実験では**Llama 2 70BはGPT-4に迫る正確性で要約を行い、GPT-3.5を明確に上回った**との報告もあります​

[anyscale.com](https://www.anyscale.com/blog/llama-2-is-about-as-factually-accurate-as-gpt-4-for-summaries-and-is-30x-cheaper#:~:text=%60Llama,turbo)

。このように、オープンモデルとしては非常に高い水準に達しています。

**用途と提供形態:** Llama 2は完全公開モデルのため、研究者や開発者が**自分の手元で実行・微調整**できます。モデルデータはMetaから直接ダウンロードでき、Hugging Faceなどのプラットフォームでもホスティングされています。商用利用も許可されています​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=,are%20providing%20resources%20to%20help)

（ただし一定規模以上のユーザ数でのサービス提供など、一部制限がライセンスにあります）。このオープン性により、コミュニティ主導で様々な応用が進んでいます。例えば、個人が手持ちのGPUで動かす軽量対話アシスタント、業務データに特化した微調整モデルの作成、プライバシー重視のオンプレミスAIなど、**柔軟なカスタマイズ**が可能です。また、MicrosoftのAzure AIやAmazonのAWS、Hugging Face経由でクラウド上から手軽に呼び出すこともできます​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=We%E2%80%99re%20now%20ready%20to%20open,It%20is%20also%20optimized%20to)

。加えて、Llama 2にはプログラミング用途に特化した**Code Llama**や、対話用のチューニングを施した**Llama-2-Chat**など、用途別の派生モデルも提供されています。

**強み:** Llama 2最大の強みはその**オープン性とカスタマイズ性**です。モデルの中身が公開されているため、ドメイン固有のデータで追加学習させたり、推論速度向上のため量子化・圧縮を行ったりと、ユーザ側で自由に工夫できます。またライセンス的にも緩やかで、企業も含め幅広く利用できる点は商用クローズドモデルにはない利点です​

[about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=,are%20providing%20resources%20to%20help)

。性能面でも、70Bモデルであれば汎用的な対話や文章生成でChatGPT（GPT-3.5）級の有用さを示すため、多くの場面で実用になります​

[huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Meta%20developed%20and%20publicly%20released,models%20like%20ChatGPT%20and%20PaLM)

。さらにモデルサイズのバリエーション（7B/13B/70B）があるため、用途に応じて**軽量モデル**を選べるのも利点です（例えば組込みデバイス用に7Bを使う、高精度が必要なときは70Bを使う、など）。コミュニティによって日本語など非英語への微調整モデルも作成されており、多言語展開も進みつつあります。

**制限:** 一方、Llama 2は**オープンモデルゆえの課題**も抱えます。まず、**GPT-4ほどの万能さや精度は持たない**ことです。特に70B未満の小型モデルでは、文法の怪しさや指示への応答性能で依然GPT-3.5系に劣るケースもあります​

[anyscale.com](https://www.anyscale.com/blog/llama-2-is-about-as-factually-accurate-as-gpt-4-for-summaries-and-is-30x-cheaper#:~:text=Immediately%20we%20see%20a%20problem,of%20our%20efforts%20panned%20out)

。実際、Llama 2 7Bや13Bはモデルが小さいぶん理解力が限定的で、複雑な指示への対応が不十分なことが報告されています​

[anyscale.com](https://www.anyscale.com/blog/llama-2-is-about-as-factually-accurate-as-gpt-4-for-summaries-and-is-30x-cheaper#:~:text=Immediately%20we%20see%20a%20problem,of%20our%20efforts%20panned%20out)

。最高性能を発揮するには70Bが必要ですが、70Bモデルをフルに動かすには数十GBのGPUメモリなど**高い計算資源**が必要となり、個人利用にはハードルがあります。また**安全性や倫理面の調整**も、オープンモデルではユーザ次第です。公開時に基本的な有害発言抑制や人間フィードバックによる調整（RLHF）は施されていますが​

[huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Model%20Architecture%20Llama%202%20is,preferences%20for%20helpfulness%20and%20safety)

、クローズドモデルのように一貫した厳格なフィルタリングが保証されているわけではありません。そのため不適切な出力を防ぐには利用側で追加対策が必要になる場合もあります。さらに、Llama 2自体は2023年夏までのデータで訓練された**静的モデル**であり、新しい知識を自動で取り入れることはできません（継続学習は利用者が行う必要があります）。以上より、Llama 2は**柔軟性と費用対効果**で優れていますが、**絶対的性能や即戦力という点ではクローズド最先端モデルに一歩譲る**存在です。

Mistral 7B（Mistral AI）
----------------------

**概要と性能:** **Mistral 7B**は、2023年9月に新興企業Mistral AI（フランス）から公開された大規模言語モデルです。その名の通りパラメータ数は約70億と比較的小型ですが、**工夫された学習により従来の13Bクラスに匹敵する性能**を発揮するよう最適化されています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)

​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=more%20than%203x%20its%20size,of%20knowledge%20it%20can%20compress)

。Mistralチームの評価では、Mistral 7Bは**Llama 2 13Bをあらゆる指標で上回り、34B級のモデルに匹敵する結果**を示したとされています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)

。特に常識的推論やコード生成などのベンチマークでは顕著に優れており、**Llama 2 13Bを大きく上回る**スコアを記録しました​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)

。一方で世界知識を要する分野ではパラメータ数の限界からLlama 2 13B相当（同等レベル）に留まるとも分析されています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=more%20than%203x%20its%20size,of%20knowledge%20it%20can%20compress)

。総合的には、「7Bにしては異例」の高性能モデルと言え、公開時にはAIコミュニティで大きな注目を集めました。

**用途と提供形態:** Mistral 7Bは**Apache 2.0ライセンスで公開**されており、**商用・非商用問わず自由**に使える完全オープンなモデルです​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=We%27re%20releasing%20Mistral%207B%20under,can%20be%20used%20without%20restrictions)

。モデルの重みは誰でもダウンロードでき、目的に応じて微調整した派生モデルの作成や再配布も許可されています。Mistral AIからはデモとしてチャット対話に調整したファインチュームデル（Instructモデル）も提供されており、Llama 2 13B Chatを上回る対話性能を示すと報告されています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=Mistral%207B%20is%20easy%20to,outperforms%20Llama%202%2013B%20chat)

。推論環境についても、標準的なTransformer実装に加え、高速化のためのvLLMサーバやデプロイ手順がドキュメントで提示されています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=,Use%20it%20on%20HuggingFace)

。7Bというモデルサイズは**消費メモリや計算コストが小さい**ため、比較的手軽にローカル実行が可能です（16ビット精度でもGPUメモリ16GB程度、8ビット・4ビット量子化なら更に少ないメモリで動作）。このように、Mistral 7Bは**扱いやすさとライセンスの自由度**が特徴のモデルです。

**強み:** Mistral 7Bの最大の強みは、**小さいモデルで高い性能を実現**した点です。同程度の規模の旧来モデル（7B前後）と比べ飛躍的に優れ、先述の通り下位の13B〜30Bクラスにも肩を並べます​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)

。これはデータセットやアーキテクチャ最適化の成果であり、例えば**スライディングウィンドウ型の注意機構**を採用することで長い入力に対応しつつ計算量を抑える工夫もなされています​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=Flash%20and%20Furious%3A%20Attention%20drift)

。その結果、**コストあたりの性能効率**が非常に高く、同等のタスクなら大規模モデルを使わずとも済む可能性を示しました​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=is%20to%20compute%20%E2%80%9Cequivalent%20model,of%20knowledge%20it%20can%20compress)

。さらにオープンライセンス（Apache 2.0）のため**商用利用の制約が一切ない**点も重要です​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=We%27re%20releasing%20Mistral%207B%20under,can%20be%20used%20without%20restrictions)

。企業がプロダクトに組み込む際にもライセンス面で安心感があります。コミュニティでもMistralを基盤とした対話ボットや専門特化モデルが次々と作られており、オープンソースLLMの新たな定番になりつつあります。

**制限:** とはいえ、Mistral 7Bは**絶対性能では大規模モデルに及びません**。7Bというサイズゆえに保持できる知識量には限界があり、百科事典的な網羅知識や高度な専門領域ではGPT-4やLlama 2 70Bといった大きなモデルに劣ります​

[mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=,of%20knowledge%20it%20can%20compress)

。コンテキスト理解も、長文を扱える工夫はあるものの注意範囲は限定的で、本質的には**詳細な文脈保持力は大モデルに比べ低い**と考えられます。また、公開から日が浅いため**エコシステムが発展途上**です。たとえばGPT-4やLlama 2では多くのガイドやプロンプト手法が蓄積されていますが、Mistralは新しく最適な使いこなし法がまだコミュニティで模索されています。加えて、現時点では7B版のみであり、更に高性能を求める場合に選択肢が限られます（今後13Bやさらに大きなMistralが出てくる可能性はあります）。総じて、Mistral 7Bは**小さく効率的なモデル**として優秀ですが、**知識量や成熟度では大型モデルに軍配が上がる**と言えるでしょう。

主要モデルの比較まとめ
-----------

以上述べた主要なテキスト生成モデルについて、**性能・用途・強み・制限**を簡単に比較まとめします。

*   **性能（総合的な賢さ）:** 現状では **GPT-4** が総合的に最も高性能で、複雑な推論や専門知識の応用などあらゆる面でトップクラスです​
    
    [openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)
    
    。**Claude 2** はGPT-4に次ぐグループで、特定のテストでは人間上位層に届く優秀さを示しますが​
    
    [anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=For%20example%2C%20our%20latest%20model,median%20applicant%20on%20quantitative%20reasoning)
    
    、GPT-4ほどの安定した高精度には僅かに及びません。オープンモデルでは **Llama 2 (70B)** がChatGPT相当（GPT-3.5級）に近い実力を持ち、多くのベンチマークで良好な結果を出します​
    
    [huggingface.co](https://huggingface.co/localmodels/Llama-2-70B-Chat-GPTQ#:~:text=Meta%20developed%20and%20publicly%20released,models%20like%20ChatGPT%20and%20PaLM)
    
    。**Mistral 7B** は小型ながら旧来の中型モデル並みの性能があり​
    
    [mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=wide%20range%20of%20benchmarks,in%20code%20and%20reasoning%20benchmarks)
    
    、軽量モデルとしては最強クラスですが、流石に最上位モデル群と直接競うレベルには達していません。
    
*   **用途と適性:** **GPT-4/Claude** はクラウドサービス経由で提供され、高度な対話AIや専門助言、コーディング支援など**汎用AIアシスタント**的な用途に適しています。それぞれChatGPTやClaude AIとして多くのユーザに使われています。**Llama 2/Mistral** はモデルそのものが公開されているため、自社データでの追加学習やオンプレミスでの利用など**カスタムAI開発**に向いています。機密データを外部に出せない場合や、独自機能を組み込みたい場合に有用です。特にMistral 7Bは軽量なのでモバイルや組込みシステムでの動作も現実的です。一方、GPT-4やClaudeはAPI経由でしか使えないためインターネット接続や利用費用が前提になります。
    
*   **強みの比較:** **GPT-4** の強みは何と言っても**圧倒的な知能と多様なタスク適応力**です。高度な作文からプログラミングまで幅広くトップ性能を示します​
    
    [openai.com](https://openai.com/index/gpt-4-research/#:~:text=We%E2%80%99ve%20created%20GPT,factuality%2C%20steerability%2C%20and%20refusing%20to)
    
    。**Claude 2** は**超長文コンテキスト処理**と**安全な対話**が強みで、大量のテキスト分析や長編創作などで有利です​
    
    [anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=As%20we%20work%20to%20improve,all%20in%20one%20go)
    
    ​
    
    [anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=We%27ve%20been%20iterating%20to%20improve,teaming%2C%20to%20improve%20its%20outputs)
    
    。**Llama 2** は**オープンで自由に使える**点が大きな強みで、モデルを直接手元で動かしたり微調整できるため、創意工夫による付加価値を付けやすいです​
    
    [about.fb.com](https://about.fb.com/news/2023/07/llama-2/#:~:text=,are%20providing%20resources%20to%20help)
    
    。**Mistral 7B** は**小型モデルで効率が非常に良い**点がユニークで、限られた計算資源でも比較的賢いAIを実装できるところが強みです​
    
    [mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=is%20to%20compute%20%E2%80%9Cequivalent%20model,of%20knowledge%20it%20can%20compress)
    
    。
    
*   **制限の比較:** **GPT-4** はクローズドゆえの**不透明性とコスト**が制限です。モデル内部を変更できずAPI利用料も高額であるため、大量利用や独自拡張には向きません。また知識更新が止まっている問題もあります​
    
    [openai.com](https://openai.com/index/gpt-4-research/#:~:text=GPT,vulnerabilities%20into%20code%20it%20produces)
    
    。**Claude 2** もクローズドであり、さらに提供地域が限られるなど**利用面の制約**があります​
    
    [anthropic.com](https://www.anthropic.com/news/claude-2#:~:text=Claude%202%20powers%20our%20chat,the%20most%20out%20of%20Claude)
    
    。性能面ではGPT-4ほどの安定感がないことが課題です。**Llama 2** は**性能限界と運用負荷**が制限です。最高の70BモデルでもGPT-4には届かず、また大きなモデルほど動作に巨大なリソースを要します。安全性もユーザの責任が大きくなります。**Mistral 7B** は**知識量の限界**が主な制約です​
    
    [mistral.ai](https://mistral.ai/news/announcing-mistral-7b#:~:text=,of%20knowledge%20it%20can%20compress)
    
    。また現状7Bのみでこれ以上の精度が必要な場合は代替がない点もあります。総じて、クローズドモデルは「性能は高いが融通が利かない」、オープンモデルは「自由だが性能やサポートは自己責任」といったトレードオフが見られます。
    

以上のように、それぞれのモデルは**得意分野と弱点が異なり補完的**です。利用シーンに応じて最適なモデルを選ぶことが重要になります。

その他の生成AIモデル（画像・音声）
------------------

テキスト生成以外にも、**画像**や**音声**といった分野で生成AIが急速に発展しています。ここでは代表的なモデルをいくつか挙げます。

### 画像生成AI

*   **Stable Diffusion** – Stability AI社が2022年に公開した**オープンソースの画像生成モデル**です。拡散（Diffusion）モデルという手法に基づき、与えたテキスト記述から対応する画像を生成します​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/Stable_Diffusion#:~:text=Stable%20Diffusion%20is%20a%20deep,the%20ongoing%20artificial%20intelligence%20boom)
    
    。写真風のリアルな画像からアート風の絵まで多様な生成が可能で、公開後すぐに多くのユーザや開発者に利用されました​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/Stable_Diffusion#:~:text=Stable%20Diffusion%20is%20a%20deep,the%20ongoing%20artificial%20intelligence%20boom)
    
    。オープンモデルのため、ユーザがローカルPCで動かしたりカスタムモデル（アニメ風、絵画風など）を作ることも盛んに行われています。
    
*   **DALL-Eシリーズ** – OpenAIが開発した画像生成モデル群で、2021年初頭に初代DALL-Eを公開、その後高解像度化した**DALL-E 2**（2022年）、解像度と表現力をさらに上げた**DALL-E 3**（2023年）へと発展しています​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=The%20first%20version%20of%20DALL,4)
    
    ​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=September%202022%2C%20DALL,14)
    
    。テキストプロンプトから高度に詳細な画像を生成できる点が特徴で、特に最新のDALL-E 3は指示の解釈精度が飛躍的に向上し、複雑なシーン描写や文字を含む画像生成も得意です​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=September%202022%2C%20DALL,discounts%20are%20available%20to%20companies)
    
    。DALL-E 3はChatGPTに統合されて提供されており、ChatGPTの対話から直接画像を出力できます​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=The%20first%20version%20of%20DALL,4)
    
    。商用版APIも公開されており、MicrosoftのBing Image Creatorなどに組み込まれています​
    
    [en.wikipedia.org](https://en.wikipedia.org/wiki/DALL-E#:~:text=The%20first%20version%20of%20DALL,4)
    
    。
    
*   **Midjourney** – Midjourney社（独立系の研究所）が提供する画像生成モデルです。正式なモデル名は公表されていませんがバージョンを重ねており、2023年時点で**Midjourney v5**や**v5.2**などが公開されています。芸術性の高い美麗な画像を生成することで知られ、ユーザはDiscord上のチャットボットに対してプロンプトを送ることで簡単に画像を作成できます。クローズドなサービスですが、そのクオリティと手軽さから**アーティストやデザイナーにも広く利用**されています。
    

※この他、GoogleのImagenやStable Diffusionの上位モデル（SDXLなど）、AdobeのFireflyなど画像生成AIは多数存在します。それぞれ得意なスタイルや利用形態が異なります​

[semrush.com](https://www.semrush.com/contentshake/content-marketing-blog/best-ai-image-generator/#:~:text=Midjourney%20is%20a%20powerful%20AI,%C2%B7%20Leonardo%20AI)

​

[zapier.com](https://zapier.com/blog/best-ai-image-generator/#:~:text=The%207%20best%20AI%20image,quality%2C%20but%20it%20still)

。

### 音声生成AI

*   **テキスト読み上げ（音声合成）モデル:** 文章から人間の音声を合成するTTS（Text-to-Speech）は古くから研究されていますが、近年は**WaveNet**（DeepMind社、2016年）などの登場で音質が飛躍的に向上しました。WaveNetはディープラーニングで生の音波を生成するモデルで、人間らしい抑揚のある声を実現しました。その後のTTSモデル（Tacotron 2やFastSpeechなど）もディープラーニングベースで、高品質な音声アシスタントやナレーション生成に利用されています。
    
*   **音声クローン・ゼロショット音声合成:** 近年注目なのが、**少量の声サンプルからその話者の声質を真似て新たな発話を生成**する技術です。Microsoftが2023年初頭に発表した**VALL-E**は、わずか3秒程度の音声録音を聞かせるだけでその話者の声で任意の文章を読み上げることができます​
    
    [microsoft.com](https://www.microsoft.com/en-us/research/project/vall-e-x/#:~:text=We%20introduce%20a%20language%20modeling,E%20could%20preserve)
    
    。VALL-Eはニューラルコーデックを用いた言語モデルアプローチで、**ゼロショット（追加の話者訓練なし）で話者の音色や感情まで再現**できる点が画期的です​
    
    [microsoft.com](https://www.microsoft.com/en-us/research/project/vall-e-x/#:~:text=We%20introduce%20a%20language%20modeling,E%20could%20preserve)
    
    ​
    
    [microsoft.com](https://www.microsoft.com/en-us/research/project/vall-e-x/#:~:text=introduces%20a%20phoneme%20monotonic%20alignment,are%20originally%20designed%20for%20audio)
    
    。最新のVALL-E 2では音声合成の自然さ・話者の類似性で\*\*人間と遜色ないレベル（human parity）\*\*に達したとも報告されています​
    
    [microsoft.com](https://www.microsoft.com/en-us/research/project/vall-e-x/#:~:text=introduces%20a%20phoneme%20monotonic%20alignment,are%20originally%20designed%20for%20audio)
    
    。この技術により、任意の人の声で文章を読み上げたり、声優の声質を用いた音声コンテンツ生成などが現実味を帯びています。ただし悪用リスクもあるため、研究段階では利用制限がかけられています。
    
*   **音楽生成モデル:** 音声に関連し、音楽分野でも**テキストから楽曲を生成するAI**が登場しています。Googleの**MusicLM**は「ジャズ風のピアノ曲」「ギターリフで始まるアップテンポな曲」などテキストによる抽象的な説明から、それに合致する独自の音楽を作り出せます​
    
    [blog.google](https://blog.google/technology/ai/musiclm-google-ai-test-kitchen/#:~:text=MusicLM%20is%20an%20experimental%20text,on%20your%20ideas%20or%20descriptions)
    
    。これはメロディ・和音・楽器音色などを包括的に生成する高度なモデルで、2023年に試験公開されました​
    
    [blog.google](https://blog.google/technology/ai/musiclm-google-ai-test-kitchen/#:~:text=In%20January%2C%20we%20announced%20MusicLM%2C,will%20help%20improve%20the%20model)
    
    。OpenAIも過去に**Jukebox**という神経ネットワークで特定アーティスト風の楽曲を生成する試みを発表しており、今なおこの分野は活発に研究されています。
    

以上、テキスト以外の生成AIについても簡単に触れました。**画像**や**音声**の生成モデルは、芸術創作やコンテンツ制作、アクセシビリティ向上など幅広い応用が期待されています。ただし、これらのモデルもテキスト生成AIと同様に、それぞれ**品質のばらつき**や**倫理・著作権上の課題**（不適切な画像の生成、防犯上の声真似悪用など）があります。したがって、技術の進歩と並行して、適切な使い方やガイドライン整備も重要になっています。

おわりに
----

テキスト生成AIモデルの主要な例としてGPT-4、Claude、Llama 2、Mistral 7Bを中心に、その特徴や強み・制限を比較しました。それぞれ設計思想や提供形態が異なり、一長一短があります。**最先端の性能を求めるならクローズドモデル、カスタマイズ性やプライバシー重視ならオープンモデル**といった選択肢が存在します。また、画像や音声といった他の生成AI分野でも優れたモデルが登場しており、今後ますます生成AIが様々な領域に浸透していくことが予想されます。利用者としては各モデルの特徴を正しく理解し、**目的に合ったAIモデルを選択・活用すること**が大切です。その際、性能だけでなく倫理面・安全面にも配慮し、AIと上手に協調していくことが望まれます。

## Response:
o1 , o3 について、他との違いを含めて調査してください。
また、deep research についても調べてください。

## Prompt:
o1とo3について調査しますが、これは特定のAIモデルや技術の名称でしょうか？ それとも、特定の企業やプロジェクトのことを指していますか？

また、deep researchについても調査しますが、これは特定の研究手法やプロジェクト、または特定の企業（Deep Researchなど）のことを指していますか？

詳細を教えていただけると、より正確な調査が可能です。

## Response:
> o1とo3について調査しますが、これは特定のAIモデルや技術の名称でしょうか？ それとも、特定の企業やプロジェクトのことを指していますか？
ChatGPT の o1, o3 モデルです。

> また、deep researchについても調査しますが、これは特定の研究手法やプロジェクト、または特定の企業（Deep Researchなど）のことを指していますか？
Google gemini や ChatGPT が提供している機能です。

## Prompt:
了解しました。ChatGPTのo1およびo3モデルの詳細について、それぞれの違いを含めて調査します。 また、Google GeminiやChatGPTが提供している"deep research"機能についても、その特徴や違いを調べます。

調査が完了次第、結果をお知らせしますので、少々お待ちください。

Research completed in 7m· 22 件の情報源

ChatGPT O1 vs O3 Models and Google Gemini vs ChatGPT "Deep Research" Features
=============================================================================

ChatGPT’s O1 and O3 Models: Overview and Differences
----------------------------------------------------

**OpenAI O1 (Reasoning Model)** – _OpenAI’s first “O-series” reasoning model._ Launched in late 2024, _OpenAI O1_ was introduced as a large language model specifically optimized for complex reasoning tasks​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=On%20Sept,focuses%20specifically%20on%20reasoning%20capabilities)

. While GPT-4 was known for broad general language abilities, O1 was designed to **“spend more time thinking”** and excel at chain-of-thought problem solving across domains​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=On%20Sept,focuses%20specifically%20on%20reasoning%20capabilities)

​

[forbes.com](https://www.forbes.com/sites/karlfreund/2024/12/10/will-open-ais-o1-reasoning-model-really-change-the-world/#:~:text=Will%20Open%20AI%27s%20o1%20Reasoning,thought%20reasoning)

. In practice, O1 demonstrates strong performance on hard problems – for example, it can generate and debug code or tackle challenging math/science questions better than previous models​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o1-explained-Everything-you-need-to-know#:~:text=OpenAI%27s%20o1%20models%2C%20launched%20in,as%20generating%20and%20debugging%20code)

. It serves as a _broad general-knowledge reasoning model_, capable of handling diverse topics with deep analytical thinking​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=While%20OpenAI%20o1%20remains%20our,high)

. Notably, the full O1 model also supports **vision inputs**, meaning it can reason about images (useful for visual tasks)​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)

. The trade-off is that O1 is a large, resource-intensive model – it can be slower and was initially limited in usage for ChatGPT users (fewer daily messages), reflecting its higher computational cost.

**OpenAI O3 (Next-Generation Reasoning Model)** – _The successor to O1 with enhanced reasoning and efficiency._ Announced in preview in December 2024​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=On%20Dec,of%20OpenAI%27s%20Sora%20video%20model)

, _OpenAI O3_ aims to further improve reasoning performance, capabilities, and safety over O1​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=On%20Dec,of%20OpenAI%27s%20Sora%20video%20model)

. O3 introduces a technique called **“simulated reasoning,”** which allows the model to internally pause and reflect on its thought process before answering​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o3%20model%20uses%20a,conclusions%20based%20on%20those%20patterns)

. This goes beyond standard chain-of-thought prompting by giving the model an integrated ability to self-analyze and refine its reasoning, mimicking a more deliberative, human-like problem solving approach​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o3%20model%20uses%20a,conclusions%20based%20on%20those%20patterns)

. Like O1, O3 is a frontier model for complex analytical tasks​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=OpenAI%20considers%20the%20o1%20and,model%20family%20includes%20two%20variants)

. Importantly, OpenAI has developed **two variants** of O3​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=OpenAI%20considers%20the%20o1%20and,model%20family%20includes%20two%20variants)

: the full **O3 base model** (maximum capability, heavy compute) and **O3-mini** – a scaled-down version optimized for speed and cost-efficiency​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o1%20base%20model%20is,but%20requiring%20significant%20computational%20resources)

. O3-mini retains the core reasoning innovations of O3, but sacrifices some raw capability for drastically improved latency and affordability​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o1%20base%20model%20is,but%20requiring%20significant%20computational%20resources)

. It’s tailored for practical use, with particular strength in **STEM domains (coding, math, science)**​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=What%20is%20o3)

. In fact, OpenAI notes O3-mini is _optimized_ for these technical tasks and delivers faster responses than the earlier O1-mini model​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=What%20is%20o3)

​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)

. O3 (especially the mini version) also comes with new developer-friendly features: it supports function calling, structured outputs, and other tools out-of-the-box​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=OpenAI%20o3,and%20high%E2%80%94to%20optimize%20for%20their)

, making it easier to integrate into applications. Additionally, O3-mini allows users to adjust the **“reasoning effort”** level (e.g. low, medium, high), letting the AI “think harder” on tough problems at the cost of a bit more time​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=window%29%20platform,when%20latency%20is%20a%20concern)

. At medium effort, O3-mini already matches the performance of O1 on challenging math and coding benchmarks, but with much lower latency​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=Similar%20to%20its%20OpenAI%20o1,evaluations%20including%20AIME%20and%20GPQA)

. At high effort, it can even **exceed O1’s accuracy** on complex tasks, albeit with slightly longer generation time​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)

. One limitation of O3-mini is that, unlike O1, it **does not support image inputs** or vision-based reasoning​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)

– it’s focused purely on text-based reasoning. Overall, O3 represents an evolution of the O-series, pushing reasoning abilities further while offering a more efficient model for everyday use.

**Key Differences – ChatGPT O1 vs O3:** Both O1 and O3 are part of OpenAI’s new reasoning-focused model line, but they differ in purpose and capabilities:

*   **Scope & Domain Focus:** _O1_ is a **broader generalist** reasoning model, suited to solving hard problems across a wide range of subjects (it serves as the “general knowledge” reasoning expert)​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=While%20OpenAI%20o1%20remains%20our,high)
    
    . _O3_ (especially in the form of O3-mini) is more **specialized for technical domains**, with particular strengths in science, mathematics, and programming tasks​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=While%20OpenAI%20o1%20remains%20our,high)
    
    . In other words, O1 casts a wide net in knowledge, whereas O3 hones in on analytical precision in STEM areas (while still being competent generally).
    
*   **Reasoning Technique:** O3 introduces advanced reasoning methods that O1 lacks. O1 relied on extensive training and prompting (e.g. chain-of-thought) to handle complexity. O3 goes further by employing **simulated reasoning**, an internal self-reflection mechanism that enhances its ability to work through multi-step problems autonomously​
    
    [techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o3%20model%20uses%20a,conclusions%20based%20on%20those%20patterns)
    
    . This means O3 can analyze and critique its intermediate reasoning steps before finalizing an answer, leading to more reliable solutions on complex tasks. O1, while very capable, does not have this same level of built-in introspective reasoning.
    
*   **Speed & Efficiency:** _O3-mini is significantly faster and more efficient_ than O1. OpenAI reports that O3-mini produces results with lower latency than O1 (and even outpaces the earlier O1-mini model), while still achieving comparable accuracy on difficult problems when using higher reasoning settings​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)
    
    . O1’s full model, being larger, generally takes more time per response and was originally restricted to fewer messages per day for users. In fact, when OpenAI introduced O3-mini in ChatGPT, they **tripled the usage limits** for Plus users (150 messages/day with O3-mini vs 50 with O1-mini) due to its efficiency​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=of%20this%20upgrade%2C%20we%E2%80%99re%20tripling,search%20across%20our%20reasoning%20models)
    
    . This highlights that O3-mini is optimized for throughput, making it better suited for situations where quick responses are needed without sacrificing too much accuracy.
    
*   **Accuracy & Problem-Solving Power:** _O1 vs O3 (quality):_ At default settings, O1’s large model still offers excellent reasoning performance across many areas. However, O3 with higher reasoning effort can **match or exceed O1’s accuracy** on the most challenging tasks​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)
    
    . For example, with “medium” effort, O3-mini was shown to perform on par with O1 in rigorous math and science evaluations​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=Similar%20to%20its%20OpenAI%20o1,evaluations%20including%20AIME%20and%20GPQA)
    
    . With “high” effort, O3-mini can outperform O1 on certain benchmarks, demonstrating the improved reasoning capability of the new model​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)
    
    . In essence, O3 is designed to eventually surpass O1 in raw problem-solving power, especially in its specialty domains, narrowing the gap between a smaller model and the original large model through smarter reasoning. O1 remains extremely capable, but O3 represents _the next leap in reasoning accuracy_ for OpenAI’s models.
    
*   **Multimodal Inputs:** A notable difference is in **vision support**. The O1 model can handle image inputs for visual reasoning (for instance, analyzing a diagram or reading text from an image)​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)
    
    . By contrast, O3 (at least the mini variant currently released) **does not handle images**​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)
    
    . Users needing analysis of pictures, graphs, or other visual data should stick with O1 or GPT-4’s vision features. O3 is focused purely on textual reasoning content, which is a deliberate trade-off to streamline its design for logical tasks.
    
*   **Features & Integration:** O3-mini comes with newer features that make it more _“production-ready.”_ It is the first small reasoning model to natively support things like **function calling and structured output formatting** in the ChatGPT API​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=OpenAI%20o3,and%20high%E2%80%94to%20optimize%20for%20their)
    
    . This means developers can have O3-mini directly return JSON or call functions as part of its answer, which is useful for integrating the AI into applications. O1 (and especially O1-mini) had more limited support for such features in earlier releases. Both O1 and O3 do support streaming outputs (gradual token streaming) in ChatGPT​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=window%29%20platform,capabilities%2C%20so%20developers%20should%20continue)
    
    . Overall, O3 has been built with more flexibility for developers, whereas O1 was initially a single powerful model without these tailored integration capabilities.
    
*   **Use Cases:** Because of the above differences, the ideal use cases can differ. _O1_ is well-suited for **broad, open-ended reasoning tasks** where extensive world knowledge and thorough analysis are required – for example, answering complex questions that span multiple domains, analyzing an image or document, or providing detailed explanations on general topics. It’s a good choice when you need a **well-rounded AI researcher** or assistant that can draw on a wide knowledge base. _O3-mini_, on the other hand, shines in **specific technical or logical tasks**: it’s excellent for coding assistance (generating functions, debugging, explaining code), solving math problems or scientific queries, and handling tasks like competitive exam questions or logical puzzles​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=What%20is%20o3)
    
    . Its speed advantage also makes it attractive for any scenario where quick iteration is needed – e.g. an interactive coding session or rapid-fire problem solving. In summary, use O1 when you need the **most knowledgeable, general reasoning** AI (or need vision capabilities); use O3-mini when you want a **faster, more efficient problem-solver** focused on STEM and logical precision.
    
*   **Strengths & Limitations:** **O1’s strengths** are its _depth of reasoning_ and broad knowledge – it performs extremely well on complex reasoning challenges and can leverage a vast knowledge base (plus vision). Its limitations include slower response time and higher cost, and it may occasionally still struggle if not guided (since it doesn’t have the advanced self-reflection of O3). **O3-mini’s strengths** lie in its _speed and specialized accuracy_ – it can handle intensive reasoning with fewer errors (thanks to simulated reasoning and alignment improvements) and do so faster, which is great for users and developers alike​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=o3,accuracy%20with%20higher%20reasoning%20settings)
    
    . Its limitations include the lack of image handling and a somewhat narrower scope (it may not have as exhaustive world knowledge as a larger model like GPT-4 or O1 on obscure topics, since it’s tuned for technical content). Both models employ new safety techniques (O-series uses _“deliberative alignment”_ to reason about safety constraints before responding​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20does%20o3,and%20reliable%20outputs)
    
    ), which helps reduce harmful outputs, but no model is perfect – each can still produce incorrect answers or reasoning if given ambiguous or extremely novel problems.
    

In practice, OpenAI is positioning O3 (and especially O3-mini) as the go-to model for many **practical applications** going forward, given its balanced performance and cost. In fact, O3-mini has _replaced O1-mini_ as the default small reasoning model in ChatGPT​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3)

, and OpenAI has extended it even to free users in a limited way (a first for a reasoning model)​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=of%20this%20upgrade%2C%20we%E2%80%99re%20tripling,search%20across%20our%20reasoning%20models)

. Meanwhile, O1 remains available as the higher-end option for cases that need its broader reasoning or vision capabilities. The two represent a trade-off between **maximal reasoning power with breadth (O1)** and **efficient targeted reasoning with speed (O3-mini)**.

“Deep Research” Feature in ChatGPT vs Google Gemini
---------------------------------------------------

Both OpenAI (ChatGPT) and Google (Gemini) have recently introduced a **“Deep Research”** mode – essentially an AI agent that can autonomously perform multi-step web research and deliver a detailed report with sources. Here we’ll explain each implementation and how they differ, including their use cases, strengths, and limitations.

### ChatGPT’s **Deep Research** Mode (OpenAI)

OpenAI’s _Deep Research_ is a new feature (for ChatGPT Pro users) that turns ChatGPT into an **autonomous research assistant**. When activated, it allows ChatGPT to perform _multi-step internet research_ on a user’s behalf​

[axios.com](https://www.axios.com/2025/02/02/chatgpt-deep-research-openai-agents#:~:text=OpenAI%20adds%20deep%20research%20to,the%20internet%20for%20complex)

. In practical terms, you enter a query or task (for example, “analyze the impact of a new technology on industry X and provide a report”), and the AI will break this down and **ask follow-up questions** to clarify your needs​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=ChatGPT%20then%20analyzes%20your%20query,only%20outlet)

. After you provide any needed clarifications, the Deep Research agent will then **plan out a research strategy** and begin executing it. This involves searching the web for relevant information, reading through articles and pages, and even showing some of its intermediate reasoning or “chain of thought” as it proceeds​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. The agent iteratively gathers facts and insights, organizing them as it goes. After a few minutes of analysis (depending on complexity), it produces a **comprehensive written report** addressing the query​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. The report is typically extensive – often multiple thousands of words – and includes key findings along with **citations/links to the original sources** it used​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. For example, in one test a Deep Research query on a current events topic led ChatGPT to generate a ~4,955-word report in about five minutes, complete with detailed exploration of subtopics and real-world examples​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. The emphasis is on depth and evidence: the mode is meant to provide a thorough, source-backed analysis rather than a quick answer.

**How it works and what it’s used for:** Deep Research essentially automates what a human researcher might do: search for information, sift through content, and synthesize a structured report. It’s particularly useful for **complex questions or projects** where one needs to gather information from multiple sources. Use cases include: writing a market research overview, gathering academic background for an essay or paper, performing a competitive analysis in business, summarizing the state of research on a scientific topic, etc. – any scenario where you’d normally spend hours googling and reading to compile insights. ChatGPT’s agent excels at pulling together different threads and giving a cohesive summary (which the user can then refine or verify). This mode is currently targeted at power-users like researchers, analysts, journalists, or students at advanced levels who need to survey a lot of information quickly.

**Availability:** As of early 2025, ChatGPT’s Deep Research is **only available to ChatGPT Pro subscribers** (a $200/month plan)​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)

. It’s a premium feature due to the heavy computational load – in fact, usage is capped at _100 Deep Research queries per month_ for Pro users​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)

. It is accessible through the ChatGPT web interface by selecting the “deep research” option for your query. (It’s not available in the standard free or Plus tiers at this time, reflecting that it essentially spins up an AI agent that does a lot of work under the hood.)

**Strengths:** ChatGPT’s Deep Research mode is notable for the **depth and thoroughness** of its output. Thanks to OpenAI’s powerful reasoning models (the agent uses the O-series model, which is optimized for analysis), the reports tend to cover nuances and “connect the dots” between pieces of information. Early users have found that it provides insights that feel comparable to what a skilled analyst might put together after significant research. In one direct comparison, ChatGPT’s deep research provided far more detailed coverage of a topic (including nuanced trade-offs and concrete examples) than a similar feature from a competitor​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)

. The fact that it shows some of its working process (e.g., which web pages it’s visiting) also adds transparency – you can see where facts are coming from and follow the links to verify them​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. This mode leverages the **reasoning strengths of O1/O3 models**, meaning it can analyze and synthesize information in a logical way, not just copy text. As a result, the final report is usually well-structured (often divided into sections or bullet points) and backed by evidence. For users, this can literally save hours of manual research time by offloading the heavy lifting to the AI.

**Limitations:** Despite its capabilities, Deep Research is not without limitations. First, it’s **slow** relative to normal chat responses – because it is doing multi-step browsing and reading, a single query can take several minutes to complete (the agent might traverse numerous web pages)​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. This is a necessary trade-off for thoroughness. Second, it is **computationally expensive**, as reflected in its restricted availability and limited runs per month​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)

. Another limitation is that the AI is only as good as the information available: if data is scarce or behind paywalls, the agent might struggle. (For instance, one might ask it to research a very recent news story; if much of the detailed info is in paywalled articles, the AI might produce a less complete report or make do with secondary information.) Moreover, like any LLM-based system, **it can make mistakes or include inaccuracies**. OpenAI’s model will try to summarize what it finds, but it might misinterpret something or pull in an incorrect detail. The Platformer reviewer noted that Deep Research, while impressive, _still made some factual errors – even “embarrassing” ones_ in certain cases​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20every%20AI%20product%2C%20OpenAI%E2%80%99s,them%20can%20be%20quite%20embarrassing)

. So users must remain vigilant and treat the output as a draft or aid, not an infallible final product. Finally, the feature’s exclusivity (Pro only) means it’s not broadly accessible to all users yet, and the high cost could be a barrier for many who could benefit from it.

**Summary:** ChatGPT’s Deep Research mode serves as a powerful, AI-driven research assistant, capable of producing in-depth reports with sources. It is best used for comprehensive analysis tasks where depth of understanding is valued over speed. Its key strengths are depth, reasoning quality, and thorough sourcing, whereas its main drawbacks are the high resource requirements (cost/availability) and the need for careful fact-checking of its outputs.

### Google Gemini’s **Deep Research** Feature

Google’s _Deep Research_ is a similar concept introduced as part of the **Gemini AI assistant** (Google’s next-gen model suite). Unveiled in December 2024, Deep Research in Gemini is an **“agentic” research feature** available to users of **Gemini Advanced** (the premium tier of Google’s AI service)​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L277%20Deep%20Research,in%20Gemini%20on%20the%20web)

​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L371%20Deep%20Research,Research%E2%80%9D%20and%20enter%20your%20research)

. Like OpenAI’s version, Google’s Deep Research aims to **conduct web research on your behalf** and return a detailed report with findings and references​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Gemini%2C%20your%20AI%20assistant%2C%20has,experimental%20model%20that%20offers%20enhanced)

.

**How it works:** In Google’s implementation, when you activate Deep Research, Gemini will first formulate a **multi-step research plan** based on your question​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Deep%20Research%3A%20Your%20personal%20AI,assistant%20is%20here%20to%20help)

. For example, if you ask a broad question (“Analyze recent advancements in autonomous vehicle sensors and compare technologies X vs Y”), the AI will break this down into subtasks – it might decide to first gather background on sensor types, then find comparisons of X vs Y, then look for future trend analyses. The plan is presented to you, and you have the opportunity to revise or approve it​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Doing%20research%20online%20isn%E2%80%99t%20always,to%20get%20smart%20on%20autonomous)

. This ensures the user keeps some control over the direction of research. Once the plan is approved, the Gemini agent begins executing it: it will **search the web, click on relevant results, read content, and then initiate new searches based on what it learns**​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Under%20your%20supervision%2C%20Deep%20Research,the%20web%20on%20your%20behalf)

. This iterative process continues for several cycles – effectively, the AI is _browsing like a person_, refining its knowledge as it finds new information​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Over%20the%20course%20of%20a,your%20fingertips%20in%20just%20minutes)

. Throughout this, Google leverages its core strength: web search. The agent uses Google’s search engine capabilities to find pertinent information (benefiting from Google’s vast index and ranking algorithms). After a few minutes of gathering and analyzing data, the Gemini agent produces a **comprehensive research report** summarizing the key findings​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Over%20the%20course%20of%20a,your%20fingertips%20in%20just%20minutes)

. The output is organized in a readable format (with sections or bullet points) and **includes links to all the sources** it used, so you can click through to the original articles or studies for verification​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=information%20and%20then%20starting%20a,your%20fingertips%20in%20just%20minutes)

. A nice integration perk is that you can directly **export the report to Google Docs** with one click​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=information%20and%20then%20starting%20a,your%20fingertips%20in%20just%20minutes)

, making it easy to save, edit, or share the results. Google describes this as getting “hours of research at your fingertips in just minutes”​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=enter%20your%20question%2C%20it%20creates,the%20web%20on%20your%20behalf)

​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Over%20the%20course%20of%20a,your%20fingertips%20in%20just%20minutes)

.

**Underlying technology:** Google’s Deep Research uses the **Gemini 1.5 Pro** model as its engine​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=As%20it%20so%20happened%2C%20I,reasoning%20model%20like%20OpenAI%E2%80%99s%20version)

. Gemini is Google’s advanced large language model, and the “1.5 Pro” version likely refers to a powerful model available in the Advanced tier. However, unlike OpenAI’s approach of using a special reasoning-optimized model, Google’s agent uses a more **general LLM**. As one tech columnist noted, Google’s deep research _“uses a standard LLM, Gemini 1.5 Pro, rather than a reasoning model like OpenAI’s”_​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=As%20it%20so%20happened%2C%20I,reasoning%20model%20like%20OpenAI%E2%80%99s%20version)

. This suggests that while Gemini is strong, it may not have the same specialized chain-of-thought training as O1/O3. To compensate, Google’s strength is in orchestrating the search process – effectively using its expertise in finding and retrieving information to guide the AI. Another notable aspect is that Google mentioned a **1 million token context window** for Gemini​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Earlier%20this%20year%2C%20we%20shared,read%20insights)

. This huge context size means Gemini can theoretically consider a vast amount of text when compiling its report – it could ingest many pages of content (potentially hundreds of thousands of words) and keep relevant details in context. This is an advantage for synthesizing information from numerous documents, as the AI can have a lot of the material “in memory” when writing the summary. In short, Google’s Deep Research relies on _breadth of information gathering_ (powered by Google Search and a large context window) combined with the language understanding of the Gemini model.

**Use cases:** Much like ChatGPT’s version, Google’s Deep Research is intended to help users with **time-consuming research tasks**. Google gives examples such as a **grad student** quickly getting up to speed on a niche topic for a presentation, an **entrepreneur** gathering market and competitor data, or a **marketer** researching recent campaign trends​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L366%20Deep%20Research,to%20benchmark%20for%202025%20planning)

. Essentially, any scenario where you would use Google search extensively to gather info for a report is a candidate for Deep Research. The feature is integrated into _Gemini_ (which is Google’s AI assistant accessible via the web and eventually in apps), so it’s positioned as an upgrade to the standard Q&A one might do with an AI like Bard. Users toggling on “Deep Research” are likely those who need a more **comprehensive answer** than a normal chat response – something akin to a mini-research paper on their query, complete with citations.

**Availability:** Google’s Deep Research rolled out in December 2024 to users of **Gemini Advanced** (English-only at launch, on desktop and mobile web)​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Deep%20Research%20is%20rolling%20out,Research%E2%80%9D%20and%20enter%20your%20research)

. Gemini Advanced is part of Google’s premium offerings (for example, it’s included in the Google One AI Premium subscription plan for consumers, and available as an add-on for enterprise Google Workspace accounts). So, like OpenAI’s solution, it’s behind a paywall – but often at a lower tier (for instance, some Pixel phone owners got a year of Gemini Advanced included, and Google One Premium is around ~$30/month, significantly less than ChatGPT Pro). To use Deep Research in Gemini, users select the model option _“Gemini 1.5 Pro with Deep Research”_ from a drop-down, then input their question​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L371%20Deep%20Research,Research%E2%80%9D%20and%20enter%20your%20research)

. The feature will become available in the Gemini mobile app and to enterprise accounts in early 2025​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L371%20Deep%20Research,Research%E2%80%9D%20and%20enter%20your%20research)

, expanding its reach.

**Strengths:** Google’s Deep Research benefits from Google’s unparalleled web infrastructure. Its key strength is **information retrieval and coverage**. Because it uses Google Search directly, it’s very good at finding up-to-date and relevant content across the entire web (something OpenAI’s system, which is not a search engine company, has to work hard to match). It can surface information from scholarly articles, news sites, forums, etc., guided by Google’s ranking algorithms. The process of showing a plan also allows the user to steer the research if needed, which can prevent the AI from going down an irrelevant path. Another strength is the **speed and context capacity** – Google’s system can pull in a lot of data quickly and handle a huge context (1M tokens) when synthesizing, meaning it’s less likely to forget earlier info even as it reads more. This can lead to a very well-rounded report that covers many aspects of the query. The output includes direct **links to sources**, which is valuable for trust and verification (and this is a natural feature given Google’s domain expertise in linking information). Additionally, the integration with Google’s ecosystem (export to Docs, etc.) makes it convenient for users who want to take the report and edit or share it. For those already using Google’s productivity tools, having the AI research assistant right there is a big plus. In summary, Google’s Deep Research is strong in **breadth (finding lots of information)** and **usability (integrated workflow with search and docs)**.

**Limitations:** Early observations suggest that Google’s Deep Research, while effective at gathering info, may produce results that are **less in-depth or analytical** compared to ChatGPT’s output. In a side-by-side test on the same query, Google’s agent produced about a 2,000-word report that covered the basics but stayed at a fairly high level, missing some of the nuanced trade-offs and details​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)

. In contrast, ChatGPT’s report was nearly 5,000 words and dived much deeper into the subject​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)

. One tech journalist described Google’s Deep Research output as “shallower in every way” compared to ChatGPT’s, noting that while it wasn’t bad, it didn’t explore the nitty-gritty and finer points that the ChatGPT agent did​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)

. This likely stems from the fact that Google’s uses a general LLM; it retrieves a lot of facts but might not analyze or connect them with the same rigor as OpenAI’s reasoning model. Another limitation is that the system’s quality is tied to the quality of search results – if relevant information is sparse or if the query requires more creative inference, the report might feel incomplete. Also, because it’s an automated agent, it can still make **errors or misinterpret information** (for example, it might take a quote out of context or cite an outdated source). Google has not highlighted specific error rates, but it’s understood that users should double-check important facts. In terms of availability, while it’s more accessible than OpenAI’s (in pricing), it still requires a subscription, which may limit casual usage. Lastly, one could say that Google’s agent might be a bit _less “clever”_ in reasoning — it’s excellent at aggregation, but if the task is to provide a novel insight or a very deep analysis, it might not perform as strongly as an AI specifically tuned for reasoning steps. However, it’s early days for both systems, and Google’s might improve its depth as the Gemini models evolve (Gemini 2.0 is already in experimental preview, promising even better performance​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Gemini%202,experimental%20model)

).

**Summary:** Google Gemini’s Deep Research is like having an **AI research librarian**: superb at quickly finding and compiling information from across the web, giving you a solid report with sources. It shines in scenarios where broad coverage of a topic is needed and when you want the convenience of Google’s ecosystem. Its reports are comprehensive but tend to summarize at a somewhat general level. It’s a powerful tool for getting a quick, linked overview of a complex topic, though users seeking very deep analysis might find it a bit surface-level without further probing.

### ChatGPT vs Google Gemini: Deep Research Comparison

To highlight the differences between OpenAI’s and Google’s Deep Research features, here’s a point-by-point comparison focusing on their **uses, strengths, and limitations**:

*   **Underlying Model & Reasoning:** ChatGPT’s Deep Research is powered by OpenAI’s **reasoning-optimized model** (the O-series, e.g. O1/O3), which is explicitly trained for complex analytical tasks. In contrast, Google’s Deep Research uses a **standard LLM (Gemini 1.5 Pro)** as its engine​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=As%20it%20so%20happened%2C%20I,reasoning%20model%20like%20OpenAI%E2%80%99s%20version)
    
    . This means ChatGPT’s agent leans into advanced logic and chain-of-thought style reasoning during research, while Google’s agent leans on the sheer breadth of information from search. In practical terms, ChatGPT’s approach often results in a more deeply reasoned synthesis, whereas Google’s might read more like an extensive summary of search results. Google’s model does have strong general capabilities, but it doesn’t have the same built-in “think step-by-step” emphasis that OpenAI’s does, making OpenAI’s agent somewhat more adept at drawing connections and conclusions from the data it gathers.
    
*   **Depth and Detail of Output:** Both systems aim to produce comprehensive reports, but users have found that **ChatGPT’s outputs are longer and more detailed** on average. For example, on an identical research query, ChatGPT’s Deep Research returned nearly a 5,000-word report with in-depth analysis, whereas Google’s Deep Research returned about a 2,000-word report covering similar points at a higher level​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)
    
    . ChatGPT’s report included more nuanced discussion (pros and cons, specific examples, detailed comparisons), whereas Google’s covered the “main ideas” but did not drill down as far into each aspect​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)
    
    . In one reviewer’s words, Google’s result was _“moderately useful”_ for an overview, but ChatGPT’s result **“blows it out of the water”** in terms of depth and thoroughness​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=identically%20named%20deep%20research%20product%2C,a%20reasoning%20model%20like%20OpenAI%E2%80%99s)
    
    . This suggests that for users who need the **deepest dive** possible, ChatGPT’s agent currently has an edge. However, if a concise summary of key facts is sufficient, Google’s shorter output might actually be easier to digest.
    
*   **Information Gathering Strength:** **Google’s Deep Research has an advantage in retrieval and coverage**. It uses Google’s search prowess to find relevant information quickly and can draw from the latest updates on the web. It’s also equipped with a massive 1M-token context window, enabling it to absorb and consider a huge volume of content when assembling the report​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Earlier%20this%20year%2C%20we%20shared,read%20insights)
    
    . This means it might pick up a wider range of sources or data points, especially for very broad topics. ChatGPT’s Deep Research also performs web searches (OpenAI has integrated a browsing tool into it) and provides sources, but Google’s native search integration is hard to beat in terms of thoroughness of web coverage. If a query depends on finding that one obscure blog post or a very recent piece of news, Google’s agent might locate it more reliably. In short, Google’s system is like a supercharged web crawler paired with an AI summarizer, whereas OpenAI’s is a super-smart analyst that also searches the web (but search isn’t OpenAI’s core business).
    
*   **Reasoning vs Compilation:** ChatGPT’s agent tends to **analyze and interpret** the information more, sometimes providing original insights or framing of the content, due to the strong reasoning model. Google’s agent tends to **compile and organize** what it finds, sticking closer to the source material. Depending on the need, one can be preferable: if you want an AI to draw conclusions or suggest arguments (as one professor used O1 to generate new historical argument ideas​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=In%20perhaps%20his%20most%20impressive,could%20pursue%20at%20book%20length)
    
    ), ChatGPT’s mode is more likely to do that. If you just want the facts laid out with minimal added interpretation, Google’s might suffice. Think of ChatGPT’s report as something akin to an **analyst’s whitepaper**, while Google’s is more like a very well-researched **briefing document**.
    
*   **Speed and Efficiency:** Both systems take a few minutes to run for complex queries, but anecdotal evidence suggests their speed is comparable – on the order of 3–5 minutes for a substantial report. Google’s might have an edge in quickly scanning web pages (given Google’s optimization of search and retrieval), whereas ChatGPT’s might spend more time in the reasoning phase. There isn’t a clear winner here yet, but it’s worth noting that ChatGPT’s is limited to 100 runs a month (implying each run is quite costly)​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)
    
    , whereas Google hasn’t publicly specified strict limits (the limit may simply be governed by fair use on the subscription). Google’s infrastructure might scale better cost-wise, meaning _it could potentially allow more frequent use_, but that will depend on how they manage the feature under Google One’s terms.
    
*   **Accessibility & Cost:** ChatGPT’s Deep Research is **far more expensive and exclusive** at the moment. Only $200/month Pro users have access, and even then usage is capped​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)
    
    . This puts it out of reach for many casual users or small businesses. Google’s Deep Research, on the other hand, is available in the Gemini Advanced tier, which is tied to the Google One Premium plan (or similar offers) – typically much cheaper or even bundled with other services (for instance, some users might get it as part of a $20–$30/month plan that also includes cloud storage, or free trials with certain devices)​
    
    [one.google.com](https://one.google.com/about/ai-premium/#:~:text=Google%20One%20AI%20Premium%20Plan,learning%20and%20more%20with%20Gemini)
    
    ​
    
    [store.google.com](https://store.google.com/intl/en/ideas/articles/gemini-advanced-features/#:~:text=Gemini%20%2B%20Gemini%20Advanced%20on,Advanced%20is%20included%20with)
    
    . This means **Google’s solution is more accessible** to a wider audience at present. Additionally, Google is integrating Gemini (and its Deep Research) into various products (the mobile app, Workspace, etc.), potentially reaching users in their everyday workflow. So for someone who isn’t an AI enthusiast but just wants a research helper, Google’s might be easier to try out. In contrast, OpenAI’s is currently positioned as a high-end professional tool.
    
*   **Use Case Emphasis:** Both are aimed at research, but there are subtle differences in emphasis. **ChatGPT’s Deep Research** is almost positioned as a **consultant or analyst** replacement – great for detailed reports, policy analysis, academic-style essays, and so on, where critical reasoning is paramount. **Google’s Deep Research** is positioned as a **time-saver for information gathering** – ideal for students, professionals, or anyone who needs a quick comprehensive brief (like an extended Google search result) on a topic. The Google blog even frames it as helping you find things “you might not have found otherwise” and getting smart on a topic quickly​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=information%20and%20then%20starting%20a,your%20fingertips%20in%20just%20minutes)
    
    ​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=enter%20your%20question%2C%20it%20creates,the%20web%20on%20your%20behalf)
    
    . So one might say: if you need a deeply analytical write-up, go with ChatGPT’s; if you need a broad informative roundup (and maybe plan to do the analysis part yourself), Google’s is a strong choice.
    
*   **Reliability and Limitations:** Neither system is perfect, and both can produce errors. ChatGPT’s detailed approach can sometimes lead it to include mistaken details or misinterpretations – and given the length of its output, there may be more to double-check. Google’s reliance on sources means if a source is incorrect or the AI misreads it, that error will flow into the summary. Google’s might avoid fabricating citations since it’s pulling actual links (a known issue with some AI is “hallucinated” sources, which Google’s method mitigates by using real search results). OpenAI’s agent, showing its chain-of-thought, provides some transparency – you can catch if it went to a sketchy site or drew a weird conclusion. Google’s plan approval step gives the user a bit of control up front, but after that the process is somewhat of a black box until the report comes out (though you do get the links after). In terms of **limitations**, ChatGPT’s big one is availability/cost as mentioned, and the need to always verify due to occasional **confident inaccuracies**​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20every%20AI%20product%2C%20OpenAI%E2%80%99s,them%20can%20be%20quite%20embarrassing)
    
    . Google’s big limitation is that it currently produces less analytical depth – if you truly needed that extra layer of insight, you might find yourself using Google’s report as a starting point and then asking additional questions (potentially in another tool or manually). Both systems will continue to evolve, but users should approach their outputs as _assistant-generated drafts_. It’s wise to use the provided sources to fact-check critical points regardless of which tool you use.
    

In conclusion, **ChatGPT’s Deep Research vs Google’s Deep Research** can be seen as **depth vs breadth**. ChatGPT offers a deeper, more reasoning-heavy dive with highly detailed synthesis (leveraging its powerful O1/O3 model) – excellent for thorough analyses with the caveat of higher cost and time. Google offers a broader sweep through information with superb coverage and integration (leveraging Google’s search and a huge context) – great for getting a comprehensive overview quickly, though with somewhat less inferential depth. Both are cutting-edge examples of “agentic” AI that goes beyond simple Q&A, actually performing tasks on the web. Depending on the task at hand – and what resources you have – you might choose one or the other. It’s even conceivable to use Google’s output as a quick base, and then feed that into ChatGPT for deeper analysis (or vice versa). What’s clear is that these **AI research assistants** are becoming powerful tools to augment human work, each with their own strengths: OpenAI’s strength in reasoning and analysis, and Google’s strength in information retrieval and organization. Both tools find their best use when their limitations are understood: they are excellent for first drafts and exploration, but a human expert should review and refine the results for final use, especially in high-stakes or precise domains.

**Sources:**

*   OpenAI, _“OpenAI o3-mini”_ – Model release announcement, Jan 2025​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=We%E2%80%99re%20releasing%20OpenAI%20o3,mini)
    
    ​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=While%20OpenAI%20o1%20remains%20our,high)
    
*   OpenAI Help Center – _“o3-mini in ChatGPT – FAQ”_​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)
    
    ​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)
    
*   TechTarget, _“OpenAI o3 explained: Everything you need to know,”_ Dec 2024​
    
    [techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o3%20model%20uses%20a,conclusions%20based%20on%20those%20patterns)
    
    ​
    
    [techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o1%20base%20model%20is,but%20requiring%20significant%20computational%20resources)
    
*   Platformer, _“ChatGPT’s deep research might be the first good agent,”_ Feb 2025​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=identically%20named%20deep%20research%20product%2C,a%20reasoning%20model%20like%20OpenAI%E2%80%99s)
    
    ​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)
    
*   Google, _“Try Deep Research and our new experimental model in Gemini,”_ Dec 2024​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Under%20your%20supervision%2C%20Deep%20Research,the%20web%20on%20your%20behalf)
    
    ​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Earlier%20this%20year%2C%20we%20shared,read%20insights)
    
*   (Plus additional reporting from Axios, TechCrunch, etc., as referenced in the text above​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)
    
    ​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Deep%20Research%3A%20Your%20personal%20AI,assistant%20is%20here%20to%20help)
    
    .)

## Response:
了解しました。ChatGPTのo1およびo3モデルの詳細について、それぞれの違いを含めて調査します。 また、Google GeminiやChatGPTが提供している"deep research"機能についても、その特徴や違いを調べます。

調査が完了次第、結果をお知らせしますので、少々お待ちください。

Research completed in 7m· 22 件の情報源

ChatGPT O1 vs O3 Models and Google Gemini vs ChatGPT "Deep Research" Features
=============================================================================

ChatGPT’s O1 and O3 Models: Overview and Differences
----------------------------------------------------

**OpenAI O1 (Reasoning Model)** – _OpenAI’s first “O-series” reasoning model._ Launched in late 2024, _OpenAI O1_ was introduced as a large language model specifically optimized for complex reasoning tasks​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=On%20Sept,focuses%20specifically%20on%20reasoning%20capabilities)

. While GPT-4 was known for broad general language abilities, O1 was designed to **“spend more time thinking”** and excel at chain-of-thought problem solving across domains​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=On%20Sept,focuses%20specifically%20on%20reasoning%20capabilities)

​

[forbes.com](https://www.forbes.com/sites/karlfreund/2024/12/10/will-open-ais-o1-reasoning-model-really-change-the-world/#:~:text=Will%20Open%20AI%27s%20o1%20Reasoning,thought%20reasoning)

. In practice, O1 demonstrates strong performance on hard problems – for example, it can generate and debug code or tackle challenging math/science questions better than previous models​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o1-explained-Everything-you-need-to-know#:~:text=OpenAI%27s%20o1%20models%2C%20launched%20in,as%20generating%20and%20debugging%20code)

. It serves as a _broad general-knowledge reasoning model_, capable of handling diverse topics with deep analytical thinking​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=While%20OpenAI%20o1%20remains%20our,high)

. Notably, the full O1 model also supports **vision inputs**, meaning it can reason about images (useful for visual tasks)​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)

. The trade-off is that O1 is a large, resource-intensive model – it can be slower and was initially limited in usage for ChatGPT users (fewer daily messages), reflecting its higher computational cost.

**OpenAI O3 (Next-Generation Reasoning Model)** – _The successor to O1 with enhanced reasoning and efficiency._ Announced in preview in December 2024​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=On%20Dec,of%20OpenAI%27s%20Sora%20video%20model)

, _OpenAI O3_ aims to further improve reasoning performance, capabilities, and safety over O1​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=On%20Dec,of%20OpenAI%27s%20Sora%20video%20model)

. O3 introduces a technique called **“simulated reasoning,”** which allows the model to internally pause and reflect on its thought process before answering​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o3%20model%20uses%20a,conclusions%20based%20on%20those%20patterns)

. This goes beyond standard chain-of-thought prompting by giving the model an integrated ability to self-analyze and refine its reasoning, mimicking a more deliberative, human-like problem solving approach​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o3%20model%20uses%20a,conclusions%20based%20on%20those%20patterns)

. Like O1, O3 is a frontier model for complex analytical tasks​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=OpenAI%20considers%20the%20o1%20and,model%20family%20includes%20two%20variants)

. Importantly, OpenAI has developed **two variants** of O3​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=OpenAI%20considers%20the%20o1%20and,model%20family%20includes%20two%20variants)

: the full **O3 base model** (maximum capability, heavy compute) and **O3-mini** – a scaled-down version optimized for speed and cost-efficiency​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o1%20base%20model%20is,but%20requiring%20significant%20computational%20resources)

. O3-mini retains the core reasoning innovations of O3, but sacrifices some raw capability for drastically improved latency and affordability​

[techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o1%20base%20model%20is,but%20requiring%20significant%20computational%20resources)

. It’s tailored for practical use, with particular strength in **STEM domains (coding, math, science)**​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=What%20is%20o3)

. In fact, OpenAI notes O3-mini is _optimized_ for these technical tasks and delivers faster responses than the earlier O1-mini model​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=What%20is%20o3)

​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)

. O3 (especially the mini version) also comes with new developer-friendly features: it supports function calling, structured outputs, and other tools out-of-the-box​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=OpenAI%20o3,and%20high%E2%80%94to%20optimize%20for%20their)

, making it easier to integrate into applications. Additionally, O3-mini allows users to adjust the **“reasoning effort”** level (e.g. low, medium, high), letting the AI “think harder” on tough problems at the cost of a bit more time​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=window%29%20platform,when%20latency%20is%20a%20concern)

. At medium effort, O3-mini already matches the performance of O1 on challenging math and coding benchmarks, but with much lower latency​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=Similar%20to%20its%20OpenAI%20o1,evaluations%20including%20AIME%20and%20GPQA)

. At high effort, it can even **exceed O1’s accuracy** on complex tasks, albeit with slightly longer generation time​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)

. One limitation of O3-mini is that, unlike O1, it **does not support image inputs** or vision-based reasoning​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)

– it’s focused purely on text-based reasoning. Overall, O3 represents an evolution of the O-series, pushing reasoning abilities further while offering a more efficient model for everyday use.

**Key Differences – ChatGPT O1 vs O3:** Both O1 and O3 are part of OpenAI’s new reasoning-focused model line, but they differ in purpose and capabilities:

*   **Scope & Domain Focus:** _O1_ is a **broader generalist** reasoning model, suited to solving hard problems across a wide range of subjects (it serves as the “general knowledge” reasoning expert)​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=While%20OpenAI%20o1%20remains%20our,high)
    
    . _O3_ (especially in the form of O3-mini) is more **specialized for technical domains**, with particular strengths in science, mathematics, and programming tasks​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=While%20OpenAI%20o1%20remains%20our,high)
    
    . In other words, O1 casts a wide net in knowledge, whereas O3 hones in on analytical precision in STEM areas (while still being competent generally).
    
*   **Reasoning Technique:** O3 introduces advanced reasoning methods that O1 lacks. O1 relied on extensive training and prompting (e.g. chain-of-thought) to handle complexity. O3 goes further by employing **simulated reasoning**, an internal self-reflection mechanism that enhances its ability to work through multi-step problems autonomously​
    
    [techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o3%20model%20uses%20a,conclusions%20based%20on%20those%20patterns)
    
    . This means O3 can analyze and critique its intermediate reasoning steps before finalizing an answer, leading to more reliable solutions on complex tasks. O1, while very capable, does not have this same level of built-in introspective reasoning.
    
*   **Speed & Efficiency:** _O3-mini is significantly faster and more efficient_ than O1. OpenAI reports that O3-mini produces results with lower latency than O1 (and even outpaces the earlier O1-mini model), while still achieving comparable accuracy on difficult problems when using higher reasoning settings​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)
    
    . O1’s full model, being larger, generally takes more time per response and was originally restricted to fewer messages per day for users. In fact, when OpenAI introduced O3-mini in ChatGPT, they **tripled the usage limits** for Plus users (150 messages/day with O3-mini vs 50 with O1-mini) due to its efficiency​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=of%20this%20upgrade%2C%20we%E2%80%99re%20tripling,search%20across%20our%20reasoning%20models)
    
    . This highlights that O3-mini is optimized for throughput, making it better suited for situations where quick responses are needed without sacrificing too much accuracy.
    
*   **Accuracy & Problem-Solving Power:** _O1 vs O3 (quality):_ At default settings, O1’s large model still offers excellent reasoning performance across many areas. However, O3 with higher reasoning effort can **match or exceed O1’s accuracy** on the most challenging tasks​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)
    
    . For example, with “medium” effort, O3-mini was shown to perform on par with O1 in rigorous math and science evaluations​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=Similar%20to%20its%20OpenAI%20o1,evaluations%20including%20AIME%20and%20GPQA)
    
    . With “high” effort, O3-mini can outperform O1 on certain benchmarks, demonstrating the improved reasoning capability of the new model​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)
    
    . In essence, O3 is designed to eventually surpass O1 in raw problem-solving power, especially in its specialty domains, narrowing the gap between a smaller model and the original large model through smarter reasoning. O1 remains extremely capable, but O3 represents _the next leap in reasoning accuracy_ for OpenAI’s models.
    
*   **Multimodal Inputs:** A notable difference is in **vision support**. The O1 model can handle image inputs for visual reasoning (for instance, analyzing a diagram or reading text from an image)​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)
    
    . By contrast, O3 (at least the mini variant currently released) **does not handle images**​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)
    
    . Users needing analysis of pictures, graphs, or other visual data should stick with O1 or GPT-4’s vision features. O3 is focused purely on textual reasoning content, which is a deliberate trade-off to streamline its design for logical tasks.
    
*   **Features & Integration:** O3-mini comes with newer features that make it more _“production-ready.”_ It is the first small reasoning model to natively support things like **function calling and structured output formatting** in the ChatGPT API​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=OpenAI%20o3,and%20high%E2%80%94to%20optimize%20for%20their)
    
    . This means developers can have O3-mini directly return JSON or call functions as part of its answer, which is useful for integrating the AI into applications. O1 (and especially O1-mini) had more limited support for such features in earlier releases. Both O1 and O3 do support streaming outputs (gradual token streaming) in ChatGPT​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=window%29%20platform,capabilities%2C%20so%20developers%20should%20continue)
    
    . Overall, O3 has been built with more flexibility for developers, whereas O1 was initially a single powerful model without these tailored integration capabilities.
    
*   **Use Cases:** Because of the above differences, the ideal use cases can differ. _O1_ is well-suited for **broad, open-ended reasoning tasks** where extensive world knowledge and thorough analysis are required – for example, answering complex questions that span multiple domains, analyzing an image or document, or providing detailed explanations on general topics. It’s a good choice when you need a **well-rounded AI researcher** or assistant that can draw on a wide knowledge base. _O3-mini_, on the other hand, shines in **specific technical or logical tasks**: it’s excellent for coding assistance (generating functions, debugging, explaining code), solving math problems or scientific queries, and handling tasks like competitive exam questions or logical puzzles​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=What%20is%20o3)
    
    . Its speed advantage also makes it attractive for any scenario where quick iteration is needed – e.g. an interactive coding session or rapid-fire problem solving. In summary, use O1 when you need the **most knowledgeable, general reasoning** AI (or need vision capabilities); use O3-mini when you want a **faster, more efficient problem-solver** focused on STEM and logical precision.
    
*   **Strengths & Limitations:** **O1’s strengths** are its _depth of reasoning_ and broad knowledge – it performs extremely well on complex reasoning challenges and can leverage a vast knowledge base (plus vision). Its limitations include slower response time and higher cost, and it may occasionally still struggle if not guided (since it doesn’t have the advanced self-reflection of O3). **O3-mini’s strengths** lie in its _speed and specialized accuracy_ – it can handle intensive reasoning with fewer errors (thanks to simulated reasoning and alignment improvements) and do so faster, which is great for users and developers alike​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=o3,accuracy%20with%20higher%20reasoning%20settings)
    
    . Its limitations include the lack of image handling and a somewhat narrower scope (it may not have as exhaustive world knowledge as a larger model like GPT-4 or O1 on obscure topics, since it’s tuned for technical content). Both models employ new safety techniques (O-series uses _“deliberative alignment”_ to reason about safety constraints before responding​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20does%20o3,and%20reliable%20outputs)
    
    ), which helps reduce harmful outputs, but no model is perfect – each can still produce incorrect answers or reasoning if given ambiguous or extremely novel problems.
    

In practice, OpenAI is positioning O3 (and especially O3-mini) as the go-to model for many **practical applications** going forward, given its balanced performance and cost. In fact, O3-mini has _replaced O1-mini_ as the default small reasoning model in ChatGPT​

[help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3)

, and OpenAI has extended it even to free users in a limited way (a first for a reasoning model)​

[openai.com](https://openai.com/index/openai-o3-mini/#:~:text=of%20this%20upgrade%2C%20we%E2%80%99re%20tripling,search%20across%20our%20reasoning%20models)

. Meanwhile, O1 remains available as the higher-end option for cases that need its broader reasoning or vision capabilities. The two represent a trade-off between **maximal reasoning power with breadth (O1)** and **efficient targeted reasoning with speed (O3-mini)**.

“Deep Research” Feature in ChatGPT vs Google Gemini
---------------------------------------------------

Both OpenAI (ChatGPT) and Google (Gemini) have recently introduced a **“Deep Research”** mode – essentially an AI agent that can autonomously perform multi-step web research and deliver a detailed report with sources. Here we’ll explain each implementation and how they differ, including their use cases, strengths, and limitations.

### ChatGPT’s **Deep Research** Mode (OpenAI)

OpenAI’s _Deep Research_ is a new feature (for ChatGPT Pro users) that turns ChatGPT into an **autonomous research assistant**. When activated, it allows ChatGPT to perform _multi-step internet research_ on a user’s behalf​

[axios.com](https://www.axios.com/2025/02/02/chatgpt-deep-research-openai-agents#:~:text=OpenAI%20adds%20deep%20research%20to,the%20internet%20for%20complex)

. In practical terms, you enter a query or task (for example, “analyze the impact of a new technology on industry X and provide a report”), and the AI will break this down and **ask follow-up questions** to clarify your needs​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=ChatGPT%20then%20analyzes%20your%20query,only%20outlet)

. After you provide any needed clarifications, the Deep Research agent will then **plan out a research strategy** and begin executing it. This involves searching the web for relevant information, reading through articles and pages, and even showing some of its intermediate reasoning or “chain of thought” as it proceeds​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. The agent iteratively gathers facts and insights, organizing them as it goes. After a few minutes of analysis (depending on complexity), it produces a **comprehensive written report** addressing the query​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. The report is typically extensive – often multiple thousands of words – and includes key findings along with **citations/links to the original sources** it used​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. For example, in one test a Deep Research query on a current events topic led ChatGPT to generate a ~4,955-word report in about five minutes, complete with detailed exploration of subtopics and real-world examples​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. The emphasis is on depth and evidence: the mode is meant to provide a thorough, source-backed analysis rather than a quick answer.

**How it works and what it’s used for:** Deep Research essentially automates what a human researcher might do: search for information, sift through content, and synthesize a structured report. It’s particularly useful for **complex questions or projects** where one needs to gather information from multiple sources. Use cases include: writing a market research overview, gathering academic background for an essay or paper, performing a competitive analysis in business, summarizing the state of research on a scientific topic, etc. – any scenario where you’d normally spend hours googling and reading to compile insights. ChatGPT’s agent excels at pulling together different threads and giving a cohesive summary (which the user can then refine or verify). This mode is currently targeted at power-users like researchers, analysts, journalists, or students at advanced levels who need to survey a lot of information quickly.

**Availability:** As of early 2025, ChatGPT’s Deep Research is **only available to ChatGPT Pro subscribers** (a $200/month plan)​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)

. It’s a premium feature due to the heavy computational load – in fact, usage is capped at _100 Deep Research queries per month_ for Pro users​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)

. It is accessible through the ChatGPT web interface by selecting the “deep research” option for your query. (It’s not available in the standard free or Plus tiers at this time, reflecting that it essentially spins up an AI agent that does a lot of work under the hood.)

**Strengths:** ChatGPT’s Deep Research mode is notable for the **depth and thoroughness** of its output. Thanks to OpenAI’s powerful reasoning models (the agent uses the O-series model, which is optimized for analysis), the reports tend to cover nuances and “connect the dots” between pieces of information. Early users have found that it provides insights that feel comparable to what a skilled analyst might put together after significant research. In one direct comparison, ChatGPT’s deep research provided far more detailed coverage of a topic (including nuanced trade-offs and concrete examples) than a similar feature from a competitor​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)

. The fact that it shows some of its working process (e.g., which web pages it’s visiting) also adds transparency – you can see where facts are coming from and follow the links to verify them​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. This mode leverages the **reasoning strengths of O1/O3 models**, meaning it can analyze and synthesize information in a logical way, not just copy text. As a result, the final report is usually well-structured (often divided into sections or bullet points) and backed by evidence. For users, this can literally save hours of manual research time by offloading the heavy lifting to the AI.

**Limitations:** Despite its capabilities, Deep Research is not without limitations. First, it’s **slow** relative to normal chat responses – because it is doing multi-step browsing and reading, a single query can take several minutes to complete (the agent might traverse numerous web pages)​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20DeepSeek%2C%20OpenAI%E2%80%99s%20deep%20research,the%20two%20main%20federated%20protocols)

. This is a necessary trade-off for thoroughness. Second, it is **computationally expensive**, as reflected in its restricted availability and limited runs per month​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)

. Another limitation is that the AI is only as good as the information available: if data is scarce or behind paywalls, the agent might struggle. (For instance, one might ask it to research a very recent news story; if much of the detailed info is in paywalled articles, the AI might produce a less complete report or make do with secondary information.) Moreover, like any LLM-based system, **it can make mistakes or include inaccuracies**. OpenAI’s model will try to summarize what it finds, but it might misinterpret something or pull in an incorrect detail. The Platformer reviewer noted that Deep Research, while impressive, _still made some factual errors – even “embarrassing” ones_ in certain cases​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20every%20AI%20product%2C%20OpenAI%E2%80%99s,them%20can%20be%20quite%20embarrassing)

. So users must remain vigilant and treat the output as a draft or aid, not an infallible final product. Finally, the feature’s exclusivity (Pro only) means it’s not broadly accessible to all users yet, and the high cost could be a barrier for many who could benefit from it.

**Summary:** ChatGPT’s Deep Research mode serves as a powerful, AI-driven research assistant, capable of producing in-depth reports with sources. It is best used for comprehensive analysis tasks where depth of understanding is valued over speed. Its key strengths are depth, reasoning quality, and thorough sourcing, whereas its main drawbacks are the high resource requirements (cost/availability) and the need for careful fact-checking of its outputs.

### Google Gemini’s **Deep Research** Feature

Google’s _Deep Research_ is a similar concept introduced as part of the **Gemini AI assistant** (Google’s next-gen model suite). Unveiled in December 2024, Deep Research in Gemini is an **“agentic” research feature** available to users of **Gemini Advanced** (the premium tier of Google’s AI service)​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L277%20Deep%20Research,in%20Gemini%20on%20the%20web)

​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L371%20Deep%20Research,Research%E2%80%9D%20and%20enter%20your%20research)

. Like OpenAI’s version, Google’s Deep Research aims to **conduct web research on your behalf** and return a detailed report with findings and references​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Gemini%2C%20your%20AI%20assistant%2C%20has,experimental%20model%20that%20offers%20enhanced)

.

**How it works:** In Google’s implementation, when you activate Deep Research, Gemini will first formulate a **multi-step research plan** based on your question​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Deep%20Research%3A%20Your%20personal%20AI,assistant%20is%20here%20to%20help)

. For example, if you ask a broad question (“Analyze recent advancements in autonomous vehicle sensors and compare technologies X vs Y”), the AI will break this down into subtasks – it might decide to first gather background on sensor types, then find comparisons of X vs Y, then look for future trend analyses. The plan is presented to you, and you have the opportunity to revise or approve it​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Doing%20research%20online%20isn%E2%80%99t%20always,to%20get%20smart%20on%20autonomous)

. This ensures the user keeps some control over the direction of research. Once the plan is approved, the Gemini agent begins executing it: it will **search the web, click on relevant results, read content, and then initiate new searches based on what it learns**​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Under%20your%20supervision%2C%20Deep%20Research,the%20web%20on%20your%20behalf)

. This iterative process continues for several cycles – effectively, the AI is _browsing like a person_, refining its knowledge as it finds new information​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Over%20the%20course%20of%20a,your%20fingertips%20in%20just%20minutes)

. Throughout this, Google leverages its core strength: web search. The agent uses Google’s search engine capabilities to find pertinent information (benefiting from Google’s vast index and ranking algorithms). After a few minutes of gathering and analyzing data, the Gemini agent produces a **comprehensive research report** summarizing the key findings​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Over%20the%20course%20of%20a,your%20fingertips%20in%20just%20minutes)

. The output is organized in a readable format (with sections or bullet points) and **includes links to all the sources** it used, so you can click through to the original articles or studies for verification​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=information%20and%20then%20starting%20a,your%20fingertips%20in%20just%20minutes)

. A nice integration perk is that you can directly **export the report to Google Docs** with one click​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=information%20and%20then%20starting%20a,your%20fingertips%20in%20just%20minutes)

, making it easy to save, edit, or share the results. Google describes this as getting “hours of research at your fingertips in just minutes”​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=enter%20your%20question%2C%20it%20creates,the%20web%20on%20your%20behalf)

​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Over%20the%20course%20of%20a,your%20fingertips%20in%20just%20minutes)

.

**Underlying technology:** Google’s Deep Research uses the **Gemini 1.5 Pro** model as its engine​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=As%20it%20so%20happened%2C%20I,reasoning%20model%20like%20OpenAI%E2%80%99s%20version)

. Gemini is Google’s advanced large language model, and the “1.5 Pro” version likely refers to a powerful model available in the Advanced tier. However, unlike OpenAI’s approach of using a special reasoning-optimized model, Google’s agent uses a more **general LLM**. As one tech columnist noted, Google’s deep research _“uses a standard LLM, Gemini 1.5 Pro, rather than a reasoning model like OpenAI’s”_​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=As%20it%20so%20happened%2C%20I,reasoning%20model%20like%20OpenAI%E2%80%99s%20version)

. This suggests that while Gemini is strong, it may not have the same specialized chain-of-thought training as O1/O3. To compensate, Google’s strength is in orchestrating the search process – effectively using its expertise in finding and retrieving information to guide the AI. Another notable aspect is that Google mentioned a **1 million token context window** for Gemini​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Earlier%20this%20year%2C%20we%20shared,read%20insights)

. This huge context size means Gemini can theoretically consider a vast amount of text when compiling its report – it could ingest many pages of content (potentially hundreds of thousands of words) and keep relevant details in context. This is an advantage for synthesizing information from numerous documents, as the AI can have a lot of the material “in memory” when writing the summary. In short, Google’s Deep Research relies on _breadth of information gathering_ (powered by Google Search and a large context window) combined with the language understanding of the Gemini model.

**Use cases:** Much like ChatGPT’s version, Google’s Deep Research is intended to help users with **time-consuming research tasks**. Google gives examples such as a **grad student** quickly getting up to speed on a niche topic for a presentation, an **entrepreneur** gathering market and competitor data, or a **marketer** researching recent campaign trends​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L366%20Deep%20Research,to%20benchmark%20for%202025%20planning)

. Essentially, any scenario where you would use Google search extensively to gather info for a report is a candidate for Deep Research. The feature is integrated into _Gemini_ (which is Google’s AI assistant accessible via the web and eventually in apps), so it’s positioned as an upgrade to the standard Q&A one might do with an AI like Bard. Users toggling on “Deep Research” are likely those who need a more **comprehensive answer** than a normal chat response – something akin to a mini-research paper on their query, complete with citations.

**Availability:** Google’s Deep Research rolled out in December 2024 to users of **Gemini Advanced** (English-only at launch, on desktop and mobile web)​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Deep%20Research%20is%20rolling%20out,Research%E2%80%9D%20and%20enter%20your%20research)

. Gemini Advanced is part of Google’s premium offerings (for example, it’s included in the Google One AI Premium subscription plan for consumers, and available as an add-on for enterprise Google Workspace accounts). So, like OpenAI’s solution, it’s behind a paywall – but often at a lower tier (for instance, some Pixel phone owners got a year of Gemini Advanced included, and Google One Premium is around ~$30/month, significantly less than ChatGPT Pro). To use Deep Research in Gemini, users select the model option _“Gemini 1.5 Pro with Deep Research”_ from a drop-down, then input their question​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L371%20Deep%20Research,Research%E2%80%9D%20and%20enter%20your%20research)

. The feature will become available in the Gemini mobile app and to enterprise accounts in early 2025​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=match%20at%20L371%20Deep%20Research,Research%E2%80%9D%20and%20enter%20your%20research)

, expanding its reach.

**Strengths:** Google’s Deep Research benefits from Google’s unparalleled web infrastructure. Its key strength is **information retrieval and coverage**. Because it uses Google Search directly, it’s very good at finding up-to-date and relevant content across the entire web (something OpenAI’s system, which is not a search engine company, has to work hard to match). It can surface information from scholarly articles, news sites, forums, etc., guided by Google’s ranking algorithms. The process of showing a plan also allows the user to steer the research if needed, which can prevent the AI from going down an irrelevant path. Another strength is the **speed and context capacity** – Google’s system can pull in a lot of data quickly and handle a huge context (1M tokens) when synthesizing, meaning it’s less likely to forget earlier info even as it reads more. This can lead to a very well-rounded report that covers many aspects of the query. The output includes direct **links to sources**, which is valuable for trust and verification (and this is a natural feature given Google’s domain expertise in linking information). Additionally, the integration with Google’s ecosystem (export to Docs, etc.) makes it convenient for users who want to take the report and edit or share it. For those already using Google’s productivity tools, having the AI research assistant right there is a big plus. In summary, Google’s Deep Research is strong in **breadth (finding lots of information)** and **usability (integrated workflow with search and docs)**.

**Limitations:** Early observations suggest that Google’s Deep Research, while effective at gathering info, may produce results that are **less in-depth or analytical** compared to ChatGPT’s output. In a side-by-side test on the same query, Google’s agent produced about a 2,000-word report that covered the basics but stayed at a fairly high level, missing some of the nuanced trade-offs and details​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)

. In contrast, ChatGPT’s report was nearly 5,000 words and dived much deeper into the subject​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)

. One tech journalist described Google’s Deep Research output as “shallower in every way” compared to ChatGPT’s, noting that while it wasn’t bad, it didn’t explore the nitty-gritty and finer points that the ChatGPT agent did​

[platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)

. This likely stems from the fact that Google’s uses a general LLM; it retrieves a lot of facts but might not analyze or connect them with the same rigor as OpenAI’s reasoning model. Another limitation is that the system’s quality is tied to the quality of search results – if relevant information is sparse or if the query requires more creative inference, the report might feel incomplete. Also, because it’s an automated agent, it can still make **errors or misinterpret information** (for example, it might take a quote out of context or cite an outdated source). Google has not highlighted specific error rates, but it’s understood that users should double-check important facts. In terms of availability, while it’s more accessible than OpenAI’s (in pricing), it still requires a subscription, which may limit casual usage. Lastly, one could say that Google’s agent might be a bit _less “clever”_ in reasoning — it’s excellent at aggregation, but if the task is to provide a novel insight or a very deep analysis, it might not perform as strongly as an AI specifically tuned for reasoning steps. However, it’s early days for both systems, and Google’s might improve its depth as the Gemini models evolve (Gemini 2.0 is already in experimental preview, promising even better performance​

[blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Gemini%202,experimental%20model)

).

**Summary:** Google Gemini’s Deep Research is like having an **AI research librarian**: superb at quickly finding and compiling information from across the web, giving you a solid report with sources. It shines in scenarios where broad coverage of a topic is needed and when you want the convenience of Google’s ecosystem. Its reports are comprehensive but tend to summarize at a somewhat general level. It’s a powerful tool for getting a quick, linked overview of a complex topic, though users seeking very deep analysis might find it a bit surface-level without further probing.

### ChatGPT vs Google Gemini: Deep Research Comparison

To highlight the differences between OpenAI’s and Google’s Deep Research features, here’s a point-by-point comparison focusing on their **uses, strengths, and limitations**:

*   **Underlying Model & Reasoning:** ChatGPT’s Deep Research is powered by OpenAI’s **reasoning-optimized model** (the O-series, e.g. O1/O3), which is explicitly trained for complex analytical tasks. In contrast, Google’s Deep Research uses a **standard LLM (Gemini 1.5 Pro)** as its engine​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=As%20it%20so%20happened%2C%20I,reasoning%20model%20like%20OpenAI%E2%80%99s%20version)
    
    . This means ChatGPT’s agent leans into advanced logic and chain-of-thought style reasoning during research, while Google’s agent leans on the sheer breadth of information from search. In practical terms, ChatGPT’s approach often results in a more deeply reasoned synthesis, whereas Google’s might read more like an extensive summary of search results. Google’s model does have strong general capabilities, but it doesn’t have the same built-in “think step-by-step” emphasis that OpenAI’s does, making OpenAI’s agent somewhat more adept at drawing connections and conclusions from the data it gathers.
    
*   **Depth and Detail of Output:** Both systems aim to produce comprehensive reports, but users have found that **ChatGPT’s outputs are longer and more detailed** on average. For example, on an identical research query, ChatGPT’s Deep Research returned nearly a 5,000-word report with in-depth analysis, whereas Google’s Deep Research returned about a 2,000-word report covering similar points at a higher level​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)
    
    . ChatGPT’s report included more nuanced discussion (pros and cons, specific examples, detailed comparisons), whereas Google’s covered the “main ideas” but did not drill down as far into each aspect​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)
    
    . In one reviewer’s words, Google’s result was _“moderately useful”_ for an overview, but ChatGPT’s result **“blows it out of the water”** in terms of depth and thoroughness​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=identically%20named%20deep%20research%20product%2C,a%20reasoning%20model%20like%20OpenAI%E2%80%99s)
    
    . This suggests that for users who need the **deepest dive** possible, ChatGPT’s agent currently has an edge. However, if a concise summary of key facts is sufficient, Google’s shorter output might actually be easier to digest.
    
*   **Information Gathering Strength:** **Google’s Deep Research has an advantage in retrieval and coverage**. It uses Google’s search prowess to find relevant information quickly and can draw from the latest updates on the web. It’s also equipped with a massive 1M-token context window, enabling it to absorb and consider a huge volume of content when assembling the report​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Earlier%20this%20year%2C%20we%20shared,read%20insights)
    
    . This means it might pick up a wider range of sources or data points, especially for very broad topics. ChatGPT’s Deep Research also performs web searches (OpenAI has integrated a browsing tool into it) and provides sources, but Google’s native search integration is hard to beat in terms of thoroughness of web coverage. If a query depends on finding that one obscure blog post or a very recent piece of news, Google’s agent might locate it more reliably. In short, Google’s system is like a supercharged web crawler paired with an AI summarizer, whereas OpenAI’s is a super-smart analyst that also searches the web (but search isn’t OpenAI’s core business).
    
*   **Reasoning vs Compilation:** ChatGPT’s agent tends to **analyze and interpret** the information more, sometimes providing original insights or framing of the content, due to the strong reasoning model. Google’s agent tends to **compile and organize** what it finds, sticking closer to the source material. Depending on the need, one can be preferable: if you want an AI to draw conclusions or suggest arguments (as one professor used O1 to generate new historical argument ideas​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=In%20perhaps%20his%20most%20impressive,could%20pursue%20at%20book%20length)
    
    ), ChatGPT’s mode is more likely to do that. If you just want the facts laid out with minimal added interpretation, Google’s might suffice. Think of ChatGPT’s report as something akin to an **analyst’s whitepaper**, while Google’s is more like a very well-researched **briefing document**.
    
*   **Speed and Efficiency:** Both systems take a few minutes to run for complex queries, but anecdotal evidence suggests their speed is comparable – on the order of 3–5 minutes for a substantial report. Google’s might have an edge in quickly scanning web pages (given Google’s optimization of search and retrieval), whereas ChatGPT’s might spend more time in the reasoning phase. There isn’t a clear winner here yet, but it’s worth noting that ChatGPT’s is limited to 100 runs a month (implying each run is quite costly)​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)
    
    , whereas Google hasn’t publicly specified strict limits (the limit may simply be governed by fair use on the subscription). Google’s infrastructure might scale better cost-wise, meaning _it could potentially allow more frequent use_, but that will depend on how they manage the feature under Google One’s terms.
    
*   **Accessibility & Cost:** ChatGPT’s Deep Research is **far more expensive and exclusive** at the moment. Only $200/month Pro users have access, and even then usage is capped​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)
    
    . This puts it out of reach for many casual users or small businesses. Google’s Deep Research, on the other hand, is available in the Gemini Advanced tier, which is tied to the Google One Premium plan (or similar offers) – typically much cheaper or even bundled with other services (for instance, some users might get it as part of a $20–$30/month plan that also includes cloud storage, or free trials with certain devices)​
    
    [one.google.com](https://one.google.com/about/ai-premium/#:~:text=Google%20One%20AI%20Premium%20Plan,learning%20and%20more%20with%20Gemini)
    
    ​
    
    [store.google.com](https://store.google.com/intl/en/ideas/articles/gemini-advanced-features/#:~:text=Gemini%20%2B%20Gemini%20Advanced%20on,Advanced%20is%20included%20with)
    
    . This means **Google’s solution is more accessible** to a wider audience at present. Additionally, Google is integrating Gemini (and its Deep Research) into various products (the mobile app, Workspace, etc.), potentially reaching users in their everyday workflow. So for someone who isn’t an AI enthusiast but just wants a research helper, Google’s might be easier to try out. In contrast, OpenAI’s is currently positioned as a high-end professional tool.
    
*   **Use Case Emphasis:** Both are aimed at research, but there are subtle differences in emphasis. **ChatGPT’s Deep Research** is almost positioned as a **consultant or analyst** replacement – great for detailed reports, policy analysis, academic-style essays, and so on, where critical reasoning is paramount. **Google’s Deep Research** is positioned as a **time-saver for information gathering** – ideal for students, professionals, or anyone who needs a quick comprehensive brief (like an extended Google search result) on a topic. The Google blog even frames it as helping you find things “you might not have found otherwise” and getting smart on a topic quickly​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=information%20and%20then%20starting%20a,your%20fingertips%20in%20just%20minutes)
    
    ​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=enter%20your%20question%2C%20it%20creates,the%20web%20on%20your%20behalf)
    
    . So one might say: if you need a deeply analytical write-up, go with ChatGPT’s; if you need a broad informative roundup (and maybe plan to do the analysis part yourself), Google’s is a strong choice.
    
*   **Reliability and Limitations:** Neither system is perfect, and both can produce errors. ChatGPT’s detailed approach can sometimes lead it to include mistaken details or misinterpretations – and given the length of its output, there may be more to double-check. Google’s reliance on sources means if a source is incorrect or the AI misreads it, that error will flow into the summary. Google’s might avoid fabricating citations since it’s pulling actual links (a known issue with some AI is “hallucinated” sources, which Google’s method mitigates by using real search results). OpenAI’s agent, showing its chain-of-thought, provides some transparency – you can catch if it went to a sketchy site or drew a weird conclusion. Google’s plan approval step gives the user a bit of control up front, but after that the process is somewhat of a black box until the report comes out (though you do get the links after). In terms of **limitations**, ChatGPT’s big one is availability/cost as mentioned, and the need to always verify due to occasional **confident inaccuracies**​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=Like%20every%20AI%20product%2C%20OpenAI%E2%80%99s,them%20can%20be%20quite%20embarrassing)
    
    . Google’s big limitation is that it currently produces less analytical depth – if you truly needed that extra layer of insight, you might find yourself using Google’s report as a starting point and then asking additional questions (potentially in another tool or manually). Both systems will continue to evolve, but users should approach their outputs as _assistant-generated drafts_. It’s wise to use the provided sources to fact-check critical points regardless of which tool you use.
    

In conclusion, **ChatGPT’s Deep Research vs Google’s Deep Research** can be seen as **depth vs breadth**. ChatGPT offers a deeper, more reasoning-heavy dive with highly detailed synthesis (leveraging its powerful O1/O3 model) – excellent for thorough analyses with the caveat of higher cost and time. Google offers a broader sweep through information with superb coverage and integration (leveraging Google’s search and a huge context) – great for getting a comprehensive overview quickly, though with somewhat less inferential depth. Both are cutting-edge examples of “agentic” AI that goes beyond simple Q&A, actually performing tasks on the web. Depending on the task at hand – and what resources you have – you might choose one or the other. It’s even conceivable to use Google’s output as a quick base, and then feed that into ChatGPT for deeper analysis (or vice versa). What’s clear is that these **AI research assistants** are becoming powerful tools to augment human work, each with their own strengths: OpenAI’s strength in reasoning and analysis, and Google’s strength in information retrieval and organization. Both tools find their best use when their limitations are understood: they are excellent for first drafts and exploration, but a human expert should review and refine the results for final use, especially in high-stakes or precise domains.

**Sources:**

*   OpenAI, _“OpenAI o3-mini”_ – Model release announcement, Jan 2025​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=We%E2%80%99re%20releasing%20OpenAI%20o3,mini)
    
    ​
    
    [openai.com](https://openai.com/index/openai-o3-mini/#:~:text=While%20OpenAI%20o1%20remains%20our,high)
    
*   OpenAI Help Center – _“o3-mini in ChatGPT – FAQ”_​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=How%20is%20o3,mini)
    
    ​
    
    [help.openai.com](https://help.openai.com/en/articles/10491870-o3-mini-in-chatgpt-faq#:~:text=Does%20o3,image%20inputs)
    
*   TechTarget, _“OpenAI o3 explained: Everything you need to know,”_ Dec 2024​
    
    [techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o3%20model%20uses%20a,conclusions%20based%20on%20those%20patterns)
    
    ​
    
    [techtarget.com](https://www.techtarget.com/whatis/feature/OpenAI-o3-explained-Everything-you-need-to-know#:~:text=The%20o1%20base%20model%20is,but%20requiring%20significant%20computational%20resources)
    
*   Platformer, _“ChatGPT’s deep research might be the first good agent,”_ Feb 2025​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=identically%20named%20deep%20research%20product%2C,a%20reasoning%20model%20like%20OpenAI%E2%80%99s)
    
    ​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=To%20start%2C%20deep%20research%20is,as%20usual%20in%20the%20ChatGPT)
    
*   Google, _“Try Deep Research and our new experimental model in Gemini,”_ Dec 2024​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Under%20your%20supervision%2C%20Deep%20Research,the%20web%20on%20your%20behalf)
    
    ​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Earlier%20this%20year%2C%20we%20shared,read%20insights)
    
*   (Plus additional reporting from Axios, TechCrunch, etc., as referenced in the text above​
    
    [platformer.news](https://www.platformer.news/chatgpt-deep-research-hands-on/#:~:text=You%20can%20see%20it%20in,it%20out%20of%20the%20water)
    
    ​
    
    [blog.google](https://blog.google/products/gemini/google-gemini-deep-research/?ref=platformer.news#:~:text=Deep%20Research%3A%20Your%20personal%20AI,assistant%20is%20here%20to%20help)
    
    .)



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)