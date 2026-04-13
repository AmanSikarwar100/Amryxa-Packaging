// Google Apps Script webhook for Next.js form submissions
// 1) Open Google Sheets and create a new sheet / tab named 'Submissions'
// 2) Go to Extensions > Apps Script, and paste this code
// 3) Set the SHEET_ID to your spreadsheet ID
// 4) Deploy as Web App with "Execute as: Me" and "Who has access: Anyone"

const SHEET_ID = 'PUT_YOUR_SHEET_ID_HERE'
const SHEET_NAME = 'Submissions'

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents)
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME)
    if (!sheet) {
      throw new Error(`Sheet not found: ${SHEET_NAME}`)
    }

    const row = [
      new Date().toISOString(),
      payload.name || '',
      payload.email || '',
      payload.company || '',
      payload.phone || '',
      payload.packagingType || '',
      payload.quantity || '',
      payload.brief || '',
    ]

    sheet.appendRow(row)

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message || 'Webhook error' }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}
