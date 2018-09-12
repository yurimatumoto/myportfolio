# myportfolio
myportfoliodata

## usage

### init

```
$ git clone https://github.com/matumotoyuri/myportfolio.git
```

```
$ cd myportfolio
$ npm install hexo-cli -g
$ npm install
```

### post new article

```
$ hexo new article_name
```

`article_name` には記事タイトルをいれてください。

`source/_posts/article_name.md` が作られているので記事を編集してください。
記事で使いたい画像は、`docs/images/`の下においてください。

`.md` の中は以下のように書いてください。

```
---
title: article3
cover_image: images/article3.jpg
date: 2018-09-11 13:27:48
---

ここ（moreまで）には記事の要約を書きます。トップページに出てくる文章です。

<!-- more --> 

# 見出し１
文章

## 見出し２
文章

![](/myportfolio/images/article3.jpg)

画像も入れられます。
```

### test

```
$ hexo server
```

`http://localhost:4000` で確認ができます。

### deploy

```
$ hexo generate
```

```
$ git commit -am "change"
```

```
$ git push origin master
```

https://matumotoyuri.github.io/myportfolio/

