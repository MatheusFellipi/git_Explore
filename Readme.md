# Fundamentos de react

- primeiro projeto

  - inicializar o repositório.

    ```bash
    yarn init -y
    ```

  - instalar o react.

    ```bash
      yarn add react
    ```

    - instalar o react-dom

      - e para que o react sabe como se comunicar com a árvore dom do html criar delatar.

      ```bash
        yarn add react
      ```

    - estrutura de pasta.

      - src -> onde fica todos os códigos da aplicação.

      - public -> arquivo ou assets publico (qualquer arquivo que precisa ser asseto por meio externo)
        - HTML

## Configurando o babel

O babel e para convertei o código para o ambienta da programacao para que os navegador entenda o códigos

- CLI -> pode executar babel pela a linha de comando
- Core -> biblioteca do babel 90% das funcionalidade esta aqui
- preset-env -> identifica qual e o ambiente para convertei o código melhor forma possível

```bash
  yarn add @babel/core @babel/cli @babel/preset-env -D

```

- para o babel reconhece o html dentro do js e necessário instalar o preset-react, assim entende o o html no arquivos js

```bash
  yarn add @babel/preset-react -D
```

## Configurando o webpack

```bash
  yarn add webpack webpack-cli webpack-dev-server  -D

```

## Estrutura React js

essa parte configuramos o index.html no public para receber toto os elemento criando no react para aparecer no DOM da web.
com um div com o id root serai a raiz de todo os elementos

- webpack server ele atualiza a pagina sem precisa roda o webpack

- source map
  - Visualiza o código original da aplicação mesmo quando o código esta no bundle js

## Ambiente dev e ambiente de produção

NODE_ENV variável de ambiente para a execução do projeto tanto em ambiente de produção como de dev.

# Propriedade

- o React coloca todas as propriedade em um variável `props` para que o components pode receber ou enviar informação

# Estado do componentes

- por padrao o react nao fica monitorado as variable para ver se ele ouve alteração de dados para exibido na tela, como o angula -v 1.3 ele fazia isso com o nome de two-way data.

- no react ele usa os estado assim ele nao olha todas as variável da aplicação para ver se foi alterado.
  - hook

### Imutabilidade

- a imutabilidade o valor nao pode alterado
  diretamente mais pode receber um novo valor

## useEffect

dispara uma função quando algo acontecer na aplicação.

```react
  useEffect(()=>{
    // o que eu quero executar
},[//quando eu quero executar])
```

cuidado para nao deixa o useEffect sem o secundo parâmetro
