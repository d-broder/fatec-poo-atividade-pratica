O primeiro projeto que recebeu investimento foi um sistema do tipo CLI (Command-Line Interface). O sistema 
foi batizado como PetLovers (PL). O PL foi pensando para gerenciar pet shops e/ou clínicas veterinárias.
Na Figura 1, pode-se observar o diagrama de classes e seus relacionamentos.
O sistema desenvolvido por eles contempla muito pouco do que você pensou para o PL – apenas é possível 
fazer o cadastro de algumas informações dos clientes, como nome, CPF e telefones. Por isso, você estabeleceu
novos requisitos funcionais, que você mesmo irá implementar. Eles são:
1. CRUD (Create, Read, Update e Delete) de clientes e seus respectivos Pets.
2. CRUD de produtos e serviços.
3. Registro de consumo dos produtos ou serviços que cada cliente adquiriu.
4. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
5. Listagem geral dos serviços ou produtos mais consumidos.
6. Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets.
7. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
Para este desenvolvimento não será necessário comunicação direta com um algum banco de dados ou 
qualquer outro software para armazenamento de dados. O sistema do tipo CLI irá armazenar os dados 
durante sua execução.