# Projeto Marvel Utilizando a API

## Descrição do Projeto

Este projeto utiliza a API da Marvel para desenvolver uma aplicação em JavaScript e ReactJS, integrando o Node.js e Axios. O foco principal é recuperar informações sobre os personagens da Marvel, proporcionando uma experiência interativa e rica em conteúdo.

## Endpoints da API Marvel Comics

A API da Marvel oferece diversos endpoints. Os principais utilizados neste projeto incluem:

- **GET** - `/v1/public/characters`: Recupera uma lista de personagens da Marvel.
- **GET** - `/v1/public/characters/{characterId}`: Recupera informações detalhadas de um personagem específico.

### Exemplo de Uso da API

Para fazer uma requisição à API, a URL base é:
[Documentação da API Marvel](https://developer.marvel.com/docs)


A requisição deve incluir os seguintes parâmetros:

- **`ts`**: Timestamp (ex: `ts=1`)
- **`apikey`**: Sua chave de API pública (ex: `apikey=1234`)
- **`hash`**: Um valor MD5 gerado a partir da união do timestamp, da chave pública e da chave privada (ex: `hash=ffd275c5130566a2916217b101f26150`).

### Observações

- **Cadastro**: Para obter suas chaves pública e privada, é necessário se cadastrar no [site oficial da Marvel](https://www.marvel.com/signin).
- **Documentação**: Para mais informações sobre a API, consulte a [documentação da Marvel](https://developer.marvel.com/docs).


