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
import IClosingSaleOrder from "../../../../models/closingSaleOrder";
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
    marginRight: 10,
    marginLeft: 10,
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
const MyDoc: React.FC<{ data: IClosingSaleOrder }> = ({ data }) => {
  const client = data.client;
  const dress = data.weddingDress;
  const order = data;

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.section}>UMOWA WYPRZEDAŻY SUKNI ŚLUBNEJ</Text>
        <Text style={styles.section}>
          zawarta w dniu {dataFormat(order.agreementDate)}, w Bydgoszczy
          pomiędzy :
        </Text>
        <Text style={styles.text}>
          <Note style={styles.bold}>Salonem Mody Ślubnej „Emily”</Note>,
          mieszczącym się w Bydgoszczy przy ul. Świętojańskiej 10,{" "}
          <Note style={styles.bold}> tel. 52 349 51 09 </Note> reprezentowanego
          przez <Note style={styles.bold}> Annę Traczykowską </Note>, zwaną
          dalej Sprzedawcą, a
        </Text>
        <Text style={styles.text}>
          Panią <Note style={styles.bold}>{client.name}</Note>{" "}
          <Note style={styles.bold}>{client.surname}</Note>
        </Text>
        <Text style={styles.text}>ulica: {client.street}</Text>
        <Text style={styles.text}>miejscowość: {client.city}</Text>
        <Text style={styles.text}>
          tel.
          {client!.phoneNumber}. e-mail:{" "}
          <Note style={styles.bold}>{client.email}</Note> zwanym dalej
          Kupującym.
        </Text>

        <Text style={styles.section}>§1 PRZEDMIOT UMOWY</Text>
        <Text style={styles.text}>
          {" "}
          1.   Przedmiotem niniejszej umowy jest sprzedaż nowej sukni ślubnej o
          następujących parametrach:{" "}
        </Text>
        <Text style={styles.list}>Nazwa sukni: {dress.producer}</Text>
        <Text style={styles.list}>Kod towarowy sukni: {dress.name}</Text>
        <Text style={styles.list}>Kolor sukni: {dress.color} </Text>
        <Text style={styles.list}>Rozmiar sukni: {dress.size}</Text>
        <Text style={styles.list}>
          Wymiary Kupującego w dniu podpisania niniejszej umowy
        </Text>
        <Text style={styles.list}>
          (w cm): biust {dress.bustSize}; talia: {dress.waistSize} biodra:{" "}
          {dress.hipsSize} wzrost : {dress.heightSize}
        </Text>
        <Text style={styles.list}>
          Data ślubu: {dataFormat(order.weddingDate)}{" "}
        </Text>
        <Text style={styles.list}> Cena sukni wynosi:{order.totalPrice} </Text>
        <Text style={styles.list}>
          {" "}
          Dodatkowe ustalenia pisemne: {order.orderComments}{" "}
        </Text>
        <Text style={styles.text}>
          2.   Suknia ślubna w dniu odbioru będzie w stanie ogólnym bardzo
          dobrym, jednakże mogą wystąpić różnice pomiędzy produktem fabrycznie
          nowym, a egzemplarzem z ekspozycji, co Kupujący przyjmuje do
          wiadomości.
        </Text>
        <Text style={styles.text}>
          3. Halka ślubna <Note style={styles.bold}>nie wchodzi</Note> w skład
          sukni ślubnej. Kupujący może ją wypożyczyć bądź nabyć za odrębną
          opłatą zgodną z aktualnym cennikiem Sprzedającego.
        </Text>
        <Text style={styles.section}>§2 ZAPŁATA CENY</Text>
        <Text style={styles.text}>
          1. Na poczet realizacji zamówienia określonego w § 1 Kupujący wpłaca w
          dniu podpisania niniejszej umowy zadatek w wysokości {order.deposit}{" "}
          złotych. Zadatek zostanie zaliczony na poczet ceny, o której mowa w §
          1 ust. 1 pkt 6 a pozostała część ceny zostanie zapłacona najpóźniej w
          dniu odbioru przedmiotu umowy.
        </Text>
        <Text style={styles.text}>
          2.Cena sukni ślubnej ujęta w § 1 ust. 1 pkt 6 jest ceną ustaloną
          ostatecznie i nie podlega negocjacji.
        </Text>
        <Text style={styles.section}>§ 3 ZMIANY DO ZAMÓWIENIA</Text>
        <Text style={styles.text}>
          Kupujący przyjmuje do wiadomości, że począwszy od dnia zawarcia
          niniejszej umowy, nie ma możliwości wprowadzenia zmian odnoszących się
          do przedmiotu umowy, indywidualnie określonego w § 1 ani też do
          uzgodnionych terminów odbioru, ustalonych zgodnie z  § 4 ust. 1.
        </Text>
        <Text style={styles.section}>§ 4 TERMIN REALIZACJI</Text>
        <Text style={styles.text}>
          1. Obie strony ustalają, że w terminie  pomiędzy{" "}
          {dataFormat(order.realizationDateStart)},a{" "}
          {dataFormat(order.realizationDateEnd)}.w tutejszym Salonie nastąpią:
          niezbędne poprawki krawieckie polegające wyłącznie na dopasowaniu
          sukni do sylwetki i wzrostu Kupującego, a następnie najpóźniej w dniu{" "}
          {dataFormat(order.realizationDeadLine)} odbiór końcowy zamówionej
          sukni ślubnej.
        </Text>
        <Text style={styles.text}>
          {" "}
          2. W przypadku, gdy Kupujący po upływie terminu wyznaczonego w § 4 pkt
          1 nie odbierze sukni, Sprzedawca może w ciągu 30 dni od upływu tego
          terminu odstąpić od umowy i dysponować swobodnie zamówioną a
          nieodebraną suknią ślubną. W takiej sytuacji wpłacony zadatek przepada
          na rzecz Sprzedawcy.
        </Text>
        <Text style={styles.section}>
          § 5 POPRAWKI KRAWIECKIE I CZYSZCZENIE SUKNI
        </Text>
        <Text style={styles.text}>
          1. Poprawki krawieckie zostaną dokonane w uzgodnieniu i z udziałem
          Kupującego, a czyszczenie zostanie dokonane na koszt Sprzedawcy,
          najpóźniej do dnia odbioru.
        </Text>
        <Text style={styles.text}>
          2. Wszystkie niezbędne poprawki są wykonywane przez Sprzedawcę bez
          dodatkowych opłat i związane są z dopasowaniem sukni ślubnej do
          sylwetki i wzrostu Kupującej.
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
            "                                                                                                                                               "
          }
          Sprzedający
        </Text>
        <Text style={styles.section}>DODATKOWE OŚWIADCZENIA KUPUJĄCEGO:</Text>
        <Text style={styles.text}>
          Wyrażam zgodę na przetwarzanie moich danych osobowych wyłącznie w celu
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
          do trenu (o ile dotyczy) wykonane są należycie.
        </Text>
        <Text style={styles.text}>_____________</Text>
        <Text style={styles.text}>Data, podpis</Text>
      </Page>
    </Document>
  );
};
const ClosingSaleOrderPdf: React.FC<{ data: IClosingSaleOrder }> = ({ data }) => {
  return (
    <Fragment>
      <PDFDownloadLink
        document={<MyDoc data={data} />}
        fileName={`${data.client.name} ${data.client.surname}`}
        className="pdf-button"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Ładowanie umowy..." : "Pobierz PDF!"
        }
      </PDFDownloadLink>
    </Fragment>
  );
};
export default ClosingSaleOrderPdf;
