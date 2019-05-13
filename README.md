# MATUMOTO YURI portfolio

## 全体構成

FirebaseでBASIC認証などをかけるための利用を考えた構成になっています。
（FunctionsのExpressでBASIC認証をかけています）
そのため、HTMLファイルは以下のフォルダに格納されています。

`./functions/static/*`

Webのルートフォルダは、`./functions/static/` です。なので `index.html` は `./functions/static/index.html` になります。


全体は以下のようになっていて、コンテンツごとにフォルダを作ってそこにindex.htmlや利用する画像をおいてあります。


```
functions/
  +- static/
       +- about
       |    +- index.html
       +- articles
       |    +- namecard
       |    |    +- index.html
       |    |    +- meishi_2.png
       |    +- ...
       +- component
       |    +- my.js ... ヘッダやフッタなどの共通部品※
       +- contact
       |    +- index.html
       +- imagecs ... 共通で使われる画像
       +- lab
       |    +- index.html
       +- style
       |    +- style.css ... CSS
       +- works
       |    +- index.html
       +- index.html
       +- 404.html
      
```

※ ヘッダやフッタなどを共通化するためにWebコンポーネントを使っています。

## Worksの記事の追加方法

新しく `NEWPROJECT` という記事を使いする場合。

1. `_template_` フォルダ をコピーして `articles/NEWPROJECT` を作成する。
2. `articles/NEWPROJECT/index.html` を編集する。 必要に応じて `articles/NEWPROJECT` に画像もいれる。
3. `index.html` と `worls/index.html` からリンクを作成する。

labの作成も同じで `article` を作成した後に、 `lab/index.html` からのリンクを作成してください。

## TopページやWORKSページのタイルの追加方法


基本的には以下が、１行（横１列）のコードで `<br>` のところにタイルを挿入してください。
2行3行と行自体を増やしたい場合には、この `row` のまとまりごと追加してください。

```
    <!-- ROW -->
		<div class="row">
      <!-- 1 x 1 -->
      <div class="col-md-4 column">
        <br>
      </div>
      <!-- 1 x 2 -->
      <div class="col-md-4 column">
        <br>
      </div>
      <!-- 1 x 3 -->
      <div class="col-md-4 column">
        <br>
      </div>
    </div>
```

## ページ編集について

基本的にはかぎりなく素のBootstrap v4を使ってますので、Bootstrapの流儀にしがたってくれたら大丈夫です。
独自にスタイルを定義したい場合には `style/style.css` を編集してください。

## ローカルでの確認方法

何でも良いのでHTTPサーバをたてます。
簡単な手順は以下です。

```
$ npm install -g http-server
$ cd functions/static
$ http-server
```

これで通常であれば `http://localhost:8080` で編集中のコードが確認可能です。

