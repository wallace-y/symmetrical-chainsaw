# Affirmation Email Sender for Gmail
This is a Node.js application that sends a daily affirmation email to a specified recipient. The email message is composed of a random affirmation generated from a list of affirmations, and a personalized greeting.

The application uses the following technologies:

- Node.js for the backend
- Express for the web framework
- Nodemailer for sending emails
- Cron for scheduling tasks
- dotenv for managing environment variables

## Installation
To run the application, follow these steps:

1. Clone the repository
2. Install dependencies by running npm install
3. Create a .env file in the root directory and add the following variables:

```
GMAIL_PASS=<gmail_account_password> // please see notes below
YOUR_NAME=<your_name>
YOUR_EMAIL=<your_email_address>
YOUR_BOO_NAME=<your_boo_name>
BOO_EMAIL=<recipient_email_address>
```

- Replace **<your_name>** with your name, correctly capitalised. Ie Cameron not cameron.
- Replace **<your_email_address>** with your gmail email address
- Replace **<your_boo_name>** with the name of the person you wish address, correctly capitalised as above
- Replace **<recipient_email_address>** with the email address of the person you wish to send too

- For **<gmail_account_password>** you will need to create a specific app password: https://support.google.com/accounts/answer/185833?hl=en
    1. Go to your Google Account.
    2. Select Security.
    3. Under "Signing in to Google," select App Passwords. You may need to sign in. If you don’t have this option, it might be because:
        a. 2-Step Verification is not set up for your account.
        b. 2-Step Verification is only set up for security keys.
        c. Your account is through work, school, or other organization.
        d. You turned on Advanced Protection.
    4. At the bottom, choose Select app and choose the app you using and then Select device and choose the device you’re using and then Generate. Here you can create a new device called email app.
    5. Copy the App Password (the 16-character code in the yellow bar) and add this to the above password environment variable.
    6. Tap Done.

4. Start the application by running node index.js
5. The application will send a daily affirmation email to the specified recipient at 7:45 AM (UTC) every day.
