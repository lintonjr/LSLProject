![LSLProject Logo](https://raw.githubusercontent.com/lintonjr/LSLProject/master/820.png)

`LSLProject` é um projeto pessoal para empresa que trabalho, visando a melhoria de alguns processos, começando com PCP.

**Pré-requisitos**
---
  + `Node.Js`
  + `$ NPM`

# Boilerplate Adonis

O Projeto vem pre-configurado com as seguintes dependências.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds
6. Mysql

**Instalação**
---

1. Clone do projeto
    + `$ npm install`
2. Configuração do banco de dados e do arquivo .ENV
![.ENV](https://raw.githubusercontent.com/lintonjr/LSLProject/master/820.png)
    + `$ adonis migration:run`

**Criação de novos Módulos**
---
Necessário Adonis Cli instalado

```
adonis make:model ModelName -m -c
```
Este comando é responsável pela criação da model, migration e controller.
No formato atual de API precisamos retirar do controller o create e edit.

As models com seus relacionamentos normalmente se parecem como a model de Item, localizada em App/Models/Item.js
![Model](https://raw.githubusercontent.com/lintonjr/LSLProject/master/820.png)
