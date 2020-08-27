$(document).ready(function () {
   const start = $("#chatbotStart");
   const chatbot = $("#chatbot");
   const sendText = $("#chatbotInput");
   const bubbleIcon = $("#chatbotStart .fa-comment-dots");
   const chevronIcon = $("#chatbotStart .fa-chevron-down");
   const options = $("#chatbotOptions");
   const ellipsisIcon = $(".chatbot-options>button");
   const hideSelection = $("#chatbotHide");
   const reportSelection = $("#chatbotReport");
   const suggestSelection = $("#chatbotSuggestion");
   const chatbotModal = $("#chatbotModal");
   const modalTitle = $("#chatbotModalTitle");
   const modalContent = $("#chatbotModalContent");
   const send = $("#chatbotSend");
   const chat = $("#chatbotChat");

   const guideSel = $("#chatbotGuide");
   const faqSel = $("#chatbotFAQ");
   const talkSel = $("#chatbotTalk");

   var open = false;

   function sanitize(s) {
      s = s.replace(/á/gi, "a");
      s = s.replace(/é/gi, "e");
      s = s.replace(/í/gi, "i");
      s = s.replace(/ó/gi, "o");
      s = s.replace(/ú/gi, "u");
      s = s.replace(/ü/gi, "u");
      s = s.replace(/[^a-z0-9ñ\s]/gim, "");
      s = s.replace(/\s\s+/g, " ");
      s = s.toLowerCase().trim();
      return s;
   }

   function scrollToBottom() {
      document
         .querySelector(".chatbot-chat")
         .scrollTo(0, document.querySelector(".chatbot-chat").scrollHeight);
   }

   function checkLongString(s) {
      let brWrds = "";
      const words = s.split(" ");
      for (let i = 0; i < words.length; i++) {
         if (brWrds === "") {
            brWrds =
               words[i].length > 12 ? ' style="word-break: break-all;"' : "";
         }
      }
      return brWrds;
   }

   function disableInputs(bool) {
      send.prop("disabled", bool);
      guideSel.prop("disabled", bool);
      faqSel.prop("disabled", bool);
      talkSel.prop("disabled", bool);
   }

   function typing(s, func) {
      disableInputs(true);
      chat.prepend(
         '<div class="chatbot-conv chatbot-sent"><span>' + s + "</span></div>"
      );
      setTimeout(function () {
         chat.prepend(
            '<div id="chatbotTyping" class="chatbot-conv chatbot-received">' +
               '<div class="typing-indicator">' +
               "<span></span><span></span><span></span>" +
               "</div></div>"
         );
         setTimeout(function () {
            $("#chatbotTyping").remove();
            disableInputs(false);
            func();
         }, 2000);
      }, 500);
   }

   function guideMe() {
      disableInputs(true);
      chat.prepend(
         '<div class="chatbot-conv chatbot-received"><span>' +
            "Rellena el formulario que se mostrará a continuación " +
            "para conocerte un poco más y poder buscar el " +
            "vehículo que más se adapte a tus necesidades." +
            "</span></div>"
      );
      setTimeout(function () {
         let title =
            "DieselBot encontrará un vehículo para tí, basado en tus respuestas";
         let html = `
                  <div id="chatbotGuidemeContent">
                     <div class="dropdown no-outline chatbot-guideme-dropdown">
                        <div class="select">
                           <span id="genderLabel">Género</span>
                           <i class="fa fa-chevron-left"></i>
                        </div>
                        <input type="hidden" class="required" name="gender" />
                        <ul class="dropdown-menu">
                           <li id="male">Masculino</li>
                           <li id="female">Femenino</li>
                        </ul>
                     </div>

                     <div class="dropdown no-outline chatbot-guideme-dropdown">
                        <div class="select">
                           <span id="ageLabel">Edad</span>
                           <i class="fa fa-chevron-left"></i>
                        </div>
                        <input type="hidden" class="required" name="age" />
                        <ul class="dropdown-menu">
                           <li id="18">18 años</li>
                           <li id="19">19 años</li>
                           <li id="20">20 años</li>
                           <li id="21">21 años</li>
                           <li id="22">22 años</li>
                           <li id="23">23 años</li>
                           <li id="24">24 años</li>
                           <li id="25">25 años</li>
                           <li id="26">26 años</li>
                           <li id="27">27 años</li>
                           <li id="28">28 años</li>
                           <li id="29">29 años</li>
                           <li id="30">30 años</li>
                           <li id="31">31 años</li>
                           <li id="32">32 años</li>
                           <li id="33">33 años</li>
                           <li id="34">34 años</li>
                           <li id="35">35 años</li>
                           <li id="36">36 años</li>
                           <li id="37">37 años</li>
                           <li id="38">38 años</li>
                           <li id="39">39 años</li>
                           <li id="40">40 años</li>
                           <li id="41">41 años</li>
                           <li id="42">42 años</li>
                           <li id="43">43 años</li>
                           <li id="44">44 años</li>
                           <li id="45">45 años</li>
                           <li id="46">46 años</li>
                           <li id="47">47 años</li>
                           <li id="48">48 años</li>
                           <li id="49">49 años</li>
                           <li id="50">50 años</li>
                           <li id="51">51 años</li>
                           <li id="52">52 años</li>
                           <li id="53">53 años</li>
                           <li id="54">54 años</li>
                           <li id="55">55 años</li>
                           <li id="56">56 años</li>
                           <li id="57">57 años</li>
                           <li id="58">58 años</li>
                           <li id="59">59 años</li>
                           <li id="60">60 años</li>
                           <li id="61">61 años</li>
                           <li id="62">62 años</li>
                           <li id="63">63 años</li>
                           <li id="64">64 años</li>
                           <li id="65">65 años</li>
                           <li id="66">66 años</li>
                           <li id="67">67 años</li>
                           <li id="68">68 años</li>
                           <li id="69">69 años</li>
                           <li id="70">70 años</li>
                           <li id="71">71 años</li>
                           <li id="72">72 años</li>
                           <li id="73">73 años</li>
                           <li id="74">74 años</li>
                           <li id="75">75 años</li>
                           <li id="76">76 años</li>
                           <li id="77">77 años</li>
                           <li id="78">78 años</li>
                           <li id="79">79 años</li>
                           <li id="80">80 años</li>
                        </ul>
                     </div>

                     <div class="dropdown no-outline chatbot-guideme-dropdown">
                        <div class="select">
                           <span id="childrenLabel">Hijos (-18)</span>
                           <i class="fa fa-chevron-left"></i>
                        </div>
                        <input type="hidden" class="required" name="children" />
                        <ul class="dropdown-menu">
                           <li id="0">Ninguno</li>
                           <li id="1">1 hijo</li>
                           <li id="2">2 hijos</li>
                           <li id="3">3 hijos</li>
                           <li id="4">4 hijos</li>
                           <li id="5">5 hijos</li>
                           <li id="6">6 o más hijos</li>
                        </ul>
                     </div>

                     <div class="dropdown no-outline chatbot-guideme-dropdown">
                        <div class="select">
                           <span id="maritalStatusLabel">Estado Civil</span>
                           <i class="fa fa-chevron-left"></i>
                        </div>
                        <input type="hidden" class="required" name="maritalStatus" />
                        <ul class="dropdown-menu chatbot-form-hidden-list">
                           <li id="married"></li>
                           <li id="single"></li>
                           <li id="divorced"></li>
                        </ul>
                     </div>
                  </div>
         `;
         modalTitle.text(title);
         modalContent.html(html);
         chatbotModal.css({ display: "flex" });
      }, 3000);
   }

   function faq() {
      chat.prepend(
         '<div class="chatbot-conv chatbot-received"><span>' +
            "Preguntame lo que sea y si no te convence mi respuesta " +
            'puedes buscar ayuda en la sección <a href="#">FAQ</a>.' +
            "</span></div>"
      );
   }

   guideSel.click(function () {
      scrollToBottom();
      typing("Ayúdame a encontrar un vehículo para mí.", guideMe);
   });

   faqSel.click(function () {
      scrollToBottom();
      typing("Tengo una duda en cuanto al sistema.", faq);
   });

   talkSel.click(function () {
      scrollToBottom();
      sendText.val("Sabías que... (Edición Inteligencia Artificial)");
      send.click();
   });

   start.click(function () {
      start.prop("disabled", true);
      chatbot.fadeToggle(200, function () {
         start.prop("disabled", false);
         sendText.focus();
      });
      if (open === false) {
         bubbleIcon.animate({ opacity: 0 }, 100);
         chevronIcon.animate({ opacity: 1 }, 100);
         open = true;
      } else if (open === true) {
         bubbleIcon.animate({ opacity: 1 }, 100);
         chevronIcon.animate({ opacity: 0 }, 100);
         open = false;
      }
      chatbot.toggleClass("move");
      options.slideUp(200);
      ellipsisIcon.removeClass("rotate90deg");
   });

   $(document).mousedown(function (e) {
      if (
         !chatbot.is(e.target) &&
         chatbot.has(e.target).length === 0 &&
         !start.is(e.target) &&
         start.has(e.target).length === 0
      ) {
         start.prop("disabled", true);
         chatbot.fadeOut(200, function () {
            start.prop("disabled", false);
            sendText.focus();
         });
         bubbleIcon.animate({ opacity: 1 }, 100);
         chevronIcon.animate({ opacity: 0 }, 100);
         open = false;
         chatbot.removeClass("move");
         options.slideUp(200);
         ellipsisIcon.removeClass("rotate90deg");
      }
   });

   ellipsisIcon.click(function () {
      options.slideToggle(200);
      ellipsisIcon.toggleClass("rotate90deg");
   });

   $(chatbot).mouseup(function (e) {
      if (
         !ellipsisIcon.is(e.target) &&
         ellipsisIcon.has(e.target).length === 0
      ) {
         options.slideUp(200);
         ellipsisIcon.removeClass("rotate90deg");
      }
   });

   hideSelection.click(function () {
      start.click();
      start.fadeOut();
   });

   reportSelection.click(function () {
      let title = "DieselBot está en mejora constantemente";
      let html = `
                  <div id="chatbotReportContent">
                     <div class="form-group chatbot-report-group">
                        <label class="form-label form-label-move" for="report"
                           >Cuéntanos qué salió mal</label
                        >
                        <textarea
                           class="form-input no-outline chatbot-report-input required"
                           name="report"
                           placeholder="Cuéntanos qué salió mal, de forma detallada pero breve"
                           maxlength='400'
                        ></textarea>
                     </div>
                  </div>
      `;
      modalTitle.text(title);
      modalContent.html(html);
      chatbotModal.css({ display: "flex" });
   });

   suggestSelection.click(function () {
      let title = "DieselBot se vuelve más inteligente con tus sugerencias";
      let html = `
                  <div id="chatbotSuggestContent">
                     <div class="form-group chatbot-suggest-group">
                        <label class="form-label form-label-move" for="tag"
                           >Tópico o tema:</label
                        >
                        <input
                           class="form-input no-outline chatbot-suggest-input required"
                           name="tag"
                           placeholder="Tópico: Ej. Fútbol, animales..."
                           autocomplete="off"
                           maxlength='40'
                        />
                     </div>
                     <div class="form-group chatbot-suggest-group">
                        <label class="form-label form-label-move" for="pattern"
                           >Patrones a que responder: *Opcional</label
                        >
                        <input
                           class="form-input no-outline chatbot-suggest-input"
                           name="pattern"
                           placeholder="Patrones: Ej. ¿Cuál es el animal más grande?"
                           autocomplete="off"
                           maxlength='100'
                        />
                     </div>
                  </div>
      `;
      modalTitle.text(title);
      modalContent.html(html);
      chatbotModal.css({ display: "flex" });
   });

   sendText.keypress(function (event) {
      if (event.keyCode == 13 && send.prop("disabled") === false) {
         send.click();
      }
   });

   send.click(function () {
      scrollToBottom();
      var data = sendText.val();
      if (data.replace(/\s+/g, "") == "") {
         return;
      }
      disableInputs(true);
      sendText.val("");
      sendText.focus();
      const breakWords = checkLongString(data);
      chat.prepend(
         '<div class="chatbot-conv chatbot-sent"><span' +
            breakWords +
            ">" +
            data +
            "</span></div>"
      );
      data = sanitize(data);
      setTimeout(function () {
         chat.prepend(
            '<div id="chatbotTyping" class="chatbot-conv chatbot-received">' +
               '<div class="typing-indicator">' +
               "<span></span><span></span><span></span>" +
               "</div></div>"
         );
      }, 500);

      $.ajax({
         url: "cgi-bin/startbot.py",
         type: "POST",
         data: { s: data },
         success: function (response) {
            $("#chatbotTyping").remove();
            chat.prepend(
               '<div class="chatbot-conv chatbot-received"><span>' +
                  response.data +
                  "</span></div>"
            );
            disableInputs(false);
         },
         error: function (xhr, ajaxOptions, thrownError) {
            if (xhr.status == 200) {
               alert(ajaxOptions);
            } else {
               alert(xhr.status);
               alert(thrownError);
            }
         },
      });
   });

   /*Dropdown Menu*/
   $(modalContent).on("click", ".chatbot-guideme-dropdown #male", function () {
      $('.chatbot-guideme-dropdown input[name="maritalStatus"]').val("");
      $(".chatbot-guideme-dropdown #maritalStatusLabel").text("Estado Civil");
      $(".chatbot-form-hidden-list").css({ visibility: "visible" });
      $(".chatbot-guideme-dropdown #married").text("Casado");
      $(".chatbot-guideme-dropdown #single").text("Soltero");
      $(".chatbot-guideme-dropdown #divorced").text("Divorciado");
   });
   $(modalContent).on(
      "click",
      ".chatbot-guideme-dropdown #female",
      function () {
         $('.chatbot-guideme-dropdown input[name="maritalStatus"]').val("");
         $(".chatbot-guideme-dropdown #maritalStatusLabel").text(
            "Estado Civil"
         );
         $(".chatbot-form-hidden-list").css({ visibility: "visible" });
         $(".chatbot-guideme-dropdown #married").text("Casada");
         $(".chatbot-guideme-dropdown #single").text("Soltera");
         $(".chatbot-guideme-dropdown #divorced").text("Divorciada");
      }
   );
   $("#chatbotFormSubmit").click(function () {
      var flag = true;
      var myObj = {};
      if ($("#chatbotGuidemeContent").length) {
         $(".chatbot-guideme-dropdown")
            .find(".required")
            .each(function () {
               if ($(this).val() == "") {
                  $("#chatbotFormErrorMsg").text(
                     "Asegúrate de llenar todas las selecciones."
                  );
                  flag = false;
               }
            });
         if (flag === true) {
            myObj.gender = $("#chatbotGuidemeContent")
               .find('input[name="gender"]')
               .val();
            myObj.age = $("#chatbotGuidemeContent")
               .find('input[name="age"]')
               .val();
            myObj.childen = $("#chatbotGuidemeContent")
               .find('input[name="children"]')
               .val();
            myObj.maritalStatus = $("#chatbotGuidemeContent")
               .find('input[name="maritalStatus"]')
               .val();
            myObj = JSON.stringify(myObj);
            chatbotModal.hide();
            $("#chatbotFormErrorMsg").text("");
            scrollToBottom();
            setTimeout(function () {
               chat.prepend(
                  '<div id="chatbotTyping" class="chatbot-conv chatbot-received">' +
                     '<div class="typing-indicator">' +
                     "<span></span><span></span><span></span>" +
                     "</div></div>"
               );
               setTimeout(function () {
                  $.ajax({
                     url: "data-received/dataHandler.php",
                     type: "POST",
                     data: { obj: myObj },
                     success: function (/*response*/) {
                        $("#chatbotTyping").remove();
                        chat.prepend(
                           '<div class="chatbot-conv chatbot-received"><span>Te recomiendo este</span></div>'
                        );
                        disableInputs(false);
                     },
                     error: function (xhr, ajaxOptions, thrownError) {
                        if (xhr.status == 200) {
                           alert(ajaxOptions);
                        } else {
                           alert(xhr.status);
                           alert(thrownError);
                        }
                     },
                  });
               }, 500);
            }, 500);
         }
         return;
      }
      if ($("#chatbotReportContent").length) {
         $("#chatbotReportContent")
            .find(".required")
            .each(function () {
               if ($(this).val().length < 20) {
                  $("#chatbotFormErrorMsg").text("Mínimo 20 caracteres.");
                  flag = false;
               }
            });
         if (flag === true) {
            var report = sanitize(
               $("#chatbotReportContent").find("textarea").val()
            );
            myObj.report = report;
            myObj = JSON.stringify(myObj);
            chatbotModal.html('<div class="chatbot-modal-container"></div>');
            setTimeout(function () {
               scrollToBottom();
               chatbotModal.hide();
            }, 1000);
            $.ajax({
               url: "data-received/dataHandler.php",
               type: "POST",
               data: { obj: myObj },
               success: function () {},
               error: function (xhr, ajaxOptions, thrownError) {
                  if (xhr.status == 200) {
                     alert(ajaxOptions);
                  } else {
                     alert(xhr.status);
                     alert(thrownError);
                  }
               },
            });
         }
         return;
      }
      if ($("#chatbotSuggestContent").length) {
         $("#chatbotSuggestContent")
            .find(".required")
            .each(function () {
               if ($(this).val() == "") {
                  $("#chatbotFormErrorMsg").text("Llena el campo obligatorio.");
                  flag = false;
               }
            });
         if (flag === true) {
            var tag = sanitize(
               $("#chatbotSuggestContent").find('input[name="tag"]').val()
            );
            var pattern = sanitize(
               $("#chatbotSuggestContent").find('input[name="pattern"]').val()
            );
            myObj.tag = tag;
            myObj.pattern = pattern;
            myObj = JSON.stringify(myObj);
            chatbotModal.html('<div class="chatbot-modal-container"></div>');
            setTimeout(function () {
               scrollToBottom();
               chatbotModal.hide();
            }, 1000);
            $.ajax({
               url: "data-received/dataHandler.php",
               type: "POST",
               data: { obj: myObj },
               success: function () {},
               error: function (xhr, ajaxOptions, thrownError) {
                  if (xhr.status == 200) {
                     alert(ajaxOptions);
                  } else {
                     alert(xhr.status);
                     alert(thrownError);
                  }
               },
            });
         }
         return;
      }
   });
   $("#chatbotFormCancel").click(function () {
      scrollToBottom();
      chatbotModal.hide();
      $("#chatbotFormErrorMsg").text("");
      if ($("#chatbotGuidemeContent").length) {
         setTimeout(function () {
            chat.prepend(
               '<div id="chatbotTyping" class="chatbot-conv chatbot-received">' +
                  '<div class="typing-indicator">' +
                  "<span></span><span></span><span></span>" +
                  "</div></div>"
            );
            setTimeout(function () {
               $("#chatbotTyping").remove();
               chat.prepend(
                  '<div class="chatbot-conv chatbot-received"><span>' +
                     "Veo que cancelastes el cuestionario, puedes volver a " +
                     "intentarlo cuando quieras." +
                     "</span></div>"
               );
               disableInputs(false);
            }, 1000);
         }, 500);
         return;
      }
   });
   /*End Dropdown Menu*/
});
