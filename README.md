#Affirmation Email Sender
This is a Node.js application that sends a daily affirmation email to a specified recipient. The email message is composed of a random affirmation generated from a list of affirmations, and a personalized greeting.

The application uses the following technologies:

- Node.js for the backend
- Express for the web framework
- Nodemailer for sending emails
- Cron for scheduling tasks
- dotenv for managing environment variables
- A list of affirmations stored in a separate file

##Installation
To run the application, follow these steps:

1. Clone the repository
2. Install dependencies by running npm install
3. Create a .env file in the root directory and add the following variables:
'code'
BOO_EMAIL=recipient_email_address
GMAIL_PASS=gmail_account_password
'code'

Replace **recipient_email_address** with the email address of the recipient, and **gmail_account_password** with the password for the Gmail account used to send the email.

4. Start the application by running node index.js
5. The application will send a daily affirmation email to the specified recipient at 7:45 AM every day.
