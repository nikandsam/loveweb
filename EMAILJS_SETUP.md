# EmailJS Setup Instructions

This romantic birthday proposal website includes email notification functionality using EmailJS. When someone clicks "YES" to your date proposal, an email will be automatically sent to notify you!

## Step-by-Step Setup Guide

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Your Email Service

1. Once logged in, go to the **"Email Services"** page
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. **Copy your SERVICE_ID** - you'll need this later

### 3. Create an Email Template

1. Go to the **"Email Templates"** page
2. Click **"Create New Template"**
3. Set up your template with these settings:
   - **Template Name**: `date_proposal_yes`
   - **Subject**: `She Said YES!!! 💖`
   - **Content**: Create a template with the following variables:
     ```
     Great news!

     {{message}}

     Time to plan that special date! 🥰
     ```
4. **Copy your TEMPLATE_ID** - you'll need this later

### 4. Get Your Public Key

1. Go to **"Account"** in the main menu
2. Find the **"API Keys"** section
3. **Copy your PUBLIC_KEY** (also called User ID)

### 5. Update Your Code

Open the file: `src/components/YesCelebration.tsx`

Find this section around line 16:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

Replace the placeholder values with your actual EmailJS credentials:

```typescript
await emailjs.send(
  'service_abc1234',      // Your actual Service ID
  'template_xyz5678',     // Your actual Template ID
  templateParams,
  'user_AbCdEfGhIjKlMn'   // Your actual Public Key
);
```

### 6. Customize the Email (Optional)

You can customize what email address receives the notification by changing this line in `YesCelebration.tsx`:

```typescript
const templateParams = {
  to_email: 'nitsj24@gmail.com',  // Change to your email
  subject: 'She Said YES!!! 💖',
  message: 'She agreed to go on a date with you!',
};
```

## Testing

1. Run your website locally: `npm run dev`
2. Go through the proposal flow
3. Click "YES" on the proposal page
4. Check your email inbox for the notification!

## Troubleshooting

### Email not sending?

- Check that all IDs are correct
- Verify your email service is connected in EmailJS
- Check the browser console for error messages
- Make sure you haven't exceeded EmailJS free tier limits (200 emails/month)

### Need help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their website

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Perfect for this romantic proposal website!

---

Good luck with your proposal! 💕
