# API-de-Times-de-futebol-e-Jogadores
Desafio Acelera Jovem Back End 2º Trimestre

## Requisitos
- Você deverá criar um projeto de API utilizando Node.JS + Express + Typescript.
- O projeto se trata de uma API que faz o gerenciamento de times de futebol e seus jogadores.
    - Campos da entidade jogador
        
        ```tsx
        {
        	"id": string,
        	"team_id": string | null,
        	"name": string,
        	"age": number,
        	"position": "Goalkeeper" | "Defender" | "Midfielder" | "Forward"
        	"goals": number
        }
        ```
        
    - Campos da entidade time
        
        ```tsx
        {
        	"id": string,
        	"name": string,
        	"coach": string,
        	"stadium": string,
        	"city": string,
        }
        ```
        
- A API deve realizar as seguintes funcionalidades:
    - Cadastrar time de futebol (sem os jogadores, apenas informações sobre o time)
    - Listar todos os times
    - Listar time específico (e seus jogadores)
    
    - Cadastrar jogador em um time
    - Listar jogador específico
    - Remover jogador de um time (mas não apagar o registro do jogador)
    - Retornar um objeto com as seguintes informações do time:
        - Jogadores separados por posição. Ex:
        
        ```tsx
        {
        	"goalkeepers": [...],
        	"defenders": [...],
        	...
        }
        ```
        
        - Total de gols do time
        - Jogador com mais gols

- Fazer uso do banco de dados SQLite para salvar as informações
- Utilize a programação orientada a objetos para separar as responsabilidades da sua API

## Tecnologias utilizadas

- Express
- Typescript
- Typeorm
- Sqlite3    

# Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/janeluz/API-de-Times-de-Futebol-e-Jogadores

# entrar na pasta do projeto
cd API-de-Times-de-Futebol-e-Jogadores

# Instalar dependencias
yarn install

# executar o projeto
yarn dev
```


## Desenvolvido por :
Jane Rodrigues <br>
https://www.linkedin.com/in/janerodriguesluz





