// Firebase Web SDK config
// A apiKey do Firebase Web é publica por design (identifica o projeto, nao autoriza acesso).
// A seguranca real vem das Security Rules (database.rules.json) e da restricao de
// dominio da API key no Google Cloud Console (HTTP referrers).
window.firebaseConfig = {
  apiKey: "AIzaSyBqn10Zjuimbifyx_3813caY-s9boS7FKM",
  authDomain: "alcateiakotick-db12b.firebaseapp.com",
  databaseURL: "https://alcateiakotick-db12b-default-rtdb.firebaseio.com",
  projectId: "alcateiakotick-db12b",
  storageBucket: "alcateiakotick-db12b.firebasestorage.app",
  messagingSenderId: "1038585867031",
  appId: "1:1038585867031:web:7ca99aa4523c4beda36552"
};

window.ALCATEIA_EMAIL_DOMAIN = "escoteiros.com";
