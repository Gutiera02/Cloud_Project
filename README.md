Introducere 

Proiectul dezvoltă o aplicație web care afișează datele studenților din cadrul unui program de doctorat. Scopul principal este de a oferi o interfață utilizator prietenoasă pentru vizualizarea și gestionarea datelor studenților.

Descriere problemă 

În instituțiile de învățământ superior, gestionarea datelor studenților poate fi o sarcină laborioasă. Acest proiect abordează această problemă prin dezvoltarea unei aplicații web care permite vizualizarea eficientă a datelor studenților, inclusiv numele, anul înmatriculării, email, dată de naștere, semestrul și naționalitatea.

Descriere aplicație web

Aplicația web este proiectată pentru a oferi o interfață intuitivă și ușor de utilizat pentru vizualizarea datelor studenților. Utilizatorii pot accesa aplicația de pe orice dispozitiv cu conexiune la internet și pot naviga rapid între diferitele informații ale studenților.

Descriere API: 

Endpoint-uri Disponibile:
GET : Acest endpoint returnează o listă de studenți împreună cu detaliile acestora, inclusiv numele, anul înmatriculării, email, dată de naștere, semestrul și naționalitatea.
POST: Acest endpoint permite adăugarea unui nou student în baza de date. Cererea trebuie să conțină detalii despre student în format JSON.
PUT: Acest endpoint permite actualizarea detaliilor unui student specific identificat prin ID-ul său. Cererea trebuie să conțină noile detalii ale studentului în format JSON.
DELETE :Acest endpoint permite ștergerea unui student specific identificat prin ID-ul său.
Flux de date 

![image](https://github.com/Gutiera02/Cloud_Project/assets/72486863/f8d63a95-2d00-4073-b69c-4847a385158c)
![image](https://github.com/Gutiera02/Cloud_Project/assets/72486863/08601e1b-1162-4a9e-b856-b6a3277d6d41)
![image](https://github.com/Gutiera02/Cloud_Project/assets/72486863/5b291d7a-3aa7-42b0-ba09-862e2650df19)
![image](https://github.com/Gutiera02/Cloud_Project/assets/72486863/9ef17cf2-d4c7-4246-86b6-d5a37959f91d)
![image](https://github.com/Gutiera02/Cloud_Project/assets/72486863/bef92e57-b71f-4b0a-ad39-4881b14356f4)

Tehnologii utilizate:

Frontend:
HTML (HyperText Markup Language): HTML-ul este folosit pentru a structura conținutul paginilor web. Este folosit pentru a defini structura semantică a paginilor noastre, inclusiv elemente precum texte, imagini, linkuri și formulare.
CSS (Cascading Style Sheets): CSS-ul este utilizat pentru a stiliza și a formata aspectul paginilor web. Cu ajutorul CSS-ului, putem defini aspectul vizual al elementelor HTML, inclusiv culori, fonturi, dimensiuni și aliniamente.
JavaScript: JavaScript-ul este un limbaj de programare utilizat pentru a adăuga interactivitate și funcționalități dinamice paginilor web. În cadrul aplicației noastre, JavaScript-ul este folosit pentru a gestiona evenimente, a face cereri către backend și a manipula datele afișate în interfața utilizator.
Backend:
Node.js: Node.js este un mediu de execuție JavaScript pe partea de server, care permite rularea codului JavaScript pe server. Este folosit pentru a crea și a gestiona serverul backend al aplicației noastre.
MongoDB: MongoDB este o bază de date NoSQL, orientată pe documente, care oferă flexibilitate și scalabilitate în stocarea datelor. Este folosită pentru a stoca datele despre studenți în cadrul aplicației noastre.

Link video prezentare: https://youtu.be/g3tJVih73_w
Link aplicație web: https://cloud-project--phi.vercel.app/

