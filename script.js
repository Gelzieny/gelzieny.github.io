document.getElementById('button_switch').addEventListener('click', () => {
  const html = document.documentElement;
  const button = document.getElementById('button_switch');

  // Alternar tema
  html.classList.toggle('light');

  // Alterar posição do botão
  if (html.classList.contains('light')) {
    button.style.right = 'auto'; // Remove o alinhamento à direita
    button.style.left = '0';     // Alinha o botão à esquerda
  } else {
    button.style.left = 'auto';  // Remove o alinhamento à esquerda
    button.style.right = '0';    // Alinha o botão à direita
  }
});

let translations = {
  "pt": {
    "profile": "Perfil",
    "links": {
      "portfolio": "Veja meu portfólio",
      "contact": "Entre em contato",
      "blog": "Veja meu blog"
    },
    "footer": "Feito com ♥ pela Gelzieny",
    "theme_toggle": "Alternar tema"
  },
  "en": {
    "profile": "Profile",
    "links": {
      "portfolio": "View my portfolio",
      "contact": "Contact me",
      "blog": "View my blog"
    },
    "footer": "Made with ♥ by Gelzieny",
    "theme_toggle": "Toggle theme"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  }

  async function loadTranslations(language) {
    // Atualiza os elementos da página
    document.querySelectorAll('[data-key]').forEach((element) => {
      const key = element.getAttribute('data-key');
      const translation = getNestedTranslation(translations[language], key);

      if (translations) {
        element.textContent = translation;
      }
    });
  }

  // Configuração inicial
  let currentLanguage = 'pt'; // Idioma padrão
  loadTranslations(currentLanguage);

  // Alternar idioma
  document.getElementById('pt-btn').addEventListener('click', () => {
    currentLanguage = 'pt';
    loadTranslations(currentLanguage);
  });

  document.getElementById('en-btn').addEventListener('click', () => {
    currentLanguage = 'en';
    loadTranslations(currentLanguage);
  });

  console.log('===', loadTranslations(currentLanguage))
});