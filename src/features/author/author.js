import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O Autorze" />
    <Section
      title="Dawid Gałęski"
      body={
        <>
          <p>
            Witam, nazywam się Dawid Gałęski i jako początkujący programista mam
            zasczyt i przyjemność gościć was w mojej skromnej liście zadań. Moje
            zainteresowanie programowaniem narodziło się niespełna 2 lata temu,
            kiedy inspirowany możliwościami jakie daje praca programisty
            zacząłem zgłębiać temat i natknąłem się na webinnar Youcode na
            youtube.
          </p>
          <p>
            Na co dzień zajmuję się handlem, te kilka lat psychicznie wymęczyło
            mnie niesamowicie, zatem przyszedł czas na zmiany. Wiąże duże
            nadzieję na pracę w branży IT, zacząłem trochę za późno ale przecież
            wszystko jest możliwe i ponoć nigdy nie jest za późno. Fascynują
            mnie podróże zatem praca zdalna wydaje się być stworzona dla osób,
            które pragną podróżować.
          </p>
          <p>
            Po za podróżami, które niewątpliwie odgrywają kluczową rolę w moim
            życiu warto też zwrócić uwagę na rzeczy takie jak:
            <ul>
              <li>Piłka Nożna</li>
              <li>Survival</li>
              <li>Gry planszowe i karciane</li>
            </ul>
            które mają swoje specjalne miejsce w moim serduszku. W przyszłości
            bardzo chciałbym połączyć ten ostatni podpunkt właśnie z
            programowaniem, liczę że połączenie gier planszowych i karcianych z
            aplikacją na telefon wprowadzi fajne rozszerzenie tego typu gier i
            otworzy dużo ciekawych możliwości, mam już kilka wstępnych pomysłów,
            wierzę że uda się coś zdziałać w tym temacie, jednak najpierw trzeba
            zejść z obłoków na ziemię, bo przede mną jeszcze dużo nauki.
          </p>
        </>
      }
    />
  </Container>
);
