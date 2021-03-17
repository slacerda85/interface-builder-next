
## Preparando o Ambiente de Desenvolvimento

Este projeto está configurado utilizando o Yarn 2 (Berry). Para iniciar, digite os seguintes comandos:

```sh
yarn set version berry
yarn
yarn pnpify --sdk vscode
```

O Comando `yarn set version berry` serve para mudar a versão do Yarn para a V2 (codenome Berry).

O comando `yarn` vai instalar as dependências do projeto.

Por último, o comando `yarn pnpify --sdk vscode` irá criar um diretório com as definições de tipos e configurações dos linters (typescript, EsLint, Prettier) na pasta .yarn/sdks, e fará uma configuração no vscode, redirecionando para esta pasta.

Para utilizar estas definições, abra um arquivo .ts ou .tsx (automaticamente o vscode irá perguntar se deseja utilizar as definições do workspace, basta confirmar) e pronto, TypeScript e linters configurados com sucesso no VSCode e Yarn 2.
Se isso não ocorrer (nao aparecer mensagem), basta selecionar um arquivo .ts ou .tsx, digitar `ctrl+shift+p` e selecionar "TypeScript: Select TypeScript Version...", e selecionar "Use Workspace Version".

## Scripts da Aplicação

Comandos disponíveis:

### `yarn dev`

Executa o app em modo dev.<br />
Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar.

reload automatico em edições.<br />

### `yarn build`

Faz o build da aplicação para produção.<br />
Para visualizar a aplicação digite `yarn start`.
