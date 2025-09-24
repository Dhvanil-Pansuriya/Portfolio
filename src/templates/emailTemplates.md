# EmailJS Templates for Portfolio Contact Form

This document contains the email templates that need to be created in your EmailJS dashboard.

## Template 1: Admin Notification Email (template_admin_notification)

**Purpose:** This template sends a notification to Hardik when someone fills out the contact form.

**Template Name:** `template_admin_notification`

**Subject:** New Contact Form Submission - {{subject}}

**HTML Template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.6;
            color: #2c3e50;
            background: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
            border: 1px solid #e9ecef;
        }
        .header {
            text-align: center;
            margin-bottom: 35px;
            padding-bottom: 25px;
            border-bottom: 2px solid #dee2e6;
        }
        .header h1 {
            color: #2c3e50;
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            font-family: 'Georgia', serif;
            letter-spacing: -0.5px;
        }
        .header p {
            color: #6c757d;
            margin: 12px 0 0 0;
            font-size: 16px;
            font-style: italic;
        }
        .content {
            margin-bottom: 35px;
        }
        .field {
            margin-bottom: 24px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 12px;
            border-left: 4px solid #495057;
        }
        .field-label {
            font-weight: 600;
            color: #495057;
            margin-bottom: 8px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: 'Arial', sans-serif;
        }
        .field-value {
            color: #2c3e50;
            font-size: 16px;
            word-wrap: break-word;
            font-family: 'Georgia', serif;
        }
        .message-field {
            background: #f1f3f4;
            border-left-color: #6c757d;
        }
        .message-field .field-value {
            white-space: pre-wrap;
            line-height: 1.7;
        }
        .metadata {
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            margin-top: 25px;
            border: 2px solid #e9ecef;
        }
        .metadata h3 {
            margin: 0 0 12px 0;
            color: #495057;
            font-size: 16px;
            font-weight: 600;
            font-family: 'Georgia', serif;
        }
        .metadata p {
            margin: 8px 0;
            font-size: 14px;
            color: #6c757d;
        }
        .footer {
            text-align: center;
            margin-top: 35px;
            padding-top: 25px;
            border-top: 2px solid #e9ecef;
            color: #6c757d;
            font-size: 14px;
        }
        .cta-button {
            display: inline-block;
            background: #495057;
            color: white;
            padding: 14px 28px;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            margin: 20px 0;
            transition: all 0.3s ease;
            font-family: 'Arial', sans-serif;
        }
        .cta-button:hover {
            background: #343a40;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                padding: 25px;
                border-radius: 12px;
            }
            .header h1 {
                font-size: 26px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Someone is interested in working with you</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">{{subject}}</div>
            </div>
            
            <div class="field message-field">
                <div class="field-label">Message</div>
                <div class="field-value">{{message}}</div>
            </div>
        </div>
        
        <div style="text-align: center;">
            <a href="mailto:{{from_email}}?subject=Re: {{subject}}" class="cta-button">
                Reply to {{from_name}}
            </a>
        </div>
        
        <div class="metadata">
            <h3>Submission Details</h3>
            <p><strong>Timestamp:</strong> {{timestamp}}</p>
            <p><strong>Reply To:</strong> {{reply_to}}</p>
        </div>
        
        <div class="footer">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Portfolio: <strong>Hardik Ramoliya</strong> | Email: <strong>ramoliyahardik085@gmail.com</strong></p>
        </div>
    </div>
</body>
</html>
```

**Variables Used:**
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{subject}}` - Message subject
- `{{message}}` - User's message
- `{{timestamp}}` - When the form was submitted
- `{{reply_to}}` - User's email for replies

---

## Template 2: User Thank You Email (template_user_thankyou)

**Purpose:** This template sends a thank you email to the user who filled out the contact form.

**Template Name:** `template_user_thankyou`

**Subject:** Thank you for reaching out! - {{subject}}

**HTML Template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Message</title>
    <style>
        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.6;
            color: #2c3e50;
            background: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
            border: 1px solid #e9ecef;
        }
        .header {
            text-align: center;
            margin-bottom: 35px;
            padding-bottom: 25px;
            border-bottom: 2px solid #dee2e6;
        }
        .header h1 {
            color: #2c3e50;
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            font-family: 'Georgia', serif;
            letter-spacing: -0.5px;
        }
        .header p {
            color: #6c757d;
            margin: 12px 0 0 0;
            font-size: 16px;
            font-style: italic;
        }
        .content {
            margin-bottom: 35px;
        }
        .greeting {
            font-size: 18px;
            color: #2c3e50;
            margin-bottom: 20px;
            font-family: 'Georgia', serif;
            font-weight: 600;
        }
        .field {
            margin-bottom: 24px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 12px;
            border-left: 4px solid #495057;
        }
        .field-label {
            font-weight: 600;
            color: #495057;
            margin-bottom: 8px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: 'Arial', sans-serif;
        }
        .field-value {
            color: #2c3e50;
            font-size: 16px;
            word-wrap: break-word;
            font-family: 'Georgia', serif;
        }
        .message-summary {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
            border-left: 4px solid #6c757d;
            margin: 20px 0;
        }
        .message-summary h3 {
            margin: 0 0 12px 0;
            color: #495057;
            font-size: 16px;
            font-weight: 600;
            font-family: 'Georgia', serif;
        }
        .message-summary p {
            margin: 8px 0;
            color: #6c757d;
            font-size: 14px;
        }
        .response-time {
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
            border: 2px solid #e9ecef;
        }
        .response-time h3 {
            margin: 0 0 12px 0;
            color: #495057;
            font-size: 16px;
            font-weight: 600;
            font-family: 'Georgia', serif;
        }
        .response-time p {
            margin: 0;
            color: #6c757d;
            font-size: 14px;
        }
        .social-links {
            text-align: center;
            margin: 30px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 12px;
        }
        .social-links h3 {
            margin: 0 0 15px 0;
            color: #495057;
            font-size: 16px;
            font-weight: 600;
            font-family: 'Georgia', serif;
        }
        .social-link {
            display: inline-block;
            margin: 0 10px;
            padding: 12px 20px;
            background: #495057;
            color: white;
            text-decoration: none;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
            font-family: 'Arial', sans-serif;
        }
        .social-link:hover {
            background: #343a40;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .footer {
            text-align: center;
            margin-top: 35px;
            padding-top: 25px;
            border-top: 2px solid #e9ecef;
            color: #6c757d;
            font-size: 14px;
        }
        .signature {
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
            text-align: center;
            border: 2px solid #e9ecef;
        }
        .signature h3 {
            margin: 0 0 12px 0;
            font-size: 20px;
            color: #2c3e50;
            font-family: 'Georgia', serif;
            font-weight: 700;
        }
        .signature p {
            margin: 8px 0;
            color: #6c757d;
            font-size: 14px;
        }
        .professional-list {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
            border-left: 4px solid #495057;
        }
        .professional-list h3 {
            margin: 0 0 15px 0;
            color: #495057;
            font-size: 16px;
            font-weight: 600;
            font-family: 'Georgia', serif;
        }
        .professional-list ul {
            margin: 0;
            padding-left: 20px;
        }
        .professional-list li {
            margin: 8px 0;
            color: #6c757d;
            font-size: 14px;
        }
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                padding: 25px;
                border-radius: 12px;
            }
            .header h1 {
                font-size: 26px;
            }
            .social-link {
                display: block;
                margin: 8px 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You for Your Message</h1>
            <p>Your inquiry has been received and will be reviewed</p>
        </div>
        
        <div class="content">
            <div class="greeting">
                Dear {{to_name}},
            </div>
            
            <p>Thank you for reaching out through my portfolio. I appreciate you taking the time to get in touch and I value your interest in my work.</p>
            
            <div class="message-summary">
                <h3>Message Summary</h3>
                <div class="field">
                    <div class="field-label">Subject</div>
                    <div class="field-value">{{subject}}</div>
                </div>
                <div class="field">
                    <div class="field-label">Submitted On</div>
                    <div class="field-value">{{timestamp}}</div>
                </div>
            </div>
            
            <div class="response-time">
                <h3>Response Timeline</h3>
                <p>I typically respond to inquiries within 24-48 hours during business days. I will review your message carefully and provide you with a detailed response.</p>
            </div>
            
            <div class="professional-list">
                <h3>While You Wait</h3>
                <ul>
                    <li>Explore additional projects and case studies on my portfolio</li>
                    <li>Review my professional experience and technical expertise</li>
                    <li>Connect with me through professional networks</li>
                    <li>Browse my code repositories and contributions</li>
                </ul>
            </div>
        </div>
        
        <div class="signature">
            <h3>Hardik Ramoliya</h3>
            <p>Mobile Application Developer</p>
            <p>Android | iOS | React Native Specialist</p>
            <p>Email: ramoliyahardik085@gmail.com</p>
            <p>Location: Ahmedabad, Gujarat</p>
        </div>
        
        <div class="footer">
            <p>This is an automated confirmation email.</p>
            <p>For urgent matters, please reply directly to this email.</p>
        </div>
    </div>
</body>
</html>
```

**Variables Used:**
- `{{to_name}}` - User's name
- `{{to_email}}` - User's email
- `{{subject}}` - Original message subject
- `{{timestamp}}` - When the form was submitted
- `{{from_name}}` - Hardik's name
- `{{from_email}}` - Hardik's email

---

## EmailJS Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID**

### Step 3: Create Email Templates
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Create the first template with name `template_admin_notification`
4. Copy and paste the HTML template from above
5. Create the second template with name `template_user_thankyou`
6. Copy and paste the HTML template from above
7. Note down both **Template IDs**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**
3. Copy it for use in environment variables

### Step 5: Update Environment Variables
Update your `.env` file with the actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID_ADMIN=template_admin_notification
REACT_APP_EMAILJS_TEMPLATE_ID_USER=template_user_thankyou
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 6: Test the Setup
1. Start your development server: `npm start`
2. Navigate to the contact form
3. Fill out and submit a test message
4. Check both your email and the user's email for the messages

## Important Notes

1. **Free Tier Limits:** EmailJS free tier allows 200 emails per month
2. **Email Delivery:** Make sure to check spam folders during testing
3. **Template Variables:** All variables in `{{}}` must match exactly with the service configuration
4. **Security:** Never expose your private key - only use the public key in frontend code
5. **Testing:** Always test with real email addresses to ensure delivery

## Troubleshooting

- **Emails not sending:** Check console for errors and verify all environment variables
- **Template not found:** Ensure template IDs match exactly
- **Service not found:** Verify service ID is correct
- **Variables not replacing:** Check template variable names match the service parameters