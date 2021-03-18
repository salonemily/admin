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
import IRentOrder from "../../../../models/rentOrders";
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
const MyDoc: React.FC<{ data: IRentOrder }> = ({ data }) => {
  
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let date = `${dd}.${mm}.${yyyy}`;
  const client = data.client
  const dress = data.weddingDress
  const order = data

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.section}>UMOWA WYPOŻYCZENIA SUKNI ŚLUBNEJ</Text>
        <Text style={styles.section}>
          zawarta w dniu {date}, w Bydgoszczy pomiędzy :
        </Text>
        <Text style={styles.text}>
          <Note style={styles.bold}>Salonem Mody Ślubnej „Emily”</Note>,
          mieszczącym się w Bydgoszczy przy ul. Świętojańskiej 10,{" "}
          <Note style={styles.bold}> tel. 52 349 51 09 </Note> reprezentowanego
          przez <Note style={styles.bold}> Annę Traczykowską </Note>, zwaną
          dalej Sprzedawcą, a
        </Text>
        <Text style={styles.text}>
          <Note style={styles.bold}>{client!.name!}</Note>
          <Note style={styles.bold}>{client!.surname!}</Note>
        </Text>
        <Text style={styles.text}>ulica: {client!.street}</Text>
        <Text style={styles.text}>miejscowość: {client!.city}</Text>
        <Text style={styles.text}>
          tel.
          {client!.phoneNumber}. e-mail:{" "}
          <Note style={styles.bold}>{client!.email!}</Note>
          zwanym dalej Wypożyczającym.
        </Text>

        <Text style={styles.section}>§1 PRZEDMIOT UMOWY</Text>
        <Text style={styles.text}>
          {" "}
          1. Sprzedawca oddaje odpłatnie Wypożyczającemu do korzystania
          następującą suknię ślubną :{" "}
        </Text>
        <Text style={styles.list}> 1. Nazwa sukni: {dress!.producer}</Text>
        <Text style={styles.list}> 2. Kod towarowy sukni: {dress!.name}</Text>
        <Text style={styles.list}> 3. Kolor sukni: {dress!.color} </Text>
        <Text style={styles.list}>
          4. Rozmiar sukni: {dress!.size} Wymiary Wypożyczającego w dniu
          podpisania niniejszej
        </Text>
        <Text style={styles.list}>
          umowy (w cm): biust {dress!.bustSize} talia {dress!.waistSize} biodra{" "}
          {dress!.hipsSize} wzrost {dress!.heightSize}
        </Text>
        <Text style={styles.list}>
          5.Wartość sukni złotych brutto: {dress!.price}{" "}
        </Text>
        <Text style={styles.list}> 6.Data ślubu: {order!.weddingDate} </Text>
        <Text style={styles.list}> 7.Uwagi: {order!.orderComments} </Text>
        <Text style={styles.text}>
          2. Halka ślubna <Note style={styles.bold}>nie wchodzi</Note> w skład
          sukni ślubnej. Wypożyczający może ją wypożyczyć bądź nabyć za odrębną
          opłatą zgodną z aktualnym cennikiem Sprzedającego.
        </Text>
        <Text style={styles.text}>
          3.Strony ustalają, że cena za oddanie opisanej w § 1 sukni ślubnej do
          korzystania wynosi {order!.totalPrice} złotych brutto.
        </Text>
        <Text style={styles.section}>§2 ZAPŁATA CENY</Text>
        <Text style={styles.text}>
          1. <Note style={styles.bold}>Zadatek</Note> w wysokości{" "}
          {order!.deposit} złotych Wypożyczający wpłaca w dniu podpisania
          niniejszej umowy.
        </Text>
        <Text style={styles.text}>
          2.Pozostałą część ustalonej należności w wysokości {order!.credit}{" "}
          złotych Wypożyczający uiści najpóźniej w dniu przekazania sukni do
          korzystania.
        </Text>
        <Text style={styles.text}>
          3.Wypożyczający na poczet zabrudzeń i ewentualnych zniszczeń sukni
          oddanej mu do korzystania w dniu odbioru sukni wpłaci dodatkowo
          <Note style={styles.bold}> kaucję </Note> w wysokości 500 złotych.
        </Text>
        <Text style={styles.section}>§3 OKRES WYPOŻYCZENIA</Text>
        <Text style={styles.list}>
          1.Suknia ślubna będzie oddana do korzystania w dniu{" "}
          {order!.rentStartDate} (data odbioru).
        </Text>
        <Text style={styles.list}>
          {" "}
          2.Wypożyczający zwróci suknię ślubną Sprzedającemu w dniu{" "}
          {order!.rentEndDate}(data zwrotu).
        </Text>
        <Text style={styles.list}>
          3.W przypadku, gdy Wypożyczający ze swojej winy nie dotrzyma terminu
          określonego
        </Text>
        <Text style={styles.list}>
          w ust.2, zapłaci on Sprzedającemu karę umowną za zwłokę w wysokości 50
          złotych za
        </Text>
        <Text style={styles.list}>
          każdy rozpoczęty dzień pozostawania w zwłoce.
        </Text>
        <Text style={styles.section}>§4 STAN SUKNI W CHWILI WYDANIA</Text>
        <Text style={styles.text}>
          Suknia ślubna oddana do korzystania Wypożyczającemu w dniu odbioru
          będzie w stanie ogólnym bardzo dobrym, nie będzie zniszczona,
          poplamiona ani uszkodzona, jednakże mogą wystąpić różnice pomiędzy
          produktem fabrycznie nowym a wypożyczanym egzemplarzem, co
          Wypożyczający przyjmuje do wiadomości.
        </Text>
        <Text style={styles.section}>
          §5 STAN SUKNI W CHWILI ZWROTU I ZATRZYMANIE KAUCJI
        </Text>
        <Text style={styles.text}>
          1. Suknia ślubna podlega zwróceniu Sprzedającemu w stanie
          niepogorszonym, z zastrzeżeniem postanowień ust. 2 i 3.
        </Text>
        <Text style={styles.text}>
          2. Kaucja, o której mowa w § 2 ust. 4 może być przez Sprzedającego
          zatrzymana na poczet czyszczenia lub/i naprawy w całości lub w części
          jeśli:
        </Text>
        <Text style={styles.list}>
          A. suknia ubrudzona jest substancjami ciężkimi do usunięcia (np. wino,
          smary, kleje,
        </Text>
        <Text style={styles.list}>
          trawa, kawałki przyschniętego błota, itp.),
        </Text>
        <Text style={styles.list}>
          B. suknia jest częściowo uszkodzona (np. rozdarcia, dziury, itp.).
        </Text>
        <Text style={styles.text}>
          3. W przypadku całkowitego zniszczenia sukni ślubnej lub spowodowania
          defektów uniemożliwiających jej dalsze wykorzystanie zgodne z
          przeznaczeniem, Sprzedający zatrzyma kaucję, a ponadto Wypożyczający
          dopłaci Sprzedającemu różnicę pomiędzy pełną wartością sukni,
          określoną w pkt. 5.
        </Text>

        <Text style={styles.section}>§6 POPRAWKI KRAWIECKIE</Text>
        <Text style={styles.text}>
          1. Poprawki krawieckie zostaną dokonane w uzgodnieniu i z udziałem
          Wypożyczającego bezpośrednio przed ustaloną datą odbioru sukni.
        </Text>
        <Text style={styles.text}>
          2. Sprzedający dokonuje poprawek krawieckich bez dodatkowych opłat,
          jeśli związane są <Note style={styles.bold}>wyłącznie</Note> z
          właściwym dopasowaniem sukni do sylwetki i wzrostu Wypożyczającej.
        </Text>
        <Text style={styles.text}>
          3. Wszystkie, inne niż w ust. 2, poprawki i życzenia Wypożyczającego
          są realizowane za odrębną opłatą, zgodną z cennikiem Sprzedającego.
        </Text>
        <Text style={styles.text}>
          4. Zmiana wymiarów Wypożyczającego w okresie po podpisaniu niniejszej
          umowy (np. wskutek ciąży, znacznego schudnięcia, znacznego przytycia)
          zwalnia Sprzedającego od odpowiedzialności za należyte wykonanie
          niezbędnych poprawek.
        </Text>
        <Text style={styles.section}>§ 7 POSTANOWIENIA KOŃCOWE</Text>
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
          {"            "}Wyporzyczający
          {
            "                                                                                                                               "
          }
          Sprzedający
        </Text>
        <Text style={styles.section}>
          DODATKOWE OŚWIADCZENIA WYPOŻYCZAJĄCEGO
        </Text>
        <Text style={styles.text}>
          Wyrażam zgodę na przetwarzanie moich danych osobowych wyłącznie w celu
          realizacji zamówienia. Jednocześnie oświadczam, że zostałam
          poinformowana o przysługującym mi prawie dostępu do treści moich
          danych oraz ich poprawiania, wycofania zgody na ich przetwarzanie w
          każdym czasie, jak również, że podanie tych danych było dobrowolne
        </Text>
        <Text style={styles.text}>___________</Text>
        <Text style={styles.text}>Wypożyczający</Text>
        <Text style={styles.text}>
          <Note style={styles.bold}>Potwierdzenie odbioru sukni</Note>
        </Text>
        <Text style={styles.text}>
          Oświadczam, że wypożyczana przeze mnie suknia ślubna jest przygotowana
          zgodnie z moimi życzeniami, a wszelkie poprawki krawieckie i podpięcie
          do trenu (o ile dotyczy) wykonane są należycie.
        </Text>
        <Text style={styles.text}>_____________</Text>
        <Text style={styles.text}>Wypożyczający</Text>
      </Page>
    </Document>
  );
};
const Pdf: React.FC<{ data: IRentOrder }> = ({ data }) => {
 
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
export default Pdf;
