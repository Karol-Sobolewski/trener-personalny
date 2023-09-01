import Head from "next/head";
import Link from "next/link";
import Main from "../components/layout/Main";

export default function GDPRPage() {
  return (
    <>
      <Head>
        <title>Polityka prywatności - Warszawa Mokotów - Radek Trener</title>
        <meta
          name="description"
          content="Zapoznaj się z polityką prywatności - Dowiedz się, jakie informacje gromadzimy, jak je wykorzystujemy i chronimy. Nasza kompleksowa polityka prywatności zapewnia klarowne wytyczne dotyczące ochrony Twoich danych osobowych. Przeczytaj, aby dowiedzieć się, jak dbamy o Twoją prywatność."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#b91c1c" />
      </Head>
      <Main>
        <div className="mx-auto max-w-screen-xl pt-12 md:pt-16">
          <h1 className="text-4xl text-center tracking-tight font-extrabold text-gray-900">
            Polityka Prywatności
          </h1>
          <section className="text-gray-900 relative">
            <div className="absolute -top-12 left-0" id="dlaczegoja" />
            <div className="max-w-screen-xl px-8 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 flex flex-col justify-center items-center align-middle">
              <div className="max-w-screen-md flex flex-col justify-center items-left align-middle ">
                <ol className="list-decimal text-3xl font-bold px-4 py-8">
                  <li>
                    Informacje ogólne
                    <ul className="text-lg mt-4 mb-4 font-normal list-decimal">
                      <li>
                        Niniejsza polityka dotyczy Serwisu www, funkcjonującego
                        pod adresem url:{" "}
                        <Link href="/">
                          <strong>radeksenski.pl</strong>
                        </Link>
                      </li>
                      <li>
                        Operatorem serwisu oraz Administratorem danych osobowych
                        jest: Radosław Senski Trener ul.&nbsp;Okulickiego
                        7/23,&nbsp;85-794, Bydgoszcz.
                      </li>
                      <li>
                        Adres kontaktowy poczty elektronicznej operatora:{" "}
                        <Link
                          href="mailto:kontakt@radeksenski.pl?subject=Kontakt w sprawie polityki prywatności."
                          target="_blank"
                        >
                          kontakt@radeksenski.pl
                        </Link>
                      </li>
                      <li>
                        Operator jest Administratorem Twoich danych osobowych
                        w&nbsp;odniesieniu do danych podanych dobrowolnie
                        w&nbsp;Serwisie.
                      </li>
                      <li>
                        Serwis wykorzystuje dane osobowe w&nbsp;następujących
                        celach:
                        <ul className="list-disc ml-8">
                          <li>Obsługa zapytań przez formularz</li>
                        </ul>
                      </li>
                      <li>
                        Serwis realizuje funkcje pozyskiwania informacji
                        o&nbsp;użytkownikach i&nbsp;ich zachowaniu
                        w&nbsp;następujący sposób:
                        <ul className="list-disc ml-8">
                          <li>
                            Poprzez dobrowolnie wprowadzone w&nbsp;formularzach
                            dane, które zostają wprowadzone do systemów
                            Operatora.
                          </li>
                          <li>
                            Poprzez zapisywanie w&nbsp;urządzeniach końcowych
                            plików cookie (tzw. „ciasteczka”).
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Wybrane metody ochrony danych stosowane przez&nbsp;Operatora
                    <ul className="text-lg mt-4  mb-4  font-normal list-decimal">
                      <li>
                        Miejsca logowania i&nbsp;wprowadzania danych osobowych
                        są chronione w&nbsp;warstwie transmisji (certyfikat
                        SSL). Dzięki temu dane osobowe i&nbsp;dane logowania,
                        wprowadzone na stronie, zostają zaszyfrowane
                        w&nbsp;komputerze użytkownika i&nbsp;mogą być odczytane
                        jedynie na docelowym serwerze.
                      </li>
                      <li>
                        Operator okresowo zmienia swoje hasła administracyjne.
                      </li>
                      <li>
                        W&nbsp;celu ochrony danych Operator regularnie wykonuje
                        kopie bezpieczeństwa.
                      </li>
                      <li>
                        Istotnym elementem ochrony danych jest regularna
                        aktualizacja wszelkiego oprogramowania, wykorzystywanego
                        przez Operatora do przetwarzania danych osobowych, co
                        w&nbsp;szczególności oznacza regularne aktualizacje
                        komponentów programistycznych.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>Hosting</p>
                    <ul className="text-lg mt-4  mb-4  font-normal list-decimal">
                      <li>
                        Serwis jest hostowany (technicznie utrzymywany) na
                        serwerach operatora: Vercel.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Twoje prawa i&nbsp;dodatkowe informacje o&nbsp;sposobie
                    wykorzystania danych
                    <ul className="text-lg mt-4  mb-4  font-normal list-decimal">
                      <li>
                        W niektórych sytuacjach Administrator ma prawo
                        przekazywać Twoje dane osobowe innym odbiorcom, jeśli
                        będzie to niezbędne do wykonania zawartej z&nbsp;Tobą
                        umowy lub do zrealizowania obowiązków ciążących na
                        Administratorze. Dotyczy to takich grup odbiorców:
                        <ul className="list-disc ml-8">
                          <li>
                            upoważnieni pracownicy i&nbsp;współpracownicy,
                            którzy korzystają z&nbsp;danych w&nbsp;celu
                            realizacji celu działania strony
                          </li>
                        </ul>
                      </li>
                      <li>
                        Twoje dane osobowe przetwarzane przez Administratora nie
                        dłużej, niż jest to konieczne do wykonania związanych
                        z&nbsp;nimi czynności określonych osobnymi przepisami
                        (np. o&nbsp;prowadzeniu rachunkowości).
                        W&nbsp;odniesieniu do danych marketingowych dane nie
                        będą przetwarzane dłużej niż przez 3 lata.
                      </li>
                      <li>
                        Przysługuje Ci prawo żądania od Administratora:
                        <ul className="list-disc ml-8">
                          <li>
                            dostępu do danych osobowych Ciebie dotyczących,
                          </li>
                          <li>ich sprostowania,</li>
                          <li>usunięcia,</li>
                          <li>ograniczenia przetwarzania,</li>
                          <li>oraz przenoszenia danych.</li>
                        </ul>
                      </li>
                      <li>
                        Przysługuje Ci prawo do złożenia sprzeciwu
                        w&nbsp;zakresie przetwarzania wskazanego w&nbsp;pkt 3.3
                        c) wobec przetwarzania danych osobowych w&nbsp;celu
                        wykonania prawnie uzasadnionych interesów realizowanych
                        przez Administratora, w&nbsp;tym profilowania, przy czym
                        prawo sprzeciwu nie będzie mogło być wykonane
                        w&nbsp;przypadku istnienia ważnych prawnie uzasadnionych
                        podstaw do przetwarzania, nadrzędnych wobec Ciebie
                        interesów, praw i&nbsp;wolności, w&nbsp;szczególności
                        ustalenia, dochodzenia lub obrony roszczeń.
                      </li>
                      <li>
                        Na działania Administratora przysługuje skarga do
                        Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki
                        2,&nbsp;00-193 Warszawa.
                      </li>
                      <li>
                        Podanie danych osobowych jest dobrowolne, lecz niezbędne
                        do obsługi Serwisu.
                      </li>
                      <li>
                        W&nbsp;stosunku do Ciebie mogą być podejmowane czynności
                        polegające na zautomatyzowanym podejmowaniu decyzji,
                        w&nbsp;tym profilowaniu w&nbsp;celu świadczenia usług
                        w&nbsp;ramach zawartej umowy oraz w&nbsp;celu
                        prowadzenia przez Administratora marketingu
                        bezpośredniego.
                      </li>
                      <li>
                        Dane osobowe nie są przekazywane od krajów trzecich
                        w&nbsp;rozumieniu przepisów o&nbsp;ochronie danych
                        osobowych. Oznacza to, że nie przesyłamy ich poza teren
                        Unii Europejskiej.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Informacje w&nbsp;formularzach
                    <ul className="text-lg mt-4   mb-4 font-normal list-decimal">
                      <li>
                        Serwis zbiera informacje podane dobrowolnie przez
                        użytkownika, w&nbsp;tym dane osobowe, o&nbsp;ile zostaną
                        one podane.
                      </li>
                      <li>
                        Serwis może zapisać informacje o&nbsp;parametrach
                        połączenia (oznaczenie czasu, adres IP).
                      </li>
                      <li>
                        Serwis, w&nbsp;niektórych wypadkach, może zapisać
                        informację ułatwiającą powiązanie danych
                        w&nbsp;formularzu z&nbsp;adresem e-mail użytkownika
                        wypełniającego formularz. W&nbsp;takim wypadku adres
                        e-mail użytkownika pojawia się wewnątrz adresu url
                        strony zawierającej formularz.
                      </li>
                      <li>
                        Dane podane w&nbsp;formularzu są przetwarzane
                        w&nbsp;celu wynikającym z&nbsp;funkcji konkretnego
                        formularza, np. w&nbsp;celu dokonania procesu obsługi
                        zgłoszenia serwisowego lub kontaktu handlowego,
                        rejestracji usług&nbsp;itp. Każdorazowo kontekst
                        i&nbsp;opis formularza w&nbsp;czytelny sposób informuje,
                        do czego on służy.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Logi Administratora
                    <ul className="text-lg mt-4 mb-4  font-normal list-decimal">
                      <li>
                        Informacje zachowaniu użytkowników w&nbsp;serwisie mogą
                        podlegać logowaniu. Dane te są wykorzystywane
                        w&nbsp;celu administrowania serwisem.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>Istotne techniki marketingowe</p>
                    <ul className="text-lg mt-4 mb-4  font-normal list-decimal">
                      <li>
                        Operator stosuje analizę statystyczną ruchu na stronie,
                        poprzez Google Analytics (Google Inc. z&nbsp;siedzibą
                        w&nbsp;USA). Operator nie przekazuje do operatora tej
                        usługi danych osobowych, a&nbsp;jedynie zanonimizowane
                        informacje. Usługa bazuje na wykorzystaniu ciasteczek
                        w&nbsp;urządzeniu końcowym użytkownika. W&nbsp;zakresie
                        informacji o&nbsp;preferencjach użytkownika gromadzonych
                        przez sieć reklamową Google użytkownik może przeglądać
                        i&nbsp;edytować informacje wynikające z&nbsp;plików
                        cookies przy pomocy narzędzia: {` `}
                        <Link
                          href="https://www.google.com/ads/preferences/"
                          target="_blank"
                        >
                          https://www.google.com/ads/preferences/
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Informacja o&nbsp;plikach cookies
                    <ul className="text-lg mt-4 mb-4  font-normal list-decimal">
                      <li>Serwis korzysta z&nbsp;plików cookies.</li>
                      <li>
                        Pliki cookies (tzw. „ciasteczka”) stanowią dane
                        informatyczne, w&nbsp;szczególności pliki tekstowe,
                        które przechowywane są w&nbsp;urządzeniu końcowym
                        Użytkownika Serwisu i&nbsp;przeznaczone są do
                        korzystania ze stron internetowych Serwisu. Cookies
                        zazwyczaj zawierają nazwę strony internetowej,
                        z&nbsp;której pochodzą, czas przechowywania ich na
                        urządzeniu końcowym oraz unikalny numer.
                      </li>
                      <li>
                        Podmiotem zamieszczającym na urządzeniu końcowym
                        Użytkownika Serwisu pliki cookies oraz uzyskującym do
                        nich dostęp jest operator Serwisu.
                      </li>
                      <li>
                        Pliki cookies wykorzystywane są w&nbsp;następujących
                        celach:
                        <ul className="list-disc ml-8">
                          <li>
                            utrzymanie sesji użytkownika Serwisu (po
                            zalogowaniu), dzięki której użytkownik nie musi na
                            każdej podstronie Serwisu ponownie wpisywać loginu
                            i&nbsp;hasła;
                          </li>
                          <li>
                            realizacji celów określonych powyżej w&nbsp;części
                            "Istotne techniki marketingowe";
                          </li>
                        </ul>
                      </li>
                      <li>
                        W&nbsp;ramach Serwisu stosowane są dwa zasadnicze
                        rodzaje plików cookies: „sesyjne” (session cookies) oraz
                        „stałe” (persistent cookies). Cookies „sesyjne” są
                        plikami tymczasowymi, które przechowywane są
                        w&nbsp;urządzeniu końcowym Użytkownika do czasu
                        wylogowania, opuszczenia strony internetowej lub
                        wyłączenia oprogramowania (przeglądarki internetowej).
                        „Stałe” pliki cookies przechowywane są w&nbsp;urządzeniu
                        końcowym Użytkownika przez czas określony
                        w&nbsp;parametrach plików cookies lub do czasu ich
                        usunięcia przez Użytkownika.
                      </li>
                      <li>
                        Oprogramowanie do przeglądania stron internetowych
                        (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
                        przechowywanie plików cookies w&nbsp;urządzeniu końcowym
                        Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany
                        ustawień w&nbsp;tym zakresie. Przeglądarka internetowa
                        umożliwia usunięcie plików cookies. Możliwe jest także
                        automatyczne blokowanie plików cookies Szczegółowe
                        informacje na ten temat zawiera pomoc lub dokumentacja
                        przeglądarki internetowej.
                      </li>
                      <li>
                        Ograniczenia stosowania plików cookies mogą wpłynąć na
                        niektóre funkcjonalności dostępne na stronach
                        internetowych Serwisu.
                      </li>
                      <li>
                        Pliki cookies zamieszczane w&nbsp;urządzeniu końcowym
                        Użytkownika Serwisu wykorzystywane mogą być również
                        przez współpracujące z&nbsp;operatorem Serwisu podmioty,
                        w&nbsp;szczególności dotyczy to firm: Google (Google
                        Inc. z&nbsp;siedzibą w&nbsp;USA), Facebook (Facebook
                        Inc. z&nbsp;siedzibą w&nbsp;USA), Twitter (Twitter Inc.
                        z&nbsp;siedzibą w&nbsp;USA).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Zarządzanie plikami cookies – jak w&nbsp;praktyce wyrażać
                    i&nbsp;cofać zgodę?
                    <ul className="text-lg mt-4 mb-4  font-normal list-decimal">
                      <li>
                        Jeśli użytkownik nie chce otrzymywać plików cookies,
                        może zmienić ustawienia przeglądarki. Zastrzegamy, że
                        wyłączenie obsługi plików cookies niezbędnych dla
                        procesów uwierzytelniania, bezpieczeństwa, utrzymania
                        preferencji użytkownika może utrudnić,
                        a&nbsp;w&nbsp;skrajnych przypadkach może uniemożliwić
                        korzystanie ze stron www.
                      </li>
                      <li>
                        W&nbsp;celu zarządzania ustawienia cookies wybierz
                        z&nbsp;listy poniżej przeglądarkę internetową, której
                        używasz i&nbsp;postępuj zgodnie z&nbsp;instrukcjami:
                      </li>
                      <ul className="list-disc ml-8">
                        <li>
                          <Link
                            target="_blank"
                            href="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history"
                          >
                            Edge
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer"
                          >
                            Internet Explorer
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647"
                          >
                            Chrome
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="http://support.apple.com/kb/PH5042"
                          >
                            Safari
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek"
                          >
                            Firefox
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="http://help.opera.com/Windows/12.10/pl/cookies.html"
                          >
                            Opera
                          </Link>
                          <br />
                          Urządzenia mobilne:
                        </li>

                        <li>
                          <Link
                            target="_blank"
                            href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647"
                          >
                            Android
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL"
                          >
                            Safari (iOS)
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings"
                          >
                            Windows Phone
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </Main>
    </>
  );
}
