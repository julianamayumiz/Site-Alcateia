# 🔒 Sistema de Proteção por Senha - Portal da Chefia

## 📋 O que foi implementado

Foi criado um sistema de proteção por senha para o Portal da Chefia, impedindo que os pais acessem acidentalmente essa área restrita.

### Arquivos criados/modificados:

1. **chefia-login.html** - Página de login com senha
2. **chefia-logout.js** - Script para botão de logout
3. **chefia.html** - Adicionada verificação de autenticação
4. **index.html** - Link atualizado para redirecionar ao login

## 🔑 Como funciona

1. Ao clicar em "Portal da Chefia" na página inicial, o usuário é redirecionado para a página de login
2. É necessário digitar a senha correta para acessar o portal
3. A autenticação é salva na sessão do navegador
4. Um botão "Sair" aparece no canto superior direito do portal da chefia
5. Ao fechar o navegador, a autenticação é perdida e será necessário fazer login novamente

## 🛠️ Como alterar a senha

### Método 1: Editar o arquivo chefia-login.html

1. Abra o arquivo `chefia-login.html`
2. Procure pela linha (aproximadamente linha 207):
   ```javascript
   const SENHA_CHEFIA = 'alcateia2024';
   ```
3. Altere `'alcateia2024'` para a senha desejada
4. Salve o arquivo

### Exemplo:
```javascript
const SENHA_CHEFIA = 'minhasenha123';
```

## 🔐 Senha padrão atual

**Senha:** `alcateia2024`

⚠️ **IMPORTANTE:** Altere esta senha para uma senha segura e compartilhe apenas com os membros da chefia!

## 📱 Funcionalidades

### Página de Login (chefia-login.html)
- ✅ Design responsivo e moderno
- ✅ Mensagem de erro animada para senha incorreta
- ✅ Link para voltar à página inicial
- ✅ Proteção visual com ícone de cadeado
- ✅ Autenticação salva na sessão do navegador

### Proteção do Portal (chefia.html)
- ✅ Verificação automática de autenticação
- ✅ Redirecionamento para login se não autenticado
- ✅ Botão de logout no canto superior direito
- ✅ Confirmação antes de sair

## 🎯 Fluxo de uso

```
Página Inicial (index.html)
    ↓
Clica em "Portal da Chefia"
    ↓
Página de Login (chefia-login.html)
    ↓
Digite a senha
    ↓
[Senha correta] → Portal da Chefia (chefia.html)
[Senha incorreta] → Mensagem de erro
```

## 🔄 Como fazer logout

1. Clique no botão "🚪 Sair" no canto superior direito
2. Confirme que deseja sair
3. Você será redirecionado para a página inicial

## 💡 Dicas de segurança

1. **Escolha uma senha forte** com letras, números e caracteres especiais
2. **Não compartilhe a senha** publicamente
3. **Altere a senha periodicamente**
4. **Não anote a senha** em locais visíveis
5. **Sempre faça logout** ao terminar de usar o portal

## 🐛 Solução de problemas

### Problema: Não consigo acessar mesmo com a senha correta
**Solução:** Limpe o cache do navegador ou tente em modo anônimo

### Problema: O botão de logout não aparece
**Solução:** Verifique se o arquivo `chefia-logout.js` está na mesma pasta que `chefia.html`

### Problema: Após fazer logout, ainda consigo acessar o portal
**Solução:** Feche completamente o navegador e abra novamente

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com o responsável técnico da Alcateia Kotick.

---

**Melhor Possível! 🐾**