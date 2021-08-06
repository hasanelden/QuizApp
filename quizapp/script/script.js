

$(document).ready(function () { 

    // $(":input").removeProperty("width");
    $("#kaydetSoru" ).on('click',function() {
    
    
  
    SelectQuestion();
    
      })
    
      $("#answerButton" ).on('click',function() {
    

    
        
           var dizi = $('.answerInput').map(function() {
            return this.value;
          }).toArray();
          console.log(dizi)

          if(dizi.every( (val, i, arr) => val === arr[0] )){

          }   

        

           console.log(dizi)
           var filtered = dizi.filter(function (el) {
            return el != 0;        
          
          
          })
          console.log(filtered) 
          if(filtered.length < 2){

             

            swal("Uyarı!!!", "En az 2 cevap belirlenmelidir !", "error");
            
          }

  //  eachText()
    
  else  if ( ! $(":radio").is(':checked') ){
                                  
                                  
            
            swal("Uyarı!!!", "Doğru seçenek belirlenmedi!", "error");
               }
  
             else  {

              $("#update").removeClass("disabled")
              swal("Tebrikler :)", "Sorunuz başarıyla cevaplanmıştır !", "success");
        
           
           }
           

           $("#update").on('click',function(){
            $('#answerButton').addClass('pasif')
                          $('div[name="updateForm"]').toggleClass("aktif")
            
                          $("#deleteButton" ).on('click',function(){
                          
                            $(this).parent().siblings("div").children("input").val() 
                          
                          
                          })
                          
                          $('div[name="answers"]').toggleClass("answers-border")
                          
                            
                            
                            $('.answerInput').on('focus',function(e){
                             $(this).parent().parent().addClass("updateAnswer")
                              
                              })
            
                              $('.answerInput').on('blur',function(e){
                                $(this).parent().parent().removeClass("updateAnswer")
                                 
                                 })
            
                                })
      
               

    });
    $(":radio" ).on('click',function(event){


     let  inputVal =  $(this).siblings("input").val ()

     console.log(inputVal)
     if(inputVal == 0){


       
        swal("Uyarı!!!", "Belirlenen doğru seçenekte veri yok !", "error");
return false
     }
     else{
              
        $('input:not(:checked)').siblings("input").removeClass("style");
        $('input:checked').siblings("input").addClass("style");
                    //  $(this).siblings("input").addClass("style")

     }


    })
    
   $(".checkedUpdate").on('click',function(){
  const radioUpdate =   $(this).parent().siblings('div').children(':radio')
   
  
  const  inputValueUpdate =  $(this).parent().siblings('div').children(':text').val()
  
     console.log(inputValueUpdate)
     if(inputValueUpdate == 0){


                  
    
        swal("Uyarı!!!", "Belirlenen doğru seçenekte veri yok !", "error");

     }
     else{
      if ( ! radioUpdate .is(':checked')){
        radioUpdate.prop('checked', 'true');
       
     
      }
    if( radioUpdate .is(':checked')) {
    
     
   
        radioUpdate.prop('checked', 'false');

      }
       
     const hasInput =  $('.answerInput')

     if(hasInput.hasClass("style")){

     $(this).addClass("pasif")
     }
     else{

      $(this).removeClass("pasif")
     }
     


      // $(this).prop('disabled','true');
                $('input:not(:checked)').siblings("input").removeClass("style");
        $('input:checked').siblings("input").addClass("style");
                    //  $(this).siblings("input").addClass("style")

     }



  



   })

   $(".deleteButton").on('click',function(){
    const radioUpdate =   $(this).parent().siblings('div').children(':radio')

    if (radioUpdate.is(':checked')){
      swal("Uyarı!!!", "Doğru veri silinemez !", "error");

      
    }
          else{

            $(this).parent().parent().remove()          }
    
   })
   $(".saveUpdates").on('click', function(){
 
    const  ifValue = $(this).parent().siblings('div').children(':text').val()
     
    if(ifValue == 0){
      swal("Uyarı!!!", "Boş veri kayıt edilemez!", "error");



    }
    else{

    eachText()
    }

   })
})


    function SelectQuestion(){
        var textSoru = $("#textSoru").val();
        var questionType = $("#questionTypeSelect").val();
        const mainContent = $("#mainContent");
        const secondContent = $("#secondContent")
       
console.log(questionType)
        
                 
                    if(textSoru == 0 ||questionType == 1){
                               


                                 swal("Uyarı!!!", "Belirtilen alanları doldurun", "error");
                            
                    }
          else{
    $("#questionText").html(textSoru)
    $("#questionHeadTitle").html(textSoru)
    $("#questionType").html(questionType)
    // console.log(questionText.text()  )
    mainContent.addClass("pasif")
    secondContent.addClass("aktif")
    
                    }

                  



    }

function RadioChecked(){
    $(":radio" ).on('click',function(e) {
       
        const el =   $(e.target).siblings("input")
        
                if(el.val() == 0 ){
   
                   alert("lütfen doğru  alanı doldurunuz")
                 
                }
                else{
                   alert( "veri var")
                   
                   
                   console.log(el.val())
     
            }
               
                

           
       })
      


}



function UpdateClick(){
$('div[name="updateForm"]').toggleClass("aktif")

$("#deleteButton" ).on('click',function(){

  $(this).parent().siblings("div").children("input").val() 


})

$('div[name="answers"]').toggleClass("answers-border")


}

function isEmptyOrSpaces(str){
  return str === null || str.match(/^ *$/) !== null;
}

function eachText(){

  $(".answerInput").each(function(i,e){
    if(isEmptyOrSpaces($(e).val()))
    return;
    
    var isExists;
      $(".answerInput").each(function(j,l){

     
        if($(e).val() == $(l).val() && $(e).attr("id") != $(l).attr("id") ) 
        {
       

          swal("Uyarı!!!", "Aynı kayıtlar zaten mevcut!", "error");
        isExists = true;
        return false;
       
    }
    else{

     
      $("#update").removeClass("disabled")
      swal("Tebrikler :)", "Sorunuz başarıyla cevaplanmıştır !", "success");


   }

  
    

// else{
//   swal("Uyarı!!!", "Kayıt değiştirildi !", "success");


// }
    
        
      });
   
  });
}