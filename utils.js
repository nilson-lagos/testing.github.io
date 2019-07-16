function exportAndSaveCanvas()  {
  html2canvas(document.body, { 
  background:'#fff',
  onrendered: function(canvas) {         
  let imgData = canvas.toDataURL('image/jpeg');
  var url = 'upload/export.php';
    $.ajax({ 
        type: "POST", 
        url: url,
        dataType: 'text',
        data: {
          base64data : imgData
        }
      });
    }
  }); //End html2canvas
} // End exportAndSaveCanvas()