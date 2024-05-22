# Projeto Prático Configuracão e Otimização do Servidor NGINX

2º Projeto Prático - DevOps

Configuração e Otimização do Servidor NGINX

Desafio

Configure e otimize um servidor NGINX para atuar como servidor web, proxy reverso e gateway de API. O projeto deve otimizar o desempenho, implementar HTTPS, configurar regras de proxy reverso e gerenciar servidores web seguros.


Etapas

a. Configuração Básica: Configure o NGINX para atuar como servidor web para um site ou aplicativo.

b. Proxy Reverso: Configure regras de proxy reverso para direcionar o tráfego para diferentes serviços ou aplicativos.

c. Segurança e HTTPS: Implemente HTTPS com certificados SSL/TLS e configure políticas de segurança.

d. Otimização de Desempenho: Aplique técnicas de otimização para melhorar o desempenho do NGINX.

e. Documentação: Documente a configuração e as decisões tomadas durante o projeto.


## 🚀 Começando

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

Docker
Nginx

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
Verifique se o servidor está ativo utilizando seu navegador e acessando localhost:porta (digite aqui a porta utilizada).

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

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

