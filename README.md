# cripto-profit Front-end

## Tipos de commit

| Tipo de commit | Descrição                | Release                                                                                                                     |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `feat`         | Uma nova feature         | `minor`                                                                                                                     |
| `fix`          | Correção de bugs         | `patch`                                                                                                                     |
| `docs`         | Documentação             | `patch`se o `escopo` for `readme`                                                                                           |
| `lint`         | Formatação de código     | Alterações que não afetam o significado do código (espaços em branco, identação, ponto-e-virgula, etc)                      |
| `style`        | Estilização de Página    | Alterações que afentam estilização da página não necessariamente uma funcionalidade nova (Aquivos styl,css, animações )     |
| `refactor`     | Refatoração de código    | Alteração no código que não corrige um bug, e nem adiciona uma feature                                                      |
| `perf`         | Melhorias de performance | Alteração no código que melhora a performance                                                                               |
| `build`        | Builds                   | Alterações que afetam o sistema de build, ou dependências externas (escopos exemplares: gulp, broccoli, yarn, npm, webpack) |
| `ci`           | Integração continua (CI) | Alteração aos arquivos de configuração e scripts do CI (escopos exemplares: travis, circleci, browserstack, saucelabs)      |
| `chore`        | Chores                   | Outras mudanças que não modificam os arquivos da aplicação ou dos testes                                                    |
| `revert`       | Reversão de commit       | Reversão a um commit anterior                                                                                               |

## Algumas Boas práticas

1. Adicionar loadings quando necessário
2. Adicionar API-Response
3. Adicionar Resolver apenas quando necessário
4. Evitar erros do usuário
5. Remover qualquer biblioteca não utilizada do `package.json`
6. Utilizar TSlint

## Bibliotecas

> A lista de dependências abaixo não leva em consideração pacotes essenciais para o workflow do Angular, como por exemplo, os que possuam prefixos `@angular` e `@types`, including `rxjs`, `tslib` e `zone.js`

## Servidor de desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue ao `http://localhost:4200/`. O app irá recarregar automaticamente caso haja qualquer mudança nos arquivos da aplicação.

## Encapsulamento de código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

As build são geradas automaticamente pelo hook `pre-push` do git ao se fazer um commit a branch master

Execute `ng build` para buildar o projeto. Os arquivos de saída da build serão armazenados no diretório `dist/`. Use a flag `--prod` para habilitar o modo `production`.

## Executando teste unitários

Execute `ng test` para executar testes unitários via [Karma](https://karma-runner.github.io).

## Executando testes end-to-end (E2E)

Execute `ng e2e` para iniciar os testes end-to-end via [Protractor](http://www.protractortest.org/).

## Mais informações

Para mais informações a respeito do Angular CLI, execute `ng help` ou visite o [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
