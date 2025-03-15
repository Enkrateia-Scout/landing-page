# Enkrasia Landing Page

This is the landing page for Enkrasia, a platform that helps families align their digital experiences with their core values.

## Form Submission to Google Sheets

The signup form on this site submits data to a Google Spreadsheet. To set this up, follow these steps:

### Setting up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/) and create a new project.

2. Copy the contents of the `google-apps-script.js` file in this repository and paste it into the script editor.

3. Make sure the `SPREADSHEET_ID` in the script matches your Google Spreadsheet ID. The current ID is set to: `1Uz4lMNzFpExwo_3yVkJ_GRWaRzAgysrnEYPpzS-GFpQ`.

4. If you want to use a different sheet name than "Form Responses", update the `SHEET_NAME` constant.

5. Deploy the script as a web app:
   - Click on "Deploy" > "New deployment"
   - Select "Web app" as the deployment type
   - Set "Execute as" to "Me" (the account you're currently using)
   - Set "Who has access" to "Anyone" (this allows the form to submit data without authentication)
   - Click "Deploy"
   - Copy the web app URL that is provided after deployment

6. Update the `scriptURL` in the `signup.html` file with the URL you copied in the previous step.

7. **Important**: Make sure you have permission to access the spreadsheet:
   - Open the Google Spreadsheet with the ID specified in the script
   - If you don't have access, create a new spreadsheet and update the `SPREADSHEET_ID` in the script
   - Make sure the Google account you're using to deploy the script has edit access to the spreadsheet

8. **Troubleshooting Authorization Issues**:
   - If you encounter a 401 (Unauthorized) error, try the following:
     - Make sure you're logged in to the same Google account that deployed the script
     - Try redeploying the script with a new version number
     - Check that the spreadsheet permissions allow the script to edit it
     - If using the script in a different domain, make sure to add appropriate CORS headers in the script

### Testing the Form Submission

1. You can test the Google Apps Script by running the `testAppendRow` function in the script editor.

2. To test the form submission from the website, fill out the form and submit it. Check the Google Spreadsheet to see if the data was added correctly.

## Updating the Website

After setting up the Google Apps Script, make sure to update the `signup.html` file with the correct script URL and deploy the updated website.

## File Structure

- `index.html`: The main landing page
- `about.html`: Information about Enkrasia
- `products.html`: Information about Enkrasia's products
- `signup.html`: The signup form
- `google-apps-script.js`: The Google Apps Script code (not used directly on the website, but needs to be copied to Google Apps Script)
- `README.md`: This file

## Development

This project is using a Git branch called `sign-up_flow` for the signup form development. To merge these changes back to the main branch, use:

```bash
git checkout main
git merge sign-up_flow
```