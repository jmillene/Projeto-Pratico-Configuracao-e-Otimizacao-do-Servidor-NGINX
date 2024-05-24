# Projeto Prático Configuracão e Otimização do Servidor NGINX

2º Projeto Prático - DevOps

Configuração e Otimização do Servidor NGINX

## Desafio

Configure e otimize um servidor NGINX para atuar como servidor web, proxy reverso e gateway de API. O projeto deve otimizar o desempenho, implementar HTTPS, configurar regras de proxy reverso e gerenciar servidores web seguros.


## Etapas

a. Configuração Básica: Configure o NGINX para atuar como servidor web para um site ou aplicativo.

b. Proxy Reverso: Configure regras de proxy reverso para direcionar o tráfego para diferentes serviços ou aplicativos.

c. Segurança e HTTPS: Implemente HTTPS com certificados SSL/TLS e configure políticas de segurança.

d. Otimização de Desempenho: Aplique técnicas de otimização para melhorar o desempenho do NGINX.

e. Documentação: Documente a configuração e as decisões tomadas durante o projeto.


## 🚀 Começando

### 📋 Pré-requisitos

Nesse projeto foi utilizado o esquema de container Docker, devido a sua facilidade de uso e desempenho.

* [Nginx](https://www.nginx.com/) - O servidor web usado
* [Docker](https://www.docker.com/) - Software utilizado

### 🔧 Instalação

Siga estas etapas para configurar o ambiente de desenvolvimento:

- Configure o arquivo docker-compose para receber a imagem do servidor nginx para que possamos trabalhar com ele dentro do container.
- Crie o arquivo de configuração do servidor nginx.
- Após todas as configurações, suba o container usando o comando: 

```bash
# Subindo container docker
  docker-compose up -d
  sudo apt-get install docker-ce
```

Você pode verificar se o container está ativo usando o comando:
```bash
  docker ps
```
Esse comando listará todos os containers presentes no Docker.
Verifique se o servidor está ativo utilizando seu navegador e acessando localhost:porta (substitua "porta" pela porta configurada).

## 📦 Implantação

Para implantar o servidor em um sistema ativo, siga as práticas recomendadas de segurança e monitore o desempenho regularmente.

Baseado nos conceitos de servidor e, em particular, no NGINX, foram utilizados conceitos de proxy reverso, solicitações HTTP e HTTPS, balanceamento de carga (load-balancer) e estrutura de microserviços.

## Nginx :

NGINX é um servidor web open source de alta performance que entrega o conteúdo estático de um site de forma rápida e fácil de configurar. Oferece recursos de balanceamento de carga, proxy reverso e streaming, além de gerenciar milhares de conexões simultâneas. O resultado disso é maior velocidade e escalabilidade.

## Proxy Reverso :

Um proxy reverso é um servidor que fica na frente dos servidores web e encaminha as solicitações do cliente (por exemplo, navegador web) para esses servidores web. Os proxies reversos normalmente são implementados para ajudar a aumentar a segurança, o desempenho e a confiabilidade. Dessa forma, ele foi utilizado no projeto para, quando o cliente envia uma requisição, ela não ser direcionada diretamente ao servidor. Ela passa pelo proxy reverso onde o conteúdo é analisado de acordo com as regras de negócio definidas e, depois disso, é encaminhada a um dos servidores.

![image](https://github.com/jmillene/Projeto-Pratico-Configuracao-e-Otimizacao-do-Servidor-NGINX/assets/18409332/11d82de7-686f-4e65-b072-de29816da60b)

## Solicitações HTTP e HTTPs

O HTTP surgiu com o intuito de permitir a comunicação com um servidor web. A princípio, o método existente era apenas o de "pegar" o conteúdo de um servidor, o que atendia a demanda para esse fim. Com o decorrer do tempo, surgiram novas demandas e a necessidade de não somente pedir, mas também passar essas informações ao servidor.
O HTTP é um protocolo para transferência de texto. Quando algo é digitado pelo usuário, como informações sigilosas, essas informações também são passadas pelo servidor. Dessa forma, notou-se que ao trafegar essas informações entre redes, o que era digitado pelo usuário ficava visível para outros usuários. Por exemplo, ao usar o protocolo HTTP em um ambiente corporativo, um técnico poderia instalar um programa para analisar os protocolos que trafegam na comunicação entre o roteador e o computador do cliente, resultando em dados do cliente visíveis.



![image](https://github.com/jmillene/Projeto-Pratico-Configuracao-e-Otimizacao-do-Servidor-NGINX/assets/18409332/3c86c7ea-cbdd-4318-a48a-ef91bba3ce5c)


Diante da necessidade de mais segurança, surgiu o protocolo HTTPS, que usa criptografia de chaves para garantir que apenas o usuário final possa ler as informações. O HTTPS criptografa as informações de tal forma que somente o usuário final consegue lê-las, tornando-se um protocolo mais seguro.Por exemplo, um usuário A deseja enviar informações confidenciais para um usuário B, e somente o usuário B pode ter acesso a essas informações. Então, usando o processo de criptografia de chaves, o usuário A tranca as informações em uma "caixa" com cadeado e, posteriormente, envia essas informações. Quando o usuário B recebe essas informações, ele utiliza uma cópia da chave idêntica à do usuário A para abrir e ler essas informações. Dessa forma, diferentemente do HTTP, o protocolo HTTPS criptografa essas informações de tal forma que somente o usuário final consegue lê-las, tornando-se um protocolo mais seguro. Caso queira saber mais a fundo sobre todo o processo, leia na íntegra no site da escola Alura pelo link: https://tinyurl.com/3jkxuzbz. Abaixo um exemplo de utilização do protocolo HTTPS.

![image](https://github.com/jmillene/Projeto-Pratico-Configuracao-e-Otimizacao-do-Servidor-NGINX/assets/18409332/420ca8f2-e5dc-454a-baa3-ab8f7e27a061)

## Certificado Openssl:

Para simular a segurança de um site, foi utilizado o certificado OpenSSL para garantir a segurança das informações que trafegam entre os servidores. Ao adicionar um certificado configurado através do host do site à rota, podemos transformar um site HTTP não seguro em um site HTTPS seguro. O ícone de cadeado geralmente indica que o site está protegido por HTTPS.
Ao gerar um certificado autoassinado e configurá-lo em um projeto, estamos indicando ao cliente que se trata de um site confiável. O TLS, ou "Segurança de Camada de Transporte", e seu antecessor, o SSL, são protocolos usados para envolver o tráfego normal em um pacote protegido e criptografado. Dessa forma, os servidores podem enviar informações com segurança aos seus clientes sem que suas mensagens sejam interceptadas ou lidas por terceiros.
Para mais informações sobre como gerar o certificado OpenSSL, consulte SSL Dragon.https://www.ssldragon.com/pt/how-to/create-self-signed-certificate-openssl/

## Estrutura do Projeto

Este projeto segue uma arquitetura baseada em microserviços, onde cada funcionalidade é dividida em módulos independentes. A finalidade dessa abordagem é facilitar a manutenção, escalabilidade e desenvolvimento de novas funcionalidades.

- Estrutura de Diretórios

A estrutura do projeto está organizada da seguinte maneira:

├── conf.d
├── estrutura_projeto.txt
├── html
│   ├── erro
│   │   ├── index.css
│   │   ├── index.html
│   │   └── index.js
│   ├── index.html
│   └── teste
│       └── index.html
├── index.html
├── load-balancer.conf
├── mime.types
├── nginx.conf
├── noticias.conf
├── novidades.conf
└── servidores
    └── microservicos
        ├── html
        │   └── index.html
        ├── noticias
        │   ├── html
        │   │   ├── erro
        │   │   │   ├── index.css
        │   │   │   ├── index.html
        │   │   │   └── index.js
        │   │   ├── index.html
        │   │   └── teste
        │   │       └── index.html
        │   └── index.html
        ├── noticias.conf
        ├── novidades
        │   ├── html
        │   │   ├── erro
        │   │   │   ├── index.css
        │   │   │   ├── index.html
        │   │   │   └── index.js
        │   │   ├── index.html
        │   │   └── teste
        │   │       └── index.html
        │   └── index.html
        └── novidades.conf

# Documentação do Projeto

## Estrutura do Projeto

Este projeto segue uma arquitetura baseada em microserviços, onde cada funcionalidade é dividida em módulos independentes. A finalidade dessa abordagem é facilitar a manutenção, escalabilidade e desenvolvimento de novas funcionalidades.

### Estrutura de Diretórios

A estrutura do projeto está organizada da seguinte maneira:

```
├── conf.d
├── estrutura_projeto.txt
├── html
│   ├── erro
│   │   ├── index.css
│   │   ├── index.html
│   │   └── index.js
│   ├── index.html
│   └── teste
│       └── index.html
├── index.html
├── load-balancer.conf
├── mime.types
├── nginx.conf
├── noticias.conf
├── novidades.conf
└── servidores
    └── microservicos
        ├── html
        │   └── index.html
        ├── noticias
        │   ├── html
        │   │   ├── erro
        │   │   │   ├── index.css
        │   │   │   ├── index.html
        │   │   │   └── index.js
        │   │   ├── index.html
        │   │   └── teste
        │   │       └── index.html
        │   └── index.html
        ├── noticias.conf
        ├── novidades
        │   ├── html
        │   │   ├── erro
        │   │   │   ├── index.css
        │   │   │   ├── index.html
        │   │   │   └── index.js
        │   │   ├── index.html
        │   │   └── teste
        │   │       └── index.html
        │   └── index.html
        └── novidades.conf
```

### Descrição dos Diretórios e Arquivos

- `conf.d`: Diretório para arquivos de configuração gerais.
- `estrutura_projeto.txt`: Arquivo de texto contendo a descrição da estrutura do projeto.
- `html`: Diretório raiz para arquivos HTML.
  - `erro`: Contém arquivos relacionados a páginas de erro.
    - `index.css`: Folha de estilo CSS para a página de erro.
    - `index.html`: Página de erro principal.
    - `index.js`: Script JavaScript para a página de erro.
  - `teste`: Contém arquivos HTML para testes.
    - `index.html`: Página HTML de teste.
  - `index.html`: Página HTML principal do projeto.
- `index.html`: Página HTML principal na raiz do projeto.
- `load-balancer.conf`: Arquivo de configuração do balanceador de carga.
- `mime.types`: Arquivo de tipos MIME.
- `nginx.conf`: Arquivo de configuração do servidor Nginx.
- `noticias.conf`: Arquivo de configuração específico para o microserviço de notícias.
- `novidades.conf`: Arquivo de configuração específico para o microserviço de novidades.
- `servidores`: Diretório para servidores e microserviços.
  - `microservicos`: Diretório contendo os diferentes microserviços.
    - `html`: Contém a página HTML do microserviço.
      - `index.html`: Página HTML do microserviço.
    - `noticias`: Diretório do microserviço de notícias.
      - `html`: Contém arquivos HTML específicos do microserviço de notícias.
        - `erro`: Contém arquivos de erro específicos do microserviço de notícias.
          - `index.css`: Folha de estilo CSS para a página de erro.
          - `index.html`: Página de erro do microserviço de notícias.
          - `index.js`: Script JavaScript para a página de erro.
        - `index.html`: Página HTML principal do microserviço de notícias.
        - `teste`: Contém arquivos HTML de teste para o microserviço de notícias.
          - `index.html`: Página HTML de teste do microserviço de notícias.
      - `index.html`: Página HTML principal do microserviço de notícias.
      - `noticias.conf`: Arquivo de configuração do microserviço de notícias.
    - `novidades`: Diretório do microserviço de novidades.
      - `html`: Contém arquivos HTML específicos do microserviço de novidades.
        - `erro`: Contém arquivos de erro específicos do microserviço de novidades.
          - `index.css`: Folha de estilo CSS para a página de erro.
          - `index.html`: Página de erro do microserviço de novidades.
          - `index.js`: Script JavaScript para a página de erro.
        - `index.html`: Página HTML principal do microserviço de novidades.
        - `teste`: Contém arquivos HTML de teste para o microserviço de novidades.
          - `index.html`: Página HTML de teste do microserviço de novidades.
      - `index.html`: Página HTML principal do microserviço de novidades.
      - `novidades.conf`: Arquivo de configuração do microserviço de novidades.

## Configuração e Deploy

### Configuração

1. **Servidor Nginx**:
   
   - Configure o arquivo `nginx.conf` com as definições básicas do servidor.
   - Inclua os arquivos de configuração dos microserviços (`noticias.conf`, `novidades.conf`) no arquivo principal `nginx.conf` ou no diretório `conf.d`.

3. **Balanceador de Carga**:

   - Configure o arquivo `load-balancer.conf` para definir as regras de balanceamento de carga entre os microserviços.

4. **Tipos MIME**:

   - O arquivo `mime.types` deve ser configurado para suportar todos os tipos de conteúdo que serão servidos pelo servidor.

### Deploy

1. **Estrutura de Diretórios**:

   - Certifique-se de que todos os diretórios e arquivos estão corretamente organizados conforme a estrutura descrita acima.

2. **Configurações dos Microserviços**:

   - Cada microserviço deve ter sua própria configuração (`noticias.conf`, `novidades.conf`) e seus arquivos HTML, CSS e JavaScript devidamente organizados nos diretórios correspondentes.

3. **Iniciar o Servidor**:

   - Utilize os comandos apropriados para iniciar o servidor Nginx e garantir que todas as configurações sejam carregadas corretamente.

### Manutenção

A estrutura modular do projeto facilita a manutenção, permitindo que alterações em um microserviço específico não impactem os outros. Para realizar atualizações ou corrigir bugs, siga estas etapas:

1. **Identificação do Microserviço**:

   - Localize o microserviço que precisa de manutenção na estrutura de diretórios.

2. **Aplicação das Alterações**:

   - Faça as modificações necessárias nos arquivos de configuração ou código fonte do microserviço.

3. **Testes**:

   - Realize testes nos microserviços alterados para garantir que as mudanças não introduziram novos bugs.

4. **Deploy das Alterações**:

   - Após validar as alterações, faça o deploy das mudanças no ambiente de produção.

Essa abordagem modular(dividido em pastas) garante que o sistema seja escalável e fácil de gerenciar, permitindo adicionar novas funcionalidades ou modificar as existentes sem grandes dificuldades.

5. **Observação**

   - Os arquivos HTML foram criados apenas com o objetivo de testar as funcionalidades, por isso possuem apenas textos simples, já que o objetivo do projeto é a configuração do servidor NGINX. Apenas a página de erro está um pouco mais incrementada. O HTML foi elaborada pela codepan, pelo link https://codepen.io/Navedkhan012/pen/vrWQMY. Apenas ajustes básicos foram feitos para que o servidor pudesse ler o arquivo.



## 🔧 Ferramentas utilizadas no projeto:

* [Nginx](https://www.nginx.com/) - O servidor web usado
* [Docker](https://www.docker.com/) - Software utilizado
* [Openssl](https://sadique.io/blog/2012/06/05/managing-security-certificates-from-the-console-on-windows-mac-os-x-and-linux/) - Ferramenta para gerar certificado.

## 🖇️ Colaborando

***

## 📌 Versão

Nós usamos [Git](https://git-scm.com/) para controle de versão. 

## ✒️ Autores

* **Jéssica Milene** - *Trabalho Inicial* - (https://github.com/jmillene)

