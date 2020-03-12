# Caltech Y TechReach Project

The Caltech Y conducts a number of programs for the benefit of students, faculty, and staff.  Some of these programs involve risks to the participants.  The Y notifies participants of these risks and requires that they sign waivers in order to participate.

This project was designed and built to provide a modern online registration and waiver collection facility for future Y events.

There are at present two sorts of events that require waivers to be collected: day hikes and service events.

This facility addresses two groups of people:

  - Y administrators, who schedule and advertise events with the [admin web app](https://techreach-c2dd7.web.app)
  - Caltech community members, who sign up to participate with the [user web app](https://techreach-users.web.app)

### Database Integration

Firebase database stores event + sign up info:

  - “events” collection contains documents. Each document corresponds to an event
  - Each event is stored by its event id
  - Each event contains a date (stored as a Unix timestamp), description, title, and an “attendees” subcollection
    - Each document in the “attendees” subcollection is stored under a randomized id, and contains the attendee’s Caltech UID, dietary restrictions, email, and name
  - Authorization credentials
    - To create a new admin account, [go here](https://console.firebase.google.com/project/techreach-c2dd7/authentication/users) and add a user email and password

To add custom urls (instead of using the linked web app URLs above), [go here](https://console.firebase.google.com/project/techreach-c2dd7/hosting/main), view the desired website, and add your custom domain.

### Code Structure and Layout

Filesystem layout for any code, html, css, js, or other files and objects:

  - Admin app:
    - All code is in the web_app folder
    - All html/JavaScript files are in /web_app/public/
    - The firebase hosting configuration is stored in /web_app/firebase.json
  - User app:
    - All code is in the user_app folder
    - All html/JavaScript files are in /user_app/public/
    - The firebase hosting configuration is stored in /user_app/firebase.json

### User Interaction Workflow

Admin side: 

  - Caltech Y staff/volunteers have one account to log into the web app.
  - The “Create Events” page allows the staff to create an event by filling out the necessary fields. Once it is created, the event will then show up on both firebase and the user web app.
    - The event will disappear from the user side when the time of the event has passed.
  - The “Events” page allows the staff to see all of the events. Clicking on an individual event will lead them to a new page with the particular event.
  - The “Individual Events” page lists all the people who have signed up for that event. It also lists their names, Caltech UIDs, emails, and dietary restrictions (the fields from the user registration).
  - Caltech Y staff/volunteers download and save the waivers that the Caltech community members/students send from their own email addresses.

User side:

  - Caltech community member/student fills out the fields in the Event Registration form, following the instructions at the top of the form.
    - The “events” dropdown list in the form will update according to the events created by the admin side.
  - Once they are done, they press the “submit” button, storing the form’s information in the database, where the admin side can see everything they have filled out.
  - They must make sure to download the correct waiver, fill it out themselves and send it to the Caltech Y staff/volunteers through email (thus, waivers will be stored separately).

