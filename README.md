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
Verifique se o servidor está ativo utilizando seu navegador e acessando localhost:porta (digite aqui a porta utilizada).

## 📦 Implantação

Para implantar o servidor em um sistema ativo, siga as práticas recomendadas de segurança e monitore o desempenho regularmente.

Baseado nos conceitos de servidor e em particular o nginx, foram utilizada os conceitos de proxy reverso, soliciytações HTTP e HTPPs, Balanceamento de carga(load-balancer), e a estrutura de microserviços.

## Nginx :

NGINX é um servidor web open source de alta performance que entrega o conteúdo estático de um site de forma rápida e fácil de configurar. Oferece recursos de balanceamento de cargas, proxy reverso e streaming, além de gerenciar milhares de conexões simultâneas. O resultado disso é maior velocidade e escalabilidade. Além de entregar conteudos estáticos de maneira rapidá e eficiente.

## Proxy Reverso :
Um proxy reverso é um servidor que fica na frente dos servidores web e encaminha as solicitações do cliente (por exemplo, navegador web) para esses servidores web. Os proxy reversos normalmente são implementados para ajudar a aumentar a segurança, o desempenho e a confiabilidade. Dessa forma ele foi utilizado no projeto afim de quando o lado do cliente envia uma requisição ela não é direcionada no primeiro momento ao servidor, ela passa pelo proxy reverso onde o conteúdo é analisado de acordo com as regras de negócios definidas e depois disso encaminhada a um dos servidores.

![image](https://github.com/jmillene/Projeto-Pratico-Configuracao-e-Otimizacao-do-Servidor-NGINX/assets/18409332/11d82de7-686f-4e65-b072-de29816da60b)

## Solicitações HTTP e HTTPs



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

