# Projeto Module Federation React

Este projeto demonstra o uso do Module Federation com React para integrar três projetos separados em um único host.

## Estrutura do Projeto

O projeto é dividido em três partes principais:

1. `App`: Aplicativo principal (Host)
2. `Contact`: Aplicativo de contato (Remote)
3. `Home`: Aplicativo de página inicial (Remote)

Cada parte possui sua própria estrutura de diretórios e pode ser executada individualmente.

## Instalação e Execução

Para executar cada parte do projeto, siga estes passos:

1. Navegue até o diretório da parte que deseja executar;

2. Instale as dependências: npm i

3. Inicie o servidor de desenvolvimento: npm run dev


Repita os passos acima para as partes `Contact` e `Home`.

## Module Federation

O Module Federation é utilizado para integrar os aplicativos `Contact` e `Home` no aplicativo `App`. O arquivo de configuração `webpack.config.js` na raiz do projeto é responsável por configurar o Module Federation.

## Uso

Após iniciar todos os aplicativos, abra o navegador e acesse o host principal. Você verá a integração dos aplicativos de contato e página inicial no aplicativo principal.
