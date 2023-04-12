# Aplikacja MegaK Coursera

Projekt stworzony w celu zaliczeniowym kursu megaK. Aplikacja do tworzenia kursów internetowych.

## Aktualne możliwości

Aplikacja posiada 3 role: Admin, Instruktor, Student.

Student: Po zalogowaniu może przeglądać dowolny interesujący go kurs. Nie może usuwać, dodawać lekcji/kursów
Instruktor/Admin: Może tworzyć kursy i dodawać do nich lekcje. Może usuwać kursy (tylko swoje kursy).

### Czego nie udało się zrealizować:
Po stronie BE możemy dodawać/edytować/usuwać kursy oraz tak samo lekcje.
Po stronie FE możemy dodawać/usuwać kursy, dodawać lekcje. Nie udało się skończyc edytowania kusów/lekcji (nazwa, opis...)

Po stronie BE możemy dodawać obrazki do kursów (np. wysyłając go przez postmana), niestety po stronie FE ze względu na błędy
nie udało się tego zaimplementować (Funckja zostanie dodana w najbliższej przyszłości)

Po stronie FE text do lekcji jest dodawany przy użyciyu textArea. W najbliższej przyszłości zostanie zaimplementowany edytor tekstu
pozwalający załączyć obrazki.

Po FE w najbliższej przyszłości zostanie też zmodernizowana lekko szata graficzna (aby aplikacja wyglądała ładniej)

### Uruchomienie Aplikacji

1. Pobranie aplikacji z repozytorium
2. odpalenie komendy 'npm i'
3. odpalenie komendy 'npm start'

### Prezentacja wideo aplikacji

### Najbliższe udoskonalenia
1. Poprawa szaty graficznej
2. Zamiana textArea na edytor tekstu (Draftjs) aby dodawać w lepszy sposób kontent do lekcji
3. Dodanie możliwości po stronie FE edycji (opis, nazwy, kontent) dla kursu/lekcji




