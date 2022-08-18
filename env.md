# 環境安裝說明

## Git

### 開始安裝 Git

注意退出 root 模式

[安裝網址](https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-Git-%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8)

### 設定 Git

```bash
git config --global user.name "username"
git config --global user.email "email"
```

## Visual Studio Code

### 安裝

[VS Code 網址](https://code.visualstudio.com/)

### 安裝插件

這裡也順便分享一些切版常用的套件，有興趣的話可以自行研究安裝

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

[Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

[Html tag wrapper](https://marketplace.visualstudio.com/items?itemName=hwencc.html-tag-wrapper)

[Indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

## NVM

### 安裝 install nvm

注意退出 root 模式

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash;
```

### 設定 setup nvm environment

接下來使用任何文字編輯器打開該檔案

```bash
nano ~/.bash_profile
```

and

```bash
nano ~/.zashrc
```

並在上面兩個檔案裏面，加入以下程式碼存檔即可

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## Node

安裝

`nvm install v16.16.0`

注意：如果有提示 npm 版本可以升級，記得升級，升級指令參考終端機的警告提示

`npm install -g npm@latest`

測試安裝

```bash
node -v
v16.16

npm -v
v8.16
```

## Yarn

安裝

```bash
npm install -g yarn
```

測試

```bash
yarn -v

1.22.19
```

## Gulp

安裝

```bash
npm install -g gulp
```

測試

```bash
gulp -v

CLI version: 2.3.0
Local version: 4.0.2
```

## 參考

[The Best Way to Install Node.js, npm and yarn on Mac OSX](https://itsromiljain.medium.com/the-best-way-to-install-node-js-npm-and-yarn-on-mac-osx-4d8a8544987a)
