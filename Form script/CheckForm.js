 
function myFunction() {
    var sheetId = ""//---> seed id //
    var formId = ""//---> form id //
    var ss = SpreadsheetApp.openById(sheetId)
    var sheet = ss.getSheetByName("Form Responses 1")
    var form = FormApp.openById(formId)
    var data = [...new Set(sheet.getDataRange().getDisplayValues().map(row=> row[3]))].join('|')
    var item = form.getItems().filter(item=>item.getTitle() == 'ชี่อ นามสกุล')[0].asTextItem()
    var pattern = `(${data})`
    var textval = FormApp.createTextValidation().setHelpText("เอ่ะ.. รายชื่อได้ลงทะเบียนไปก๋อนหน้านี้แล้วนะ!!").requireTextDoesNotMatchPattern(pattern).build()
        item.setValidation(textval)
  }