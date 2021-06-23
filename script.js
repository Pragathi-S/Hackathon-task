function getTickets() {
  const MY_DOMAIN = "https://newaccount1624399052006.freshdesk.com/"; const API_KEY = "GchodMzcbHMF8YsVHIMk";  
    // Base64 encoding of API_KEY
    const Base64API_KEY = window.btoa(API_KEY); 
    const config = { headers: { Authorization: "Basic " + btoa(API_KEY), }, }; 
    const TICKETS_PATH = "api/v2/tickets"; 
    fetch(MY_DOMAIN + TICKETS_PATH, config) 
    .then((data) => data.json())
    .then((tickets) => {
      const allTickets = document.querySelector(".tickets");
      tickets.forEach((ticket) => {
        // user container
        const ticketConatiner = document.createElement("div");
        ticketConatiner.className = "ticket-container";
        
        ticketConatiner.innerHTML = `
        <h3 class="ticket-subject">${ticket.subject}</h3>
        <h4 class="ticket-cc_emails">${ticket.cc_emails}</h4>
        <h4 class="ticket-status">${ticket.status}</h4>
        <h4 class="ticket-priority">${ticket.priority}</h4>
        <button class="ticket-update" onclick="updateTicket('${ticket.subject}','${ticket.cc_emails}','${ticket.status}', '${ticket.priority}')"> Update </button>
        <button class="ticket-delete" onclick="deleteTicket(${ticket.id})"> Delete </button> 
      `;
        
  allTickets.append(ticketConatiner);
      });
      return tickets;
    });
}

getTickets();

function refreshTickets() {
  console.log("Refresh the Tickets");
  document.querySelector(".tickets").innerHTML = "";
  getTickets();
}

function deleteTicket(ticketId) {
  console.log("Delete ticket.... ", ticketId);
  fetch(`https://newaccount1624399052006.freshdesk.com/api/v2/tickets/${ticketId}`, {
    method: "DELETE"
  })
    .then((data) => data.json())
    .then((ticket) => refreshTickets());
}


function addTicket(){
  const type =  document.querySelector('.add-ticket').innerText;
  console.log("The type is ...",type);
 const ticketStatus =  document.querySelector('.add-ticket-status').value;
 const ticketPriority =  document.querySelector('.add-ticket-priority').value;
  const ticketCC_emails =  document.querySelector('.add-ticket-cc_emails').value;
  const ticketSubject =  document.querySelector('.add-ticket-subject').value;
  
 const urlMethod = type==="Update Ticket" ? "PUT" :  "POST";
 const ticketId = type==="Update Ticket" ? localStorage.getItem('ticketId') : "";
// DRY - Dont Repeat Yourself
    fetch(`https://newaccount1624399052006.freshdesk.com/api/v2/tickets/${ticketId}`, {
    method: urlMethod,
    headers: {
    "Content-Type": "application/json"
  },
    body: JSON.stringify({
      status: ticketStatus,
      priority: ticketPriority,
      cc_emails: ticketCC_emails,
      subject: ticketSubject,
    })
  })
    .then((data) => data.json())
    .then((ticket) => refreshTickets());
  
  formReset();
  
}

function formReset(){
   document.querySelector('.add-ticket-status').value = "";
  document.querySelector('.add-ticket-priority').value = "";
   document.querySelector('.add-ticket-cc_emails').value = "";
   document.querySelector('.add-ticket-subject').value = "";
  document.querySelector('.add-ticket').innerText = 'Add Ticket';
}

// Using Put method 
function updateTicket(ticketSubject, ticketCC_emails, ticketStatus, ticketPriority){
  document.querySelector('.add-ticket-subject').value = ticketSubject;
  document.querySelector('.add-ticket-cc_emails').value = ticketCC_emails;
  document.querySelector('.add-ticket-status').value = ticketStatus;
  document.querySelector('.add-ticket-priority').value = ticketPriority;
  document.querySelector('.add-ticket').innerText = 'Update Ticket';
  localStorage.setItem('ticketId', ticketId);
}

function getContacts() {
  const DOMAIN = "https://newaccount1624399052006.freshdesk.com/"; const APIKEY = "GchodMzcbHMF8YsVHIMk";  
    // Base64 encoding of API_KEY
    const Base64APIKEY = window.btoa(APIKEY); 
    const configu = { headers: { Authorization: "Basic " + btoa(APIKEY), }, }; 
    const CONTACTS_PATH = "api/v2/contacts"; 
    fetch(DOMAIN + CONTACTS_PATH, configu) 
    .then((data) => data.json())
    .then((contacts) => {
      const allContacts = document.querySelector(".contacts");
      contacts.forEach((contact) => {
        // user container
        const contactConatiner = document.createElement("div");
        contactConatiner.className = "contact-container";
        
       contactConatiner.innerHTML = `
        <h3 class="contact-name">${contact.name}</h3>
        <h4 class="contact-email">${contact.email}</h4>
        <h4 class="contact-address">${contact.address}</h4>
        <button class="contact-update" onclick="updateContact( '${contact.name}', '${contact.email}','${contact.address}')"> Update </button>
        <button class="contact-delete" onclick="deleteContact(${contact.id})"> Delete </button> 
      `;
        
  allContacts.append(contactConatiner);
      });
      return contacts;
    });
}

getContacts();

function refreshContacts() {
  console.log("Refresh the Contacts");
  document.querySelector(".contacts").innerHTML = "";
  getContacts();
}

function deleteContact(contactId) {
  console.log("Delete contact.... ", contactId);
  fetch(`https://newaccount1624399052006.freshdesk.com/api/v2/contacts/${contactId}`, {
    method: "DELETE"
  })
    .then((data) => data.json())
    .then((contact) => refreshContacts());
}


function addContact(){
  const type =  document.querySelector('.add-contact').innerText;
  console.log("The type is ...",type);
 const contactName =  document.querySelector('.add-contact-name').value;
 const contactEmail =  document.querySelector('.add-contact-email').value;
  const contactAddress =  document.querySelector('.add-contact-address').value;
  
 const urlMethod = type==="Update Contact" ? "PUT" :  "POST";
 const contactId = type==="Update Contact" ? localStorage.getItem('contactId') : "";
// DRY - Dont Repeat Yourself
    fetch(`https://newaccount1624399052006.freshdesk.com/api/v2/contacts/${contactId}`, {
    method: urlMethod,
    headers: {
    "Content-Type": "application/json"
  },
    body: JSON.stringify({
      name: contactName,
      email: contactEmail,
      address: contactAddress,
    })
  })
    .then((data) => data.json())
    .then((contact) => refreshContacts());
  
  inputReset();
  
}

function inputReset(){
   document.querySelector('.add-contact-name').value = "";
  document.querySelector('.add-contact-email').value = "";
   document.querySelector('.add-contact-address').value = "";
  document.querySelector('.add-contact').innerText = 'Add Contact';
}

// Using Put method 
function updateContact(contactName,contactId, contactEmail,contactAddress){
  document.querySelector('.add-contact-name').value = contactName;
  document.querySelector('.add-contact-email').value = contactEmail;
   document.querySelector('.add-contact-address').value = contactAddress;
  document.querySelector('.add-contact').innerText = 'Update Contact';
  localStorage.setItem('contactId', contactId);
}