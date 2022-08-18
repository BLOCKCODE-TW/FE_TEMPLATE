# FE_TEMPLATE

使用 Bootstrap 的前端開發範本

v 1.1

## 環境需求

node 14 以上

[請參考環境安裝說明](env.md)

## 開始使用

git clone https://github.com/BLOCKCODE-TW/FE_TEMPLATE.git

移除隱藏 .git 資料夾

修改專案目錄 FE_TEMPLATE 名稱

```bash
yarn install
```

修改 gulpfile.js 裡面的 `project_name`

執行

```bash
gulp
```

## 開發注意事項

修改 src 下的

index.html

## 加入版本控管

## 外網測試

腳本採用 browse sync 所以可以透過 ngrok 轉到外網

```bash
ngrok http http://localhost:8080
```

## 部署

dist

## 版本說明

### v1.1

.gitignore 裡面增加 .ds_store

## 感謝貢獻清單

[@quinnai9287](https://github.com/quinnai9287)

[@jaliao](https://github.com/jaliao)