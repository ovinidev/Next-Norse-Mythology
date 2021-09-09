# NextJS

Repositório dedicado aos estudos de Next e Typescript.

## **O que é o Next.js?**

https://drive.google.com/file/d/1q5Q7OzXsdoZG4-Fcl7kV6BzTdxZVGOfa/view?usp=sharing

### 👨🏻‍💻 Technologies:

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="60"> &nbsp;
<img src="https://camo.githubusercontent.com/fc9113cfa08cba6a731800ded8a98f520e484a5ea5777671964a66b9779a8692/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3531322f747970657363726970742d313137343936352e706e67" alt="imagem" width="60"> &nbsp;

<hr>

**SPA(Single Page Application)** = Toda interface é construída no front end, 
toda mudança de rota continua na mesma página.(Create react app).

**SSR(Server Side Rendering)** = O SSR pode fornecer aos usuários um carregamento mais eficiente da aplicação, já que parte da renderização é feita no servidor. Ou seja, o Next consegue rodar código front-end no lado do servidor.

**SSG(Static Site Generators)** = O html é gerado no momento de execução e será reutilizado a cada request. O site estático é hospedado no servidor como ele é e, quando requisitado, é enviado para o usuário final. Essa hospedagem precisa de muito menos processador, memória e talvez até mesmo espaço em disco.(Gatsby).

<hr>

<p align="center">
  
## **Instalando o node.js:**

https://github.com/nodesource/distributions/blob/master/README.md
  
```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
 
sudo apt-get install -y nodejs
```
  
## **Para instalar o Yarn:**
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  
sudo apt update
sudo apt-get install --no-install-recommends yarn
  
yarn install
```
## **Criando um projeto Next.js:**
  
```
yarn create next-app . 
  
yarn dev
```

## **Criando uma build do projeto:**
  
```
yarn build 
  
yarn start
```
 
## **Para instalar o EsLint:**
```
yarn add eslint -D

yarn eslint --init
```
  
## **Para instalar o styled components:**

https://drive.google.com/file/d/1_dwKq3IqFhvGs14AyrMZ9z9RiMa1ZeTk/view?usp=sharing

