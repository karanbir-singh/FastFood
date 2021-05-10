import { ConfigProvider } from 'antd';
import itIT from "antd/es/locale/it_IT";
import enUS from "antd/es/locale/en_US";
import * as moment from "moment";
import 'moment/locale/it';
import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Route } from 'react-router';
import './App.less';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';

export default function App() {
  // State del componente
  const [localstate, setState] = useState({
    locale: itIT,
    lang: 'it'
  });

  // Serve per settare una determinata lingua
  const changeLocale = (lang) => {
    const localeValue = lang === "it" ? itIT : enUS;
    moment.locale(lang);
    document.documentElement.lang = lang;
    setState({ locale: localeValue, lang });
  };

  // Dopo aver montato il componente, mette la lingua italiana
  useEffect(() => {
    changeLocale("it");
  }, [])

  return (
    <>
      <ConfigProvider locale={localstate.locale}>
        <IntlProvider locale={localstate.lang}>
          <BaseLayout>
            <Route exact path="/" component={Home} />
          </BaseLayout>
        </IntlProvider>
      </ConfigProvider>
    </>
  );
}
