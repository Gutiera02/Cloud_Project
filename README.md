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

Tehnologii cloud:

MongoDB este o bază de date NoSQL, orientată pe documente, care oferă o abordare flexibilă și scalabilă pentru stocarea și gestionarea datelor. În loc să folosească tabele și rânduri, MongoDB stochează datele sub formă de documente JSON flexibile, ceea ce face ușoară gestionarea datelor semi-structurate și nestructurate.

Caracteristici:

Flexibilitate: Documentele MongoDB sunt flexibile și pot conține orice tip de date, inclusiv stringuri, numere, array-uri și chiar sub-documente.
Scalabilitate: MongoDB este conceput pentru a fi scalabil, atât vertical (adăugând mai multă putere de procesare la un singur nod), cât și orizontal (adăugând mai multe noduri într-un cluster).
Performanță: Prin utilizarea indexării eficiente și a unor tehnici de interogare avansate, MongoDB oferă performanță ridicată pentru operațiunile de citire și scriere.

Utilizări:

MongoDB este folosită într-o varietate de aplicații, inclusiv aplicații web, aplicații mobile, sisteme de gestionare a conținutului și aplicații IoT (Internet of Things).

Vercel este o platformă de hosting și deplasare (deployment) pentru aplicații web și frontend, care se concentrează pe furnizarea de experiențe de dezvoltare rapide și eficiente. A fost construită pentru a permite dezvoltatorilor să își publice și să își scală aplicațiile web și frontend cu ușurință.

Caracteristici:

Deployment simplu: Vercel oferă o experiență de deplasare simplă și intuitivă, permițând dezvoltatorilor să își publice aplicațiile în câteva secunde.
Scaling automat: Platforma Vercel gestionează automat scalarea aplicațiilor, astfel încât acestea să poată face față la orice volum de trafic, fără a fi nevoie de intervenție manuală.
Integrare strânsă cu framework-uri frontend: Vercel are o integrare strânsă cu cele mai populare framework-uri frontend, precum React, Angular, Vue.js, permitând dezvoltatorilor să se concentreze pe construirea aplicațiilor fără a fi nevoie să se preocupe de configurații de infrastructură.

Utilizări:

Vercel este utilizată de dezvoltatori pentru a publica și a gestiona aplicații web și frontend de diferite tipuri, inclusiv site-uri web statice, aplicații web dinamice și aplicații single-page.


Link video prezentare: https://youtu.be/g3tJVih73_w

Link aplicație web: https://cloud-project--phi.vercel.app/

