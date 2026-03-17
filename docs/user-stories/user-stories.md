# User Stories

Dessa user stories beskriver de grundläggande kraven för webbappen för utgiftshantering.  
De används som underlag för utveckling, testdesign och spårbarhet mellan krav och testfall.

---

## US1
**User story:**  
Som användare vill jag kunna registrera en utgift med belopp, kategori och datum så att jag kan spara mina utgifter.

**Acceptanskriterier:**  
- Användaren ska kunna ange belopp, kategori och datum.  
- Utgiften ska sparas när formuläret skickas.  
- Den registrerade utgiften ska visas i listan över utgifter.  

---

## US2
**User story:**  
Som användare vill jag kunna se en lista över registrerade utgifter så att jag får en översikt över mina kostnader.

**Acceptanskriterier:**  
- Alla registrerade utgifter ska visas i en lista.  
- Varje utgift ska visa belopp, kategori och datum.  
- Nya utgifter ska läggas till i listan direkt efter registrering.  

---

## US3
**User story:**  
Som användare vill jag kunna se en sammanställning per kategori så att jag kan förstå vad jag lägger mest pengar på.

**Acceptanskriterier:**  
- Applikationen ska gruppera utgifter efter kategori.  
- Den ska visa totalsumma för varje kategori.  
- Sammanställningen ska uppdateras när en ny utgift registreras.  

---

## US4
**User story:**  
Som användare vill jag kunna se en sammanställning per datum så att jag kan följa mina utgifter över tid.

**Acceptanskriterier:**  
- Applikationen ska kunna visa totalsumma per datum.  
- Utgifter med samma datum ska summeras tillsammans.  
- Sammanställningen ska uppdateras när en ny utgift registreras.  

---

## US5
**User story:**  
Som användare vill jag få ett felmeddelande om jag försöker registrera en utgift utan giltigt belopp så att felaktiga data inte sparas.

**Acceptanskriterier:**  
- Belopp får inte vara tomt.  
- Belopp måste vara större än 0.  
- Ett tydligt felmeddelande ska visas om beloppet är ogiltigt.  
- Ingen utgift ska sparas om beloppet är ogiltigt.  

---

## US6
**User story:**  
Som användare vill jag få ett felmeddelande om kategori eller datum saknas så att endast kompletta utgifter registreras.

**Acceptanskriterier:**  
- Kategori får inte vara tom.  
- Datum får inte vara tomt.  
- Ett tydligt felmeddelande ska visas om något fält saknas.  
- Ingen utgift ska sparas om kategori eller datum saknas.  