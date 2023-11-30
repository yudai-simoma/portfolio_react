import React from 'react';
import styles from './AboutPage.module.css';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
	// コンポーネントの内容
	const { t } = useTranslation();
  
	return (
		<div>
		  <h1>{t('Welcome to React')}</h1>
		  <div>About Page</div>
		</div>
	  );
};

export default AboutPage;
