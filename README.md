
## Executar servidor
docker-compose build
docker-compose up
ou
docker-compose up -d --build

## iniciar a aplicação
npm init -y

## configuração do typescript
npm i typescript -D

### configure o build no arquivo package.json
"scripts": {
    "build": "tsc"
  }
## cria arquivo de configuração do typescript
npx tsc --init

## instalar mongoose para ts
npm i ts-mongoose mongoose @types/mongoose

## instalar o express
npm i express

## instalação da tipagem typescript no express
npm i @types/express -D

## instalar o cors
npm i cors

## instalação da tipagem do cors
npm i @types/cors -D

## instalar jsonwebtoken
npm i jsonwebtoken
npm i @types/jsonwebtoken -D

## instalar o bcrypt
npm i bcrypt

## mudar o module do arquivo tsconfig.json
 "module": "CommonJS",    
"moduleResolution": "node",     // para tirar os erros de comp

## executar o typescript
npm run build

## mudar o rootDir (local que aponta onde fica todo o código da aplicação)
"rootDir": "./src"

## mudar o outDir (para onde vão os arquivos transpilados e ts para js)
"outDir": "./build"

## para buildar com tsc sem precisar reiniciar o build novamente
npm i ts-node-dev -D



