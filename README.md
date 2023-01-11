# portfolio

## 開発環境

- vscode
  - 拡張機能： Dev Containers(`ms-vscode-remote.remote-containers`)
- docker

## debug

リポジトリをクローンします

```sh
git clone {url}
```

vscode上でコマンドパレットを表示します（`Cmd(ctl) + Shift + P`）し`Dev Containers: Reopen in Container`
（またはvscodeのウィンドウ左下の><アイコンをクリックして`Reopen in Container`）
を実行します

node_modulesのインストールをします

```
yarn
または
yarn install
```

デバッグ実行します

```
yarn dev
```

ブラウザで`http://localhost:3000`にアクセスしてください