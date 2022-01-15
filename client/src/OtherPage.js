import React from 'react';
import slice1 from './slice1.png'
import slice2 from './slice2.png'
import architecture from './architecture.png'
// eslint-disable-next-line
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <div style={{ paddingLeft: '30%', paddingRight: '30%' }}>
        <div style={{ textAlign: 'left' }}>
          <h3>Aplikacja opiera się o zadanie 9 z laboratorium.</h3>
          Zmiany wprowadzone w programie:<p />
          - Routing<p />
          - Lokalizacja w której pojawia się aplikacja obliczająca wartości ciągu fibonaciego<p />
          - Zmiana portu nginx na 3000, przez co aplikację uruchamiamy na porcie 3000<p />
          - Zmiany w Fib:
          <div style={{ paddingLeft: '20px' }}>
            <p>- Aplikacja odświeża wartości przed "setState" dzięki czemu jest w pełni responsywna bez odświeżania strony</p>
            <p>- W historii wyświetla się 10 ostatnich wartości po nacisnięciu przycisku "historia"</p>
            <p>- Największa liczbą jaką można wysłać jest 20, zmiana ta jest po stronie serwera</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Opis działania</h3>
        Aplikacja jest usługą wielokontenerową. System udostępnia 3 strony.
        <img src={architecture} alt='Architektura' /><p />
        Pierwsza jest nawigacyjna. Druga przedstawia kalkulator wyrazów ciągu Fibonaciego a na trzeciej znajduje się ten opis.
        Postgres przechowuje listę wszystkich wprowadzonych współczynników. Worker nasłuchuje
        wprowadzenie nowego współczynnika pobierając każdą wartość i przypisując jej wartość z ciągu
        i przekazuje do bazy Redis, który przechowuje wszystkie współczynniki i ich wartości w
        postaci: klucz-wartość. Zapytania z aplikacji trafiają do Redisa i jego odpowiedź jest formatowana i wyświetlana w historii.
      </div>
      <div>
        <h2>Przedstawienie najważnieszych zmian w kodzie:</h2>
        <h3>App.js</h3>
        <img src={slice1} alt='Porównanie z githuba' />
        <h3>Fib.js</h3>
        <img src={slice2} alt='Porównanie z githuba' />
      </div>
    </div>
  );
};
