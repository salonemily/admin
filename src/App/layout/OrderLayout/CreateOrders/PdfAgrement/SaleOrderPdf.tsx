import React, { Fragment } from "react";
import {
  Page,
  Text,
  StyleSheet,
  Document,
  PDFDownloadLink,
  Font,
  Note,
} from "@react-pdf/renderer";
//@ts-ignore
import font1 from "./font1.ttf";
//@ts-ignore
import font2 from "./font2.ttf";
import ISaleOrder from "../../../../models/saleOrders";
import { dataFormat } from "../../../../utilities/Additional";
// Create styles
Font.register({
  family: "Roboto Slab",
  fonts: [{ src: `${font1}` }, { src: `${font2}`, fontWeight: 600 }],
});
const styles = StyleSheet.create({
  section: {
    margin: 3,
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Roboto Slab",
    fontWeight: 600,
  },
  body: {
    fontFamily: "Roboto Slab",
    paddingTop: 28,
    paddingBottom: 60,
    paddingHorizontal: 30,
  },
  text: {
    marginTop: 6,
    marginBottom: 6,
    marginRight: 12,
    marginLeft: 12,
    fontFamily: "Roboto Slab",
    fontSize: 11,
  },
  bold: {
    fontSize: 11,
    fontFamily: "Roboto Slab",
    fontWeight: 600,
  },
  list: {
    fontSize: 11,
    textIndent: "1cm",
  },
});
// Create Document Component
const MyDoc: React.FC<{ data: ISaleOrder }> = ({ data }) => {
  const client = data.client
  const dress = data.weddingDress
  const order = data

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.section}>UMOWA SPRZEDAŻY SUKNI ŚLUBNEJ</Text>
        <Text style={styles.section}>
          zawarta w dniu {dataFormat(order.agreementDate)}, w Bydgoszczy pomiędzy :
        </Text>
        <Text style={styles.text}>
          <Note style={styles.bold}>Salonem Mody Ślubnej „Emily”</Note>,
          mieszczącym się w Bydgoszczy przy ul. Świętojańskiej 10,{" "}
          <Note style={styles.bold}> tel. 52 349 51 09 </Note> reprezentowanego
          przez <Note style={styles.bold}> Annę Traczykowską </Note>, zwaną
          dalej Sprzedawcą, a Kupującym:
        </Text>
        <Text style={styles.text}>
          <Note style={styles.bold}>{client.name}</Note>{" "}
          <Note style={styles.bold}>{client.surname}</Note>
        </Text>
        <Text style={styles.text}>ulica: {client.street}</Text>
        <Text style={styles.text}>miejscowość: {client.city}</Text>
        <Text style={styles.text}>
          tel.
          {client!.phoneNumber}. e-mail:{" "}
          <Note style={styles.bold}>{client.email}</Note>{" "}
          zwanym dalej Kupującym.
        </Text>

        <Text style={styles.section}>§1 PRZEDMIOT UMOWY</Text>
        <Text style={styles.text}>
          {" "}
          1.   Przedmiotem niniejszej umowy jest sprzedaż nowej sukni ślubnej o
          następujących parametrach:{" "}
        </Text>
        <Text style={styles.list}> 1. Nazwa sukni: {dress.producer}</Text>
        <Text style={styles.list}> 2. Kod towarowy sukni: {dress.name}</Text>
        <Text style={styles.list}> 3. Kolor sukni: {dress.color} </Text>
        <Text style={styles.list}>4. Rozmiar sukni: {dress.size}</Text>
        <Text style={styles.list}>
          5. Wymiary Kupującego w dniu podpisania biust: {dress.bustSize} talia: {dress.waistSize} biodra: {dress.hipsSize} wzrost: {dress.heightSize}
        </Text>
        <Text style={styles.list}> 6.Data ślubu: {dataFormat(order.weddingDate)} </Text>
        <Text style={styles.list}>
          {" "}
          7.Cena sukni wynosi: {order.orderComments}{" "}
        </Text>
        <Text style={styles.list}>
          {" "}
          8.Dodatkowe ustalenia pisemne: {order.orderComments}{" "}
        </Text>
        <Text style={styles.text}>
          2. Halka ślubna <Note style={styles.bold}>nie wchodzi</Note> w skład
          sukni ślubnej. Kupujący może ją wypożyczyć bądź nabyć za odrębną
          opłatą zgodną z aktualnym cennikiem Sprzedającego.
        </Text>
        <Text style={styles.section}>§2 ZAPŁATA CENY</Text>
        <Text style={styles.text}>
          1. Na poczet realizacji zamówienia określonego w § 1 Kupujący wpłaca w
          dniu podpisania niniejszej umowy zadatek w wysokości złotych.
        </Text>
        <Text style={styles.text}>
          2.Zadatek zostanie zaliczony na poczet ceny, o której mowa w § 1 ust.1
          pkt 7 a pozostała część ceny zostanie zapłacona najpóźniej w dniu
          odbioru przedmiotu umowy.
        </Text>
        <Text style={styles.text}>
          3. Cena sukni ujęta w § 1 ust. 1 pkt 7 jest ceną ustaloną ostatecznie
          i nie podlega negocjacji.
        </Text>
        <Text style={styles.section}>§ 3 ZMIANY DO ZAMÓWIENIA</Text>
        <Text style={styles.text}>
          Kupujący przyjmuje do wiadomości, że począwszy od dnia zawarcia
          niniejszej umowy, nie ma możliwości wprowadzenia zmian odnoszących się
          do przedmiotu umowy, indywidualnie określonego w § 1  ani też do
          uzgodnionych terminów odbioru, ustalonych zgodnie z  § 4 ust. 1.
        </Text>
        <Text style={styles.section}>§ 4 TERMIN REALIZACJI</Text>
        <Text style={styles.text}>
          {" "}
          1. Obie strony ustalają, że w terminie  pomiędzy a tutejszym Salonie
          nastąpią: niezbędne poprawki krawieckie polegające wyłącznie na
          dopasowaniu sukni do sylwetki i wzrostu Kupującego, a następnie
          najpóźniej w dniu odbiór końcowy zamówionej sukni ślubnej.{" "}
          {dress!.producer}
        </Text>
        <Text style={styles.text}>
          {" "}
          2. W przypadku, gdy Kupujący po upływie terminu wyznaczonego w § 4 pkt
          1 nie odbierze sukni, Sprzedawca może w ciągu 30 dni od upływu tego
          terminu odstąpić od umowy i dysponować swobodnie zamówioną a
          nieodebraną suknią ślubną. W takiej sytuacji wpłacony zadatek przepada
          na rzecz Sprzedawcy.{" "}
        </Text>
        <Text style={styles.section}>§5 POPRAWKI KRAWIECKIE</Text>
        <Text style={styles.text}>
          1. Poprawki krawieckie zostaną dokonane w uzgodnieniu i z udziałem
          Kupującego pomiędzy terminem nadejścia do Salonu zamówionej sukni
          (termin dostawy) a ustaloną w § 4 ust.1 datą odbioru końcowego sukni.
        </Text>
        <Text style={styles.text}>
          2. Niezbędne poprawki krawieckie są wykonywane na koszt Sprzedawcy.
        </Text>
        <Text style={styles.text}>
          3. Wszelkie inne poprawki, będące dodatkowym życzeniem Kupującego,
          mogą zostać wykonane za dodatkową opłatą ustaloną przez Sprzedawcę.
        </Text>
        <Text style={styles.text}>
          4. Zmiana wymiarów Kupującego w okresie po podpisaniu niniejszej umowy
          (np. wskutek ciąży, znacznego schudnięcia, znacznego przytycia)
          zwalnia Sprzedającego od odpowiedzialności za należyte wykonanie
          niezbędnych poprawek.
        </Text>
        <Text style={styles.section}>§ 6 POSTANOWIENIA KOŃCOWE</Text>
        <Text style={styles.text}>
          1. Umowę sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym
          dla każdej ze stron.
        </Text>
        <Text style={styles.text}>
          2. W sprawach nie uregulowanych niniejszą umową zastosowanie mają
          przepisy Kodeksu cywilnego.
        </Text>
        <Text style={styles.text}>
          ________________
          {
            "                                                                                                                            "
          }
          _________________
        </Text>
        <Text style={styles.text}>
          {"            "}Kupujący
          {
            "                                                                                                                                                      "
          }
          Sprzedający
        </Text>
        <Text style={styles.section}>
          Zgoda na przetwarzanie danych osobowych
        </Text>
        <Text style={styles.text}>
          1. Dane zawarte w umowie będą przetwarzane wyłącznie w celu realizacji
          zamówienia.
        </Text>
        <Text style={styles.text}>
          2. Podstawą do przetwarzania danych osobowych jest zgoda na
          przetwarzanie danych osobowych Kupującego (art.6 ust.1 lit b RODO).
          Podanie przez Kupującego danych jest dobrowolne, ale jest warunkiem
          realizacji zamówienia przez Sprzedawcę.
        </Text>
        <Text style={styles.text}>
          3. Dane osobowe kupującego będą przetwarzane przez czas realizacji
          zamówienia, a po tym czasie mogą być przetwarzane przez okres
          przedawnienia ewentualnych roszczeń.
        </Text>
        <Text style={styles.text}>
          Wyrażam zgodę na przetwarzanie moich danych osobowych w procesie
          realizacji zamówienia. Jednocześnie oświadczam, że zostałam
          poinformowana o przysługującym mi prawie dostępu do treści moich
          danych oraz ich poprawiania, wycofania zgody na ich przetwarzanie w
          każdym czasie, jak również, że podanie tych danych było dobrowolne.
        </Text>
        <Text style={styles.text}>___________</Text>
        <Text style={styles.text}>Kupujący</Text>
        <Text style={styles.text}>
          <Note style={styles.bold}>
            Potwierdzenie odbioru zamówienia do niniejszej umowy
          </Note>
        </Text>
        <Text style={styles.text}>
          Oświadczam, że odbierana przeze mnie suknia ślubna jest przygotowana
          zgodnie z moimi życzeniami, a wszelkie poprawki krawieckie i podpięcie
          do trenu (o ile dotyczy) wykonane są należycie. Suknia nie posiada
          żadnych defektów ani wad.
        </Text>
        <Text style={styles.text}>_____________</Text>
        <Text style={styles.text}>Data, podpis</Text>
      </Page>
    </Document>
  );
};
const SaleOrderPdf: React.FC<{ data: ISaleOrder }> = ({ data }) => {
  return (
    <Fragment>
      <PDFDownloadLink document={<MyDoc data={data} />} fileName="umowa" className="pdf-button">
        {({ blob, url, loading, error }) =>
          loading ? "Ładowanie umowy..." : "Pobierz PDF!"
        }
      </PDFDownloadLink>
    </Fragment>
  );
};
export default SaleOrderPdf;
