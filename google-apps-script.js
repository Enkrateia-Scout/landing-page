// Google Apps Script to handle form submissions and write to a Google Spreadsheet
// This code should be deployed as a web app in Google Apps Script

// The ID of the spreadsheet to write to
const SPREADSHEET_ID = '1Uz4lMNzFpExwo_3yVkJ_GRWaRzAgysrnEYPpzS-GFpQ';
const SHEET_NAME = 'Form Responses'; // Change this to your sheet name if different

function doGet(e) {
  return HtmlService.createHtmlOutput('This is a POST service. Please use POST method.');
}

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet and get the sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If the sheet doesn't exist, create it and add headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp', 
        'Email Address', 
        'Religion', 
        'Encourage', 
        'Content to Avoid', 
        'Topics to Avoid', 
        'Searches'
      ]);
    }
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.email,
      data.religion,
      data.encourage,
      data.contentToAvoid,
      data.topicsToAvoid,
      data.searches
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error(error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// This function can be used to test the script
function testAppendRow() {
  const testData = {
    timestamp: new Date().toISOString(),
    email: 'test@example.com',
    religion: 'Christianity',
    encourage: 'honesty,respect,kindness',
    contentToAvoid: 'violence,profanity',
    topicsToAvoid: 'politics,war',
    searches: 'Christian kids songs, Science experiments for children'
  };
  
  // Simulate a POST request
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  // Call doPost with the test data
  const result = doPost(e);
  Logger.log(result.getContent());
} 