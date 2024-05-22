import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { P } from "./styled";

export default () => (
  <Container>
    <Header title="O Autorze" />
    <Section
      title="Dawid Gałęski"
      body={
        <>
          <P>
            Nazywam się Dawid Gałęski i jako początkujący programista mam
            zaszczyt i przyjemność gościć was w mojej skromnej aplikacji{" "}
            <strong>lista zadań</strong>. Moje zainteresowanie programowaniem
            narodziło się niespełna 2 lata temu, kiedy inspirowany możliwościami
            jakie daje praca programisty zacząłem zgłębiać temat i natknąłem się
            na webinar Youcode na youtube.
          </P>
          <P>
            Na co dzień zajmuję się handlem, kilka lat w tej branży psychicznie
            wymęczyło mnie niesamowicie, zatem przyszedł czas na zmiany. Wiążę
            duże nadzieje na pracę w branży IT, zacząłem trochę za późno ale
            przecież wszystko jest możliwe i ponoć nigdy nie jest za późno.
            Fascynują mnie podróże, zatem praca zdalna wydaje się być stworzona
            dla osób, które pragną podróżować.
          </P>
          <P>
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
          </P>
        </>
      }
    />
  </Container>
);
