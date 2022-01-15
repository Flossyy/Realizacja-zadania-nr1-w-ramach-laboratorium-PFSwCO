# Realizacja-zadania-nr1-w-ramach-laboratorium-PFSwCO
### Aplikacja opiera się o zadanie 9 z laboratorium.
Zmiany wprowadzone w programie:
- Routing
- Lokalizacja w której pojawia się aplikacja obliczająca wartości ciągu fibonaciego
- Zmiana portu nginx na 3000, przez co aplikację zobaczymy po uruchomieniu na stronie localhost:3000
- Zmiany w Fib:
    - Aplikacja odświeża wartości przed "setState" dzięki czemu jest w pełni responsywna bez odświeżania strony
    - W historii wyświetla się 10 ostatnich wartości po nacisnięciu przycisku "historia"
    - Największa liczbą jaką można wysłać jest 20, zmiana ta jest po stronie serwera

### Uruchomienie aplikacji
W celu uruchomienia aplikacji otwieramy w terminalu katalog w którym się znajdują pobrane pliki.
Pierwszym sposobem jest wywołanie komendy:
```bash
docker compose up --build
```
Drugim jest wywołanie skryptu start.sh (wcześniej trzeba nadać możliwość uruchomienia skryptu):
```bash
chmod u+x start.sh
./start.sh
```
W celu zakończenia pracy rzy drugiej metodzie jeśli środowisko nie otworzy termianlu w którym potem możemy zakończyć działanie programu możemy użyć komendy:
```bash
docker compose down
```
### Dowód działania aplikacji:
![alt text](https://github.com/Flossyy/Realizacja-zadania-nr1-w-ramach-laboratorium-PFSwCO/blob/e54b0a97d1ccc92df978eccda19c25a2eef534f1/img.png)
