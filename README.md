# Autenticação e Rotas
A lógica da autenticação está no arquivo src/contexts/authContext

Ao fazer login, é salvo o JWT nos cookies

# Rotas
No arquivo de rotas, é verificado se existe o JWT salvo nos cookies.
Caso exista o JWT, é considerado autenticado e pode acessar todas as rotas privadas, mas não as públicas.
Não estando autenticado, só é possível acessar as rotas públicas.

# Lógica de Refresh Token no frontend
Para fazer a lógica de refresh token e verificações de JWT válidos ou não, basta em todas as requisições ao backend
enviar o JWT.

Caso o JWT esteja inválido, o endpoint deve retornar um erro e assim o frontend faz a tentativa de refresh token. 

A lógica do refresh token é que dirá a possibilidade de renovação do token ou necessidade de logout para geração de um novo token
mediante fornecimento de credenciais.