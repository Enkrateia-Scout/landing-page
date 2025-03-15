# Enkrasia Landing Page

This is the landing page for Enkrasia, a platform that helps families align their digital experiences with their core values.

## Form Submission to Google Sheets

The signup form on this site submits data to a Google Spreadsheet. To set this up, follow these steps:

### Setting up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/) and create a new project.

2. Copy the contents of the `google-apps-script.js` file in this repository and paste it into the script editor.

3. Make sure the `SPREADSHEET_ID` in the script matches your Google Spreadsheet ID. The current ID is set to: `1Uz4lMNzFpExwo_3yVkJ_GRWaRzAgysrnEYPpzS-GFpQ`.

4. If you want to use a different sheet name than "Scout Family Values Responses", update the `SHEET_NAME` constant.

5. Deploy the script as a web app:
   - Click on "Deploy" > "New deployment"
   - Select "Web app" as the deployment type
   - Set "Execute as" to "Me" (the account you're currently using)
   - Set "Who has access" to "Anyone" (this allows the form to submit data without authentication)
   - Click "Deploy"
   - Copy the web app URL that is provided after deployment

6. Update the `scriptURL` in the `signup.html` file with the URL you copied in the previous step.

### Fixing Permission Issues

If you're experiencing issues with data not being written to the spreadsheet, follow these steps:

1. **Check Permissions with the Test Function**:
   - In the Google Apps Script editor, run the `checkPermissions()` function
   - This will test if your script has permission to read and write to the spreadsheet
   - Check the logs (View > Logs) for detailed information about any permission issues

2. **Verify Spreadsheet Access**:
   - Make sure you're logged into the same Google account that deployed the script
   - Open the spreadsheet directly at: https://docs.google.com/spreadsheets/d/1Uz4lMNzFpExwo_3yVkJ_GRWaRzAgysrnEYPpzS-GFpQ
   - Verify you can edit the spreadsheet manually
   - If you can't access it, request edit access from the owner

3. **Redeploy the Script with Proper Permissions**:
   - Go to the Google Apps Script editor
   - Click on "Deploy" > "New deployment"
   - Make sure "Execute as" is set to your account (the one with edit access to the spreadsheet)
   - Set "Who has access" to "Anyone"
   - Create a new deployment version
   - Update the `scriptURL` in `signup.html` with the new deployment URL

4. **Run the Test Function**:
   - In the Google Apps Script editor, run the `testAppendRow()` function
   - Check the logs to see if the test data was successfully written to the sheet
   - If successful, the form should now work correctly

5. **Check for Quota Limits**:
   - Google Apps Script has daily quotas for various operations
   - If you've made many requests, you might have hit a quota limit
   - Wait 24 hours and try again

6. **Verify Sheet Name**:
   - Make sure the sheet name in the script (`SHEET_NAME` constant) exactly matches the name of the sheet in your spreadsheet
   - Sheet names are case-sensitive and space-sensitive

### Testing the Form Submission

1. You can test the Google Apps Script by running the `testAppendRow` function in the script editor.

2. To test the form submission from the website, fill out the form and submit it. Check the Google Spreadsheet to see if the data was added correctly.

3. Check the browser console (F12 > Console) for any error messages during form submission.

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