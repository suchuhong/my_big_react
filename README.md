pnpm add eslint -D -w

vscode 插件

npx eslint --init -w
You can also run this command directly using 'npm init @eslint/config@latest'.

> my_big_react@1.0.0 npx
> create-config

@eslint/create-config: v1.4.0

√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · typescript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · pnpm

pnpm i -D -w @typescript-eslint/parser@latest @typescript-eslint/eslint-plugin@latest

pnpm i prettier -D -w

.prettierrc.json

{
"printWidth": 80,
"tabWidth": 2,
"useTabs": true,
"singleQuote": true,
"semi": true,
"trailingComma": "none",
"bracketSpacing": true
}

pnpm install typescript-eslint -D -w

pnpm i husky -D -w
npx husky init

新建 pre-commit

```

pnpm lint

```

pnpm i commitlint @commitlint/cli @commitlint/config-conventional -D -w

新建 commit-msg

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint -e $HUSKY_GIT_PARAMS

```

打包工具

pnpm i -D -w rollup

打包用到的插件

pnpm i -D -w rollup-plugin-typescript2
pnpm i -D -w @rollup/plugin-commonjs

pnpm i -D -w rimraf
pnpm i -D -w rollup-plugin-generate-package-json

```
(base) PS E:\R-react\my_big_react\dist\node_modules\react> pnpm link --global
Progress: resolved 260, reused 259, downloaded 0, added 0, done

C:\Users\suchuhong\AppData\Local\pnpm\global\5:
+ react 1.0.0 <- E:\R-react\my_big_react\dist\node_modules\react
(base) PS E:\R-react\my_big_react\dist\node_modules\react> pnpm unlink --global
(base) PS E:\R-react\my_big_react\dist\node_modules\react> pnpm link --global
Progress: resolved 260, reused 259, downloaded 0, added 0, done
```

第一种调试方法

https://pnpm.io/zh/cli/link

pnpm link E:\R-react\my_big_react\dist\node_modules\react

react-reconciler

pnpm init
