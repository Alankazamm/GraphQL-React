# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com

## OBS.:
db.js:
    Conexão com o banco, linha 2 => usei .env e uma lib pra acessar meu .env com o url da conexão,
    Você pode deletá-las e substituir o 'URL' da linha 6 pelo seu url de conexão,

package.json:
    Versoes das dependencias com que o projeto consegue funcionar (até o momento) com 
    componentes e funções válidos nas novas versões do 'ApolloProvider', 'React-Router',
    etc.
    Copie as dependencias e dê um 'npm i' para instalar as versões, se necessário adcione
    a upstream '--force' caso não esteja baixando...

Webpack: 
    O webpack só suporta arquivos '.js', se deseja tentar mudar para aceitar '.jsx' modifique o
    'test' da linha 14 do webpack.config(porém talvez não seja suportado, dá para tentar atualizar
    alguns pacotes mas é bem burocrático);