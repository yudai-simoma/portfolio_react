import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import jp from './locales/jp.json';

i18n
  .use(LanguageDetector) // ブラウザの言語設定を検出
  .use(initReactI18next) // react-i18nextを初期化
  .init({
    resources: {
      en: {
        translation: en
      },
      jp: {
        translation: jp
      }
    },
    lng: "en", // デフォルト言語
    fallbackLng: "jp", // デフォルトの言語
    debug: true, // TODO:開発中はデバッグ情報を出力(開発後はflaseにする)
    interpolation: {
      escapeValue: false, // XSS対策を無効化（Reactが既に対応しているため）
    }
  });

export default i18n;

