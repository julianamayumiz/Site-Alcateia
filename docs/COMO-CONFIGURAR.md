# Como Configurar a API Key do Firebase

## Opção 1: Configuração Local (Mais Simples) ⭐

Após fazer o commit, edite o arquivo `firebase-config.js`:

```javascript
// Linha 8 do arquivo firebase-config.js
window.FIREBASE_API_KEY = window.FIREBASE_API_KEY || "AIzaSyBqn10ZjuimbifYx_3813caY-s9boS7FKM";
```

**IMPORTANTE:** 
- ✅ Faça isso APENAS na sua máquina local
- ❌ NÃO commite este arquivo com a key
- 💡 Adicione `firebase-config.js` ao `.gitignore` se quiser evitar commits acidentais

## Opção 2: Arquivo Separado (Mais Seguro)

1. Crie um arquivo `firebase-key.js` (fora do controle de versão):

```javascript
// firebase-key.js
window.FIREBASE_API_KEY = "AIzaSyBqn10ZjuimbifYx_3813caY-s9boS7FKM";
```

2. Adicione ao `.gitignore`:
```
firebase-key.js
```

3. Carregue antes do `firebase-config.js` no HTML:
```html
<script src="firebase-key.js"></script>
<script src="firebase-config.js"></script>
```

## Opção 3: Configuração Inline no HTML

Adicione antes do `firebase-config.js`:

```html
<script>
  window.FIREBASE_API_KEY = "AIzaSyBqn10ZjuimbifYx_3813caY-s9boS7FKM";
</script>
<script src="firebase-config.js"></script>
```

## Para Outros Desenvolvedores

Compartilhe a API key de forma segura (não por email/chat público):
- Use gerenciador de senhas compartilhado
- Mensagem direta criptografada
- Documento interno seguro

## Verificação

Após configurar, abra o console do navegador (F12) e verifique:
```javascript
console.log(window.FIREBASE_API_KEY); // Deve mostrar a key
```

Se aparecer a key, está funcionando! ✅